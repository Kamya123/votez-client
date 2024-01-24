// Internal Imports
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

// External Imports
import { ThirdwebProvider } from '@thirdweb-dev/react';

// Components
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './providers/AuthProvider';
import './styles/globals.css';

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = 'ethereum';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <Router>
        <AuthProvider>
            <ThirdwebProvider
                activeChain={activeChain}
                clientId={process.env.REACT_APP_TEMPLATE_CLIENT_ID}
            >
                <App />
            </ThirdwebProvider>
        </AuthProvider>
    </Router>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
