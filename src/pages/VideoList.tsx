import { useState } from "react";
import VideoListItem from "../components/VideoListItem";
import { Video, useFilteredVideos } from "../data/videos";
import {
    IonContent,
    IonHeader,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonSearchbar,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
} from "@ionic/react";
import { RefresherEventDetail } from "@ionic/core";
import "./VideoList.css";

const VideoList: React.FC = () => {
    const [filter, setFilter] = useState<string>("");
    const { isLoading, error, data, refetch } = useFilteredVideos(filter);
    const refresh = async (e: CustomEvent<RefresherEventDetail>) => {
        await refetch();
        e.detail.complete();
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>An error has occurred: ${error.message}</p>;

    return (
        <IonPage id="videos-page">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Videos</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonSearchbar value={filter} onIonChange={(e) => setFilter(e.detail.value || "")}></IonSearchbar>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Videos</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonGrid>
                    <IonRow>
                        {data?.map((v: Video) => (
                            <IonCol size="12" size-sm="6" size-md="4" size-xl="3" key={v.name}>
                                <VideoListItem video={v} />
                            </IonCol>
                        ))}
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default VideoList;
