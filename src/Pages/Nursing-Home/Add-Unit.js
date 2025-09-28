import Page_Header from '../../Components/page-header'
import Menu_Header from '../../Components/menu-header'
import {useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import {useEffect, useState} from 'react'
import AxiosInstance from '../../utils/Axios'
import My_Button from '../../Components/My-Button'
import {ONE_UNIT_FIELDS} from './one-unit-fields'
import One_Form from '../../Components/One-Form'

export default function Add_Unit() {
    const navigate = useNavigate()
    const location = useLocation()
    const [This_Facility, set_This_Facility] = useState()

    const[Unit_Beds_Fields, setUnit_Beds_Fields]=useState([])
    const[All_Units, set_All_Units]=useState([])

    const edit_this_unit = (unit_name)=>{
        
        navigate('/edit_unit', {state:{
            nursing_home_name:This_Facility,
            unit:unit_name}})
    }

    const Add_Unit = async () => {

        let data_to_send = {}

        Unit_Beds_Fields.map(one_field =>{
            data_to_send[one_field.name]=one_field.value
        })
        data_to_send['facility']=This_Facility

        console.log(data_to_send)
        try{
            await AxiosInstance.post(`nursinghome/Units_And_Beds/`, data_to_send).then(
            navigate('/edit_unit', {state:{
                nursing_home_name:This_Facility,
                unit:data_to_send['name']
            }})
            )
        } catch(error){console.log(error)}
    }

    const set_value = (name, value)=>{
       
        let this_element = Unit_Beds_Fields.find(one_element=>one_element.name == name)
        this_element.value=value
        let data = Unit_Beds_Fields.filter(one_element=>one_element.name !== name)
        data.push(this_element)

        setUnit_Beds_Fields([...data].sort((a,b)=>a.order-b.order))
    }

    useEffect(() => {

        set_This_Facility( location.state?.nursing_home_name)
        let the_units=[]
        const get_data=async()=>{

            try{
                const res = await AxiosInstance.get(`nursinghome/Facility_Units/?facility_name=${location.state?.nursing_home_name}`)
                set_All_Units(res.data)

            } catch(error){console.log(error)}
            
        }
        get_data()


        let data=[]
        ONE_UNIT_FIELDS.map(one_field =>{
            data.push({
                'value':'',
                'name':one_field.field_name,
                'label':one_field.field_label,
                'type':one_field.field_type,
                'order':one_field.order,
                'options':[]
            })
        })

        setUnit_Beds_Fields(data)        

        },[])
    
    const return_facility_maintenance = () => {
        navigate('/One_Facility_Maintanance', {state:{nursing_home_name:This_Facility}})
    }

    return(
        <div>
            <Page_Header
                The_Header={'Edit Unit Page ' + This_Facility}
            />
            <Menu_Header></Menu_Header>

            <div
                style={{
                    display:'flex',
                    justifyContent:'center'
                }}>
                <My_Button
                    The_Text= {'Return to facility maintentance page'}
                    Width='300px'
                    On_Click={return_facility_maintenance}
                    FontSize='20px'                    
            
                />
            </div>
            <div>
            
            <One_Form
                The_Fields={Unit_Beds_Fields}
                set_value={set_value}
                Button_Text='Add Unit'
                Submit_Button={Add_Unit}
                showButton={true}
            />     
            </div>

            <div
                style={{display:'block',
                    marginTop:'30px',
                    border:'1px black solid',
                    padding:'20px'
            }}
            >

            <div
                style={{
                    fontSize:'25px',
                    font:'arial',                               
                    textAlign:'center'
                }}>
                    Select Unit To Edit
            </div>
         

            <div
                style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    marginLeft:'300px',
                    marginRight:'300px'
                }}>

                        {All_Units.map((one_unit)=>(
                            <div 
                                key={one_unit.name}
                                style={{
                                        marginLeft:'30px',
                                        marginRight:'30px',
                                        marginTop:'20px',
                                    }}
                            >                            
                                <My_Button
                                    The_Text= {one_unit.name}
                                    Width='150px'
                                    On_Click={()=>edit_this_unit(one_unit.name)}
                                    FontSize='20px'                    
                            
                                />
                            </div>
                        ))}
                </div> 
             </div>
        </div>
    )
}