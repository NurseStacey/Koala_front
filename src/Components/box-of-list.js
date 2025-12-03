import '../CSS/general.css'
import {ALL_FIELDS} from '../Pages/Patients/form-fields/combined-form-fields'

export default function BoxOfList({
    title,
    openNew,
    TheList,
    EditFunc,
    whichValue,
    ThisPatient,
    which,
    width,
    list_div
})
{

    const test=()=>{
        console.log(TheList)
    }

    return(

        <div
            style={{

                height:'30%',
                fontSize:'18px',
                marginBottom:'3%',
                width:width
                // marginLeft:'20px',
            }}>
            <div 
                className='TITLE_STYLE'
                style={{
                    height:'15%'
                }}
                onClick={openNew}>{title}</div> 
            {/* <button onClick={test}>test</button> */}
                    
                <div
                style={{
                    overflowY:'scroll',
                    display:'block',
                    height:'79%',
                    marginTop:'2%',
                    border:'2px solid black',
                }}
                >
                    {TheList.map((one_item) =>
                    <div
                        style={{
                            cursor:'pointer',
                        }}
                        onClick={()=>EditFunc(which, ThisPatient.get_this_record(one_item.id, which))}
                        key={one_item.id}>
                        {list_div(one_item)}
                    </div> 
                )} 
                </div> 
          


        </div>
    )

}