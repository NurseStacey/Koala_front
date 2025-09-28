export default function Menu_Header() {

    const ONE_MENU_ITEM ={
            paddingLeft:'3%',
            fontSize:'30px',
            width:'8%',
            color:'white',
            font:'arial',            
        }

    return(
    <div style={{
        backgroundColor:'bisque',
        marginLeft:'10%',
        display:'flex',
    }}>
        <div style={ONE_MENU_ITEM}>
            <a href='/'>Home</a>
        </div>

        <div style={ONE_MENU_ITEM}>
            <a href='/nursing_maintanance'>Nursing Home Maintanance</a>
        </div>
        <div style={ONE_MENU_ITEM}>
            <a href='/patient_maintanance'>Patient Maintanance</a>
        </div>              
        <div style={ONE_MENU_ITEM}>
            <a href='/drug_management'>Drug Management</a>
        </div>        
    </div>
    )
}
