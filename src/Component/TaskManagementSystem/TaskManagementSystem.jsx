import Login from "../Login/Login";
import './TaskManagementSystem.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import ViewTaskList from "../ViewTaskList/ViewTaskList";
import ViewTaskItem from "../ViewTaskItem/ViewTaskItem";
import AddTaskItem from "../AddTaskItem/AddTaskItem";
import EditTaskItem from "../EditTaskItem/EditTaskItem";
import ErrorPage from "../ErrorPage/ErrorPage";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Logout from "../Logout/Logout";
import AuthProvider, { useAuth } from "../Security/AuthContext";

function AuthenticatedRoute({children}){

    const authContext = useAuth()

    if(authContext.isAuthenticated)
        return children

    return <Navigate to="/" />
}

export default function TaskManagementSystem() {
    return (
        <div className="TaskManagementSystem">
            
            <AuthProvider>
                <BrowserRouter>

                    <Header/>

                    <Routes>
                        <Route path="/" element={<Login/>}></Route>
                        <Route path="/login" element={<Login/>}></Route>

                        <Route path="/viewtasklist/:username" element={
                            <AuthenticatedRoute>
                                <ViewTaskList/>
                            </AuthenticatedRoute>
                        }/>

                        <Route path="/viewtaskitem" element={
                            <AuthenticatedRoute>
                                <ViewTaskItem/>
                            </AuthenticatedRoute>
                            
                        }/>

                        <Route path="/addtaskitem" element={
                            <AuthenticatedRoute>
                                <AddTaskItem/>
                            </AuthenticatedRoute>
                        }/>

                        <Route path="/edittaskitem" element={
                            <AuthenticatedRoute>
                                <EditTaskItem/>
                            </AuthenticatedRoute>
                        }/>

                        <Route path="/logout" element={
                            <AuthenticatedRoute>
                                <Logout/>
                            </AuthenticatedRoute>
                        }/>
                        
                        <Route path="*" element={<ErrorPage/>}></Route>
                    </Routes>
                
                    <Footer/>

                </BrowserRouter>
            </AuthProvider>

            
        </div>
    )
}