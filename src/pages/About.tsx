import {
  IonContent,
  IonPage,
  IonItem,
  IonLabel,
  IonList,
  IonText,
} from "@ionic/react";
import "./Pages.css";
import "./About.css";

// Just to name a few examples
const possibleMeasurements = [
  "Shoulder Abduction",
  "Shoulder Adduction",
  "Shoulder Flexion",
  "Shoulder Extension",
  "Shoulder Internal Rotation",
  "Shoulder External Rotation",
  "Elbow Flexion (Biceps)",
  "Elbow Extension (Triceps)",
  "Knee Extension (Quadriceps)",
  "Knee Flexion (Hamstrings)",
];

function ProductCard() {
  return (
    <div className="card product-card">
      <h2>Handheld dynamometer</h2>
      <div className="product-card-img">
        <p>Device image</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <IonText color="secondary">
          <h1>About</h1>
        </IonText>
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
