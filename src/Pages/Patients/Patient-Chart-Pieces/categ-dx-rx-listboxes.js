import BoxOfList from '../../../Components/box-of-list'

import {useState, useEffect} from 'react'

export default function CategDxRxListBoxes({
    ModelCategOpen,
    ModelCategEditOpen,
    ModelDxNewOpen,
    ModelDxEditOpen,
    ModelRxOpen,
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
        let these_categories = []
        ThisPatient['medical_problems'].map((one_problem)=>these_categories.push({
            name:one_problem.problem_name,
            id:one_problem.problem_id
        }))

        //console.log(these_categories)
        setMedCategsList(these_categories.sort((a,b)=>a.name.toLowerCase().localeCompare(b.name.toLowerCase())))        

        let these_dx = []
        ThisPatient['dx_codes'].map((one_dx)=>these_dx.push({
            name:one_dx.description,
            id:one_dx.id
        }))

        setDxList(these_dx.sort((a,b)=>a.name.toLowerCase().localeCompare(b.name.toLowerCase())))        

        let these_rx = []
        ThisPatient['prescriptions'].map((one_rx)=>{
            //console.log(one_rx)
            these_rx.push({
            name:one_rx.selectedMedName,
            id:one_rx.id
        })})
        
        setRxList(these_rx.sort((a,b)=>a.name.toLowerCase().localeCompare(b.name.toLowerCase())))     

    },[ThisPatient])
    
    const EditCateg = (CategID) =>{
        ModelCategEditOpen(true)
        setCategToEdit(ThisPatient['medical_problems'].find((one_categ)=>(one_categ.problem_id==CategID)))
    }

    const EditDx = (DxID) =>{

        setCodeToEdit(ThisPatient['dx_codes'].find((oneDx)=>oneDx.id==DxID))
        ModelDxEditOpen()
    }

    const EditRx = (RxID) =>{
        setRxToEdit(ThisPatient['prescriptions'].find((oneRx)=>oneRx.id==RxID))
        ModelRxOpen()
    }    

    return(
        <div
            style={{
                height:'100%',
                marginTop:'3%'
            }}
            >
        <BoxOfList
            title='Medical Category'
            openNew={ModelCategOpen}
            TheList = {MedCategsList}
            EditFunc={EditCateg}
            whichValue={'name'}
            width={'100%'}            
            />
        

        <BoxOfList
            title='Diagnosis'
            openNew={ModelDxNewOpen}
            TheList = {DxList}
            EditFunc={EditDx}             
            whichValue={'name'}
            width={'100%'}            
             />

        <BoxOfList
            title='Prescription'
            openNew={ModelRxOpen}
            TheList = {RxList}
            EditFunc={EditRx}        
            whichValue={'name'}         
            width={'100%'}                   
             />    
        </div>                
    )
}