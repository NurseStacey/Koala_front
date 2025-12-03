import AxiosInstance from '../../../utils/Axios'

export default function loadPatient(setThisPatient, patientID)
{

    AxiosInstance.get(`patients/get_this_patient_data/${patientID}`).then((res) =>{

      let newPatient = DefaultPatient()
      Object.keys(res.data).map((oneKey)=>(newPatient[oneKey]=res.data[oneKey]))
      setThisPatient(newPatient)     
})
}

export function DefaultPatient(){   
   return {
        'basic_data':{
            'id':-1,
            'gender':'',
            'first_name':'',
            'last_name':'',
            'age':'',
            'med_bio':'',
            'family_history':'',
            'social_history':'',
            'Date_Of_Birth':'1900-01-01',
            'resolved_med_history':''
        },
        'medical_categories':[],
        'dx_codes':[],
        'prescriptions':[],
        'patient_location':{
            'facility':'',
            'bed':'',
            'unity':''},
        'facility_id':-1,
        'surgical_history':[],
        'major_event':[],
        'outside_providers':[],
        'vaccine_history':[],
        'drug_intollerances':[],
        'allergies':[],
         getDOB: function(){
            let dateValues = this.basic_data['Date_Of_Birth'].slice(0,10).split('-')
            return dateValues[1] + '-' + dateValues[2] +'-' + dateValues[0]
         },
         getCategNames:function(){
            let these_categories = []
            this.medical_categories.map((one_categ)=>these_categories.push({name:one_categ.categ_name}))
            return (these_categories.sort((a,b)=>a.name.toLowerCase().localeCompare(b.name.toLowerCase())))
         },
         get_this_record:function(recordID, which){ 
            return this[which].find(oneRecord =>oneRecord.id==recordID)},
         getMedCategsList: function() {
            let these_categories = []
            this.medical_categories.map((one_problem)=>these_categories.push({
                  name:one_problem.categ_name,
                  id:one_problem.id
            }))
            return these_categories.sort((a,b)=>a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
         },
         getDxList: function() {
            let these_dx = []
            this['dx_codes'].map((one_dx)=>these_dx.push({
                  name:one_dx.description,
                  id:one_dx.id
            }))       
            return these_dx.sort((a,b)=>a.name.toLowerCase().localeCompare(b.name.toLowerCase()))        
         },
         getRxList: function() {
            let these_rx = []
            this['prescriptions'].map((one_rx)=>{
                  //console.log(one_rx)
                  these_rx.push({
                  name:one_rx.selectedMedName,
                  strength:one_rx.selectedMedStrength,
                  id:one_rx.id
            })})
            return these_rx.sort((a,b)=>a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
         },             
    }
   }

export function DefaultDxCode() {
        return({
         'dx_code_id':-1,
         'dx_code':'',
         'details':'',
         'code_history':[],
         'parent':-1,
         'description':'',
         'id':-1,
         'can_delete':false
        })        
    }

export function DefaultCateg(){
   return({
      'id':-1,
      'DxCodes':[],
      'categ_name':'',
      'details':'',
      'frequencynumber':1,
      'frequencyoption':'monthly',
      'prescription':[],
      'status':'Active'
   })
}
