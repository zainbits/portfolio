import React from 'react'
import './Dashboard.css'
import Navbar from '../../components/Navbar/Navbar'
import { Route, Routes, Navigate } from "react-router-dom";
import Settings from '../../layouts/Settings/Settings'
import Home from '../Home/Home'

const Dashboard = () => {
    console.log(process.env.PUBLIC_URL)
    return (
        <div className="dashboard">
            <Navbar />
            <Routes>
                <Route path="/portfolio/home" element={<Home />}/>
                <Route path="/portfolio/education" element={<div>education</div>}/>
                <Route path="/portfolio/settings" element={<Settings />} />
                <Route path="/portfolio/projects" element={<div>projects</div>}/>
                <Route path="/portfolio/skills" element={<div>skills</div>}/>
                <Route path="*" element={<Navigate replace to="/portfolio/home" />} />
            </Routes>
        </div>
    )
}

export default Dashboard