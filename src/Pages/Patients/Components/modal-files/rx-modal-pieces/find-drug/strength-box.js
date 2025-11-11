import MyListBoxBetter from '../../../../../../Components/My-ListboxBetter'
import {useState, useEffect} from 'react'
import {MedStrengthObjDefault} from '../data-object'

export default function Strength_Box({
    RxToEdit,
    MedFormObj,
    setDataValue,
    setdisableScript,
    setDosageType,
    ALLData,
    MedStrengthObj,
    setMedStrengthObj
})
{

    const [initializingSavedMed, setinitializingSavedMed] =useState(true)

    const updateMedStrengths = () =>{

        if (MedFormObj['selectedMedForm']!==null &&MedFormObj['selectedMedForm']!==undefined){

            let thisArray=[]

            MedFormObj['selectedMedForm']['strengths'].map((oneStrength)=>thisArray.push(oneStrength['strengthName']))

            if (RxToEdit!==null && initializingSavedMed)
            {
                setinitializingSavedMed(false)
                setMedStrengthObj({
                        'selectedMedStrength':RxToEdit['selectedMedStrength'],
                        'optionsMedStrength':thisArray            
                    })                   
            } else
            {
                setMedStrengthObj({
                    'selectedMedStrength':MedStrengthObj['selectedMedStrength'],
                    'optionsMedStrength':thisArray            
                })   
            }
 
        } else {
            setMedStrengthObj({
                'selectedMedStrength':'',
                'optionsMedStrength':[]       
        })              
        }
    }

    useEffect(()=>{

        try {
            updateMedStrengths()
        } catch {         
            setMedStrengthObj(MedStrengthObjDefault)        
        }

    },[MedFormObj])

    const MedStrengthClicked = (strength)=>{
        setDataValue(strength,'selectedMedStrength')
        setMedStrengthObj({
            'selectedMedStrength':strength,
            'optionsMedStrength':MedStrengthObj['optionsMedStrength']            
        })        

        let index = strength.search('/')

        let dosageType=''
        let WorkingText = strength.substring(index+1)
        
        for (let i=0; i<WorkingText.length; i++){
            if (WorkingText[i].toLowerCase() !== WorkingText[i].toUpperCase() ){
                dosageType = dosageType + WorkingText[i]
            }
            if (WorkingText[i] == ' ' && WorkingText.length>0)
                break
        }

        if (dosageType == '' )
            dosageType=ALLData['selectedMedForm'].formName

        setDosageType(dosageType)
        setdisableScript(false)

    }

    return(
        <div
            style={{
                paddingLeft:'2%',
                marginTop:'2%',
                height:'21%',
                width:'100%',                        
            }}>
            <MyListBoxBetter
                listArray={MedStrengthObj['optionsMedStrength']}
                selectedValue={MedStrengthObj['selectedMedStrength']}
                setValue={MedStrengthClicked}
                title=''
                fontSize='18px'
            />                    
        </div>             
    )
}