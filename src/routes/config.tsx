import type {ReactElement} from "react";
import {ROUTES} from "./paths.ts";
import HomePage from "../pages/HomePage.tsx";
import SignInPage from "../pages/SignInPage.tsx";
import SignUpPage from "../pages/SignUpPage.tsx";
import RootLayout from "../pages/RootLayout.tsx";
import SurveyEditorPage from "../pages/SurveyEditorPage.tsx";


export interface RouteConfig {
    key: string;
    path: string;
    element: ReactElement;
    children?: RouteConfig[];
}

export const APP_ROUTES: RouteConfig[] = [
    {
        key: 'root-layout',
        path: '/',
        element: <RootLayout />,
        children: [
            { key: 'home', path: ROUTES.HOME, element: <HomePage /> },
            { key: 'editor', path: ROUTES.EDITOR, element: <SurveyEditorPage /> },
            { key: 'sign-in', path: ROUTES.SIGN_IN, element: <SignInPage /> },
            { key: 'sign-up', path: ROUTES.SIGN_UP, element: <SignUpPage /> },
        ],
    },
]