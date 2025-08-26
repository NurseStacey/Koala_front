import AxiosInstance from '../../../utils/Axios'

function loadPatient(setThisPatient, patientID)
{

    AxiosInstance.get(`patients/get_this_patient_data/${patientID}`).then((res) =>{
         setThisPatient(res.data)
})
}

export default loadPatient