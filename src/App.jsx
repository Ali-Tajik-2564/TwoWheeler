import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useRoutes } from 'react-router-dom';
import routes from './router';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
function App() {
  const router = useRoutes(routes);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools
        initialIsOpen={false}
        position="right"
        buttonPosition="top-right"
      />
      <Header />
      {router}
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
