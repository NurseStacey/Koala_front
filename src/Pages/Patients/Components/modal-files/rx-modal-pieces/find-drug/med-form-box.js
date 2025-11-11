import {useState, useEffect} from 'react'
import MyListBoxBetter from '../../../../../../Components/My-ListboxBetter'

export default function MedFormBox({
    RxToEdit,
    DrugSelected,
    setDataValue,
    setMedFormObj,
    MedFormObj
})
{
    const [initializingSavedMed, setinitializingSavedMed] =useState(true)

    useEffect(()=>{
        if(RxToEdit!==null){

        }
    })

    useEffect(()=>{

        if (DrugSelected!==null) {
            let thisMedForms=[]
            DrugSelected['drugForm'].map((oneMedForm)=> thisMedForms.push(oneMedForm.formName))

            if (RxToEdit!==null && initializingSavedMed)
            {
                setMedFormObj({
                    'selectedMedForm':GetMedForm(RxToEdit['selectedMedFormName']),
                    'optionsMedForm':thisMedForms.sort((a,b)=>a.length-b.length)         
                })
                setinitializingSavedMed(false)
            } else {
                let newMedForm = thisMedForms.find((oneForm)=>oneForm==MedFormObj['selectedMedForm']['formName'])
                if (newMedForm==undefined) {
                    setMedFormObj({
                        'selectedMedForm':{
                            'formName':'',
                            'strengths':[]
                        },
                        'optionsMedForm':thisMedForms.sort((a,b)=>a.length-b.length)         
                    })
                } else {
                    setMedFormObj({
                        'selectedMedForm':newMedForm,
                        'optionsMedForm':thisMedForms.sort((a,b)=>a.length-b.length)         
                    })
                }
            }

        }
    },[DrugSelected])

    const GetMedForm=(MedFormName)=>{
        return DrugSelected['drugForm'].find((oneMedForm)=>oneMedForm['formName']==MedFormName)
    }

    const MedFormClicked=(selectedMedForm)=>{
        let thisForm = GetMedForm(selectedMedForm)
        setDataValue(thisForm,'selectedMedForm')

        setMedFormObj({
            'selectedMedForm':thisForm,
            'optionsMedForm':MedFormObj['optionsMedForm']
        })        
    }

    return(
        <div
            style={{
                paddingLeft:'2%',
                marginTop:'2%',
                height:'26%',
                width:'100%',                        
            }}>
            <MyListBoxBetter
                listArray={MedFormObj['optionsMedForm']}
                selectedValue={MedFormObj['selectedMedForm']['formName']}
                setValue={MedFormClicked}
                title=''
                fontSize='18px'
            />                    
        </div>            
    )
}