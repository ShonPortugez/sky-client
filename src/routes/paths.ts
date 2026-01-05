
export const ROUTES = {
    HOME: '/',
    SIGN_IN: 'sign-in',
    SIGN_UP: 'sign-up',
} as const;

export type RoutePath = typeof ROUTES[keyof typeof ROUTES];