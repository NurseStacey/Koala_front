import My_Button from '../../../../Components/My-Button'
import ChangeBackgroundColor from '../../../../Components/Change-Background-Color-for-List'
import MyListBox from '../../../../Components/My-Listbox'
import NewEditRemove from '../../../../Components/new-edit-delete'
import AxiosInstance from '../../../../utils/Axios'


import {useState} from 'react'

export default function PrescriptionBox({
    openRx,
    Prescriptions,
    setPrescriptions,
    ReloadPatient
})
{
    const [selectedRx, setselectedRx]=useState(null)

    const GetNewRx = () => {
        //console.log('here')
        openRx()
    }

    const EditRx = () => {

    }

    const RemoveRx = () =>{
        // if (selectedDx==null) return

        // let Dx_id = DxCodes.find((oneDx)=>oneDx['name']==selectedDx)['id']
        
        // let dataToSend = {
        //     categ_id:CategToEdit['problem_id'],
        //     dx_id:Dx_id,

        // }   
        // try{
        //     AxiosInstance.post(`patients/remove_dx_code/`, dataToSend).then((res) =>{
        //         ReloadPatient()
        //     })
        // } catch(error){console.log(error)}   
    }

    const RxClicked = (thisRxCode) =>{
        ChangeBackgroundColor(thisRxCode,Prescriptions,setPrescriptions)
        setselectedRx(thisRxCode)
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
                    NewFunction={GetNewRx}
                    EditFunction ={EditRx}
                    RemoveFunction={RemoveRx}
                />

                <MyListBox
                    title='Prescriptions'
                    clickedFunction={RxClicked}
                    doubleclickedFunction={null}
                    listArray={Prescriptions}
                    whichValue = {'name'}     
                />                    


            </div>       


    )
}