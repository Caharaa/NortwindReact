import React,{useState} from "react";
import axios from "axios";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e)=>{
     e.preventDefault();
    console.log(`userName${username} password${password}`)
    axios.post("http://localhost:5047/api/Authen/Login",{userName:username,
        password:password
    }).then((res=>{
        console.log(res.data)
        const token = res.data.accessToken
        localStorage.setItem("token",token);
        console.log(localStorage.getItem("token"));
    })).catch(err => {
        console.log(err);
    })
  }
    return(
        <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          name="username"
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          name="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
        </>
    )
}

export default Login;