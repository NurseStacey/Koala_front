import My_TextField from './My_TextField'
import My_Button from './My_Button'
import My_DropDownField from './My_DropDownField'

export default function One_Form(props){
    const {The_Fields, set_value,Button_Text,Submit_Button,showButton}=props
    //console.log(The_Fields)

    return(
        <div
            style={{
                marginTop:'50px',
            }}>
            {The_Fields.map((one_field)=>
                <div
                            key={one_field.name}
                            style={{
                                display:'block',
                                
                                border:'black 1px solid',
                                marginTop:'15px',
                                marginLeft:'10%',
                                marginRight:'10%'
                            }}
                        >         
                    {( one_field.type == 'dropdown' ) ? 
                    <My_DropDownField
                        value={one_field.value}
                        name={one_field.name}
                        set_value={set_value}
                        The_Label={one_field.label}
                        FontSize='20px'
                        all_options={one_field.options}
                    />
                    :   

                        <My_TextField
                            value={one_field.value}
                            name={one_field.name}
                            Type={one_field.type}
                            set_value={set_value}
                            The_Label={one_field.label}
                            FontSize='20px'                
                    />

                }
                </div>
            )
            
            } 
      <div
                    style={{
                        marginTop:'25px'
                    }}>
                    <div
                        style={{
                            display:'flex',
                            justifyContent:'center',
                        }}
                        >
                        {(showButton) ?
                            <My_Button
                                
                                The_Text={Button_Text}
                                Width='150px'
                                On_Click={Submit_Button}
                                FontSize='20px'
                            />                           
                        :<></>}
              
                    </div>                  
                </div>                       
        </div>
    )
}
