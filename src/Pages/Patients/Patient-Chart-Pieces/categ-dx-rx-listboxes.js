import BoxOfList from '../../../Components/box-of-list'
import {categListDiv,DxListDiv,RxListDiv} from '../Components/listbox-div-funcs'

import {useState, useEffect} from 'react'

export default function CategDxRxListBoxes({
    UpdateModelSwitches,
    ThisPatient,
    setCodeToEdit,
    setCategToEdit,
    setRxToEdit
})
{

    const [MedCategsList,setMedCategsList]=useState([])
    const [RxList,setRxList]=useState([])
    const [DxList,setDxList]=useState([])        

    useEffect(()=>{
        setMedCategsList(ThisPatient.getMedCategsList())
        setDxList(ThisPatient.getDxList())
        setRxList(ThisPatient['prescriptions'])
    },[ThisPatient])
    
    const test=()=>{console.log(DxList)}
    const EditCateg = (which,Categ) =>{
        UpdateModelSwitches(true,'CategEdit')
        setCategToEdit(Categ)
    }

    const EditDx = (which,DxCode) =>{
        setCodeToEdit(DxCode)
        //console.log(DxCode)
        UpdateModelSwitches('edit','Dx')
    }

    const EditRx = (which,RxCode) =>{
        setRxToEdit(RxCode)
        //console.log(RxCode)
        UpdateModelSwitches(true,'Rx')
    }    

    return(
        <div
            style={{
                height:'100%',
                marginTop:'3%'
            }}
            >
        {/* <button onClick={test}>test</button> */}
        <BoxOfList
            title='Medical Category'
            openNew={()=>UpdateModelSwitches(true,'Categ')}
            TheList = {MedCategsList}
            EditFunc={EditCateg}
            ThisPatient={ThisPatient}
            whichValue={'name'}
            which={'medical_categories'}
            width={'100%'}
            list_div={categListDiv}
            />
        
        <BoxOfList
            title='Diagnosis'
            openNew={()=>UpdateModelSwitches('new','Dx')}
            TheList = {DxList}
            EditFunc={EditDx}             
            ThisPatient={ThisPatient}
            whichValue={'name'}
            which={'dx_codes'}
            width={'100%'}   
            list_div={DxListDiv}         
             />

        <BoxOfList
            title='Prescription'
            openNew={()=>UpdateModelSwitches(true,'Rx')}
            TheList = {RxList}
            EditFunc={EditRx}        
            ThisPatient={ThisPatient}
            whichValue={'name'}    
            which={'prescriptions'}     
            width={'100%'}              
            list_div={RxListDiv}              
             />    
        </div>                
    )
}