import ReactPlayer from "react-player";
import { Video } from "../data/videos";
import "./VideoPlayer.css";

interface VideoPlayerProps {
    video: Video;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video }) => {
    return (
        <div className="video-player-wrapper">
            <ReactPlayer
                className="video-player"
                width="100%"
                height="100%"
                url={video.manifestUri}
                controls={true}
                playing={true}
            />
        </div>
    );
};

export default VideoPlayer;
