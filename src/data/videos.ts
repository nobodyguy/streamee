export interface Video {
    name: string;
    iconUri: string;
    manifestUri: string;
    isFeatured: boolean;
    isDRMProtected: boolean;
}

const videos: Video[] = [
    {
        name: "Big Buck Bunny: the Dark Truths of a Video Dev Cartoon",
        iconUri: "https://storage.googleapis.com/shaka-asset-icons/dark_truth.png",
        manifestUri: "https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths/dash.mpd",
        isFeatured: false,
        isDRMProtected: false,
    },
    {
        name: "Angel One",
        iconUri: "https://storage.googleapis.com/shaka-asset-icons/angel_one.png",
        manifestUri: "https://storage.googleapis.com/shaka-demo-assets/angel-one-hls/hls.m3u8",
        isFeatured: false,
        isDRMProtected: true,
    },
];

export const getVideos = () => videos;

export const getVideo = (name: string) => videos.find((v) => v.name === name);
