import My_Button from '../../../Components/My-Button'
import MyListBox from '../../../Components/My-Listbox'
import My_List from '../../../Components/My-List'
import ChangeBackgroundColor from '../../../Components/Change-Background-Color-for-List'

import {useEffect, useState} from 'react'
import AxiosInstance from '../../../utils/Axios'
import '../../../../../../src/CSS/modal.css'
import '../../../../../../src/CSS/general.css'

export default function CategNewModelOld({
    openSwitch, 
    onClose, 
    patientID,
    ReloadPatient,
    ProblemToEdit
  }){

    const [NewProblemText, setNewProblemText]=useState('')
    const [AllPossibleProbs, setAllPossibleProbs]=useState([])
    const [ProblemsToAdd, setProblemsToAdd]=useState([])
    const [PatientsCurrentProbs,setPatientsCurrentProbs] = useState([])

    const ONE_COLUMN_STYLE ={
                                    marginRight:'30px',
                                    height:'100%',    
                                    width:'20%',
                                }

    const getCurrentProblems = () =>{
        try{
            AxiosInstance.get(`patients/one_patient/medical_problems/${patientID}`).then((res) =>{
                
                let these_problems = []
                res.data['all_probs'].map((one_problem)=>these_problems.push({name:one_problem}))
                //console.log(these_problems)

                setPatientsCurrentProbs(these_problems.sort((a,b)=>a.name.toLowerCase().localeCompare(b.name.toLowerCase())))
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
                    name:one_problem['problem_name'],
                    id:one_problem['id'],
                    backgroundColor:'white'}
                ))
                
                setAllPossibleProbs(all_problems.sort((a,b)=>a.name.toLowerCase().localeCompare(b.name.toLowerCase())))
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
            name:one_problem['name'],
            id:one_problem['id'],
            backgroundColor:'white'}
        ))
        
        console.log(all_problems)
        setAllPossibleProbs(all_problems.sort((a,b)=>a.name.toLowerCase().localeCompare(b.name.toLowerCase())))
    }
    const CloseBox = ()=>{

        setProblemsToAdd([])
        ResetAllProblems()
        ReloadPatient()
        setProblemToEdit(0)
        onClose()
    }

    const AddMedProb = (problem_name) =>
    {
        let this_problem = AllPossibleProbs.find((one_element)=>one_element.name==problem_name)
        setProblemsToAdd([...ProblemsToAdd, {name:this_problem.name, id:this_problem.id,backgroundColor:'white' }])     
    }

    const RemoveMedProb = (problem_name) =>
    {
        setProblemsToAdd(ProblemsToAdd.filter((one_problem)=>one_problem.name!==problem_name))
    }    

    const test = () =>{
       console.log(AllPossibleProbs)
    
    }
   
    const problemAddedSelected = (this_problem) => {
        
        ChangeBackgroundColor(this_problem, ProblemsToAdd, setProblemsToAdd)
    }

    const problemSelected = (this_problem) => {
        
        ChangeBackgroundColor(this_problem, AllPossibleProbs, setAllPossibleProbs)
    }

    useEffect(() => {
        console.log(ProblemToEdit)
        alert('hello')
    },[ProblemToEdit])

    if (openSwitch.CategNewOpen == false) return null

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
                        height:'80%',
                        border:'1px solid black',
                    }}
                    >
                    <div className='TITLE_STYLE_30'>Add New Problem</div> 
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
                                    whichValue='name'
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
                                        whichValue='name'
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
                    <button onClick={test}>testnew</button> 
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