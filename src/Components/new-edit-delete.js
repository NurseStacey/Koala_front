import My_Button from './My-Button'

export default function NewEditDelete({
    NewFunction,
    EditFunction,
    DeleteFunction
})
{
    return(
                <div
                    style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'space-evenly',
                        marginLeft:'20px',
                    }}
                    >

                    <My_Button
                        The_Text={'New'}
                        Width='90px'
                        Height='30px'
                        On_Click={NewFunction}
                        FontSize='15px'
                    />

                    <My_Button
                        The_Text={'Edit'}
                        Width='90px'
                        Height='30px'
                        On_Click={EditFunction}
                        FontSize='15px'
                    />                
                    <My_Button
                        The_Text={'Delete'}
                        Width='90px'
                        Height='30px'
                        On_Click={DeleteFunction}
                        FontSize='15px'
                    />                                                    
                </div>        
    )
}