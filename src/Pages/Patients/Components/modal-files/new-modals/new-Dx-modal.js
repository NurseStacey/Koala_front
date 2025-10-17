import '../../../../../../src/CSS/modal.css'
import '../../../../../../src/CSS/general.css'
import DxBox from '../dx-modal-pieces/dx-box'
import DxDetails from '../dx-modal-pieces/dx-details'
import MedProbSelect from '../dx-modal-pieces/med-prob-select'
import PrescriptionsBox from '../dx-modal-pieces/dx-prescriptions'
import SelectedCodeBox from '../dx-modal-pieces/dx-selected'

import AxiosInstance from '../../../../../utils/Axios'
import {useState, useEffect} from 'react'

import ButtonsRow from './new-Dx-modal/button'

export default function DxNewModel({
    openSwitch, 
    onClose, 
    ThisPatient,
    ReloadPatient,
    CodeToEdit,
    setCodeToEdit,
    CategToEdit,     
  }){


    const [local_medCategs, setlocal_medCategs]=useState([])
    const [medCategsAddTo, setmedCategsAddTo]= useState([])    
    const [currentDxCodes, setcurrentDxCodes]=useState([])
    const [SelectedCode, setSelectedCode]=useState(0)
    const [SelectedCodeText, setSelectedCodeText] = useState('')    
    const [CodeHistory, setCodeHistory]=useState([])
    const [TheseCodes, setTheseCodes]=useState([])
    const [searchableCode,setsearchableCode]=useState('')
    const [whichCode, setWhichCode]=useState({id:0})
    const [detail_text, set_detail_text]=useState('')    
    const [currentCodes, setcurrentCodes]=useState([])

    const Reset =() =>{
        setWhichCode({id:0})
        setCodeHistory([])
    }

    const CodeSearch = () => {
        AxiosInstance.get(`medical/code_search/${searchableCode}`).then((res) =>{
            //console.log(res.data['code_history'])
            if (res.data['Error']=='Code Not Found') {
                alert('Code entered not valied')
            } else {
                    setCodeHistory([res.data['code_history']])
                    setTheseCodes(res.data['these_codes'])
                }
            })        
    }

    const local_medCategsClicked = (medCateg) => {

        if (CategToEdit==null) {
            //console.log(CategToEdit)
            let tempArray=[]
            local_medCategs.map((one_categ)=>{
                if (one_categ.name==medCateg)
                {
                    if (one_categ.backgroundColor=='pink') {
                        one_categ.backgroundColor ='white'
                        
                        setmedCategsAddTo(medCategsAddTo.filter((one_categID=>one_categID !== one_categ.id)))
                    } else {
                        one_categ.backgroundColor='pink'
                        setmedCategsAddTo([...medCategsAddTo, one_categ.id])
                    }
                }
                tempArray.push(one_categ)
            })
            setlocal_medCategs(tempArray)
        }
    }

    const handleChange_searchableCode=(event)=>{
        setsearchableCode(event.target.value)
    }

    const RangeOrCodeSelected = (thisCode) =>{
        //console.log(CodeHistory)
        let newRecord = [...TheseCodes,...CodeHistory].find(oneCode => oneCode.id==thisCode)

        if (!newRecord.is_billable) {
            if (CodeHistory.includes(newRecord)) {
                setCodeHistory(CodeHistory.filter(oneCode =>(oneCode.id<=newRecord.id)))
            } else {
                setSelectedCode(newRecord.id)
                setCodeHistory([...CodeHistory, newRecord])
            }
            GetTheseCodes(thisCode)
        } else {
            if (currentDxCodes.includes(newRecord.id)) alert('Code already in chart')
                else{

                setSelectedCode(newRecord.id)
                setSelectedCodeText(newRecord.description)
                }
        }        
    }

    const GetTheseCodes = (thisCode)=>{
        
        AxiosInstance.get(`medical/get_diagnosis_codes/${thisCode}`).then((res) =>{
            setTheseCodes(res.data['these_codes'])
            })
    }

    const Test = ()=>{
        console.log(medCategsAddTo)
    }

    const Createlocal_medCategs=()=>{
        let tempArray = []
        ThisPatient['medical_problems'].map((one_category)=>{
            let backgroundColor = 'white'

            if (one_category.name == CategToEdit) backgroundColor='pink'

            tempArray.push({
                backgroundColor:'white',
                name:one_category.problem_name,
                id:one_category.problem_id       
            })
        })
        setlocal_medCategs(tempArray)
    }
    useEffect(()=>{
        //for the list box - local_medCategs
        Createlocal_medCategs()

        let tempArray=[]
        ThisPatient['dx_codes'].map((one_code)=>tempArray.push(one_code.dx_code_id))
        setcurrentDxCodes(tempArray)

    },[ThisPatient])

    useEffect(() => {
            
        GetTheseCodes(whichCode.id)
            
        },[whichCode])

    useEffect(()=>{
        //console.log(CodeToEdit)
        //console.log(ThisPatient)
        if (CodeToEdit !== null){
            set_detail_text(CodeToEdit.details)
        }
    },[CodeToEdit])

    const AddDxToPatient = () => {
        
        let continueThis=true

        if (CodeToEdit.id !== SelectedCode) {
            currentCodes.map((oneCode)=>{
                if (oneCode.dx_code_id == SelectedCode) {
                    alert('Code already in chart')
                    continueThis=false
                }
            })
        }

        if (!continueThis) return

        let dataToSend = {
            patient:ThisPatient['basic_data'].id,
            id:CodeToEdit.id,
            dx_code:SelectedCode,
            details:detail_text,
            medProb:medCategsAddTo
        }        
        if (CodeToEdit == null) 
            try{
                AxiosInstance.post(`patients/diagnosis_code/`, dataToSend).then((res) =>{

                })
            } catch(error){console.log(error)} 
            else                 
                try{
                    
                    AxiosInstance.patch(`patients/diagnosis_code/`, dataToSend).then((res) =>{
                        console.log(res)

                    })
                } catch(error){console.log(error)}                

        ReloadPatient()
        CloseBox()
    }

    const CloseBox = () =>{
        setmedCategsAddTo([])
        set_detail_text('')
        setCodeToEdit(null)
        Createlocal_medCategs()
        Reset()
        onClose()
    }

    if (openSwitch == '') return null

    let thisTitle = 'New Diagnosis'
    let submitButtonText = 'Add Diagnosis'
    if (openSwitch=='edit') {
        thisTitle='Edit ' + CodeToEdit.description
        submitButtonText='Update Diagnosis'

    }
    return (
        <div
            className='OVERLAY_STYLES'>
            <div
                className='MODAL_STYLE_BIG'
            >
                <div className='TITLE_STYLE_30'>{thisTitle}</div> 

                    <div
                        style={{
                            display:'flex',
                            width:'100%',
                            height:'80%',                            
                        }}
                    >
                        <DxBox
                            CodeHistory={CodeHistory}
                            TheseCodes={TheseCodes}
                            RangeOrCodeSelected={RangeOrCodeSelected}
                            Reset={Reset}
                            handleChange_searchableCode={handleChange_searchableCode}
                            searchableCode={searchableCode}
                            CodeSearch={CodeSearch}
                        />
                        <div
                            style={{
                                display:'block',
                                width:'30%',
                                marginLeft:'3%',    
                                marginTop:'3%',
                            }}
                        >

                            <SelectedCodeBox
                                SelectedCodeText={SelectedCodeText}
                            />

                            <DxDetails
                                set_detail_text={set_detail_text}
                                detail_text={detail_text}
                            />

                            <PrescriptionsBox
                                PrescriptionsArray={[]}
                            />                                    
                        </div>

                        <MedProbSelect
                            medproblems={local_medCategs}
                            clickedFunction={local_medCategsClicked}
                        />                        
                    </div>

                <ButtonsRow
                    AddDxToPatient={AddDxToPatient}
                    CloseBox={CloseBox}
                    SubmitButtonText={submitButtonText}
                />
            </div>
        </div>
    )
}