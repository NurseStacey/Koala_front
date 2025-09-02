

export default function PatientHeader(props) {
    const{setIsOpen,ThisPatient,Patient_Location,Patient_Age,Date_Of_Birth}=props

    const LINKSTYLE={
        padding:'5px',
        width:'25%',
        border:'1px solid black'
    }

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
            style={{width:'30%', border:'1px solid black'}}
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
                width:'30%',        border:'1px solid black',
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
        <div
            style={{
                width:'30%',
                display:'flex'
            }}>
            <div
                style={LINKSTYLE}>
                <a href='/'>Home</a>
            </div>
            <div
                style={LINKSTYLE}>
                <a href='/nursing_maintanance'>Nursing Home Maintanance</a>
            </div>
            <div
                style={LINKSTYLE}>
                <a href='/patient_maintanance'>Patient Maintanance</a>
            </div>
            <div
                style={LINKSTYLE}>
                <a href='/drug_management'>Drug Management</a>
            </div>     
                   
        </div>
    </div>

)
}