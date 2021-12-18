import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
// import { Route, Switch } from "react-router";

import Navbar from "../components/Header/Navbar/Navbar";
import  Home  from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/Sign";
import BranchManger from "../Pages/Tabs/BranchManger";
import RequestStatus from "../Pages/Tabs/RequestStatus";
import RequestTab from "../Pages/Tabs/RequestTab";

const AppRouting = () => {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route exact path="/" element={<Home />} />    
                <Route exact path="/SignIn" element={<SignIn />} />    
                <Route exact path="/Request" element={<RequestTab />} />
                <Route exact path="/RequestStatus" element={<RequestStatus />} />
                <Route exact path="/BranchManger" element={<BranchManger />} />
            </Routes>
        </Router>
    )
}
export default AppRouting;