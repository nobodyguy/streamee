import { useState } from "react";
import { Video, getVideo } from "../data/videos";
import VideoPlayer from "../components/VideoPlayer";
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, useIonViewWillEnter } from "@ionic/react";
import { useParams } from "react-router";
import "./VideoDetail.css";

function VideoDetail() {
    const [video, setVideo] = useState<Video>();
    const params = useParams<{ name: string }>();

    useIonViewWillEnter(() => {
        const vid = getVideo(params.name);
        setVideo(vid);
    });

    return (
        <IonPage id="video-detail-page">
            <IonHeader translucent>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton text="Videos" defaultHref="/videos"></IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <div className="video-detail-content">
                {video ? (
                    <>
                        <VideoPlayer video={video} />
                        <div>{video.name}</div>
                    </>
                ) : (
                    <div>Video not found</div>
                )}
            </div>
        </IonPage>
    );
}

export default VideoDetail;
