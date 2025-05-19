'use client';
import { useState } from 'react';


const useRegister = () => {

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        setError("");
        setLoading(true);

        if (!nombre || !correo || !contrasena) {
            setError("Por favor, completa todos los campos");
            setLoading(false);
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correo)) {
            setError("Correo inválido");
            setLoading(false);
            return;
        }

        if (contrasena.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres");
            setLoading(false);
            return;
        }

        setTimeout(() => {
            setLoading(false);
            router.push('/auth/login'); // Redirigir al login después de registrarse
        }, 2000);
    };


    return {
        nombre,
        setNombre,
        correo,
        setCorreo,
        contrasena,
        setContrasena,
        error,
        loading,
        handleSubmit,
    };
};

export default useRegister;