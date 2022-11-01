import { createContext, useState, useEffect } from 'react';
import clienteAxios from '../config/axios';

const PacientesContext = createContext();

const PacientesProvider = ({children}) =>{

    const [ pacientes, setPacientes ] =  useState([]);
    const [ paciente, setPaciente ] =  useState({});

    useEffect(()=>{
        const obtenerPacientes = async () =>{
            try{
                const token = localStorage.getItem('token');
                if(!token) return;

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                };
                const { data } = await clienteAxios('/pacientes', config);
                setPacientes(data);
            } catch (error){
                console.log(error);
            }
        }
        obtenerPacientes();
    },[]);

    const guardarPaciente = async (paciente) =>{
        console.log(pacientes)
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }     

       if(paciente.id) {
            try{
                const { data } = await clienteAxios.put(`/pacientes/${paciente.id}`, paciente, config);
                console.log(data);
                const pacientesActualizados = pacientes.map( pacienteState => pacienteState._id === data._id ? data : pacienteState);
                setPacientes(pacientesActualizados);
            } catch (error) {
                console.log(error);
            }
       }else{
            try{
                const { data } = await clienteAxios.post('/pacientes', paciente, config)
                console.log(data)
                //const { ...pacienteAlmacenado } = data
                setPacientes([data, ...pacientes])
                //console.log(pacienteAlmacenado)
                console.log(pacientes)
            } catch (error) {
                console.log(error.response.data.msg);
            }
       }
    };

    const setEdicion = (paciente) =>{
        setPaciente(paciente);
    };

    const eliminarPaciente = async (id) =>{
        const confirmar = confirm('¿Confirmas que deseas eliminar?');

        if(confirmar){
            
            try{
                const token = localStorage.getItem('token');
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                } 

                const { data } = await clienteAxios.delete(`/pacientes/${id}`, config);

                const pacientesActualizados = pacientes.filter( pacienteState => pacienteState._id !== id);
                setPacientes(pacientesActualizados);

            } catch (error){
                console.log(error);
            }
        };
    };
    

    return (
        <PacientesContext.Provider
            value={{
                pacientes,
                guardarPaciente,
                setEdicion,
                paciente,
                eliminarPaciente
            }}        
        >
            {children}
        </PacientesContext.Provider>
    );
}

export {
    PacientesProvider
}

export default PacientesContext;
