import { useQuery } from "react-query";
import { useMemo } from "react";
import slugify from "slugify";

export interface Video {
    name: string;
    slug: string;
    iconUri: string;
    manifestUri: string;
    isFeatured: boolean;
    isDRMProtected: boolean;
}

type ReactQuerySelectType<T> = (data: T[]) => T[];

function fetchVideos(): Promise<Video[]> {
    return fetch(
        "https://gist.githubusercontent.com/nextsux/f6e0327857c88caedd2dab13affb72c1/raw/04441487d90a0a05831835413f5942d58026d321/videos.json"
    ).then((res) => res.json());
}

function transformVideos(data: Video[]) {
    return data.map((video: Video) => {
        video.slug = slugify(video.name);
        return video;
    });
}

function useVideosQuery(select?: ReactQuerySelectType<Video>) {
    return useQuery<Video[], Error>("videos", fetchVideos, { select });
}

export function useVideos() {
    return useVideosQuery(transformVideos);
}

export function useVideo(slug: string) {
    const queryInfo = useVideos();

    return {
        ...queryInfo,
        data: useMemo(() => queryInfo.data?.find((video: Video) => video.slug === slug), [queryInfo.data, slug]),
    };
}
