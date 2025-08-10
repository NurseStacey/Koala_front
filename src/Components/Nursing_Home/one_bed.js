import My_Button from '../My_Button'

export default function One_Bed_Field(props) {
    const{The_Label,The_Original_Label,index,set_value,delete_bed}=props

    return (

        <div
            style={{
                'display':'flex'
            }}>
            <div
                style={{
                    display:'block',
                    fontSize:18,
                    font:'arial',
                    paddingLeft:'5px',
                    paddingRight:'15px',
                }}>
                    <div>
                        Current Label
                    </div>
                    <div>
                        {The_Original_Label}
                    </div>
            </div>
        <div
            style={{
                    display:'block',
                    fontSize:18,
                    font:'arial',
                    paddingLeft:'5px',
                    paddingRight:'15px',
            }}>
            <div>
                New Label
            </div>
            <input
                style={{
                    // flex:2,
                    fontSize:18,
                    font:'arial',
                    marginRight:'50px',
                }}

                type='text'
                value={The_Label}
                onChange={(e)=>set_value(e.target.value,index)}
            />
        </div>  
            <My_Button
                    The_Text='Delete'
                    Width='150px'
                    On_Click={()=>delete_bed(index)}
                    FontSize='20px'
                    />
        </div>
    )
}