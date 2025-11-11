import Predictive_ListBox from '../../../../../../Components/predictive-listbox'
import {useState, useEffect} from 'react'

export default function Drug_Box({
        fullMedicationList,        
        reset,
        medicationName,        
        setDataValue,
        setlocalDrugSelected,
        localDrugSelected
})
{
    const [allMedications, setallMedications] = useState([])

    useEffect(() => {
        
        let tempArray = []
        fullMedicationList.map((oneMed)=>{
            tempArray.push(oneMed['drugName'])
        })
        setallMedications(tempArray)
    },[])

    useEffect(() =>{
        
    },[localDrugSelected])

    const MedNameClicked = (MedName)=>{
        if (MedName !== ''){
            let thisMed = fullMedicationList.find((oneMed)=>oneMed['drugName']==MedName)
            setDataValue(thisMed,'selectedMed')
            setlocalDrugSelected(thisMed)
           }          
        }           

    return(
        <div
        style={{
            height:'30%',
            width:'100%',
            paddingTop:'2%',
            paddingLeft:'2%',
        }}
        >
        <Predictive_ListBox
            theList={allMedications}
            setSelection={MedNameClicked}
            reset={reset}
            title='Select a Drug'
            thisSelection={medicationName}
            />
    </div>
    )
}