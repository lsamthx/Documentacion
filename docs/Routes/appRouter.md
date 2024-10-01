---
sidebar_position: 147
---

# AppRouter.js

 El enrutador (AppRouter) utiliza React Router para gestionar las rutas de la aplicación.

```jsx 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./../views/Login";
import PageNotFound from "../views/PageNotFound";
import OptionService from "../views/OptionService/OptionService";
import Dashboard from "../views/OptionDashboard/Dashboard";
import Reportes from "../views/Reportes/Reportes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import AgentsHome from "../views/AgentsHome/AgentsHome";
import ModalView from "../views/Modal";

export const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={
    <PublicRoute>
    <Login />
    </PublicRoute>
    }
    />

    <Route
    path="/option-dashboard"
    element={
    <PrivateRoute  allowedClasses={["_ADMIN_", "_COADMIN_", "_SUPERVISOR_"]}>
    <Dashboard />
    </PrivateRoute>
    }
    />
    <Route
    path="/option-service/:id"
    element={
    <PrivateRoute  allowedClasses={["_ADMIN_", "_COADMIN_", "_SUPERVISOR_"]}>
    <OptionService />
    </PrivateRoute>
    }
    />
    <Route
    path="/reportes"
    element={
    <PrivateRoute  allowedClasses={["_ADMIN_", "_COADMIN_", "_SUPERVISOR_"]}>
    <Reportes />
    </PrivateRoute>
    }
    />

    <Route
    path="/modal"
    element={
    <PrivateRoute  allowedClasses={["_ADMIN_", "_COADMIN_", "_SUPERVISOR_"]}>
    <ModalView />
    </PrivateRoute>
    }
    />

   <Route
   path="/agents-home"
   element={
   <PrivateRoute allowedClasses={["_AGENT_"]}>
   <AgentsHome/>
   </PrivateRoute>
         
   }
   />
   {/* 👇️ only match this when no other routes match */}
   <Route path="*" element={<PageNotFound />} />
   </Routes>
   </BrowserRouter>
  );
};
```

## Ruta - Login:

Cuando la URL coincide con "/", se renderiza el componente Login dentro de un componente PublicRoute. Este componente controla el acceso público y redirige a los usuarios autenticados a otras rutas.

## Ruta "/option-dashboard" - Dashboard

Renderiza el componente Dashboard dentro de un componente PrivateRoute que permite el acceso solo a usuarios con roles específicos: "ADMIN", "COADMIN", y "SUPERVISOR".

## Ruta "/option-service/id" - OptionService

Renderiza el componente OptionService dentro de un componente PrivateRoute que también permite el acceso solo a usuarios con roles específicos: "ADMIN", "COADMIN", y "SUPERVISOR".

## Ruta "/reportes" - Reportes

Renderiza el componente Reportes dentro de un componente PrivateRoute que permite el acceso solo a usuarios con roles específicos: "ADMIN", "COADMIN", y "SUPERVISOR".

## Ruta "/modal" - ModalView

Renderiza el componente ModalView dentro de un componente PrivateRoute que permite el acceso solo a usuarios con roles específicos: "ADMIN", "COADMIN", y "SUPERVISOR".

## Ruta "/agents-home" - AgentsHome

Renderiza el componente AgentsHome dentro de un componente PrivateRoute que permite el acceso solo a usuarios con el rol "AGENT".

## Ruta no coincidente ("*") - PageNotFound

En caso de que ninguna de las rutas anteriores coincida, se renderiza el componente PageNotFound.

Es importante notar que PrivateRoute y PublicRoute son componentes personalizados que implementan la lógica de autorización. Por ejemplo, PrivateRoute podría redirigir a la página de inicio de sesión si el usuario no está autenticado o no tiene el rol necesario.