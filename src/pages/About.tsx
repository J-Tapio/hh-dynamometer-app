import {
  IonContent,
  IonHeader,
  IonPage,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/react";
import "./Pages.css";
import "./About.css";

// Just to name a few examples
const possibleMeasurements = [
  "Shoulder Abduction",
  "Shoulder Adduction",
  "Shoulder forward flexion",
  "Shoulder extension",
  "Shoulder internal rotation",
  "Shoulder external rotation",
  "Elbow flexion (Biceps)",
  "Elbow extension (Triceps)",
  "Knee extension",
  "Knee flexion",
  "And create your own if you want!",
];

function ProductCard() {
  return (
    <div className="card product-card">
      <h2>Handheld dynamometer for manual muscle testing</h2>
      <div className="product-card-img">
        <p>Product image</p>
      </div>
    </div>
  );
}

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className={"ion-no-border ion-padding"}>
        <h1>About</h1>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <ProductCard />
        <IonList lines="none" className="card mmt-list">
          <p className="mmt-list-title">Measurement examples</p>
          {possibleMeasurements.map((measurement) => (
            <IonItem key={measurement}>
              <IonLabel>{measurement}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default About;
