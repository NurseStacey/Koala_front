import BoxOfList from '../../../Components/box-of-list'

import {useState, useEffect} from 'react'

export default function CategDxRxListBoxes({
    ModelCategOpenFx,
    ModelCategEditOpenFx,
    ModelDxNewOpenFx,
    ModelDxEditOpenFx,
    ModelRxOpenFx,
    ThisPatient,
    setCodeToEdit,
    setCategToEdit,
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


    },[ThisPatient])
    
    const EditCateg = (CategID) =>{
        ModelCategEditOpenFx(true)
        let thisCateg = ThisPatient['medical_problems'].find((one_categ)=>(one_categ.problem_id==CategID))

        setCategToEdit(thisCateg)

    }

    const EditDx = (CategID) =>{

        setCodeToEdit(ThisPatient['dx_codes'].find((oneDx)=>oneDx.id==CategID))
        ModelDxEditOpenFx()
    }

    const EditRx = (CategID) =>{
        console.log(CategID)
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
            openNew={ModelCategOpenFx}
            TheList = {MedCategsList}
            EditFunc={EditCateg}
            whichValue={'name'}
            width={'100%'}            
            />
        

        <BoxOfList
            title='Diagnosis'
            openNew={ModelDxNewOpenFx}
            TheList = {DxList}
            EditFunc={EditDx}             
            whichValue={'name'}
            width={'100%'}            
             />

        <BoxOfList
            title='Prescription'
            openNew={ModelRxOpenFx}
            TheList = {RxList}
            EditFunc={EditRx}        
            whichValue={'name'}         
            width={'100%'}                   
             />    
        </div>                
    )
}