import My_Button from '../../../Components/My-Button'

export default function CategListBox({
    openEdit,
    openNew,
    medproblems,
    setProblemToEdit
})
{
 
    const TITLE_STYLE = {
        font_size:'20px',
        font:'arial',
        backgroundColor:'pink',
        textAlign:'center'
    }

    const CategClicked = (which) =>{
        console.log(which)
        setProblemToEdit(which)
        openEdit()
    }

    const LocalNew = () =>{
        setProblemToEdit(-1)
        openNew()
    }
    return(
        <div>
            <div
                style={{
                    border:'1px solid black',
                    height:'300px',
                    fontSize:'18px',
                    // marginLeft:'20px',
                }}>
                <div style={TITLE_STYLE}>Problem List</div> 
                <div
                    style={{
                        display:'block',
                        width:'100%',
                    }}
                    >
                    <div
                        style={{
                            display:'flex',
                            justifyContent:'center'
                        }}
                        >
                            <My_Button
                                The_Text='New Problem'
                                Width='150px'
                                Height='45px'
                                On_Click={LocalNew}
                                FontSize='18px'
                            />
                    
                    </div> 
                    <div
                        style={{
                            display:'flex',
                            justifyContent:'center'
                        }}
                        onClick={openNew}
                        >
                            test
                            
                    
                    </div>                     
                    <div
                    style={{
                        overflowY:'scroll',
                        display:'block',
                        height:'200px',
                        border:'1px solid black',
                        cursor:'pointer'
                    }}
                    >
                        {medproblems.map((one_problem) =>
                        <div
                            onClick={()=>CategClicked(one_problem)}
                            key={one_problem.categ_id}>
                            {one_problem.categ_name}
                        </div>)}  
                    </div>
                </div>                 
            </div>

        </div>
    )

}