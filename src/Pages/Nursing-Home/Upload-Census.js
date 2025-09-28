import Page_Header from '../../Components/page-header'
import Menu_Header from '../../Components/menu-header'
import My_Button from '../../Components/My-Button'
import {useNavigate,useLocation} from 'react-router-dom'
import {useEffect, useState} from 'react'
import AxiosInstance from '../../utils/Axios'

export default function Upload_Census() {
    const navigate = useNavigate()
    const location = useLocation()
    const [field_text, set_field_text]=useState('')
    
    const [complete_matching, set_complete_matching]=useState([])
    const [almost_matching, set_almost_matching]=useState([])
    const [matching_updated, set_matching_updated]=useState([])
    const [completely_new, set_completely_new] = useState([])

    const [This_Facility, set_This_Facility] = useState()

    const UploadCensus = () => {
        console.log(field_text)

        AxiosInstance.post(`nursinghome/Upload_Census/`, {
            the_census:field_text,
            the_facility:This_Facility}).then((res) =>{
                console.log(res)
                set_complete_matching(res.data['already_in_database_id_matches'])
                set_almost_matching(res.data['already_in_database_id_different'])
                set_matching_updated(res.data['updated_id'])
                set_completely_new(res.data['added_to_database'])
        })
    }

    const return_facility_maintenance = () => {
        navigate('/One_Facility_Maintanance', {state:{nursing_home_name:This_Facility}})
    }

    useEffect(() => {
        set_This_Facility( location.state?.nursing_home_name)
    },[])    

    return (
        <div>
            <Page_Header
                The_Header={'Upload Census For ' + This_Facility}
            />
            <Menu_Header></Menu_Header>

                
                <div
                    style={{
                        display:'flex',
                        justifyContent:'center',
                        margin:'5px'
                    }}>
                    <textarea
                        onChange={(e)=>set_field_text(e.target.value)}
                        cols='10'
                        rows='5'>
                    </textarea>
                </div>       
                
                <div
                    style={{
                        display:'flex',
                        justifyContent:'space-evenly',
                        marginTop:'5px',
                        marginBottom:'15px'
                    }}>
                         <My_Button
                            The_Text='Upload Census'
                            Width='90px'
                            Height='45px'
                            On_Click={UploadCensus}
                            FontSize='18px'
                        />    
                         <My_Button
                            The_Text='Cancel'
                            Width='90px'
                            Height='45px'
                            On_Click={return_facility_maintenance}
                            FontSize='18px'
                        />                            
                </div>

                <div 
                    style={{
                        display:'flex',
                        justifyContent:'space-around',
                        marginBottom:'50px'
                    }}>
                    <div
                        style={{
                            display:'block',
                            width:'50%'
                        }}>
                            <div
                                style={{
                                    width:'100%',
                                    textAlign:'center',
                                    font:'arial',
                                    fontSize:'30px',
                                }}
                                >
                                    Completely Matching Rsidents
                            </div>
                            {complete_matching.map((one_resident)=>
                            <div
                                style={{
                                    width:'100%',
                                    textAlign:'center',
                                    font:'arial',
                                    fontSize:'20px'
                                }}>
                                    {one_resident}
                            </div>
                        )}
                    </div>     

                    <div
                        style={{
                            display:'block',
                            width:'50%'
                        }}>
                            <div
                                style={{
                                    width:'100%',
                                    textAlign:'center',
                                    font:'arial',
                                    fontSize:'30px',
                                }}
                                >
                                    Almost Matching Residents - ID is different
                            </div>
                            {almost_matching.map((one_resident)=>
                            <div
                                style={{
                                    width:'100%',
                                    textAlign:'center',
                                    font:'arial',
                                    fontSize:'20px'
                                }}>
                                    {one_resident}
                            </div>
                        )}
                    </div>
                </div>

                <div
                    style={{
                        display:'flex',
                        justifyContent:'space-around',
                        marginBottom:'50px',
                    }}>
                    <div
                        style={{
                            display:'block',
                            width:'50%'
                        }}>
                            <div
                                style={{
                                    width:'100%',
                                    textAlign:'center',
                                    font:'arial',
                                    fontSize:'30px',
                                }}
                                >
                                    Almost Matching Residents - ID is added
                            </div>
                            {matching_updated.map((one_resident)=>
                            <div
                                style={{
                                    width:'100%',
                                    textAlign:'center',
                                    font:'arial',
                                    fontSize:'20px'
                                }}>
                                    {one_resident}
                            </div>
                        )}
                    </div>             



                    <div
                        style={{
                            display:'block',
                            width:'50%'
                        }}>
                            <div
                                style={{
                                    width:'100%',
                                    textAlign:'center',
                                    font:'arial',
                                    fontSize:'30px',                                    
                                }}
                                >
                                    Completely New
                            </div>
                            {completely_new.map((one_resident)=>
                            <div
                                style={{
                                    width:'100%',
                                    textAlign:'center',
                                    font:'arial',
                                    fontSize:'20px'
                                }}>
                                    {one_resident}
                            </div>
                        )}
                    </div>  
                </div>                                                  
        </div>
    )
}