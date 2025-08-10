import  {ALL_GENDERS} from '../../constants'

export const PATIENT_FIELDS = [
    {
        'order':0,
        'field_name':'first_name',
        'field_label':'First Name',
        'field_type':'text',
        'options':[],
        'value':''
    },
   {
        'order':1,
        'field_name':'last_name',
        'field_label':'Last Name',
        'field_type':'text',        
        'options':[],
        'value':''
    },
   {
        'order':2,
        'field_name':'Date_Of_Birth',
        'field_label':'Date of Birth',
        'field_type':'date',        
        'options':[],
        'value':''
    },
   {
        'order':3,
        'field_name':'gender',
        'field_label':'Gender',
        'field_type':'dropdown',
        'options':ALL_GENDERS,
        'value':'Female'
    },

]