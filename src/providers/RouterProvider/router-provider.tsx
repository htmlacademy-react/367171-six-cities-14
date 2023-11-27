import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { routeConfig } from '../../routes/routes.tsx';

const router = createBrowserRouter(routeConfig);

export const AppRouter = () => <RouterProvider router={router} />;
