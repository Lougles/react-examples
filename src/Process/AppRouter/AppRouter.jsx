import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import {publicRoutes} from "../../Utils/routes";
import { Navigate, Route, Routes } from 'react-router-dom'
export const AppRouter = () => {
  return (
    <div>
      <Header />
      <Routes>
        {publicRoutes.map(({path, Component}) =>
          <Route key={path} path={path} element={<Component/>}/>
        )}
        <Route  path="*" element={<Navigate to='/' replace />} />
      </Routes>
      <Footer />
    </div>
  )
}