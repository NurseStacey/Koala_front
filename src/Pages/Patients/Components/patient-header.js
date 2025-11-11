import {useEffect, useState} from 'react'

export default function PatientHeader({
    setIsOpen,
    ThisPatient
}) {

    const [PatientLocation, setPatientLocation]=useState({
        'facility':'',
        'bed':'',
        'unity':''})
    const [PatientAge,setPatientAge]=useState(0)
    const [DateOfBirth,setDateOfBirth]=useState('')
    const [FacilityID, setFacilityID]=useState('')

    useEffect(()=>{
        setPatientAge(ThisPatient['basic_data']['age'])
        setPatientLocation(ThisPatient['patient_location'])
        let dateValues = ThisPatient['basic_data']['Date_Of_Birth'].slice(0,10).split('-')
        setDateOfBirth(dateValues[1] + '-' + dateValues[2] +'-' + dateValues[0])
        setFacilityID(ThisPatient['facility_id'])
    },[ThisPatient])

    const clicked = (which) =>{
        //console.log(which)
        setIsOpen(which)
    }

    const test =(value)=>{
        console.log(value)
        setIsOpen(value)
    }
    return(
        
    <div 
        style={{
            backgroundColor: '#C8B496',
            display:'flex',
            justifyContent:'left',
            fontSize:'20px',
            color:'white',
            font:'arial',              
    }}>
        <div
            style={{width:'25%'}}
        >
            <div
                style={{
                    display:'block',
                    paddingLeft:'20px',                    
                    width:'250px'
                }}
                >
                <div>
                    Date of Birth: {DateOfBirth}
                </div>        
                       
                <div
                    style={{
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'space-between'
                    }}>
                        <div>Age:{PatientAge}</div>
                        <div>{ThisPatient['basic_data']['gender']}</div>
                    
                </div>              
            </div>
        </div>

        <div
            style={{
                textAlign:'center',   
          
                width:'50%', 
                fontSize:'30px'}}
        >
            {ThisPatient['basic_data'].last_name + ', ' + ThisPatient['basic_data'].first_name}
        </div>     

        <div
            onClick={()=>clicked('facilityID')}
            style={{
                width:'10%',
                display:'flex',
                justifyContent:'right',
                paddingRight:'20px'
            }}
            >
            <div                
                style={{
                    cursor:'pointer',                         
                }}>
                {(FacilityID=='') ?
                    <div >
                        Facility ID :
                    </div>
                :
                    <div>
                        Facility ID : {FacilityID}
                    </div>
                }
            </div>
        </div>
        <div
            onClick={()=>clicked('facility')}          
            style={{
                width:'15%',               
                display:'flex',
                justifyContent:'right',
                cursor:'pointer',    
                paddingRight:'20px'
            }}
            
        >
            <div
                style={{
                    display:'block',     
                    paddingRight:'8px',
                }}
            >
                <div>
                    Location:
                </div>
                
            </div>
            <div
                // onClick={()=>test('facility')}

                style={{
                    display:'block',
                    textAlign:'right'
                }}
                >
                <div
                    
                >
                    {PatientLocation['facility']}
                </div>
                {(PatientLocation['bed'] !== '') ?
                <div>
                    {PatientLocation['bed']}/{PatientLocation['unit']}
                </div>
                :
                <div></div>}
            </div>
        </div>

    </div>

)
}