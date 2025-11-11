import '../CSS/general.css'

export default function BoxOfList({
    title,
    openNew,
    TheList,
    EditFunc,
    whichValue,
    width
})
{
    const test=()=>{
        TheList.map((one_item) =>console.log(one_item[whichValue]))
        //console.log(TheList)
    }

    return(

        <div
            style={{
                border:'1px solid black',
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
                        onClick={()=>EditFunc(one_item.id)}
                        key={one_item.id}>
                        {one_item[whichValue]}
                    </div>
                )}  
                </div> 
          


        </div>
    )

}