

export function categListDiv(thisRecord)
{
    return(
        <div
            style={{}}>
                <div>{thisRecord['name']}</div>
        </div>
    )
}

export function  DxListDivWithPlan(thisRecord)
{
    return(
        <div
            style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between'
            }}>
                <div style={{paddingLeft:'3px'}}>{thisRecord['code_description']}</div>
                <div style={{paddingRight:'3px'}}>{thisRecord['current_plan']}</div>
        </div>
    )
}

export function  DxListDiv(thisRecord)
{
    return(
        <div
            style={{}}>
                <div>{thisRecord['name']}</div>
        </div>
    )
}
export function  RxListDiv(thisRecord)
{
    let strength = thisRecord.selectedMedStrength
    if (thisRecord.selectedMedStrength.split('/')[1]=='1') strength = thisRecord.selectedMedStrength.split('/')[0]

    let daysOfWeek=''
    if (thisRecord.scheduleChoice == 'Specific days of the week') {
        thisRecord.daysOfWeek.map((oneDay)=>{
            if (oneDay.isSelected) daysOfWeek=daysOfWeek+ oneDay.label.substring(0,2) + ', '
        })
        daysOfWeek = daysOfWeek.slice(0,-1)
    }


    return(

        <div
            key={thisRecord.id}
            style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'left',

            }}>
                
            <div style={{paddingRight:'3px', paddingLeft:'2px'}}>{thisRecord.selectedMedName}</div>
            <div style={{}}>{strength}</div>
            <div style={{paddingLeft:'5px'}}>{thisRecord.quantity}</div>
            <div style={{paddingLeft:'3px'}}>{thisRecord.selectedMedFormName}</div>
            {(thisRecord.rate=='X per day') ? 
                <div style={{paddingLeft:'5px'}}>{thisRecord.perDaySelected}</div> :
                <div style={{paddingLeft:'5px'}}>{thisRecord.quantity}</div>
            }
            {(thisRecord.scheduleChoice == 'Specific days of the week') ? 
                <div style={{paddingLeft:'5px'}}>{daysOfWeek}</div> :
                (thisRecord.scheduleChoice == 'Every x days') ? 
                <div style={{paddingLeft:'5px'}}>Every {thisRecord.everyXDays} Days</div> :
                <div style={{paddingLeft:'5px'}}>Every Day</div> 
            }
            
        </div>
    )

}