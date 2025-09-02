import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import ProtectedRoute from './utils/PrivateRoute'
import HomePage from './Pages/Home'
import Login_Form from './Pages/Login/LoginPage'
import New_Nursing_Home from './Pages/Nursing_Home/New_Nursing_Home'
import Nursing_Maintanance from './Pages/Nursing_Home/Nursing_Maintanance'
import One_Facility_Maintanance from './Pages/Nursing_Home/One_Facility_Maintanance'
import New_Patient from './Pages/Patients/New_Patient'
import Patient_Chart from './Pages/Patients/patient-chart'
import Patient_Management from './Pages/Patients/Patient_Maintenance'
import DrugManagement from './Pages/Patients/drug-management'

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
        
        <Route path="/patient_maintanance"  element={<Patient_Management/>}/>        
        <Route path="/New_Patient"  element={<New_Patient/>}/>        
        <Route path="/patient_chart"  element={<Patient_Chart/>}/>        
        <Route path="/drug_management"  element={<DrugManagement/>}/>        
        


      </Routes>
    </BrowserRouter>
  )
}

export default App;
