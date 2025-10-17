import My_Button from '../../../../../../Components/My-Button'
import NewEditDelete from '../../../../../../Components/new-edit-delete'

export default function MedProbPrescriptions({

})
{

    const GetNewRx = () => {

    }

    const EditRx = () => {

    }

    const DeleteRx = () =>{
        
    }

    return (
            <div
                style={{
                    display:'flex',
                    justifyContent:'space-evenly',
                    height:'45%',
                    width:'100%',
                }}
            >

                <div
                    style={{
                        display:'flex',
                        justifyContent:'space-evenly',
                        height:'120px'
                    }}
                >
                    <NewEditDelete
                        NewFunction={GetNewRx}
                        EditFunction ={EditRx}
                        DeleteFunction={DeleteRx}
                    />
            
                </div>
            
        </div>
    )
}