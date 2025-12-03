import My_Button from '../../../../../../Components/My-Button'
import AxiosInstance from '../../../../../../utils/Axios'

export default function ButtonsRow({
    UpdateCateg,
    CloseBox,
    CanDelete,
    CategID,
    ReloadPatient
})
{
    const DeleteCateg = () => {
        //console.log(CategID)
        AxiosInstance.delete(`patients/one_patient/medical_categories/${CategID}`).then((res) =>{
            ReloadPatient()
            CloseBox()
        })        
    }
    
    return (
        <div
            style={{
                height:'20%',
                width:'100%',
                display:'flex',
                justifyContent:'space-around',
                border:'1px solid black'
            }}
            >
            <My_Button
                The_Text='Update Medical Categories'
                Width='90px'
                Height='45px'
                On_Click={UpdateCateg}
                FontSize='18px'
            />           
           
           {(CanDelete) ? <>
    
                <My_Button
                    The_Text={'Delete'}
                    Width='90px'
                    Height='45px'
                    On_Click={DeleteCateg}
                    FontSize='18px'
                />               
           </> : <></>}
            
            <My_Button
                The_Text={'Cancel'}
                Width='90px'
                Height='45px'
                On_Click={CloseBox}
                FontSize='18px'
            />    
        </div>                        
    )
}