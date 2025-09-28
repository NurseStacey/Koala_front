import Page_Header from '../../Components/page-header'
import Menu_Header from '../../Components/menu-header'
import {useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import {useEffect, useState} from 'react'

export default function One_Facility_Maintanance() {
    const navigate = useNavigate()
    const location = useLocation()
    const [This_Facility, set_This_Facility] = useState()

    const OneLink = {
        border:'1px solid black',
        backgroundColor:'lightgray',
        font:'arial',
        fontSize:'26px',
        width:'200px',
        height:'200px',
        lineHeight:'200px',
        margin:'25px',
        textAlign:'center',
    }

    const censusUpload=()=>{
        navigate('/upload_census', {state:{nursing_home_name:This_Facility}})
    }

    const Edit_Unit =() =>{

        navigate('/add_facility_unit', {state:{nursing_home_name:This_Facility}})
    }
    useEffect(() => {

        set_This_Facility( location.state?.nursing_home_name)

        },[])
    

    return(
     
             <div>
                 <Page_Header
                     The_Header={'Nursing Home Maintance For ' + This_Facility}            
                 />
                 <Menu_Header></Menu_Header>            
            
            <div
             style={{
                 display:'flex',
                 wrap:'wrap',
                 marginTop:'30px'
             }}>
                 <div
                    onClick={Edit_Unit}
                     style={OneLink}>
                        Edit/Add Unit
                 </div>
                 <div
                    onClick={censusUpload}
                     style={OneLink}>
                        Upload Census
                 </div>                 




            </div>            
             </div>
    )
}