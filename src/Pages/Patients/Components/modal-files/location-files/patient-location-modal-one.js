import React from 'react'
import {useEffect, useState} from 'react'
import AxiosInstance from '../../../../../utils/Axios'
import My_Button from '../../../../../Components/My-Button'

export default function Patient_Location_Modal_One({open, onClose,setFacility,facilityPicked,setAll_Units}){

    const [Facilities, set_Facilities] = useState([])

    useEffect(() => {
        
        try{
            AxiosInstance.get(`nursinghome/Nursing_Home/?get_all=True`).then((res) =>{

                let the_facility_names = []
                res.data.map(one_facility => {
                    the_facility_names.push(one_facility.name)
                })
                set_Facilities(the_facility_names)

            })
        } catch(error){console.log(error)}
    },[])

    useEffect(()=>{
        //console.log(open)
    },[open])

    const Nursing_Home_Selected = (one_facility) =>{
        setFacility(one_facility)

       try{
            AxiosInstance.get(`nursinghome/Facility_Units/?facility_name=${one_facility}`).then((res) =>{

                let unit_names = []
                res.data.map(one_unit => {
                    unit_names.push({
                        'name':one_unit.name,
                        'id':one_unit.id
                    })
                })
                setAll_Units(unit_names)
                
            })
        } catch(error){console.log(error)}        
        facilityPicked()
    }
    if  (open['location']!=='facility') return null

    return (
        <div
            className='OVERLAY_STYLES'>
            <div
                className='MODAL_STYLE'
            >
            <div
                style={{
                    position:'absolute',
                    top:0,
                    marginLeft:'50px',
                    marginRight:'50px',
                    display:'flex',
                    justifyContent:'left',
                    flexWrap:'wrap',
                    alignContent:'flex-start'
                }}
                >
                <div
                    style={{
                        width:'100%',
                        textAlign:'center',
                        font:'arial',
                        fontSize:'26px',
                        padding:'20px',
                    }}>
                    Select the Nursing Home
                </div>
                {Facilities.map((one_facility) => (
                        <div 
                            key={one_facility}
                            style={{
                                marginRight:'15px',
                                marginLeft:'15px',
                                marginTop:'8px'
                            }}>
                                            
                            <My_Button
                                The_Text={one_facility}
                                Width='90px'
                                Height='45px'
                                On_Click={() =>Nursing_Home_Selected(one_facility)}
                                FontSize='18px'
                            />                        
                        </div>
                    ))}                
                </div>

                <div
                    style={{
                        display:'flex',
                        justifyContent:'center',
                        position:'absolute',
                        bottom:0,   
                        width:'100%',
                        padding:'20px',
                    }}
                >                    
                            <My_Button
                                The_Text={'Close Modal'}
                                Width='90px'
                                Height='45px'
                                On_Click={onClose}
                                FontSize='18px'
                            />                            
                </div>
                
            </div>
        </div>
    )
}