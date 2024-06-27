import { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import './Login.css'
import { useAuth } from '../Security/AuthContext'

export default function Login(){

    const [username, setUsername] = useState('kdojha115') 

    const [password, setPassword] = useState('12345678')

    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const authContext = useAuth()

    const navigate = useNavigate();

    function handleUsernameChange(event){
        setUsername(event.target.value);
    }

    function handlePasswordChange(event){
        setPassword(event.target.value);
    }

    function handleSubmit(){
        
        if(authContext.login(username, password)){
            setShowErrorMessage(false)
            navigate(`/viewtasklist/${username}`)
        }
        else{
            setShowErrorMessage(true)
        }
    }


    return (
        <div className="login">

            <h1>Hello, Welcome back! </h1>

            {showErrorMessage && <div className="errorMessage">Authentication Failed, Please check your credentials.</div>}

            <div className="loginForm">
                <div>
                    <label>User Name : </label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>

                <div>
                    <label>Password : </label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>

                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

