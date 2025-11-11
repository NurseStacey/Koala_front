let todayDate = new Date()
let month=todayDate.getMonth()+1
let monthStr=month.toString()
if (month<10) monthStr='0' + month.toString()

let day=todayDate.getDay()
let dayStr=day.toString()
if (day<10) dayStr = '0'+ day.toString()

let yearStr=todayDate.getFullYear().toString()
// export const setDataValue = (value, which,setALLData, AllData)=>
//     {
//         let newALLData=JSON.parse(JSON.stringify(ALLData))
//         newALLData[which]=value
//         setALLData(newALLData)
//     }

export const ALLDataDefault={
        'selectedMed':{
            'drugName':'',
            'drugForm':[]},
        'selectedMedForm':{
            'formName':'',
            'strengths':[]
        },
        'prescriptionDB':0,
        'selectedMedStrength':'',
        'scheduleChoice':'',
        'WeekDays':[
        {'label':'Monday', 'value':1,'isSelected':false},
        {'label':'Tuesday', 'value':2,'isSelected':false},
        {'label':'Wednesday', 'value':4,'isSelected':false},
        {'label':'Thurseday', 'value':8,'isSelected':false},
        {'label':'Friday', 'value':16,'isSelected':false},
        {'label':'Saturday', 'value':32,'isSelected':false},
        {'label':'Sunday', 'value':64,'isSelected':false}
    ],
        'everyXDays':0,
        'PRN':false,
        'quantity':0,
        'periodValue':'',
        'period':'',
        'rate':'',
        'rateOrPeriod':'rate',
        'perDaySelected':'',
        'Startdate':yearStr + '-' +monthStr + '-' + dayStr,
        'Enddate':yearStr + '-' +monthStr + '-' + dayStr,
        'Starttime':800,
        'Endtime':800,
        'Indefinite':true,
        'SpecialInstructions':'',
        'Categories':[],
        'DxCodes':[],
        'patientID':-1
    }

    export const MedFormObjDefault={
        'selectedMedForm':{
            'formName':'',
            'strengths':[]
        },
        'optionsMedForm':[]        
    }

    export const MedStrengthObjDefault={
        'selectedMedStrength':'',
        'optionsMedStrength':[]
    }

    export const LoadSavedDrug=(setALLData,RxToEdit,fullMedicationList) =>{

        let newALLData = ALLDataDefault
            //MedNameClicked
        let thisMed = fullMedicationList.find((oneMed)=>oneMed['drugName']==RxToEdit['selectedMedName'])
        newALLData['selectedMed']=thisMed
        let thisMedForm=thisMed['drugForm'].find((oneMedForm)=>oneMedForm['formName']==RxToEdit['selectedMedFormName'])
        newALLData['selectedMedForm']=thisMedForm
        newALLData['selectedMedStrength']=RxToEdit['selectedMedStrength']
        newALLData['prescriptionDB']=RxToEdit['id']
        newALLData['scheduleChoice']=RxToEdit['scheduleChoice']
        newALLData['Indefinite']=RxToEdit['Indefinite']
        newALLData['PRN']=RxToEdit['PRN']
        newALLData['SpecialInstructions']=RxToEdit['SpecialInstructions']
        newALLData['Startdate']=RxToEdit['Startdate']

        newALLData['Enddate']=RxToEdit['Enddate']
        newALLData['EveryXDays']=RxToEdit['EveryXDays']
        newALLData['perDaySelected']=RxToEdit['perDaySelected']
        newALLData['period']=RxToEdit['period']
        newALLData['periodValue']=RxToEdit['periodValue']
        newALLData['prescriptionDB']=RxToEdit['id']
        newALLData['quantity']=RxToEdit['quantity']
        newALLData['rate']=RxToEdit['rate']
        newALLData['rateOrPeriod']=RxToEdit['rateOrPeriod']
        newALLData['rateOrPeriod']=RxToEdit['rateOrPeriod']
        newALLData['WeekDays']=RxToEdit['WeekDays']
        newALLData['Categories']=RxToEdit['Categories']
        newALLData['DxCodes']=RxToEdit['DxCodes']

        setALLData(newALLData)

    }