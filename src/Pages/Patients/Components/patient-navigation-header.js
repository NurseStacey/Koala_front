


export default function PatientNavigationHeader(props) {
    const LINKSTYLE={
        padding:'5px',
        width:'25%',
        border:'1px solid black'
    }
    return (
        <div        
        
        style={{
            backgroundColor: '#C8B496',
            display:'flex',
            justifyContent:'left',
            fontSize:'15px',
            color:'white',
            font:'arial',
            fontWeight:'bold'
    }}>
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