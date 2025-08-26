import {SURGICAL_HISTORY_FIELDS} from './surgical-history-fields'
import {MAJOR_EVENTS_FIELDS} from './major-events-fields'
import {OUTSIDE_PROVIDER_FIELDS} from './outside-provider-fields'

export const   ALL_FIELDS = {
    none:{
        form_title:'',
        all_fields:[],
        url:''
    },    
    outside_providers:{
        form_title:'New Outside Provider',
        all_fields:OUTSIDE_PROVIDER_FIELDS,
        post_url:'patients/outside_provider/',
        edit_url:'patients/one_patient/outside_provider/',
        label:[
            {
                name:'provider',
                style:{
                    paddingLeft:'10px',
                    paddingRight:'10px',
                    textAlign:'left',
                    width:'40%',
                }
            },
            {
                name:'specialty',
                style:{
                    paddingLeft:'10px',
                    paddingRight:'10px',
                    textAlign:'right',
                    width:'40%',
                }
            }              
        ]
    },
    surgical_history:{
        form_title:'New Surgery',
        all_fields:SURGICAL_HISTORY_FIELDS,
        post_url:'patients/surgical_history/',
        edit_url:'patients/one_patient/surgical_history/',
        label:[
            {
                name:'year',
                style:{
                    paddingLeft:'10px',
                    paddingRight:'10px',
                    textAlign:'left',
                    width:'20%',
                }
            },
            {
                name:'surgery',
                style:{
                    paddingLeft:'10px',
                    paddingRight:'10px',
                    textAlign:'right',
                    flex:'1',
                }                
            }
        ]
    },
    major_event:{
        form_title:'New Major Event',
        all_fields:MAJOR_EVENTS_FIELDS,
        post_url:'patients/major_event/',
        edit_url:'patients/one_patient/major_event/',
        label:[
            {
                name:'year',
                style:{
                    paddingLeft:'10px',
                    paddingRight:'10px',
                    textAlign:'left',
                    width:'20%',
                }
            },
            {
                name:'event',
                style:{
                    paddingLeft:'10px',
                    paddingRight:'10px',
                    textAlign:'right',
                    flex:'1'
                }
            }              
        ]
    }

}