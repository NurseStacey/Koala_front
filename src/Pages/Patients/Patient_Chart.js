import Page_Header from '../../Components/page_header'
import {useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import {useEffect, useState} from 'react'
import AxiosInstance from '../../utils/Axios'
import Patient_Header from './Components/patient_header'

import Patient_Location_Modals from './Patient_Chart_Pieces/Patient_Location_Modals'
import Modal_Single_Text_Box from './Components/modal single_text_box'
import Patient_Charts_Histories from './Patient_Chart_Pieces//Histories'

export default function Patient_Chart() {

    const [Patient_Location_Mod, setPatient_Location_Mod] = useState('None')
    const [Single_Text_Mod,setSingle_Text_Mod]=useState(false)
    const [single_text_modal_title,setsingle_text_modal_title ]=useState('')
    const [single_text_field_name,setsingle_text_field_name]=useState('first_name')
    const location = useLocation()
    const [Patient_Age, set_Patient_Age]=useState(0)
    const [This_Patient, set_This_Patient]=useState({
        first_name:'',
        last_name:'',
        id:0,
        Date_Of_Birth:'1900-01-01',
        med_bio:''
    })

    const [Patient_Location, set_Patient_Location] = useState({
        bed:'',
        unit:'',
        facility:''
    })

    const Update_Location = (New_Bed)=> {
        
        set_Patient_Location({
            bed:New_Bed.bed,
            unit:New_Bed.unit,
            facility:New_Bed.facility    
        })
    }
    const Update_Single_Text_Mod = (field_name, title) =>
    {
        setSingle_Text_Mod(true)
        setsingle_text_field_name(field_name)
        setsingle_text_modal_title(title)
    }

    useEffect(() => {
        
        AxiosInstance.get(`patients/one_patient/${location.state?.patient_id}`).then((res) =>{
            set_This_Patient(res.data)
            let year=Number(res.data['Date_Of_Birth'].slice(0,4))
            let month=Number(res.data['Date_Of_Birth'].slice(5,7))
            let day=Number(res.data['Date_Of_Birth'].slice(8,10))

            let today=new Date()
            let today_values={
                day:today.getDate(),
                month:today.getMonth()+1,
                year:today.getFullYear()
            }

            let age = today_values['year']-year
            if (month>today_values['month']) {
                age = age-1
            } if (month == today_values['month'] && day>today_values['day']) {
                age=age-1
            }
            set_Patient_Age(age)

            if (res.data['bed'] !== null) {
                
                AxiosInstance.get(`nursinghome/Get_This_Bed/${location.state?.patient_id}`).then((bed_res) =>{
                    set_Patient_Location(bed_res.data)
                    })        
                }
            })      
        },[])

    const Test_This = ()=>{
        console.log(Patient_Location)
    }

    return (
        <div>

            <Page_Header
                The_Header={This_Patient.last_name + ', ' + This_Patient.first_name}
                
            />
            <Patient_Header
                setIsOpen = {setPatient_Location_Mod}
                Patient_Location = {Patient_Location}
                Patient_Age = {Patient_Age}
                Date_Of_Birth = {This_Patient['Date_Of_Birth'].slice(0,10)}
            />
           
           <Patient_Location_Modals
                Open={Patient_Location_Mod}
                setPatient_Location_Mod={setPatient_Location_Mod}
                Update_Location={Update_Location}                
                this_patient_id={This_Patient.id}
           />

           <Modal_Single_Text_Box
                open={Single_Text_Mod}
                onClose={()=>setSingle_Text_Mod(false)}
                field_name={single_text_field_name}
                title={single_text_modal_title}
                this_patient={This_Patient}
                onUpdate = {Update_Single_Text_Mod}
           />
      
            <Patient_Charts_Histories
                Open={Update_Single_Text_Mod}
                This_Patient={This_Patient}
            />
          
{/* 
             <button
              onClick={Test_This}>Test</button> */}
            </div> 
        
        
    )
}