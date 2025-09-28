import MyListBox from '../../../../../Components/My-Listbox'

export default function MedProbSelect({
    medproblems,    
    disable_medProbList,
    clickedFunction,
    doubleclickedFunction
})
    
{


    const localclickedFunction = (item)=>{
        if (!disable_medProbList) clickedFunction(item)
    }


    return(
        <div>
            <MyListBox
                title='Choose Med Problem'
                clickedFunction={localclickedFunction}
                doubleclickedFunction={null}
                listArray={medproblems}
                whichValue = {'problem_name'}     
                
            />
        </div>
    )
}