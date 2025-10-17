
import {useEffect, useState} from 'react'
import AxiosInstance from '../../../utils/Axios'
import SelectedCodeBox from '../Components/modal-files/dx-modal-pieces/dx-selected'
import DxBox from '../Components/modal-files/dx-modal-pieces/dx-box'
import DxDetails from '../Components/modal-files/dx-modal-pieces/dx-details'
import MedProbSelect from '../Components/modal-files/dx-modal-pieces/med-prob-select'
import PrescriptionsBox from '../Components/modal-files/dx-modal-pieces/dx-prescriptions'
import DxModalButtons from '../Components/modal-files/dx-modal-pieces/dx-buttons'

export default function ModalNewDiagnosisOLD({
  openSwitch, 
    onClose, 
    patientID,
    currentCodes,
    CodeToEdit,
    setCodeToEdit,
    ReloadPatient,
    selected_problem,
    medproblems}){
     
        if (!openSwitch['DxOpenNew']) return null
        return (
     <div
            className='OVERLAY_STYLES'>
            <div
                className='MODAL_STYLE_BIG'
            >
                <div >Diagnosis Code List</div> 
            </div>
        </div>

        )}