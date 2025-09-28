import My_Button from '../../../../../Components/My-Button'


export default function DxBox ({
    CodeHistory,
    TheseCodes,
    RangeOrCodeSelected,
    Reset,
    searchableCode,
    handleChange_searchableCode,
    CodeSearch
})
{

    const test = () =>{
        console.log(CodeHistory)
    }    
    return (
        <div>
                <div
                    style={{
                        display:'flex',
                        justifyContent:'space-between',
                        marginBottom:'20px'
                    }}
                    >

                        <My_Button
                            The_Text='Search For Code'
                            Width='150px'
                            Height='30px'
                            On_Click={CodeSearch}
                            FontSize='14px'
                        />         
                        <input
                            type='text'
                            value={searchableCode}
                            onChange={handleChange_searchableCode}
                            placeholder='ICD10 code to search for'
                        />
                        <My_Button
                            The_Text='Reset'
                            Width='150px'
                            Height='30px'
                            On_Click={Reset}
                            FontSize='14px'
                        />
                        {/* <My_Button
                            The_Text='test'
                            Width='150px'
                            Height='30px'
                            On_Click={test}
                            FontSize='14px'
                        />                         */}
                        
                    </div>
                {CodeHistory.map((oneCode) =>
                    <div
                        key={oneCode.code}
                        onClick={()=>RangeOrCodeSelected(oneCode.id)}
                        style={{
                            fontSize:'14px',
                            font:'arial',
                            marginLeft:`${(oneCode.steps*7).toString()}px`,
                            paddingBottom:'2px',
                            color:'red'
                        }}
                    >
                        {oneCode.description}
                    </div>
                )}
                {TheseCodes.map((oneCode)=>
                    <div
                        key={oneCode.code}
                        onClick={()=>RangeOrCodeSelected(oneCode.id)}
                        style={{
                            fontSize:'14px',
                            font:'arial',
                            marginLeft:`${(oneCode.steps*7).toString()}px`,
                            paddingBottom:'2px',
                            color:oneCode.color
                        }}
                        >
                            {oneCode.description}
                        </div>
                    )}
        
        </div>
    )
}