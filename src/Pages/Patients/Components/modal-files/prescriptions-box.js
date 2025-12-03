import ChangeBackgroundColor from '../../../../Components/Change-Background-Color-for-List'
import MyListBoxWithID from '../../../../Components/My-ListboxWithID'
import NewEditRemove from '../../../../Components/new-edit-delete'
import AxiosInstance from '../../../../utils/Axios'
import {RxListDiv} from '../../Components/listbox-div-funcs'

import {useState, useEffect} from 'react'

export default function PrescriptionBox({
    openRx,
    Prescriptions,    
    ReloadPatient,
    setRxToEdit,
    whichBox,
    parentID
})
{
    const [selectedRx, setselectedRx]=useState(null)
    const [PrescriptionNames, setPrescriptionNames]=useState([])

    useEffect(()=>{

        if (Prescriptions!==undefined && Prescriptions!==null)
        {
            let array=[]
            Prescriptions.map((onePrescription)=>{
                array.push({
                'id':onePrescription['id'],
               // 'name':onePrescription['selectedMedName']
                'name':RxListDiv(onePrescription)
            })})

            
            setPrescriptionNames(array)
        }
    },[Prescriptions])

    const GetNewRx = () => {
        //console.log('here')
        openRx()
    }

    const EditRx = () => {
        try {
            let thisRx = Prescriptions.find((oneRx)=>oneRx.id==selectedRx)

            if (typeof(thisRx)=='object') {
                setRxToEdit(thisRx)
                openRx()
            }
        } catch {}
    }

    const RemoveRx = () =>{
        if (selectedRx==null)
            return

        let datatosend={
            'RxID':selectedRx,
            'parentID':parentID
        }
        try{
            if (whichBox=='Category'){

                AxiosInstance.post(`patients/one_patient/medical_category/removeRx/`,datatosend).then((res) =>{
                })
            } else if (whichBox=='Dx'){

                AxiosInstance.post(`patients/one_patient/Dx_code/removeRx/`,datatosend).then((res) =>{
                })
            }
            ReloadPatient()
        }catch{
            console.log('Could not remove Rx')
        }
    }

    const DeleteRx = ()=>{
        if (selectedRx==null)
            return

        let this_Rx = Prescriptions.find((oneRx)=>oneRx['id']==selectedRx)

        if (this_Rx['can_delete'])
            AxiosInstance.delete(`patients/prescription/delete/${selectedRx}`).then((res) =>{       
                console.log(res) 
                ReloadPatient()            
            })
    }

    const test = ()=>{
        console.log(Prescriptions)
    }
    return (

            <div
                style={{
                    display:'flex',
                    justifyContent:'space-between',
                    height:'100%',
                    width:'100%',
                }}
            >

                <NewEditRemove
                    NewFunction={GetNewRx}
                    EditFunction ={EditRx}
                    RemoveFunction={RemoveRx}
                    DeleteFunction={DeleteRx}
                />

                <MyListBoxWithID
                    listArray={PrescriptionNames}   
                    selectedValue={selectedRx}
                    setValue={setselectedRx}
                    title='Prescriptions'
                    fontSize='14px'
                /> 
                
            </div>       
    )
}