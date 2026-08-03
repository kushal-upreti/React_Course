import React from "react";
import Footer from './components/Footer'
import Header from './components/Header'
import { Outlet } from "react-router-dom";
import './App.css'

function Layout() {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        
        </>
    )
}

export default Layout