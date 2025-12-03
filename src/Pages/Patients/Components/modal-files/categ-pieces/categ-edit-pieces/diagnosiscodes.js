import ChangeBackgroundColor from '../../../../../../Components/Change-Background-Color-for-List'
import MyListBox from '../../../../../../Components/My-Listbox'
import NewEditRemove from '../../../../../../Components/new-edit-delete'
import AxiosInstance from '../../../../../../utils/Axios'


import {useState} from 'react'

export default function MedProbDxCodes({
    openDx,
    CategToEdit,
    DxCodes,
    setDxCodes,
    ReloadPatient
})
{
    const [selectedDx, setselectedDx]=useState(null)

    const GetNewDx = () => {
        //console.log('here')
        openDx()
    }

    const EditDx = () => {

    }

    const RemoveDx = () =>{
        if (selectedDx==null) return

        let Dx_id = DxCodes.find((oneDx)=>oneDx['name']==selectedDx)['id']
        
        let dataToSend = {
            categ_id:CategToEdit['categ_id'],
            dx_id:Dx_id,

        }   
        try{
            AxiosInstance.post(`patients/remove_dx_code/`, dataToSend).then((res) =>{
                ReloadPatient()
            })
        } catch(error){console.log(error)}   
    }

    const DxClicked = (thisDxCode) =>{
        ChangeBackgroundColor(thisDxCode,DxCodes,setDxCodes)
        setselectedDx(thisDxCode)
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
                <NewEditRemove
                    NewFunction={GetNewDx}
                    EditFunction ={EditDx}
                    RemoveFunction={RemoveDx}
                    DeleteFunction={null}
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