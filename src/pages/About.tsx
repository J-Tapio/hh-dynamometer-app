import {
  IonContent,
  IonPage,
  IonLabel,
  IonList,
  IonItem,
  IonText,
  IonThumbnail,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
  IonCardHeader,
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
 /*  return (
    <div className="card product-card">
      <h2>Handheld dynamometer</h2>
      <div className="product-card-img">
        <p>Device image</p>
      </div>
    </div>
  ); */
  return (
    <IonCard>
      <img
        alt="Handheld dynamometer"
        src="https://ionicframework.com/docs/img/demos/card-media.png"
      />
      <IonCardHeader>
        <IonCardSubtitle>Digital handheld dynamometer</IonCardSubtitle>
        <IonCardTitle>
          Assessment tool for Physiotherapists and Athlete trainers
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent></IonCardContent>
    </IonCard>
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
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>
              You can create also your own measurements
            </IonCardSubtitle>
            <IonCardTitle>Common measurement examples</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              {possibleMeasurements.map((measurement) => (
                <IonItem className="ion-justify-content-center">
                  <IonThumbnail slot="start">
                    <img
                      alt={measurement}
                      src={
                        "https://ionicframework.com/docs/img/demos/thumbnail.svg"
                      }
                    />
                  </IonThumbnail>
                  <IonLabel>{measurement}</IonLabel>
                </IonItem>
              ))}
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default About;
