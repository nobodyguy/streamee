import React from "react";
import { render, screen } from "@testing-library/react";
import VideoList from "./VideoList";
import { QueryClient, QueryClientProvider } from "react-query";

const createTestQueryClient = () =>
    new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
                staleTime: Infinity,
            },
        },
    });

it("renders VideoList", async () => {
    const testQueryClient = createTestQueryClient();
    render(
        <QueryClientProvider client={testQueryClient}>
            <VideoList />
        </QueryClientProvider>
    );

    expect(
        await screen.findByText("Big Buck Bunny: the Dark Truths of a Video Dev Cartoon (DASH)")
    ).toBeInTheDocument();
});
