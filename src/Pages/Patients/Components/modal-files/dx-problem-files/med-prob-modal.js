import My_Button from '../../../../../Components/My-Button'
import MyListBox from '../../../../../Components/My-Listbox'
import My_List from '../../../../../Components/My-List'



import {useEffect, useState} from 'react'
import AxiosInstance from '../../../../../utils/Axios'

export default function MedicalProblemModel({
    open, 
    onClose, 
    patientID,
    ReloadPatient
  }){

    const [NewProblemText, setNewProblemText]=useState('')
    const [AllPossibleProbs, setAllPossibleProbs]=useState([])
    const [ProblemsToAdd, setProblemsToAdd]=useState([])
    const [PatientsCurrentProbs,setPatientsCurrentProbs] = useState([])

    const MODAL_STYLE  ={
        position: 'fixed',
        top:'10%',
        left: '10%',
        width:'90%',
        height:'90%',
        transform: 'translate(-5%,-5%)',
        backgroundColor:'#FFF',
        zIndex:900,
    }

    const OVERLAY_STYLES = {
        position:'fixed',
        top:0,
        left:0,
        right:0,
        bottom:0,
        backgroundColor:'rgba(0,0,0,.7)',
        zIndex:900
    }

    const ONE_COLUMN_STYLE ={
                                    marginRight:'30px',
                                    height:'100%',    
                                    width:'20%',
                                }

    const getCurrentProblems = () =>{
        try{
            AxiosInstance.get(`patients/one_patient/medical_problems/${patientID}`).then((res) =>{
                
                let these_problems = []
                res.data['all_probs'].map((one_problem)=>these_problems.push({problem_name:one_problem}))
                //console.log(these_problems)

                setPatientsCurrentProbs(these_problems.sort((a,b)=>a.problem_name.toLowerCase().localeCompare(b.problem_name.toLowerCase())))
            })
        }catch(error){console.log(error)}    
    }                            
    useEffect(() => {
        
        try{

            AxiosInstance.get(`medical/medical_problems/`).then((res) =>{
                CreateAllPossibleProbs(res.data)
                
            })
        } catch(error){console.log(error)}        
    
        getCurrentProblems()
            
        },[])    

    
    const CreateAllPossibleProbs = (data) =>{

                let all_problems = []
                data.map((one_problem)=>all_problems.push({
                    problem_name:one_problem['problem_name'],
                    id:one_problem['id'],
                    backgroundColor:'white'}
                ))
                
                setAllPossibleProbs(all_problems.sort((a,b)=>a.problem_name.toLowerCase().localeCompare(b.problem_name.toLowerCase())))
    }
    const AddProblemToPatient = ()=>{
        let data_to_send=[]
        ProblemsToAdd.map((one_problem)=>{
            let one_record = {
                patient:patientID,
                problem:one_problem.id
            }
            data_to_send.push(one_record)
            
    })
        
        try{
            AxiosInstance.post(`patients/add_medical_problems/`, data_to_send).then((res) =>{
                getCurrentProblems() 
            })
        } catch(error){console.log(error)}   
            
        CloseBox()
    }

    const NewProblem = ()=>{

        let ProblemText = NewProblemText.trim()
        
        ProblemText = ProblemText[0].toUpperCase() + ProblemText.slice(1)
        if (AllPossibleProbs.includes(ProblemText) ) {
            alert('Problem has already been added')
        } else {
            try{
                
                AxiosInstance.post(`medical/medical_problems/`, {problem_name:ProblemText}).then((res) =>{
                    
                    AxiosInstance.get(`medical/medical_problems/`).then((res) =>{
                    CreateAllPossibleProbs(res.data)
                })
                })
            } catch(error){console.log(error)}
        }
    }

    const ResetAllProblems = () =>{
        let all_problems = []
        AllPossibleProbs.map((one_problem)=>all_problems.push({
            problem_name:one_problem['problem_name'],
            id:one_problem['id'],
            backgroundColor:'white'}
        ))
        
        setAllPossibleProbs(all_problems.sort((a,b)=>a.problem_name.toLowerCase().localeCompare(b.problem_name.toLowerCase())))
    }
    const CloseBox = ()=>{

        setProblemsToAdd([])
        ResetAllProblems()
        ReloadPatient()
        onClose()
    }

    const AddMedProb = (problem_name) =>
    {
        let this_problem = AllPossibleProbs.find((one_element)=>one_element.problem_name==problem_name)
        setProblemsToAdd([...ProblemsToAdd, {problem_name:this_problem.problem_name, id:this_problem.id,backgroundColor:'white' }])     
    }

    const RemoveMedProb = (problem_name) =>
    {
        setProblemsToAdd(ProblemsToAdd.filter((one_problem)=>one_problem.problem_name!==problem_name))
    }    

    const test = () =>{
        console.log(AllPossibleProbs)
        console.log(ProblemsToAdd)
    }
   
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
    const problemAddedSelected = (this_problem) => {
        ChangeBackgroundColor(this_problem, ProblemsToAdd, setProblemsToAdd)
    }

    const problemSelected = (this_problem) => {
        
        ChangeBackgroundColor(this_problem, AllPossibleProbs, setAllPossibleProbs)
    }

    const TITLE_STYLE = {
        fontSize:'30px',
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
                        height:'80%',
                        border:'1px solid black',
                    }}
                    >
                    <div style={TITLE_STYLE}>Add New Problem</div> 
                    <div
                        style={{
                            display:'flex',
                            justifyContent:'space-evenly',
                            height:'80%',
                            margin:'3%'  
                        }}
                        >
                 
                        <div 
                            style={ONE_COLUMN_STYLE}
                        >
                            <div
                                style={{
                                    display:'flex',
                                    font:'arial',
                                    fontSize:'20px',
                                    marginLeft:'5px',
                                    justifyContent:'center',
                                    // marginTop:'20px',
                                    height:'15%'
                                }}
                                >                                    
                                <div
                                    style={{marginRight:'3px', width:'200px'}}>
                                    <input
                                        type="text"
                                        value={NewProblemText}
                                        onChange={(e)=>setNewProblemText(e.target.value)}
                                    />
                                </div>
                        
                                <div
                                    style={{
                                        marginLeft:'3px',
                                        }}>
                                    <My_Button
                                        The_Text='Create New Problem'
                                        Width='90px'
                                        Height='45px'
                                        On_Click={NewProblem}
                                        FontSize='18px'
                                    />           
                                </div>
                            </div>
                    
                            <div
                                style={{
                                    height:'85%',
                                    }}>                       
                                                        
                                <MyListBox
                                    listArray={AllPossibleProbs}

                                    whichValue='problem_name'
                                    clickedFunction={problemSelected}
                                    doubleclickedFunction={AddMedProb}
                                    title='Medical Problem Available'
                                />
                            </div>
                        </div>
                             
                             
                        <div 
                            style={ONE_COLUMN_STYLE}
                        >
                            <div
                                style={{
                                    height:'100%',
                                    
                                    }}>
                                <div
                                    style={{
                                        height:'15%'
                                    }}
                                
                                    >
                                </div>
                                <div
                                    style={{
                                        height:'85%'
                                    }}
                                
                                    >                                                                   
                                    <MyListBox
                                        listArray={PatientsCurrentProbs}
                                        whichValue='problem_name'
                                        clickedFunction={null}
                                        doubleclickedFunction={null}
                                        title='Current Problems for this Patient'
                                    />
                                  </div>                                                                  
                            </div>
                        </div>
                         
                        <div 
                            style={ONE_COLUMN_STYLE}
                        >
                    
                            <div
                                style={{
                                    height:'100%',
                                    
                                    }}>                       
                                <div
                                    style={{
                                        height:'15%'
                                    }}
                                
                                    >
                                </div>     
                                <div
                                    style={{
                                        height:'85%'
                                    }}
                                
                                    >                                                                   
                                    <MyListBox
                                        listArray={ProblemsToAdd}
                                        whichValue='problem_name'
                                        clickedFunction={problemAddedSelected}
                                        doubleclickedFunction={RemoveMedProb}
                                        title='Medical Problem To Add'
                                    />
                                  </div>    
                            </div>
                        </div>
                                                                                  
                    </div>

               </div>

                <div
                    style={{
                        height:'10%',
                        width:'100%',
                        display:'flex',
                        justifyContent:'space-around',
                        border:'1px solid black'
                    }}
                    >
                    <My_Button
                        The_Text='Add Problems'
                        Width='90px'
                        Height='45px'
                        On_Click={AddProblemToPatient}
                        FontSize='18px'
                    />           
                    {/* <button onClick={test}>test</button>  */}
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
    )
}