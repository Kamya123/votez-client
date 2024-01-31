// Hooks
import { useAuth } from '../providers/AuthProvider';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { isAuthenticated } = useAuth();
    if (isAuthenticated) {
        return (
            <div className="h-screen w-screen overflow-x-hidden overflow-y-scroll bg-dark">
                <div className="w-3/4 m-auto min-h-full py-4">{children}</div>
            </div>
        );
    } else {
        return (
            <div className="h-screen w-screen overflow-x-hidden overflow-y-scroll bg-dark">
                {children}
            </div>
        );
    }
};

export default Layout;
