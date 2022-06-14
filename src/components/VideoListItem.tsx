import { IonCard, IonCardHeader, IonCardTitle } from "@ionic/react";
import { Video } from "../data/videos";
import "./VideoListItem.css";

interface VideoListItemProps {
    video: Video;
}

const VideoListItem: React.FC<VideoListItemProps> = ({ video }) => {
    return (
        <IonCard href={`/video/${video.name}`} disabled={video.isDRMProtected}>
            <div className='video-poster'>
                <img src={video.iconUri} alt={video.name}></img>
            </div>
            <IonCardHeader>
                <IonCardTitle>{video.name}</IonCardTitle>
            </IonCardHeader>
        </IonCard>
    );
};

export default VideoListItem;
