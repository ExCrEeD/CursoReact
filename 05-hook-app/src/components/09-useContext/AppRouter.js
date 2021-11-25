import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={<HomeScreen />} />
                        <Route exact path="/about" element={<AboutScreen />} />
                        <Route exact path="/login" element={<LoginScreen />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}
