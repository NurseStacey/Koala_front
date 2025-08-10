
import One_Bed_Field from '../../Components/Nursing_Home/one_bed'
import { useLocation,useNavigate } from 'react-router-dom'
import {useEffect, useState} from 'react'
import AxiosInstance from '../../utils/Axios'
import My_Button from '../../Components/My_Button'
import My_TextField from '../../Components/My_TextField'
import Page_Header from '../../Components/page_header'
import Menu_Header from '../../Components/menu_header'

export default function Edit_Unit() {
    const navigate = useNavigate()    
    const location = useLocation()
    
    const [This_Facility, set_This_Facility] = useState()     
    const[This_Unit, set_This_Unit]=useState()
    const[This_New_Unit, set_This_New_Unit]=useState()
    const [The_Beds, set_Beds]=useState([])

    const delete_bed =(index)=>{
        console.log(index)
        AxiosInstance.delete(`nursinghome/Facility_Beds/?pk=${index}`)
        let new_bed_list =   The_Beds.filter(one_bed =>one_bed.id!==index)
        set_Beds(new_bed_list)
    }

    const Update_Labels = async () =>{

        let beds_to_send = [This_Unit]
        beds_to_send =[This_Facility,This_Unit,This_New_Unit, ...The_Beds.filter(one_bed =>one_bed.Label!==one_bed.Original_Label)]
        
        try{
            await AxiosInstance.post(`nursinghome/Update_Unit/`, JSON.stringify(beds_to_send)).then(
            )
            navigate('/One_Facility_Maintanance', {state:{nursing_home_name:This_Facility}})
        } catch(error){console.log(error)}        

    }

    const Add_Bed = () =>{
        let maxIndex = Math.max(...The_Beds.map(one_bed=>one_bed.id))
        let new_bed_list = []
        The_Beds.map(one_bed=>{
            new_bed_list.push(one_bed)
    })

        new_bed_list.push({
            id:maxIndex+1,
            Original_Label:'',
            Label:'',
            Unit:This_Unit
        })
        set_Beds(new_bed_list)
    }

    const set_bed_value =(value, index)=>{


        let new_bed_list = The_Beds.filter(one_bed=>one_bed.id<index)
        let updated_bed = The_Beds.find(one_bed=>one_bed.id==index)
        updated_bed.Label=value

        new_bed_list.push(updated_bed)

        The_Beds.filter(one_bed=>one_bed.id>index).map(one_bed=>new_bed_list.push(one_bed))
        console.log(new_bed_list)
        set_Beds(new_bed_list)
    }

    const button_clicked =()=>{
        console.log(The_Beds)
    }

    
    useEffect(() => {

        set_This_Facility( location.state?.nursing_home_name)
        set_This_Unit( location.state?.unit)
        set_This_New_Unit( location.state?.unit)
        
        const set_data =async ()=>{

            try{
                AxiosInstance.get(`nursinghome/Facility_Beds/?unit_name=${location.state?.unit}&facility_name=${ location.state?.nursing_home_name}`).then((res) =>{
                    console.log(res.data)
                    
                    let the_beds=[]
                    res.data.map(one_bed=>{
                        the_beds.push({
                            Original_Label:one_bed.Label,
                            Label:one_bed.Label,
                            id:one_bed.id,
                            Unit:one_bed.unit
                        })
                    })
                    console.log(the_beds)
                    set_Beds(the_beds)
                    
                })
            } catch(error){console.log(error)}            
        }

        set_data()


    },[])

    return(
        <div>
            <Page_Header
                The_Header={'Create Units For ' + This_Facility}
            />

            <Menu_Header></Menu_Header>
            <My_Button
                    The_Text='Click This'
                    Width='150px'
                    On_Click={button_clicked}
                    FontSize='20px' 
            />              
            
            
            <div
                style={{
                    font:'Arial',
                    fontSize:'30px',
                    textAlign:'center',
                    width:'100%',
                    marginTop:'20px',
                }}>
                    {This_Facility} - {This_Unit}
            </div>

            <div
                style={{
                    display:'flex',
                    justifyContent:'space-around',
                    font:'Arial',
                    fontSize:'30px',
                    width:'100%',
                    marginTop:'20px',
                }}>
                    
                    <My_Button
                            The_Text='Update Labels'
                            Width='150px'
                            On_Click={Update_Labels}
                            FontSize='20px' 
                    />      

                    <My_Button
                            The_Text='Add New Bed'
                            Width='150px'
                            On_Click={Add_Bed}
                            FontSize='20px' 
                    />                                       
            </div>
            <div                
                    style={{
                    display:'flex',
                    justifyContent:'space-around',
                    font:'Arial',
                    fontSize:'30px',
                    width:'100%',
                    marginTop:'20px',
                }}>
                <My_TextField
                    value={This_New_Unit}
                    set_value={set_This_New_Unit}
                    The_Label='New Unit Name'
                    FontSize='20px'
                />                
            </div>
            <div
                style={{
                    display:'flex',
                    flexDirection:'row',
                    marginTop:'20px',
                    Width:'80%',
                    flexWrap:'wrap'
                }}>

                     
                    {The_Beds.map((one_room)=>(
                            <div
                                key={one_room.id}
                                style={{
                                    font:'Arial',
                                    fontSize:'30px',
                                    minWidth:'30%',
                                    border:'1px solid black',
                                    marginLeft:'40px',
                                    marginTop:'15px'
                                }}>
                            <One_Bed_Field
                                The_Label={one_room.Label}
                                The_Original_Label={one_room.Original_Label}
                                index={one_room.id}
                                set_value={set_bed_value}
                                delete_bed={delete_bed}
                            />
                                
                            </div>
                        ))}
                    
            </div>
        </div>
    )
}
