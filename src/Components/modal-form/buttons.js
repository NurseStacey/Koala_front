import My_Button from '../My-Button'

export default function ButtonsRow({
    closeModalForm,
    Editing,
    updateRecord,
    deleteRecord,
    addRecord
})
{

    return (

        <div
            style={{
                display:'flex',
                justifyContent:'space-around',
                position:'absolute',
                bottom:0,   
                width:'100%',
                padding:'20px',
            }}
        >                    
                <My_Button
                    The_Text={'Cancel'}
                    Width='90px'
                    Height='45px'
                    On_Click={closeModalForm}
                    FontSize='18px'
                />

                {(Editing) ?
                <>
                    <div>
                        <My_Button
                            The_Text={'Update'}
                            Width='90px'
                            Height='45px'
                            On_Click={updateRecord}
                            FontSize='18px'
                        />  
                    </div> 
                    <div>  
                        <My_Button
                            The_Text={'Delete'}
                            Width='90px'
                            Height='45px'
                            On_Click={deleteRecord}
                            FontSize='18px'
                        />  
                    </div>  
                    </> :
                
                <My_Button
                    The_Text={'Save'}
                    Width='90px'
                    Height='45px'
                    On_Click={addRecord}
                    FontSize='18px'
                />                                     
                }                           
        </div> 
    )
}