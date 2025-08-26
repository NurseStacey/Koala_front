import {useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Menu_Header from '../../Components/menu_header'
import Page_Header from '../../Components/page_header'
import My_Button from '../../Components/My_Button'
import AxiosInstance from '../../utils/Axios'

export default function Patient_Maintanance() {
    const navigate = useNavigate()

    const [all_patients, set_all_patients]=useState([])

    const New_Patient =()=>{
        navigate('/New_Patient')
    }

    const Patient_Selected=(patient_id)=>{
        //console.log(patient_id)
        navigate('/patient_chart', {state:{patient_id:patient_id}})
    }

    useEffect(() => {
        
        try{
            AxiosInstance.get(`patients/patients/?get_all=True`).then((res) =>{
                
                let array=[]
                res.data.map(one_patient =>{
                    let name = one_patient.last_name + ', ' + one_patient.first_name
                    array.push({
                        'name':name,
                        'id':one_patient.id
                    })
                })
                
                set_all_patients(array)
              //  console.log(res)

            })
        } catch(error){console.log(error)}
    },[])    
    return (
        <div>
        
            <Page_Header
                The_Header='Patient Maintance'
            />
            <Menu_Header></Menu_Header>

            <div
                style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'spaceBetween',
                    border:'black 1px solid',
                    marginTop:'1%',
                    marginLeft:'5%',
                    marginRight:'5%'
                }}
            >
                <My_Button
                    The_Text='New Patient'
                    Width='150px'
                    On_Click={New_Patient}
                    FontSize='20px'
                />
            </div>

            <div
                style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'spaceBetween',
                    border:'black 1px solid',
                    marginTop:'1%',
                    marginLeft:'5%',
                    marginRight:'5%'
                }}
            >
                {all_patients.map(one_patient=>
                    
                    <div 
                        key={one_patient.id}
                        style={{
                            margin:'15px'
                        }}>
                        <My_Button
                            The_Text={one_patient.name}
                            Width='150px'
                            Height='50px'
                            On_Click={() =>Patient_Selected(one_patient.id)}
                            FontSize='20px'
                        />                        
                    </div>
                )}
            </div>
        </div>

  
    )
}