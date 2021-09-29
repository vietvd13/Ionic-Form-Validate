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
  IonIcon,
  IonToast,
} from '@ionic/react';
import { add } from 'ionicons/icons';
import { useState } from 'react';
import './Home.css';

/**
 * Convert date input to YYYY/M/D
 * @param date 
 * @returns 
 */
function convertDate(date: string) {
  if (!date) {
    return '';
  }

  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = (newDate.getMonth() + 1);
  const day = newDate.getDay();
  

  return joinDate(year, month, day);
};

/**
 * Join year, month, date
 * @param year 
 * @param month 
 * @param date 
 * @returns YYYY/M/D
 */
function joinDate(year: number, month: number, date: number) {
  if (!year && !month && !date) {
    return '';
  }

  return `${year}/${month}/${date}`;
};

/**
 * Validate Form
 * @param Form 
 * @returns Array item error
 */
function validateForm(Form: any) {
  const listPropertyType = ['Flat', 'House', 'Bungalow'];
  const listFurnitureTypes = ['Furnished', 'Unfurnished', 'Part Furnished'];

  let isValidate = [];

  for (const key in Form) {
    if (Object.prototype.hasOwnProperty.call(Form, key)) {
      const element = Form[key];
      
      switch (key) {
        case 'propertyType': {
          if (!listPropertyType.includes(element)) {
            isValidate.push('Property Type');
          };

          break;
        };

        case 'bedrooms': {
          if (!validateNumber(element)) {
            isValidate.push('Bedrooms');
          };

          break;
        };

        case 'dateTimeAdding': {
          if (!validateDate(element)) {
            isValidate.push('Date Time Adding')
          };

          break;
        };

        case 'monthlyRentPrice': {
          if (!validateNumber(element)) {
            isValidate.push('Monthly Rent Price');
          };

          break;
        };

        case 'furnitureTypes': {
          if (!listFurnitureTypes.includes(element)) {
            isValidate.push('Furniture Types');
          };

          break;
        };

        case 'notes': {
          break;
        };

        case 'nameReporter': {
          if (validateEmptyOrWhiteSpace(element)) {
            isValidate.push('Name Reporter')
          };

          break;
        };

        default: {
          isValidate.push(false);
        };
      };
    };
  };

  return isValidate;
};

/**
 * Vadlidate date
 * @param value 
 * @returns Boolean
 */
function validateDate(value: string) {
  const re = /^\d{4}[\/.]\d{1,2}[\/.]\d{1,2}$/;
  return re.test(value);
}

/**
 * Validate has Empty, White space
 * @param value 
 * @returns Boolean
 */
function validateEmptyOrWhiteSpace(value: string) {
  const re = /^\s*$/;
  return re.test(value);
}

/**
 * Validate number
 * @param value 
 * @returns Boolean
 */
export function validateNumber(value: string) {
  const re = /^\d+$/;
  return re.test(value);
}

/**
 * Create message error
 * @param listError 
 * @returns Message
 */
function createMessageError(listError: any) {
  const message = listError.join(', ');

  return `You entered ${message} incorrectly`;
}


const Home: React.FC = () => {
  // Property type
  const [propertyType, setPropertyType] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [dateTimeAdding, setDateTimeAdding] = useState('');
  const [monthlyRentPrice, setMonthlyRentPrice] = useState('');
  const [furnitureTypes, setFurnitureTypes] = useState('');
  const [notes, setNotes] = useState('');
  const [nameReporter, setNameReporter] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [headerMessage, setHeaderMessage] = useState('');
  const [message, setMessage] = useState('');
  const [colorMessage, setColorMessage] = useState('');

  /**
   * Function handle Submit Form
   */
  const handleSubmit = () => {
    const Form = {
      propertyType,
      bedrooms,
      dateTimeAdding: convertDate(dateTimeAdding),
      monthlyRentPrice,
      furnitureTypes,
      notes,
      nameReporter,
    };

    const isValidate: any = validateForm(Form);
    if (isValidate.length === 0) {
      setHeaderMessage('Success');
      setMessage('You have successfully submitted the form');
      setColorMessage('success');
      setShowToast(true);

      setTimeout(()=>{
        setShowToast(false);
      }, 5000)
    } else {
      setHeaderMessage('Warning');
      setMessage(createMessageError(isValidate));
      setColorMessage('warning');
      setShowToast(true);

      setTimeout(()=>{
        setShowToast(false);
      }, 5000)
    }
  };

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
              onIonChange={event => setMonthlyRentPrice(event.detail.value!)} 
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
          <IonButton expand="block" onClick={handleSubmit}>
            <IonIcon 
              slot="icon-only" 
              icon={add}
            ></IonIcon>
            Submit
          </IonButton>
          {/* End Button Submit */}

          {/* Start Toast */}
          <IonToast isOpen={showToast} header={headerMessage} message={message} color={colorMessage} position="top"></IonToast>
          {/* End Toast */}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
