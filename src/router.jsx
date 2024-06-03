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
import WishList from './pages/WishList/WishList';

const routes = [
  {
    path: '/',
    element: <Landing />,
  },
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
  { path: '/UserPanel', element: <UserPanel /> },
  { path: '/specs:name', element: <Specs /> },
  { path: '/WishList', element: <WishList /> },
  { path: '/contact-us', element: <Contact /> },
  { path: '/check-out', element: <CheckOut /> },
  { path: '/Payment-info', element: <Payment /> },
  { path: '/*', element: <NotFound /> },
  {
    path: '/motorcycle-show',
    element: <ShowRoom />,
    children: [{ path: 'item:id', element: <Item /> }],
  },
  {
    path: '/blogs',
    element: <BlogList />,
    children: [{ path: 'blog:id', element: <Blog /> }],
  },
];
export default routes;
