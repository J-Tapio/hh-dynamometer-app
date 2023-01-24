import { useState } from "react";
// Ionic
import {
  IonPage,
  IonContent,
  IonText,
} from "@ionic/react";
// Components
import MeasureMv from "../components/MeasureMv"; // Mv test component
import Chart from "../components/Chart"; // Plot test-data
// Types
import { PlotData } from "../types/measure";
//============================================================================//

function Measure() {
  //TODO: State for selected participant, hide toolrow when measuring
  const [plotData, setPlotData] = useState<PlotData[]>([]);
  const [plotMeasured, setPlotMeasured] = useState<boolean>(false);

  return (
    <IonPage>
      <IonContent className="ion-margin-bottom">
        <IonText color="">
          <h1 className="ion-text-center ion-padding">Measure</h1>
        </IonText>
        <MeasureMv
          setPlotData={setPlotData}
          setPlotMeasured={setPlotMeasured}
        />
        {plotData && plotMeasured && <Chart measurement={plotData} />}
      </IonContent>
    </IonPage>
  );
}

export default Measure;
