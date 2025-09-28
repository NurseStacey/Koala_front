import My_Button from '../../../Components/My-Button'

export default function ProblemListBox({
    open,
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

    const medprobClicked = (which) =>{
        console.log(which)
        setProblemToEdit(which)
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
                                On_Click={()=>open(true)}
                                FontSize='18px'
                            />
                    
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
                            onClick={()=>medprobClicked(one_problem)}
                            key={one_problem.problem_id}>
                            {one_problem.problem_name}
                        </div>)}  
                    </div>
                </div>                 
            </div>

        </div>
    )

}