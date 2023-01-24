import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import { Line, LineChart, ReferenceLine, ResponsiveContainer, XAxis, YAxis } from "recharts";
//============================================================================//

const exampleData = [
  {
    ms: 0,
    kg: 0,
  },
  {
    ms: 200,
    kg: 5,
  },
  {
    ms: 400,
    kg: 8,
  },
  {
    ms: 600,
    kg: 15,
  },
  {
    ms: 800,
    kg: 20,
  },
  {
    ms: 1000,
    kg: 19,
  },
  {
    ms: 1200,
    kg: 17,
  },
];
let maxVal = 20;


type MeasurementProps = {
  movement: string;
  // data - {mv: number, ms: string}
}

function Measurement({movement}:MeasurementProps) {
  return (
    <IonCard color="light"> 
      <IonCardHeader>
        <IonCardTitle>{movement}</IonCardTitle>
        <IonCardSubtitle>
          <h6>Max: 23kg</h6>
        </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent className="">
        <ResponsiveContainer height={200}>
          <LineChart
            data={exampleData}
            margin={{
              top: 10,
              right: 20,
              left: -30,
              bottom: 10,
            }}
          >
            <XAxis dataKey={"ms"} tickCount={exampleData.length}/>
            <YAxis tickCount={exampleData.length}  />
            <ReferenceLine y={maxVal} stroke="#75c4fe" strokeOpacity={0.8} />
            <Line
              type="monotone"
              dataKey="kg"
              stroke="#786dfd"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </IonCardContent>
    </IonCard>
  );
}

//----------------------------------------------------------------------------//

function DateRecords({date}:{date: string}) {
  return (
    <IonCard color="" className="">
      <IonCardHeader>
        <IonCardTitle>Measurements</IonCardTitle>
          <IonCardSubtitle>
            <h6>{date}</h6>
          </IonCardSubtitle>
          <IonCardSubtitle>
            <h6>Time</h6>
          </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent className="ion-no-padding">
      <Measurement movement={"Shoulder flexion"}/>
      <Measurement movement={"Shoulder external rotation"}/>
      <Measurement movement={"Shoulder internal rotation"}/>
      </IonCardContent>
    </IonCard>
  );
}

export default DateRecords;
