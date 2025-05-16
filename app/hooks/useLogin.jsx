'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const useLogin = () => {
  const router = useRouter();
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setError("");
    setLoading(true);

    if (!correo || !contrasena) {
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
      setError("Contraseña muy corta");
      setLoading(false);
      return;
    }

    setTimeout(() => {
      setLoading(false);
      router.push('/homepage');
    }, 2000);
  };

  return {
    correo,
    setCorreo,
    contrasena,
    setContrasena,
    error,
    loading,
    handleSubmit,
  };
};

export default useLogin;
