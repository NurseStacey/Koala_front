import My_Button from '../../../../../Components/My-Button'
import {useEffect, useState} from 'react'
import AxiosInstance from '../../../../../utils/Axios'
import SelectedCodeBox from '../dx-modal-pieces/dx-selected'
import DxBox from '../dx-modal-pieces/dx-box'
import DxDetails from '../dx-modal-pieces/dx-details'
import MedProbSelect from '../dx-modal-pieces/med-prob-select'
import PrescriptionsBox from '../dx-modal-pieces/dx-prescriptions'

export default function ModalDiagnosis({
    open, 
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

    const MODAL_STYLE  ={
        position: 'fixed',
        top:'10%',
        left: '10%',
        width:'90%',
        height:'90%',
        transform: 'translate(-5%,-5%)',
        backgroundColor:'#FFF',
        zIndex:1000,
    }

    const OVERLAY_STYLES = {
        position:'fixed',
        top:0,
        left:0,
        right:0,
        bottom:0,
        backgroundColor:'rgba(0,0,0,.7)',
        zIndex:1000
    }

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
            
            if (CodeToEdit == 0) {
                try{
                    AxiosInstance.post(`patients/diagnosis_code/`, dataToSend).then((res) =>{
                        //console.log(res)
                        // navigate('/One_Facility_Maintanance', {state:{nursing_home_name:Name}})
                    })
                } catch(error){console.log(error)}
            } else {
                try{
                    
                    AxiosInstance.patch(`patients/one_patient/diagnosis_code/${CodeToEdit}`, dataToSend).then((res) =>{
                        console.log(res)
                        // navigate('/One_Facility_Maintanance', {state:{nursing_home_name:Name}})
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
        //console.log(thisCode)

        
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
        console.log(this_problem)
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

    const medProblemClicked = (this_problem) => {
        
        ChangeBackgroundColor(this_problem, local_medProblems, setlocal_medProblems)
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

    if  (!open) return null

    return (
        <div
            style={OVERLAY_STYLES}>
            <div
                style={MODAL_STYLE}
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
                        <div
                            style={{
                                marginTop:'3%',
                                marginLeft:'3%',
                                width:'40%',
                                height:'90%',
                                border:'1px solid black',
                                display:'block',
                                padding:'3px',
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
                            </div>
                            <div
                                style={{
                                    display:'block',
                                    width:'30%',
                                    marginLeft:'3%',    
                                    marginTop:'3%',
                                }}
                            >
                                <div
                                    style={{
                                        border:'1px solid black',
                                        marginBottom:'5%',
                                        height:'20%',

                                    }}>                       
                                    <SelectedCodeBox
                                        SelectedCodeText={SelectedCodeText}
                                    />
                                </div>
                                <div
                                    style={{                          
                                                                        
                                        height:'30%',
                                    }}>
                                    <DxDetails
                                        set_field_text={set_field_text}
                                        field_text={field_text}
                                    />
                                </div>
                                <div
                                    style={{                          
                                                                      
                                        height:'30%',
                                    }}>
                                    <PrescriptionsBox
                                        PrescriptionsArray={[]}
                                    />
                                </div>
                                
                            </div>
                            <div
                                style={{
                                    width:'15%',
                                    height:'50%',
                                    marginLeft:'3%',    
                                    marginTop:'3%',                                    
                                    border:'1px solid black'
                                }}
                            >
                                <MedProbSelect
                                    medproblems={local_medProblems}
                                    disable_medProbList={disable_medProbList}
                                    clickedFunction={medProblemClicked}
                                    doubleclickedFunction={null}
                                />
                            </div>                            
                        </div>

                    <div
                        style={{
                            height:'10%',
                            width:'100%',
                            display:'flex',
                            
                            justifyContent:'space-around'
                        }}
                        >
                         <My_Button
                            The_Text={SubmitButtonText}
                            Width='90px'
                            Height='45px'
                            On_Click={AddCode}
                            FontSize='18px'
                        />           
                        <button onClick={test}>test</button>                 
                         <My_Button
                            The_Text={'Cancel'}
                            Width='90px'
                            Height='45px'
                            On_Click={CloseBox}
                            FontSize='18px'
                        />   
                    </div>
                </div>             
            </div>
        </div>
    )
}