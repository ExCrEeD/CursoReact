import React from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen'
import { DashBoardRoutes } from './DashBoardRoutes'
import { PrivateRouter } from './PrivateRouter'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginScreen />
                    </PublicRoute>
                }/>
                
                <Route path="/*" element={
                    <PrivateRouter>
                        <DashBoardRoutes/>
                    </PrivateRouter>
                }/>
                
            </Routes>
        </BrowserRouter>
    )
}
