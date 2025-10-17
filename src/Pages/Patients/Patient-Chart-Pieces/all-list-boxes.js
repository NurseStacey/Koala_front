
import BoxOfList from '../../../Components/box-of-list'

export default function AllListBoxes({
    UpdateMod,
    ThisPatient,
    AllFields,
    EditModal})
{

    if (ThisPatient == 0)
        return null

    const LocalEditModal = (form, recordID) => {
        
        let thisRecord = ThisPatient[form].find(oneRecord =>oneRecord.id==recordID)

        EditModal(form, thisRecord)
    }

    const SurgicalHxEdit = (recordID)=>{
        let thisRecord = ThisPatient['surgical_history'].find(oneRecord =>oneRecord.id==recordID)

        EditModal('surgical_history', thisRecord)        
    }


    const MajorEventHxEdit = (recordID)=>{
        let thisRecord = ThisPatient['major_event'].find(oneRecord =>oneRecord.id==recordID)

        EditModal('major_event', thisRecord)        
    }    

    const OutsideProviderEdit = (recordID)=>{
        let thisRecord = ThisPatient['outside_providers'].find(oneRecord =>oneRecord.id==recordID)

        EditModal('outside_providers', thisRecord)        
    }    

    const VaccineEdit = (recordID)=>{
        let thisRecord = ThisPatient['vaccine_history'].find(oneRecord =>oneRecord.id==recordID)

        EditModal('vaccine_history', thisRecord)        
    }        

    const DrugIntolleranceEdit = (recordID)=>{
        let thisRecord = ThisPatient['drug_intollerances'].find(oneRecord =>oneRecord.id==recordID)

        EditModal('drug_intollerances', thisRecord)        
    }            

    const AllergyEdit = (recordID)=>{
        let thisRecord = ThisPatient['allergies'].find(oneRecord =>oneRecord.id==recordID)

        EditModal('allergies', thisRecord)        
    }                
    return (
   
        <div
            style={{
                width:'100%',
                height:'750px',
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap',
                justifyContent:'space-evenly',
                paddingTop:'3%',
                
            }}>
{/* 
            <BoxOfList
                FormOpen = {()=>UpdateMod('surgical_history', 'Add a Surgical')}
                NewButtonText='New Surgery'
                Title='Surgical History'
                TheList={ThisPatient['surgical_history']}
                TheLabel={AllFields['surgical_history'].label}
                EditModal={LocalEditModal}
                form='surgical_history'
            /> */}
            <BoxOfList
                openNew = {()=>UpdateMod('surgical_history', 'Add a Surgical')}
                title='Surgical History'
                TheList={ThisPatient['surgical_history']}
                EditFunc={SurgicalHxEdit}
                whichValue={'surgery'}
                width={'46%'}
            />
            <BoxOfList
                openNew = {()=>UpdateMod('major_event', 'Add a Major Event')}
                title='Major History'
                TheList={ThisPatient['major_event']}
                EditFunc={MajorEventHxEdit}
                whichValue={'event'}
                width={'46%'}
            />           

            <BoxOfList
                openNew = {()=>UpdateMod('outside_providers', 'Add an Outside Provider')}
                title='Outside Provider'
                TheList={ThisPatient['outside_providers']}
                EditFunc={OutsideProviderEdit}
                whichValue={'provider'}
                width={'46%'}
            />         

            <BoxOfList
                openNew = {()=>UpdateMod('vaccine_history', 'Add a Vaccine')}
                title='Vacciner'
                TheList={ThisPatient['vaccine_history']}
                EditFunc={VaccineEdit}
                whichValue={'vaccine'}
                width={'46%'}
            />                      

            <BoxOfList
                openNew = {()=>UpdateMod('drug_intollerances', 'Add a Drug Intollerance')}
                title='Vacciner'
                TheList={ThisPatient['drug_intollerances']}
                EditFunc={DrugIntolleranceEdit}
                whichValue={'drug_intollerances'}
                width={'46%'}
            />     


            <BoxOfList
                openNew = {()=>UpdateMod('drug_intollerances', 'Add a Drug Intollerance')}
                title='Vacciner'
                TheList={ThisPatient['allergies']}
                EditFunc={AllergyEdit}
                whichValue={'allergen'}
                width={'46%'}
            />                                            
{/*         
            <BoxOfListsOld
                FormOpen = {()=>UpdateMod('major_event', 'Add a Major Event')}
                NewButtonText='New Major Event'
                Title='Major Event'
                TheList={ThisPatient['major_event']}
                TheLabel={AllFields['major_event'].label}
                EditModal={LocalEditModal}
                form='major_event'
            />        

            <BoxOfListsOld
                FormOpen = {()=>UpdateMod('outside_providers', 'Add an Outside Provider')}
                NewButtonText='New Outside Provider'
                Title='Outside Provider'
                TheList={ThisPatient['outside_providers']}
                TheLabel={AllFields['outside_providers'].label}
                EditModal={LocalEditModal}
                form='outside_providers'
            />                 

            <BoxOfListsOld
                FormOpen = {()=>UpdateMod('vaccine_history', 'Add a Vaccine')}
                NewButtonText='New Vaccine'
                Title='Vaccine History'
                TheList={ThisPatient['vaccine_history']}
                TheLabel={AllFields['vaccine_history'].label}
                EditModal={LocalEditModal}
                form='vaccine_history'
            /> 

            <BoxOfListsOld
                FormOpen = {()=>UpdateMod('drug_intollerances', 'Add a Drug Intollerance')}
                NewButtonText='New Drug Intollerance'
                Title='Drug Intollerances'
                TheList={ThisPatient['drug_intollerances']}
                TheLabel={AllFields['drug_intollerances'].label}
                EditModal={LocalEditModal}
                form='drug_intollerances'
            />         

            <BoxOfListsOld
                FormOpen = {()=>UpdateMod('allergies', 'Add a Allergy')}
                NewButtonText='New Allergy'
                Title='Allergies'
                TheList={ThisPatient['allergies']}
                TheLabel={AllFields['allergies'].label}
                EditModal={LocalEditModal}
                form='allergies'
            />                                  */}

        </div>
    )

}