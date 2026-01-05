import {APP_ROUTES, type RouteConfig} from "./config.tsx";
import {Route, Routes } from 'react-router-dom';

const renderRoutes = (routes: RouteConfig[]) =>
    routes.map(({ key, path, element, children }) => (
        <Route
            key={key}
            path={path}
            element={element}
        >
            {children && renderRoutes(children)}
        </Route>
    ));

const AppRouter = () => {
    return <Routes>{renderRoutes(APP_ROUTES)}</Routes>
};

export default AppRouter;