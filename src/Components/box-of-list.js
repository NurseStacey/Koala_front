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
      
                    
                <div
                style={{
                    overflowY:'scroll',
                    display:'block',
                    height:'79%',
                    marginTop:'2%',
                    border:'2px solid black',
                    cursor:'pointer',
                }}
                >
                    {TheList.map((one_item) =>
                    <div
                        onClick={()=>EditFunc(one_item.id)}
                        key={one_item.id}>
                        {one_item[whichValue]}
                    </div>
                )}  
                </div> 
          


        </div>
    )

}