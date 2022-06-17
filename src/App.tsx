import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { QueryClient, QueryClientProvider } from "react-query";
import VideoList from "./pages/VideoList";
import VideoDetail from "./pages/VideoDetail";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000, // 5 minutes
            cacheTime: 10 * 60 * 1000, // 10 minutes
        },
    },
});

const App: React.FC = () => (
    <QueryClientProvider client={queryClient}>
        <IonApp>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route path="/" exact={true}>
                        <Redirect to="/videos" />
                    </Route>
                    <Route path="/videos" exact={true}>
                        <VideoList />
                    </Route>
                    <Route path="/video/:slug">
                        <VideoDetail />
                    </Route>
                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
    </QueryClientProvider>
);

export default App;
