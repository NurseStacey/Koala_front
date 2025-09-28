import My_Button from '../../../../../../Components/My-Button'

export default function MedProbPrescriptions({

})
{
    return (
        <div>
            <div
                style={{
                    textAlign:'center'
                }}>
                    Prescriptions
            </div>
            <div
                style={{
                    display:'flex',
                    justifyContent:'space-evenly',
                    height:'120px'
                }}
            >
                <div
                    style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'space-evenly',
                        marginLeft:'20px',
                        marginBotton:'20px'
                    }}
                    >

                    <My_Button
                        The_Text={'New'}
                        Width='90px'
                        Height='30px'
                        On_Click={null}
                        FontSize='15px'
                    />

                    <My_Button
                        The_Text={'Edit'}
                        Width='90px'
                        Height='30px'
                        On_Click={null}
                        FontSize='15px'
                    />                
                <My_Button
                        The_Text={'Delete'}
                        Width='90px'
                        Height='30px'
                        On_Click={null}
                        FontSize='15px'
                    />                                                    
                </div>

                <div
                    style={{
                        display:'block',
                        overflowY:'scroll',
                        border:'1px solid black',
                        height:'100%',
                        width:'75%',
                        marginLeft:'20px',
                        marginRight:'20px',
                        marginBottom:'15px'
                    }}
                >
                </div>                
            </div>
        </div>
    )
}