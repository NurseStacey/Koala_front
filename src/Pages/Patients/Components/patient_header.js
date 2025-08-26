

export default function Patient_Header(props) {
    const{setIsOpen,ThisPatient,Patient_Location,Patient_Age,Date_Of_Birth}=props

    return(
    
        
    <div style={{
        backgroundColor: '#C8B496',
        display:'flex',
        justifyContent:'left',
        fontSize:'20px',
        color:'white',
        font:'arial',              
    }}>
        <div
            style={{width:'30%'}}
        >
            <div
                style={{
                    display:'block',
                    paddingLeft:'10px',
                    paddingRight:'30px',
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
                width:'30%',
                display:'flex'}}
            onClick={()=>setIsOpen('facility')}
            
        >
            <div>
                Location:
            </div>
            <div
                style={{
                    display:'block',
                    paddingLeft:'10px',
                    width:'200px'
                }}
                >
                    <div>
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