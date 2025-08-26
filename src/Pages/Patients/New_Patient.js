import {useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Menu_Header from '../../Components/menu_header'
import Page_Header from '../../Components/page_header'
import {PATIENT_FIELDS} from './Patient_Form_Fields'
import One_Form from '../../Components/One_Form'
import AxiosInstance from '../../utils/Axios'

export default function New_Patient() {

    const [The_Data, set_The_Data]=useState([])
    
    useEffect(() => {

        let data=[]
        PATIENT_FIELDS.map(one_field =>{
            data.push({
                'value':one_field.value,
                'name':one_field.field_name,
                'label':one_field.field_label,
                'type':one_field.field_type,
                'order':one_field.order,
                'options':one_field.options
            })
        })

        set_The_Data(data)
    },[])     


    const set_value = (name, value)=>{
       
        let this_element = The_Data.find(one_element=>one_element.name == name)
        this_element.value=value
        let data = The_Data.filter(one_element=>one_element.name !== name)
        data.push(this_element)
        //console.log(data)
        set_The_Data([...data].sort((a,b)=>a.order-b.order))
    }    

    const Create_Patient =() =>{
        
        let data_to_send = {}

        The_Data.map(one_field =>{
            data_to_send[one_field.name]=one_field.value
        })

        console.log(data_to_send)
        try{
            AxiosInstance.post(`patients/patients/`, data_to_send).then((res) =>{
                console.log(res)
                // navigate('/One_Facility_Maintanance', {state:{nursing_home_name:Name}})
            })
        } catch(error){console.log(error)}
    }

    return(
        <div>
        
            <Page_Header
                The_Header='New Patient'
            />
            <Menu_Header></Menu_Header>

               <One_Form
                   The_Fields={The_Data}
                   set_value={set_value}
                   Button_Text='Create Patient'
                   Submit_Button={Create_Patient}
                   showButton = {true}
               />
        </div>
    )

}