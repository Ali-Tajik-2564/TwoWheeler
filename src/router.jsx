import AdminIndex from './pages/AdminPanel/AdminIndex';
import AdminMainPage from './pages/AdminPanel/AdminMainPage';
import AdminUsers from './pages/AdminPanel/AdminUsers/AdminUsers';
import AdminProduct from './pages/AdminPanel/AdminProduct/AdminProduct';
import AdminOrders from './pages/AdminPanel/AdminOrders/AdminOrders';
import AdminArticles from './pages/AdminPanel/AdminArticles/AdminArticles';

import PrivatePAdmin from './components/Private/PrivatePAdmin';
import Blog from './pages/Blog/Blog';
import BlogList from './pages/Blog/BlogList';
import CheckOut from './pages/CheckOut/CheckOut';
import Contact from './pages/Contact/Contact';
import Item from './pages/Item/Item';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Payment from './pages/Payment/Payment';
import Register from './pages/Register/Register';
import ShowRoom from './pages/ShowRoom/ShowRoom';
import Specs from './pages/Specs/Specs';
import UserPanel from './pages/UserPanel/UserPanel';

const routes = [
  {
    path: '/',
    element: <Landing />,
  },
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
  { path: '/UserPanel', element: <UserPanel /> },
  { path: '/specs:name', element: <Specs /> },
  { path: '/contact-us', element: <Contact /> },
  { path: '/check-out', element: <CheckOut /> },
  { path: '/Payment-info/:id', element: <Payment /> },
  { path: '/*', element: <NotFound /> },
  {
    path: '/motorcycle-show/:page',
    element: <ShowRoom />,
  },
  {
    path: '/admin-panel/*',
    element: (
      <PrivatePAdmin>
        <AdminIndex />
      </PrivatePAdmin>
    ),
    children: [
      { path: '', element: <AdminMainPage /> },
      { path: 'users', element: <AdminUsers /> },
      { path: 'products', element: <AdminProduct /> },
      { path: 'articles', element: <AdminArticles /> },
      { path: 'orders', element: <AdminOrders /> },
    ],
  },
  { path: '/item/:id', element: <Item /> },
  {
    path: '/blogs/:page',
    element: <BlogList />,
  },
  { path: '/blog/:id', element: <Blog /> },
];
export default routes;
