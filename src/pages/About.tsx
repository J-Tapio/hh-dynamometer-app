// Ionic
import {
  IonContent,
  IonPage,
  IonList,
  IonItem,
  IonThumbnail,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
  IonCardHeader,
  IonText,
} from "@ionic/react";
//============================================================================//

function ProductCard() {
  return (
    <IonCard>
      <img
        alt="Handheld dynamometer"
        src="https://ionicframework.com/docs/img/demos/card-media.png"
        style={{ width: "100%", objectFit: "cover" }}
      />
      <IonCardHeader>
        <IonCardTitle>Digital handheld dynamometer</IonCardTitle>
        <IonCardSubtitle>
          Assessment tool for Physiotherapists and Athlete trainers{" "}
        </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent></IonCardContent>
    </IonCard>
  );
}

//============================================================================//

function About() {
  // Examples
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

  return (
    <IonPage>
      <IonContent className="">
        <IonText color="">
          <h1 className="ion-text-center ion-padding">About</h1>
        </IonText>
        <ProductCard />
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Common measurement examples</IonCardTitle>
            <IonCardSubtitle>
              You can create also your own measurements
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent className="ion-no-padding">
            <IonList lines="none" className="">
              {possibleMeasurements.map((measurement) => (
                <IonItem
                  className="ion-padding"
                  key={measurement}
                >
                  <IonThumbnail slot="start">
                    <img
                      alt={measurement}
                      src={
                        "https://ionicframework.com/docs/img/demos/thumbnail.svg"
                      }
                    />
                  </IonThumbnail>
                  <IonText>{measurement}</IonText>
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
