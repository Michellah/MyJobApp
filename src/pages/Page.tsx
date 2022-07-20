import { IonFooter,IonSearchbar,IonButtons,IonModal, IonItem,IonLabel,IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar ,IonCard, IonCardContent,IonCardSubtitle, IonCardTitle,IonCardHeader, IonBadge, IonText} from '@ionic/react';
import { useParams } from 'react-router';
import './Page.css';
import { useState } from 'react';
import data from '../data/index';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className='contratStyle'>My Job</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonSearchbar className='searchStyle' value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="focus"></IonSearchbar>
        {data.map((item)=>
          <div key={item.title}>
          <IonCard>
                <IonItem>
                  <IonLabel>{item.name_entrepries}</IonLabel>
                </IonItem>
                <IonCardContent  className='entrepriesStyle'>{item.title}</IonCardContent>
                <IonCardContent className='container'>
                  <IonCardSubtitle className='contratStyle'>{item.contrat}</IonCardSubtitle>
                  <IonBadge className='badgeStyle'>{item.urgence}</IonBadge>
                </IonCardContent>
                <IonCardContent>{item.description}</IonCardContent>
                <IonButtons className='button' onClick={() => setIsOpen(true)}>Voir plus...</IonButtons>
           </IonCard>
             <IonModal isOpen={isOpen}>
             <IonHeader>
               <IonToolbar>
                 <IonTitle>{item.name_entrepries}</IonTitle>
                 <IonButtons slot="end">
                   <IonButtons className='badgeStyle' onClick={() => setIsOpen(false)}>Close</IonButtons>
                 </IonButtons>
               </IonToolbar>
             </IonHeader>
             <IonContent>
              <IonTitle className='entrepriesStyle'>
                {item.title}
              </IonTitle>
              <IonItem className='contratStyle'>
                <IonLabel>{item.contrat}</IonLabel>
              </IonItem>
              <IonItem className='descriptionStyle'>
                {item.description}
              </IonItem>
             </IonContent>
           </IonModal>
           </div>
          )}
      </IonContent>
    </IonPage>
  );
};

export default Page;
