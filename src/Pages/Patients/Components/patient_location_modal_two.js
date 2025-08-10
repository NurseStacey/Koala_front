import React from 'react'
import {useEffect, useState} from 'react'
import AxiosInstance from '../../../utils/Axios'
import My_Button from '../../../Components/My_Button'

export default function Patient_Location_Modal_Two({open, onClose,setUnit,unitPicked,All_Units,Facility,setAll_Beds}){

    useEffect(() => {
    //     console.log(facility)
    //    try{
    //         AxiosInstance.get(`nursinghome/Facility_Units/?facility_name=${facility}`).then((res) =>{

    //             let unit_names = []
    //             res.data.map(one_unit => {
    //                 unit_names.push({
    //                     'name':one_unit.name,
    //                     'id':one_unit.id
    //                 })
    //             })
    //             set_Units(unit_names)
                
    //         })
      //  } catch(error){console.log(error)}
        
    },[])

    const Unit_Selected = (one_unit) =>{
        setUnit(one_unit.name)

       try{
            AxiosInstance.get(`nursinghome/Facility_Beds/?unit_id=${one_unit.id}&get_available=True`).then((res) =>{

                let beds = []
                res.data.map(one_bed => {
                    beds.push({
                        'name':one_bed.Label,
                        'id':one_bed.id
                    })
                })
                setAll_Beds(beds)
                
            })
        } catch(error){console.log(error)}             
        unitPicked()
    }

    const MODAL_STYLE ={
        position: 'fixed',
        top:'25%',
        left: '25%',
        width:'50%',
        height:'50%',
        trnasform: 'translate(-50%,-50%)',
        backgroundColor:'#FFF',
        zIndex:1000,
    }

    const OVERLAY_STYLES = {
        position:'fixed',
        top:0,
        left:0,
        right:0,
        bottom:0,
        backgroundColor:'rgba(0,0,0,.7)',
        zIndex:1000
    }

    if  (open!=='unit') return null
    return (
        <div
            style={OVERLAY_STYLES}>
            <div
                style={MODAL_STYLE}
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
                    Select the Unit
                </div>
                {All_Units.map((one_unit) => (
                        <div 
                            key={one_unit.name}
                            style={{
                                marginRight:'15px',
                                marginLeft:'15px',
                                marginTop:'8px'
                            }}>
                                            
                            <My_Button
                                The_Text={one_unit.name}
                                Width='90px'
                                Height='45px'
                                On_Click={() =>Unit_Selected(one_unit)}
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