

export default function My_Button(props) {
    const{The_Text, On_Click, Width,Height, FontSize}=props


    return(
        
    <button 
        onClick={On_Click  }
        style={{
            backgroundColor:'darksalmon',
            textAlign:'center',
            width:Width,
            height:Height,
            fontSize:FontSize,
            color:'white',
            font:'arial',
            display:'block',
            // marginLeft:'auto',
            // marginRight:'auto',
            marginTop:'1%',
            marginBottom:'1%'
        }}
    >
        {The_Text}
    </button>

)
}