import My_Button from '../../../Components/My_Button'
import {useState} from 'react'


export default function UploadOrders() {
    const [field_text, set_field_text]=useState('')

    const TITLE_STYLE = {
        font_size:'20px',
        font:'arial',
        backgroundColor:'pink',
        textAlign:'center'
    }

    const UploadOrders = () =>
    {
        console.log(field_text)
    }

    return(
        <div
            style={{
                display:'block',
            }}>
                <div style={TITLE_STYLE}>Upload Orders</div> 
                <div
                    style={{
                        display:'flex',
                        justifyContent:'center',
                        margin:'5px'
                    }}>
                    <textarea
                        onChange={(e)=>set_field_text(e.target.value)}
                        cols='10'
                        rows='5'>

                    </textarea>
                </div>
                <div
                    style={{
                        display:'flex',
                        justifyContent:'center',
                        marginTop:'5px',
                        marginBottom:'15px'
                    }}>
                         <My_Button
                            The_Text='Upload Orders'
                            Width='90px'
                            Height='45px'
                            On_Click={UploadOrders}
                            FontSize='18px'
                        />    
                    </div>                
        </div>
    )
}