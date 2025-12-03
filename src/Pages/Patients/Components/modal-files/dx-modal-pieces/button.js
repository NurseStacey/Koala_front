import My_Button from '../../../../../Components/My-Button'
import AxiosInstance from '../../../../../utils/Axios'

export default function ButtonsRow({
    CloseBox,
    SubmitButtonText,
    test,
    ReloadPatient,
    CodeToEdit,
    GetDataToSend,
})
{

const AddDxToPatient = () => {

        let dataToSend = GetDataToSend()

        if (CodeToEdit.id == -1)
            try{
                AxiosInstance.post(`patients/diagnosis_code/`, dataToSend).then((res) =>{
                    ReloadPatient()
                })
            } catch(error){console.log(error)}
            else
                try{
                    dataToSend['id']=CodeToEdit.id
                    AxiosInstance.patch(`patients/one_patient/diagnosis_code/`, dataToSend).then((res) =>{
                        
                        ReloadPatient()
                    })
                } catch(error){console.log(error)}

        CloseBox()
    }

    const Delete=()=>{
        let dataToSend = GetDataToSend()
        //console.log(dataToSend)
        //console.log(CodeToEdit.id)
        try{
            AxiosInstance.delete(`patients/one_patient/diagnosis_code/${CodeToEdit.id}`).then((res) =>{
                ReloadPatient()

            })
        } catch(error){console.log(error)}

        CloseBox()
    }

    return (
        <div
            style={{
                height:'10%',
                width:'100%',
                display:'flex',
                justifyContent:'space-around',
                border:'1px solid black'
            }}
            >
            <My_Button
                The_Text={SubmitButtonText}
                Width='90px'
                Height='45px'
                On_Click={AddDxToPatient}
                FontSize='18px'
            />           
            {(CodeToEdit.can_delete) ? 
                <My_Button
                The_Text={'Delete'}
                Width='90px'
                Height='45px'
                On_Click={Delete}
                FontSize='18px'
            />    
                :<></>}
            <My_Button
                The_Text={'test'}
                Width='90px'
                Height='45px'
                On_Click={test}
                FontSize='18px'
            />    

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