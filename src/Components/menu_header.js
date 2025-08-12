
import AxiosInstance from '../utils/Axios'

export default function Menu_Header() {

    return(
    <div style={{
        backgroundColor:'bisque',
        marginLeft:'10%',
        display:'flex',
    }}>
        <div style={{
            paddingLeft:'3%',
            fontSize:'30px',
            width:'8%',
            color:'white',
            font:'arial',            
        }}>
            <a href='/'>Home</a>
        </div>

        <div style={{
            paddingLeft:'3%',
            fontSize:'20px',
            width:'8%',
            color:'white',
            font:'arial',
        }}>
            <a href='/nursing_maintanance'>Nursing Home Maintanance</a>
        </div>
        <div style={{
            paddingLeft:'3%',
            fontSize:'20px',
            width:'8%',
            color:'white',
            font:'arial',
        }}>
            <a href='/patient_maintanance'>Patient Maintanance</a>
        </div>              
    
    </div>
    )
}
