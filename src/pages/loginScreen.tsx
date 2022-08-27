import { useState } from "react"
import gearImg from '../assets/img/tecnologia.png'
import '../styles/styles.css'
import { Registration } from "./registration"

export function LoginScreen(){
  const[isModalVisible, setIsModalVisible] = useState(false)
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  


  return (
   <div className="container">
    <div className="containerLogin">
      <div className="wrapLogin">
        <form className="loginForm">
          <span className="loginFormTitle">Bem vindo!</span>
          <span className="loginFormTitle">
            <img src={gearImg} alt="Engrenagem" />
          </span>
          <div className="wrapInput">
            <input 
            className={email !== "" ? 'hasVal input' : 'input'} 
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)} 
            />
            <span className="focusInput" data-placeholder='Email'></span>
          </div>
          <div className="wrapInput">
            <input 
            className={password !== "" ? 'hasVal input' : 'input'} 
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)} 
            />
            <span className="focusInput" data-placeholder='Password'></span>
          </div>
          <div className="containerLoginFormBtn">
            <button className="loginFormBtn">
              Login
            </button>
          </div>
          <div className="footerFormLogin">
            <span className="text1">Não possui conta?</span>
            <a className='text2' onClick={()=> setIsModalVisible(true)}>Criar conta.</a>
            {isModalVisible ? <Registration/> : null}
          </div>
        </form>
      </div>
    </div>
   </div>
  )
}