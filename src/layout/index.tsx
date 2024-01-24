interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="h-screen w-screen overflow-x-hidden  overflow-y-scroll bg-light">
            <div className="w-3/4 m-auto min-h-full">{children}</div>
        </div>
    );
};

export default Layout;
