import { 
  IonContent, 
  IonHeader, 
  IonItem, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonDatetime,
  IonRadioGroup,
  IonRadio,
  IonTextarea,
  IonButton,
  IonIcon
} from '@ionic/react';
import { 
  add
} from 'ionicons/icons';
import { 
  useEffect, 
  useState 
} from 'react';
import './Home.css';

const Home: React.FC = () => {
  // Property type
  const [propertyType, setPropertyType] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [dateTimeAdding, setDateTimeAdding] = useState(new Date().toISOString());
  const [monthlyRentPrice, setMonthlyRentPrice] = useState('');
  const [furnitureTypes, setFurnitureTypes] = useState('');
  const [notes, setNotes] = useState('');
  const [nameReporter, setNameReporter] = useState('');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Form Validate</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="ion-padding">
          {/* Start Select Property type */}
          <IonItem>
            <IonLabel position="stacked">Property type</IonLabel>
            <IonSelect 
              value={propertyType} 
              onIonChange={event => setPropertyType(event.detail.value)} 
              placeholder="Please select"
            >
              <IonSelectOption value="Flat">Flat</IonSelectOption>
              <IonSelectOption value="House">House</IonSelectOption>
              <IonSelectOption value="Bungalow">Bungalow</IonSelectOption>
            </IonSelect>
          </IonItem>
          {/* End Select Property type */}

          {/* Start Input Number Bedrooms */}
          <IonItem>
            <IonLabel position="stacked">Bedrooms</IonLabel>
            <IonInput 
              onIonChange={event => setBedrooms(event.detail.value!)} 
              placeholder="Input number bedrooms"
            ></IonInput>
          </IonItem>
          {/* End Input Number Bedrooms */}

          {/* Start Date and time of adding the Property */}
          <IonItem>
            <IonLabel position="stacked">Date and time of adding the Property</IonLabel>
            <IonDatetime 
              onIonChange={event => setDateTimeAdding(event.detail.value!)} 
              display-format="YYYY/MM/DD" 
              placeholder="Input date time of adding the property"
            ></IonDatetime>
          </IonItem>
          {/* End Date and time of adding the Property */}

          {/* Start Monthly rent price */}
          <IonItem>
            <IonLabel position="stacked">Monthly rent price</IonLabel>
            <IonInput 
              onIonChange={event => setBedrooms(event.detail.value!)} 
              placeholder="Input monthly rent price"
            ></IonInput>
          </IonItem>
          {/* End Monthly rent price */}

          {/* Start furniture types */}
          <IonItem>
            <IonLabel position="stacked">Furniture types</IonLabel>
            <IonRadioGroup onIonChange={e => setFurnitureTypes(e.detail.value)}>
              <IonItem>
                <IonLabel><small>Furnished</small></IonLabel>
                <IonRadio 
                  slot="start" 
                  value="Furnished"
                ></IonRadio>
              </IonItem>
              <IonItem>
                <IonLabel><small>Unfurnished</small></IonLabel>
                <IonRadio 
                  slot="start" 
                  value="Unfurnished"
                ></IonRadio>
              </IonItem>
              <IonItem>
                <IonLabel><small>Part Furnished</small></IonLabel>
                <IonRadio 
                  slot="start" 
                  value="PartFurnished"
                ></IonRadio>
              </IonItem>
            </IonRadioGroup>
          </IonItem>
          {/* End furniture types */}

          {/* Start Notes */}
          <IonItem>
            <IonLabel position="stacked">Notes</IonLabel>
            <IonTextarea
              onIonChange={event => setNotes(event.detail.value!)}
              placeholder="Input Notes"
            >
            </IonTextarea>
          </IonItem>
          {/* End Notes */}

          {/* Start Name of the reporter */}
          <IonItem>
            <IonLabel position="stacked">Name of the reporter</IonLabel>
            <IonInput 
              onIonChange={event => setNameReporter(event.detail.value!)} 
              placeholder="Input name reporter"
            ></IonInput>
          </IonItem>
          {/* End Name of the reporter */}

          {/* Start Button Submit */}
          <IonButton expand="block" className="ion-margin-top">
            <IonIcon 
              slot="icon-only" 
              icon={add}
            ></IonIcon>
            Submit
          </IonButton>
          {/* End Button Submit */}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
