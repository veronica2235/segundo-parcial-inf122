import React from "react";
import Progreso from "./Progreso";
import '../style/ListaMetas.css';
import { useState } from "react";
function ListaMetas(){
    const [metas, setMetas]=useState([]);
    const [nuevaMeta,setNuevaMeta]= useState('');
    const agregarMeta=()=>{
        if(nuevaMeta.trim()==='') return;
        setMetas([...metas,{id:Date.now(), texto: nuevaMeta}]);
        setNuevaMeta('');
    };
    const eliminarMeta = (id)=>{
        setMetas((metasAnteriores) => metasAnteriores.filter((meta)=>meta.id !==id));
    };
    return(
        <div className="contenedor-principal">
            <h2 className="title">Mis metas</h2>
            <div className="add-meta">
                <input type='text'value={nuevaMeta} 
                placeholder="NuevaMeta"
                onChange={(e)=>setNuevaMeta(e.target.value)}/>
                <button className='boton' onClick={agregarMeta}>add</button>
            </div>
            <div className="contenedor-metas">
            {metas.map((meta)=>(
                        <Progreso
                        key={meta.id}
                        objetivo={meta}
                        onDelete={eliminarMeta}
                        />
            ))}
            </div>
        </div>
    );
}
export default ListaMetas;