import BoxOfLists from '../../../Components/box-of-list'
import {useState} from 'react'

export default function AllListBoxes({
    UpdateMod,
    ThisPatient,
    AllFields,
    EditModal})
{
    const [patientID, setpatientID] = useState(-1)

    if (ThisPatient == 0)
        return null

    const LocalEditModal = (form, recordID) => {
        
        let thisRecord = ThisPatient[form].find(oneRecord =>oneRecord.id==recordID)

        EditModal(form, thisRecord)
    }

    return (
   
        <div>
             {/* {console.log(ThisPatient)}
             {console.log(ThisPatient['surgical_history'])} */}
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
         {/* <BoxOfLists
                FormOpen = {()=>UpdateMod('major_event', 'Add a Major Event')}
                NewButtonText='New Major Event'
                Title='Major Event'
                TheList={ThisPatient['surgical_history']}
                TheLabel={AllFields['surgical_history'].label}
            />  */}
{/* 
            <BoxOfLists
                FormOpen = {()=>UpdateMod('outside_provider', 'Add an Outside Provider')}
                NewButtonText='New Outside Provider'
                Title='Outside Provider'
                TheList={ThisPatient['outside_provider']}
                TheLabel={AllFields['outside_provider'].label}
            />   */}
        </div>
    )

}