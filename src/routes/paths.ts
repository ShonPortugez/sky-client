
export const ROUTES = {
    SURVEYS: 'surveys',
    EDITOR: 'surveys/:id/editor',
    SIGN_IN: 'sign-in',
    SIGN_UP: 'sign-up',
} as const;

export type RoutePath = typeof ROUTES[keyof typeof ROUTES];