import './App.css';
import Headers from './components/Header/Headers';
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
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  const router = useRoutes(routes);
  const queryClient = new QueryClient();
  return (
    <>
      <Headers />
      {/* <QueryClientProvider client={queryClient}> */}
      {/* <ReactQueryDevtools
          initialIsOpen={false}
          position="right"
          buttonPosition="top-right"
        /> */}
      {router}
      <Footer />
      {/* </QueryClientProvider> */}
    </>
  );
}

export default App;
