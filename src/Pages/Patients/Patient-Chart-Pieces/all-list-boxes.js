
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
                title='Vaccines'
                TheList={ThisPatient['vaccine_history']}
                EditFunc={VaccineEdit}
                whichValue={'vaccine'}
                width={'46%'}
            />                      

            <BoxOfList
                openNew = {()=>UpdateMod('drug_intollerances', 'Add a Drug Intollerance')}
                title='Drug Intollerances'
                TheList={ThisPatient['drug_intollerances']}
                EditFunc={DrugIntolleranceEdit}
                whichValue={'drug'}
                width={'46%'}
            />     


            <BoxOfList
                openNew = {()=>UpdateMod('allergies', 'Add an Allergy')}
                title='Allergies'
                TheList={ThisPatient['allergies']}
                EditFunc={AllergyEdit}
                whichValue={'allergen'}
                width={'46%'}
            />                                            

        </div>
    )

}