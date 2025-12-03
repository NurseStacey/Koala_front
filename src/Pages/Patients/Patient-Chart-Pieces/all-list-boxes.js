import BoxOfList from '../../../Components/box-of-list'
import {ALL_FIELDS} from '../form-fields/combined-form-fields'

export default function AllListBoxes({
    UpdateMod,
    ThisPatient,
    EditModal
})
{

    if (ThisPatient==undefined)
        return null

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
                which='surgical_history'
                TheList={ThisPatient['surgical_history']}
                ThisPatient={ThisPatient}
                EditFunc={EditModal}
                whichValue={'surgery'}
                width={'46%'}
                list_div = {ALL_FIELDS['surgical_history'].list_div}
            />
            <BoxOfList
                openNew = {()=>UpdateMod('major_event', 'Add a Major Event')}
                title='Major Event History'
                EditFunc={EditModal}
                ThisPatient={ThisPatient}
                TheList={ThisPatient['major_event']}
                which={'major_event'}
                whichValue={'event'}
                width={'46%'}
                list_div = {ALL_FIELDS['major_event'].list_div}                
            />           
 
            <BoxOfList
                openNew = {()=>UpdateMod('outside_providers', 'Add an Outside Provider')}
                title='Outside Providers'
                EditFunc={EditModal}
                ThisPatient={ThisPatient}
                TheList={ThisPatient['outside_providers']}
                which={'outside_providers'}
                whichValue={'provider'}
                width={'46%'}
                list_div = {ALL_FIELDS['outside_providers'].list_div}                
            />         

            <BoxOfList
                openNew = {()=>UpdateMod('vaccine_history', 'Add a Vaccine')}
                title='Vaccines'
                EditFunc={EditModal}
                ThisPatient={ThisPatient}
                TheList={ThisPatient['vaccine_history']}
                which={'vaccine_history'}
                whichValue={'vaccine'}
                width={'46%'}
                list_div = {ALL_FIELDS['vaccine_history'].list_div}                
            />                      

            <BoxOfList
                openNew = {()=>UpdateMod('drug_intollerances', 'Add a Drug Intollerance')}
                title='Drug Intollerances'
                EditFunc={EditModal}
                ThisPatient={ThisPatient}
                TheList={ThisPatient['drug_intollerances']}
                which={'drug_intollerances'}
                whichValue={'drug'}
                width={'46%'}
                list_div = {ALL_FIELDS['drug_intollerances'].list_div}                
            />     

            <BoxOfList
                openNew = {()=>UpdateMod('allergies', 'Add an Allergy')}
                title='Allergies'
                EditFunc={EditModal}
                ThisPatient={ThisPatient}
                TheList={ThisPatient['allergies']}
                which={'allergies'}
                whichValue={'allergen'}
                width={'46%'}
                list_div = {ALL_FIELDS['allergies'].list_div}                
            />  

        </div>
    )
}