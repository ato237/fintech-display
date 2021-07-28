import React from 'react'
import './upinput.css'

function UpInput() {
    return (
        <div className = "upperOptions">
            <h4></h4>
           <h4>Du:</h4> 
           <span className="hanger"><input className="du" type="date"/></span>
           <h4>Au:</h4> 
           <span className="hanger"><input className="du" type="date"/></span>

           <h4>Mode de Traitement:</h4> <span className="hanger"><select >
           <option ></option>
           <option className="option">Automatique</option>
           <option className="option">Manuel</option>
               </select></span>

            <span className='divider'><button className = 'button'>Rechercher</button></span>
            <span className='divider'><button className = 'button'>Quitter</button></span>

           
        </div>
    )
}

export default UpInput
