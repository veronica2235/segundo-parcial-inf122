import React from "react";
import'../style/Progreso.css';
function Progreso({objetivo, onDelete}){
    return(
    <div className="obj">
        <div className="obj-info">
            <p className="texto">{objetivo.texto}</p>
        </div>
        <button className='boton' onClick={()=> onDelete(objetivo.id)}><img src='../icons/basura.svg' alt=""/></button>
    </div>
    );
}
export default Progreso;