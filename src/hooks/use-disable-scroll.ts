import { useEffect } from "react";

export const useDisableScroll = (seconds: number) => {
    useEffect(() => {
        // Deshabilitar scroll
        document.body.style.overflow = 'hidden';

        // Configurar un temporizador para habilitar el scroll después de 'seconds'
        const timer = setTimeout(() => {
            document.body.style.overflow = 'auto';
        }, seconds * 1000);

        // Función de limpieza que se ejecuta al desmontar o actualizar el componente
        return () => {
            // Limpiar el temporizador para asegurarse de que no se ejecuta si el componente se desmonta
            clearTimeout(timer);
            // Restablecer el scroll para evitar que quede bloqueado si el hook se desmonta prematuramente
            document.body.style.overflow = 'auto';
        };
    }, [seconds]); // Añadir 'seconds' como dependencia para reaccionar a cambios en este valor
}
