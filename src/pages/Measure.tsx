import { useState } from "react";
// Ionic
import {
  IonPage,
  IonContent,
  IonText,
} from "@ionic/react";
// Components
import MeasureMv from "../components/MeasureMv"; // Mv test component
import Chart from "../components/Chart"; // Plot data
import ToolRow from "../components/ToolRow";
import ProfileSearch from "../components/ProfileSearch";
import ProfileCreate from "../components/ProfileCreate";
// Types
import { RevealOptions, UserProfile } from "../types";
import { PlotData } from "../types/measure";
//============================================================================//


function Measure() {
  //TODO: State for selected participant, hide toolrow when measuring
  const [participant, setParticipant] = useState<UserProfile | null>(null);
  const [reveal, setReveal] = useState<RevealOptions>(null);
  const [plotData, setPlotData] = useState<PlotData[]>([]);
  const [plotMeasured, setPlotMeasured] = useState<boolean>(false);

  return (
    <IonPage>
      <IonContent className="">
        <IonText color="">
          <h1 className="ion-text-center ion-padding">Measure</h1>
        </IonText>
        <MeasureMv
          setPlotData={setPlotData}
          setPlotMeasured={setPlotMeasured}
        />
        {plotData && plotMeasured && <Chart measurement={plotData} />}
        {reveal === "search" && <ProfileSearch />}
        {reveal === "add" && <ProfileCreate />}
        <ToolRow setReveal={setReveal} />
      </IonContent>
    </IonPage>
  );
}

export default Measure;
