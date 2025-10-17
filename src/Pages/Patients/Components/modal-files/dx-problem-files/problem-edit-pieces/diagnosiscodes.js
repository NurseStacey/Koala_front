import My_Button from '../../../../../../Components/My-Button'
import ChangeBackgroundColor from '../../../../../../Components/Change-Background-Color-for-List'
import MyListBox from '../../../../../../Components/My-Listbox'
import NewEditDelete from '../../../../../../Components/new-edit-delete'

export default function MedProbDxCodes({
    openDx,
    ProblemToEdit,
    DxCodes,
    setDxCodes
})
{
    const GetNewDx = () => {
        //console.log('here')
        openDx(ProblemToEdit)
    }

    const EditDx = () => {

    }

    const DeleteDx = () =>{

    }

    const DxClicked = (thisDxCode) =>{
        ChangeBackgroundColor(thisDxCode,DxCodes,setDxCodes)
    }
    return (

            <div
                style={{
                    display:'flex',
                    justifyContent:'space-evenly',
                    height:'45%',
                    width:'100%',
                }}
            >
                <NewEditDelete
                    NewFunction={GetNewDx}
                    EditFunction ={EditDx}
                    DeleteFunction={DeleteDx}
                />

                <MyListBox
                    title='Diagnosis'
                    clickedFunction={DxClicked}
                    doubleclickedFunction={null}
                    listArray={DxCodes}
                    whichValue = {'name'}     
                />                    


            </div>       


    )
}