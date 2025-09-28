
import Menu_Header from '../../Components/menu-header'
import Page_Header from '../../Components/page-header'
import My_Button from '../../Components/My-Button'
import {useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import AxiosInstance from '../../utils/Axios'

export default function Nursing_Maintanance() {
    const navigate = useNavigate();

    const Nursing_Home_Function =() =>{
        navigate('/New_Nursing_Home')
    }

    const Nursing_Home_Selected =(facility)=>{
        console.log(facility)

        navigate('/One_Facility_Maintanance', {state:{nursing_home_name:facility}})
    }

    const [Facilities, set_Facilities] = useState([])

    useEffect(() => {
        
        try{
            AxiosInstance.get(`nursinghome/Nursing_Home/?get_all=True`).then((res) =>{
                //console.log(res.data)
                let the_facility_names = []
                res.data.map(one_facility => {
                    the_facility_names.push(one_facility.name)
                })
                set_Facilities(the_facility_names)
                console.log(Facilities)
            })
        } catch(error){console.log(error)}
    },[])

    return(
        <div>
            <Page_Header
                The_Header='New Nursing Maintance'
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
                    The_Text='New Nursing Home'
                    Width='150px'
                    On_Click={Nursing_Home_Function}
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
                {Facilities.map((one_facility) => (
                    <div 
                        key={one_facility}
                        style={{
                            margin:'15px'
                        }}>
                        <My_Button
                            The_Text={one_facility}
                            Width='150px'
                            Height='50px'
                            On_Click={() =>Nursing_Home_Selected(one_facility)}
                            FontSize='20px'
                        />                        
                    </div>
                ))}
            </div>
        </div>                
    )
}

