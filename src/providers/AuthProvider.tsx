// Internal Imports
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Routes
import { AuthRoutes } from '../routes/AuthRoutes';

interface AuthContextProps {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Hook to use the authentication context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider: React.FC<{
    children: ReactNode;
}> = ({ children }) => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    // Simulates Login Action
    const login = () => {
        setIsAuthenticated(true);
    };

    // Simulates Logout Action
    const logout = () => {
        setIsAuthenticated(false);
    };

    // Function to check if the given path is in the AuthRoutes
    const isPathInAuthRoutes = (path: string) => {
        return AuthRoutes.some((route) => route.path === path);
    };

    useEffect(() => {
        const currentPath = window.location.pathname;
        if (isAuthenticated) {
            if (currentPath === '/') navigate('/feed');
        } else {
            if (!isPathInAuthRoutes(currentPath)) {
                navigate('/auth');
            }
        }
    }, [isAuthenticated, navigate]);

    // Provide the authentication context to the app
    const authContextValue: AuthContextProps = {
        isAuthenticated,
        login,
        logout,
    };

    return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};
