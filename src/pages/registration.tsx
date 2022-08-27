import { useState } from 'react'
import '../styles/styles.css'

export function Registration(){

  const[email,setEmail] = useState("")

  return(
        <div className="container2">
          <div className="containerLogin">
            <div className="wrapLogin">
              <form>
                <div className="wrapInput">
                  <input 
                  className={email !== "" ? 'hasVal input' : 'input'} 
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)} 
                  />
                  <span className="focusInput" data-placeholder='Email'></span>
              </div>
              </form>
            </div>
          </div>
        </div>
      )
}