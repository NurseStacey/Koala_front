

export default function PatientHeader(props) {
    const{setIsOpen,ThisPatient,Patient_Location,Patient_Age,Date_Of_Birth,Facility_ID}=props

    const clicked = (which) =>{
        console.log(which)
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
                    Date of Birth: {Date_Of_Birth}
                </div>        
                       
                <div>
                     Age:{Patient_Age}
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
                {(Facility_ID=='') ?
                    <div >
                        Facility ID :
                    </div>
                :
                    <div>
                        Facility ID : {Facility_ID}
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
                    {Patient_Location['facility']}
                </div>
                {(Patient_Location['bed'] !== '') ?
                <div>
                    {Patient_Location['bed']}/{Patient_Location['unit']}
                </div>
                :
                <div></div>}
            </div>
        </div>

    </div>

)
}