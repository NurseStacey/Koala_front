import Patient_Location_Modal_One from '../Components/modal-files/location-files/patient-location-modal-one'
import Patient_Location_Modal_Two from '../Components/modal-files/location-files/patient-location-modal-two'
import Patient_Location_Modal_Three from '../Components/modal-files/location-files/patient-location-modal-three'
import PatientFacilityID from '../Components/patient-facility-id'

import {useState} from 'react'
import AxiosInstance from '../../../utils/Axios'

export default function Patient_Location_Modals({Open,
    setPatient_Location_Mod,
    Update_Location,
    this_patient})

{

    const [All_Units,setAll_Units]=useState([])
    const [All_Beds,setAll_Beds]=useState([])    
    const [Temp_Patient_Location, set_Temp_Patient_Location] = useState({
        bed:'',
        unit:'',
        facility:''
    })

    
    const setFacility = (new_facility)=>{
        set_Temp_Patient_Location({
            bed:Temp_Patient_Location.bed,
            unit:Temp_Patient_Location.unit,
            facility:new_facility        
        })
    }

    const setUnit = (new_unit)=>{
        set_Temp_Patient_Location({
            bed:Temp_Patient_Location.bed,
            unit:new_unit,
            facility:Temp_Patient_Location.facility        
        })
    }    

    const setBed = (new_bed)=>{
        //console.log(new_bed)
        Update_Location({
            bed:new_bed.name,
            unit:Temp_Patient_Location.unit,
            facility:Temp_Patient_Location.facility                    
        })
        AxiosInstance.patch(`patients/one_patient/${this_patient['basic_data'].id}`, {bed:new_bed.id}).then((res) =>{
            })
    }

    return (

        <div>
            <PatientFacilityID
                open={Open}
                onClose={() => setPatient_Location_Mod('None')}
                patient = {this_patient}
            />


            <Patient_Location_Modal_One
                open={Open}
                onClose={() => setPatient_Location_Mod('None')}
                setFacility = {setFacility}
                facilityPicked={()=>setPatient_Location_Mod('unit')}
                setAll_Units={setAll_Units}
            />

            <Patient_Location_Modal_Two
                open={Open}
                onClose={() => setPatient_Location_Mod('None')}
                setUnit={setUnit}
                unitPicked={()=>setPatient_Location_Mod('bed')}
                All_Units={All_Units}
                setAll_Beds={setAll_Beds}
                Facility={Temp_Patient_Location.facility}
            />

             <Patient_Location_Modal_Three
                open={Open}
                onClose={() => setPatient_Location_Mod('None')}
                setBed={setBed}
                All_Beds = {All_Beds}
                patient_id = {this_patient['basic_data'].id}
                />
        </div>
    )

}