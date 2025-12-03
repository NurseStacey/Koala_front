import AxiosInstance from '../../../utils/Axios'
import {useState} from 'react'

export default function PatientOperations({
    ThisPatient
}) 
{

    const [TestingDate, setTestingDate]=useState('')
    const test = () =>{
        console.log(ThisPatient)
    }
    const setDate = () =>{
        AxiosInstance.post(`patients/set_date/`, {'date':TestingDate}).then((res) =>{
                    
                })
            }

    return (
    
    <div
        style={{
            border:'1px solid black',
            height:'35px',
            width:'100%',
            backgroundColor:'#C0B466',
            display:'flex',
            flexDirection:'row'
        }}
    >
        <button onClick={setDate}>Set Date</button>
        <input 
            type='text'
            onChange={(e)=>setTestingDate(e.target.value)}
            >
        
        </input>
        <div>Current Date: {ThisPatient['testing_date']}</div>     
        <button onClick={test}>test</button>    
    </div>
    )
}