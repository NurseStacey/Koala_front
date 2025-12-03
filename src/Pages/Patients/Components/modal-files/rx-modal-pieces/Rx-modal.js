import '../../../../../../src/CSS/modal.css'
import '../../../../../../src/CSS/general.css'

import {useEffect,useState} from 'react'
import ButtonsRow from './button'
import SelectMed from './find-drug/find-drug'
import WriteScript from './write-script/write-script'
import AssignPrescription from './assign'
import {ALLDataDefault,LoadSavedDrug} from './data-object'
import AxiosInstance from '../../../../../utils/Axios'

export default function RxModel({
    openSwitch, 
    onClose, 
    ThisPatient,
    ReloadPatient,
    fullMedicationList,
    CategToEdit,
    DxToEdit,
    RxToEdit,
    setRxToEdit
  }){

    const [selectedCateg, setselectedCateg]=useState([])
    const [selectedDx, setselectedDx]=useState([])
    const [ALLData, setALLData ] = useState(ALLDataDefault)
    const [Editing, setEditing]=useState(false)
    const [reset, setreset]=useState(0)
    const [disableScript,setdisableScript]=useState(true)
    const [DosageType, setDosageType]=useState('tablet')

    const setDataValue = (value, which)=>
    {

        let newALLData=JSON.parse(JSON.stringify(ALLData))
        
        newALLData[which]=value
        
        setALLData(newALLData)
    }

    useEffect(() => {

        if (RxToEdit!==null){
            LoadSavedDrug(setALLData,RxToEdit,fullMedicationList)
            setselectedDx(RxToEdit['DxCodes'])
            //console.log(RxToEdit['Categories'])
            setselectedCateg(RxToEdit['Categories'])
            setEditing(true)
            setdisableScript(false)
        }
    },[RxToEdit])

    const RemoveRx = ()=>{
        
        AxiosInstance.delete(`patients/prescription/delete/${ALLData['prescriptionDB']}`).then((res) =>{       
            console.log(res) 
            ReloadPatient()
            CloseBox()
        })
    }

    const AddRxToPatient = ()=>{

        try{        
            selectedCateg.map((oneCateg)=>ALLData['Categories'].push(oneCateg))
            selectedDx.map((oneDx)=>ALLData['DxCodes'].push(oneDx))
            ALLData['patientID']=ThisPatient['basic_data']['id']
            ALLData['prescriptionDB'] = ALLData['selectedMedForm']['strengths'].find((oneStrength)=>oneStrength['strengthName']==ALLData['selectedMedStrength'])['drugID']
//            console.log(ALLData)
            AxiosInstance.post(`patients/prescription/`, ALLData).then((res) =>{
                ReloadPatient()
                CloseBox()
            })
        } catch(error){console.log(error)}         
    }

    const test = () =>{
        let todayDate = new Date()
        let month=todayDate.getMonth()+1
        let monthStr=month.toString()
        if (month<10) monthStr='0' + month.toString()

        let day=todayDate.getDay()
        let dayStr=day.toString()
        if (day<10) dayStr = '0'+ day.toString()

        console.log(dayStr)
        console.log(todayDate.toISOString().split('T')[0])
    }    
    const testRxtoEdit = () =>{
        console.log(RxToEdit)
    }

    const ResetValue = () => {
        setALLData(ALLDataDefault)
        setdisableScript(true)
        setDosageType('tablet')
        setselectedCateg([])
        setselectedDx([])
        setreset(reset+1)
        setRxToEdit(null)
        setEditing(false)
    }

    const CloseBox = () => {
        ResetValue()
        onClose()
    }

    useEffect(()=>{
        if(DxToEdit!==null && DxToEdit!==undefined) setselectedDx([DxToEdit])
    },[DxToEdit])

    useEffect(()=>{
        if(CategToEdit!==null) {
            //console.log(CategToEdit)
            setselectedCateg([CategToEdit])
        }
    },[CategToEdit])
    
    if (!openSwitch) return null

    return (
        <div
            className='OVERLAY_STYLES'>
            <div
                className='MODAL_STYLE_BIG'
            >
                <div className='TITLE_STYLE_30'>New Prescription</div> 
                <div
                    style={{
                        display:'flex',
                        justfyContent:'space-evenly',
                        height:'75%',
                        width:'100%',
                    }}
                >
                    <button onClick={test}>test</button>
                    
                    <SelectMed
                        RxToEdit={RxToEdit}
                        ThisPatient={ThisPatient}
                        setDosageType={setDosageType}
                        setdisableScript={setdisableScript}
                        setDataValue={setDataValue}
                        fullMedicationList={fullMedicationList}
                        selectedMedStrength={ALLData['selectedMedStrength']}
                        reset={reset}
                        ALLData={ALLData}
                    /> 

                    <WriteScript
                        ALLData={ALLData}
                        setDataValue={setDataValue}
                        disabled={disableScript}
                        DosageType={DosageType}
                    />

                    <AssignPrescription
                        selectedCateg={selectedCateg}
                        setselectedCateg={setselectedCateg}
                        selectedDx = {selectedDx}
                        setselectedDx={setselectedDx}
                        ThisPatient={ThisPatient}
                    /> 
                </div> 
                <div
                    style={{
                        height:'30%',
                        marginTop:'2%',
                    }}
                    >
                    <ButtonsRow
                        AddRxToPatient={AddRxToPatient}
                        CloseBox={CloseBox}
                        ResetValue={ResetValue}
                        Editing={Editing}
                        RemoveRx={RemoveRx}
                    />
                </div>
            </div>
        </div>
    )
}