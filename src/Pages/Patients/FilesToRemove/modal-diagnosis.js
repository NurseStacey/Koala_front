
import {useEffect, useState} from 'react'
import AxiosInstance from '../../../utils/Axios'
import SelectedCodeBox from '../Components/modal-files/dx-modal-pieces/dx-selected'
import DxBox from '../Components/modal-files/dx-modal-pieces/dx-box'
import DxDetails from '../Components/modal-files/dx-modal-pieces/dx-details'
import MedProbSelect from '../Components/modal-files/dx-modal-pieces/med-prob-select'
import PrescriptionsBox from '../Components/modal-files/dx-modal-pieces/dx-prescriptions'
import DxModalButtons from '../Components/modal-files/dx-modal-pieces/dx-buttons'

export default function ModalDiagnosisOLD({
    openSwitch, 
    onClose, 
    patientID,
    currentCodes,
    CodeToEdit,
    setCodeToEdit,
    ReloadPatient,
    selected_problem,
    medproblems}){

    const [searchableCode,setsearchableCode]=useState('')
    const [SubmitButtonText, setSubmitButtonText]=useState('Add Code')
    const [field_text, set_field_text]=useState('')

    const [local_medProblems, setlocal_medProblems]=useState([])
    const [local_selected_problem, setlocal_selected_problem]= useState('')
    const [disable_medProbList,setdisable_medProbList] = useState(false)

    const [whichCode, setWhichCode]=useState({id:0})
    const [TheseCodes, setTheseCodes]=useState([])
    const [CodeHistory, setCodeHistory]=useState([])
    const [SelectedCode, setSelectedCode]=useState(0)
    const [SelectedCodeText, setSelectedCodeText] = useState('')
    const [CodeToEditId, setCodeToEditId] = useState(0)

    const handleChange_searchableCode=(event)=>{
        setsearchableCode(event.target.value)
    }
    const AddCode = ()=>{

        let continueThis=true

        if (CodeToEditId !== SelectedCode) {
            currentCodes.map((oneCode)=>{
                if (oneCode.dx_code_id == SelectedCode) {
                    alert('Code already in chart')
                    continueThis=false
                }
            })
        }

        if (!continueThis) return

        if (SelectedCode !== 0) {

            let dataToSend = {
                patient:patientID,
                dx_code:SelectedCode,
                details:field_text,
                medProb:selected_problem
            }
            
            if (CodeToEdit < 1) {
                try{
                    AxiosInstance.post(`patients/diagnosis_code/`, dataToSend).then((res) =>{

                    })
                } catch(error){console.log(error)}
            } else {
                try{
                    
                    AxiosInstance.patch(`patients/one_patient/diagnosis_code/${CodeToEdit}`, dataToSend).then((res) =>{
                        console.log(res)

                    })
                } catch(error){console.log(error)}                
            }
        }
        ReloadPatient()
        CloseBox()
    }

    const CloseBox = ()=>{
        setWhichCode({id:0})
        setCodeHistory([])
        setSelectedCodeText('')
        setSubmitButtonText('Add Code')
        setCodeToEdit(0)
        onClose()
    }


    const RangeOrCodeSelected = (thisCode) =>{
        console.log(CodeHistory)
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
            setSelectedCode(newRecord.id)
            setSelectedCodeText(newRecord.description)
        }
    }
   
    const test = () =>{
        console.log(disable_medProbList)
    }

    const CodeSearch = () => {
        AxiosInstance.get(`medical/code_search/${searchableCode}`).then((res) =>{
            console.log(res.data['code_history'])
            if (res.data['Error']=='Code Not Found') {
                alert('Code entered not valied')
            } else {
                    setCodeHistory([res.data['code_history']])
                    setTheseCodes(res.data['these_codes'])
                }
            })
        }       

    const GetTheseCodes = (thisCode)=>{
        
        AxiosInstance.get(`medical/get_diagnosis_codes/${thisCode}`).then((res) =>{
            //console.log(res.data)
            setTheseCodes(res.data['these_codes'])
            })
    }

    const Reset =() =>{
        setWhichCode({id:0})
        setCodeHistory([])
        GetTheseCodes(0)
    }

    useEffect(()=>{
        
        setdisable_medProbList(selected_problem!=='') 
        setlocal_selected_problem(selected_problem.problem_name)
        ChangeBackgroundColor(selected_problem.problem_name,local_medProblems, setlocal_medProblems)
    },[selected_problem])


    const ChangeBackgroundColor = (this_problem, which, setWhich) =>{
        let new_prob_list = []

        which.map((one_problem)=>{
            if (one_problem.problem_name == this_problem) {
                let new_color='white'
                if (one_problem.backgroundColor=='white') new_color='pink'
                new_prob_list.push(                        
                    {
                        problem_name:one_problem.problem_name,
                        id:one_problem.id,
                        backgroundColor:new_color
                    })
            } else {
                   new_prob_list.push(                        {
                        problem_name:one_problem.problem_name,
                        id:one_problem.id,
                        backgroundColor:'white'
                    })             
            }
        })
        setWhich(new_prob_list)        
    }    
 
    useEffect(() =>{
        let tempArray = []
        medproblems.map((one_prob)=>{
            let backgroundColor = 'white'

            if (one_prob.problem_name == local_selected_problem) backgroundColor='pink'

            tempArray.push({
                backgroundColor:'white',
                problem_name:one_prob.problem_name,
                id:one_prob.id       
            })
        })
        setlocal_medProblems(tempArray)

    },[medproblems])

    useEffect(() => {
            
        GetTheseCodes(whichCode.id)
            
        },[whichCode])


    useEffect(() =>{
        if (CodeToEdit>0) {
            
            let thisRecord = currentCodes.find(oneCode => oneCode.id==CodeToEdit)
              
            setSelectedCode(thisRecord.dx_code_id)
            setSelectedCodeText(thisRecord.description)
            setCodeHistory(thisRecord.code_history)  
            set_field_text(thisRecord.details)
            GetTheseCodes(thisRecord.parent)
            setSubmitButtonText('Update Code')
            setCodeToEditId(thisRecord.dx_code_id)
        }             

    },[CodeToEdit])

    const TITLE_STYLE = {
        fontSize:'20px',
        font:'arial',
        backgroundColor:'pink',
        textAlign:'center'
    }

    if  (!openSwitch['DxOpen']) return null

    return (
        <div
            className='OVERLAY_STYLES'>
            <div
                className='MODAL_STYLE_BIG'
            >
                <div
                    style={{
                        display:'block',
                        width:'100%',
                        height:'100%'                        
                    }}
                    >
                    <div style={TITLE_STYLE}>Diagnosis Code List</div> 
                    <div
                        style={{
                            display:'flex',
                            width:'100%',
                            height:'85%',                            
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
                                        set_field_text={set_field_text}
                                        field_text={field_text}
                                    />

                                    <PrescriptionsBox
                                        PrescriptionsArray={[]}
                                    />
                            </div>

                            <MedProbSelect
                                medproblems={local_medProblems}
                                clickedFunction={local_medProblems}
                            />
                    
                        </div>

                        <DxModalButtons
                            test={test}
                            AddCode={AddCode}
                            SubmitButtonText={SubmitButtonText}
                            CloseBox={CloseBox}
                        />

                </div>             
            </div>
        </div>
    )
}