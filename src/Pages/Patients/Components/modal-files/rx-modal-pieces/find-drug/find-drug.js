import Drug_Box from './drug-box'
import Med_Form_Box from './med-form-box'
import Strength_Box from './strength-box'
import {useState, useEffect} from 'react'
import {MedFormObjDefault,MedStrengthObjDefault} from '../data-object'

export default function SelectMed({
    RxToEdit,
    fullMedicationList,
    setDosageType,
    setDataValue,        
    reset,
    ALLData,
    setdisableScript
})
{

    const [medicationName,setmedicationName]=useState('')
    const [localDrugSelected, setlocalDrugSelected]=useState(null)
    const [MedFormObj, setMedFormObj]=useState(MedFormObjDefault)
    const [MedStrengthObj, setMedStrengthObj] = useState(MedStrengthObjDefault)
    
    const test=()=>{
        console.log(MedFormObj)
    }
    useEffect(()=>{
        setmedicationName('')
    },[reset])

    useEffect(()=>{
        if (RxToEdit!==null)
        {
            let thisMed = fullMedicationList.find((oneMed)=>oneMed['drugName']==RxToEdit['selectedMedName'])
            setlocalDrugSelected(thisMed)
            setmedicationName(RxToEdit['selectedMedName'])
        }
    },[RxToEdit])

    return(
        <div
            style={{
                height:'100%',
                margin:'2%',
                width:'30%'
            }}>
            <div
                style={{
                    height:'8%',
                    textAlign:'center',
                    fontSize:'20px'
                }}
            >
                {medicationName}
            </div>
            {/* <button onClick={test}>test</button> */}
            <Drug_Box
                    fullMedicationList={fullMedicationList}
                    reset={reset}
                    medicationName={medicationName}
                    setDataValue={setDataValue}
                    setlocalDrugSelected={setlocalDrugSelected}
            />
            <Med_Form_Box
                RxToEdit={RxToEdit}
                DrugSelected={localDrugSelected}
                setDataValue={setDataValue}
                ALLData={ALLData}
                setMedFormObj={setMedFormObj}
                MedFormObj={MedFormObj}
             />
             <Strength_Box
                RxToEdit={RxToEdit}             
                MedFormObj={MedFormObj}
                setDataValue={setDataValue}
                setdisableScript={setdisableScript}
                setDosageType={setDosageType}
                setmedicationName={setmedicationName}
                ALLData={ALLData}     
                DrugSelected={localDrugSelected}     
                MedStrengthObj={MedStrengthObj}
                setMedStrengthObj={setMedStrengthObj}
             />
        </div>
    )
}