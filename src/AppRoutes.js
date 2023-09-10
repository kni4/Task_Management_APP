import React from 'react'
import { Routes, Route } from "react-router-dom";
import TaskDetailsComponent from "./components/TaskDetailsComponent/TaskDetailsComponent";
import NotFound from "./components/NotFound"
export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/board" element={<TaskDetailsComponent />} exact />
            <Route path="*" element={<NotFound />} exact />
          </Routes>
      )
}
