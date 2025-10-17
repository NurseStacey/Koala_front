import MyListBox from '../../../../../Components/My-Listbox'

export default function MedProbSelect({
    medproblems,    
    disable_medProbList,
    clickedFunction,    
})
    
{

    return(
        <div
            style={{
                width:'15%',
                height:'50%',
                marginLeft:'3%',    
                marginTop:'3%',                                    
                border:'1px solid black'
            }}        
        >
            <div
                style={{
                    height:'100%',
                    border:'1px solid black'                    
                }}>
                <MyListBox
                    title='Choose Med Problem'
                    clickedFunction={clickedFunction}
                    doubleclickedFunction={null}
                    listArray={medproblems}
                    whichValue = {'name'}     
                />
            </div>
        </div>
    )
}