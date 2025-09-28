import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import ProtectedRoute from './utils/PrivateRoute'
import HomePage from './Pages/Home'
import Login_Form from './Pages/Login/LoginPage'
import New_Nursing_Home from './Pages/Nursing-Home/New-Nursing-Home'
import Nursing_Maintanance from './Pages/Nursing-Home/Nursing-Maintanance'
import One_Facility_Maintanance from './Pages/Nursing-Home/One-Facility-Maintanance'
import New_Patient from './Pages/Patients/New-Patient'
import Patient_Chart from './Pages/Patients/patient-chart'
import Patient_Management from './Pages/Patients/Patient-Maintenance'
import DrugManagement from './Pages/Medications/drug-management'
import UploadDrugOrders from './Pages/Medications/upload-drug-orders'
import Edit_Unit from './Pages/Nursing-Home/Edit-Unit'
import  Add_Unit from './Pages/Nursing-Home/Add-Unit'
import Upload_Census from './Pages/Nursing-Home/Upload-Census'




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"
          element={
            <ProtectedRoute>
              <HomePage/>
            </ProtectedRoute>
          }
        />
        <Route path="/log_in"  element={<Login_Form/>}/>    
        <Route path="/New_Nursing_Home"  element={<New_Nursing_Home/>}/>
        <Route path="/nursing_maintanance"  element={<Nursing_Maintanance/>}/>        
        <Route path="/One_Facility_Maintanance"  element={<One_Facility_Maintanance/>}/>
        <Route path="/Edit_Unit" element={<Edit_Unit/>}/>
        <Route path="/patient_maintanance"  element={<Patient_Management/>}/>        
        <Route path="/New_Patient"  element={<New_Patient/>}/>        
        <Route path="/patient_chart"  element={<Patient_Chart/>}/>        
        <Route path="/drug_management"  element={<DrugManagement/>}/>        
        <Route path="/upload_drug_orders"  element={<UploadDrugOrders/>}/>       
        <Route path="/add_facility_unit"  element={<Add_Unit/>}/>        
        <Route path="/upload_census"  element={<Upload_Census/>}/>
          
      </Routes>
    </BrowserRouter>
  )
}

export default App;
