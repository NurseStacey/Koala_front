import BoxOfLists from '../../../Components/box-of-list'

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

    return (
   
        <div
            style={{
                display:'flex',
                width:'100%',
                height:'750px',
                flexWrap:'wrap',
                justifyContent:'space-between',
                border:'1px solid green'
            }}>

            <BoxOfLists
                FormOpen = {()=>UpdateMod('surgical_history', 'Add a Surgical')}
                NewButtonText='New Surgery'
                Title='Surgical History'
                TheList={ThisPatient['surgical_history']}
                TheLabel={AllFields['surgical_history'].label}
                EditModal={LocalEditModal}
                form='surgical_history'
            />
        
            <BoxOfLists
                FormOpen = {()=>UpdateMod('major_event', 'Add a Major Event')}
                NewButtonText='New Major Event'
                Title='Major Event'
                TheList={ThisPatient['major_event']}
                TheLabel={AllFields['major_event'].label}
                EditModal={LocalEditModal}
                form='major_event'
            />        

            <BoxOfLists
                FormOpen = {()=>UpdateMod('outside_providers', 'Add an Outside Provider')}
                NewButtonText='New Outside Provider'
                Title='Outside Provider'
                TheList={ThisPatient['outside_providers']}
                TheLabel={AllFields['outside_providers'].label}
                EditModal={LocalEditModal}
                form='outside_providers'
            />                 

            <BoxOfLists
                FormOpen = {()=>UpdateMod('vaccine_history', 'Add a Vaccine')}
                NewButtonText='New Vaccine'
                Title='Vaccine History'
                TheList={ThisPatient['vaccine_history']}
                TheLabel={AllFields['vaccine_history'].label}
                EditModal={LocalEditModal}
                form='vaccine_history'
            /> 

            <BoxOfLists
                FormOpen = {()=>UpdateMod('drug_intollerances', 'Add a Drug Intollerance')}
                NewButtonText='New Drug Intollerance'
                Title='Drug Intollerances'
                TheList={ThisPatient['drug_intollerances']}
                TheLabel={AllFields['drug_intollerances'].label}
                EditModal={LocalEditModal}
                form='drug_intollerances'
            />         

            <BoxOfLists
                FormOpen = {()=>UpdateMod('allergies', 'Add a Allergy')}
                NewButtonText='New Allergy'
                Title='Allergies'
                TheList={ThisPatient['allergies']}
                TheLabel={AllFields['allergies'].label}
                EditModal={LocalEditModal}
                form='allergies'
            />                                 

        </div>
    )

}