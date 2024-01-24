// Types
import { Route, createRoute } from '../types/Route.type';

// Utility functions
import { lazyLoadComponent } from '../utils/helper';

/**
 * Collection of authentication-related routes.
 * These routes are used for user authentication and authorization.
 */
export const AppRoutes: Route[] = [
    /*============================= FEED ROUTES ============================= */
    createRoute({
        path: '/feed',
        element: lazyLoadComponent('pages/app/Feed'),
    }),
];
