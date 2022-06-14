import VideoListItem from "../components/VideoListItem";
import { useState } from "react";
import { Video, getVideos } from "../data/videos";
import {
    IonContent,
    IonHeader,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    useIonViewWillEnter,
} from "@ionic/react";
import "./VideoList.css";

const VideoList: React.FC = () => {
    const [videos, setVideos] = useState<Video[]>([]);

    useIonViewWillEnter(() => {
        const vids = getVideos();
        setVideos(vids);
    });

    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };

    return (
        <IonPage id='videos-page'>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Videos</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonRefresher slot='fixed' onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                <IonHeader collapse='condense'>
                    <IonToolbar>
                        <IonTitle size='large'>Videos</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonGrid>
                    <IonRow>
                        {videos.map((v) => (
                            <IonCol size='12' size-sm='6' size-md='4' size-xl='3'>
                                <VideoListItem key={v.name} video={v} />
                            </IonCol>
                        ))}
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default VideoList;
