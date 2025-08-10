import Menu_Header from '../../Components/menu_header'
import Page_Header from '../../Components/page_header'
import One_Form from '../../Components/One_Form'
import AxiosInstance from '../../utils/Axios'

import {useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'

import {NURSING_HOME_FIELDS} from './Nursing_Home_Form_Fields'

export default function New_Nursing_Home() {
    const navigate = useNavigate()

    const [The_Data, set_The_Data]=useState([])
    useEffect(() => {

        let data=[]
        NURSING_HOME_FIELDS.map(one_field =>{
            data.push({
                'value':'',
                'name':one_field.field_name,
                'label':one_field.field_label,
                'type':one_field.field_type,
                'order':one_field.order,
                'options':[]
            })
        })

        set_The_Data(data)
    },[])

    const set_value = (name, value)=>{
       
        let this_element = The_Data.find(one_element=>one_element.name == name)
        this_element.value=value
        let data = The_Data.filter(one_element=>one_element.name !== name)
        data.push(this_element)

        set_The_Data([...data].sort((a,b)=>a.order-b.order))
    }

    const Create_Nursing_Home =() =>{
        let data_to_send = {}

        The_Data.map(one_field =>{
            data_to_send[one_field.name]=one_field.value
        })
      
        try{
            AxiosInstance.post(`nursinghome/Nursing_Home/`, data_to_send).then((res) =>{
                navigate('/One_Facility_Maintanance', {state:{nursing_home_name:The_Data.name}})
            })
        } catch(error){console.log(error)}
    }

    return(
        <div>
            <Page_Header
                The_Header='New Nursing Home'
            />

            <Menu_Header/>

            <One_Form
                The_Fields={The_Data}
                set_value={set_value}
                Button_Text='Create Nursing Home'
                Submit_Button={Create_Nursing_Home}
            />
        </div>        
    )
}

