import React, { createContext, ReactNode, useContext, useState } from 'react';

// Define el tipo para el contexto
interface RedirectContextType {
    hasEntered: boolean;
    setHasEntered: (hasEntered: boolean) => void;
    previousPath: string;
    setPreviousPath: (path: string) => void;
}

// Crea el contexto con valores por defecto
const RedirectContext = createContext<RedirectContextType | undefined>(undefined);

const RedirectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [hasEntered, setHasEntered] = useState<boolean>(false);
    const [previousPath, setPreviousPath] = useState<string>('');

    return (
        <RedirectContext.Provider value={{ hasEntered, setHasEntered, previousPath, setPreviousPath }}>
            {children}
        </RedirectContext.Provider>
    );
};

// Hook para usar el contexto de usuario
const useRedirect = () => {
    const context = useContext(RedirectContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

export { RedirectProvider, useRedirect };

