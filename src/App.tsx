import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonText,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  bodyOutline,
  informationCircleOutline,
  barbellOutline,
} from "ionicons/icons";
import About from "./pages/About";
import Measure from "./pages/Measure";
import Records from "./pages/Records";

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

import "./App.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/measure">
            <Measure />
          </Route>
          <Route path="/records">
            <Records />
          </Route>
          <Route exact path="/">
            <Redirect to="/about" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" className="ion-padding-vertical">
          <IonTabButton tab="about" href="/about">
            <IonIcon icon={informationCircleOutline} />
            {/* <IonText>About</IonText> */}
          </IonTabButton>
          <IonTabButton tab="measure" href="/measure">
            <IonIcon icon={barbellOutline} />
            {/* <IonText>Measure</IonText> */}
          </IonTabButton>
          <IonTabButton tab="records" href="/records">
            <IonIcon icon={bodyOutline} />
            {/* <IonText>Records</IonText> */}
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
