import { useState } from "react";
// Ionic
import { IonPage, IonContent, IonText } from "@ionic/react";
// Millivoltage test component
import MeasureMv from "../components/MeasureMv";
// Types
import { PlotData } from "../types/measure";
//Styles
import "./Pages.css";
// Chart for plotting data after measurement
import Chart from "../components/Chart";
//============================================================================//

function Measure() {
  const [plotData, setPlotData] = useState<PlotData[]>([]);
  const [plotMeasured, setPlotMeasured] = useState<boolean>(false);

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <IonText color="secondary">
          <h1>Measure</h1>
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
