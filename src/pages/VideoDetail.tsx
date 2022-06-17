import { useState } from "react";
import { Video, useVideo } from "../data/videos";
import VideoPlayer from "../components/VideoPlayer";
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, useIonViewWillEnter } from "@ionic/react";
import { useParams } from "react-router";
import "./VideoDetail.css";

function VideoDetail() {
    const params = useParams<{ slug: string }>();
    const { isLoading, error, data } = useVideo(params.slug);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>An error has occurred: ${error.message}</p>;

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
                {data ? (
                    <>
                        <VideoPlayer video={data} />
                        <p className="video-detail-name">{data?.name}</p>
                    </>
                ) : (
                    <p>Video not found</p>
                )}
            </div>
        </IonPage>
    );
}

export default VideoDetail;
