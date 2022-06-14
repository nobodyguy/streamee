import { useState } from "react";
import { Video, getVideo } from "../data/videos";
import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    useIonViewWillEnter,
} from "@ionic/react";
import { useParams } from "react-router";
import "./VideoDetail.css";

function VideoDetail() {
    const [video, setVideo] = useState<Video>();
    const params = useParams<{ name: string }>();

    useIonViewWillEnter(() => {
        const vid = getVideo(params.name);
        setVideo(vid);
    });
    console.log("");

    return (
        <IonPage id='view-message-page'>
            <IonHeader translucent>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton text='Videos' defaultHref='/videos'></IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>{video ? <>{video.name}</> : <div>Video not found</div>}</IonContent>
        </IonPage>
    );
}

export default VideoDetail;
