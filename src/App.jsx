import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import EnquiryForm from './Components/EnquiryForm';
import Section2 from './Components/Section2';
import HealingPrograms from './Components/HealingPrograms'; 
import ProgramDetails from './Components/ProgramDetails'; 
import ClientForm from './Components/ClientForm'; 
import PackageSelection from './Components/PackageSelection'; 

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/enquiry-form" element={<EnquiryForm />} />
                <Route path="/second-section" element={<Section2 />} />
                <Route path="/healing-programs" element={<HealingPrograms />} />
                <Route path="/program-details/:programName" element={<ProgramDetails />} /> 
                <Route path="/client-form/:programName" element={<ClientForm />} /> 
                <Route path="/package-selection/:programName" element={<PackageSelection />} />
            </Routes>
        </Router>
    );
}

export default App;
