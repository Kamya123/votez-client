// Types
import { Route, createRoute } from '../types/Route.type';

// Utility functions
import { lazyLoadComponent } from '../utils/helper';

/**
 * Collection of authentication-related routes.
 * These routes are used for user authentication and authorization.
 */
export const AuthRoutes: Route[] = [
    /*============================= AUTHENTICATION ROUTES ============================= */
    createRoute({
        path: '/auth',
        element: lazyLoadComponent('pages/auth'),
    }),
];
