
import { AuthProvider } from './hooks/useAuth';
import { ModalProvider } from './hooks/useModal';
import {AppRoutes} from './routes'
import { GlobalStyle } from './styles/global';
import { QueryClientProvider} from 'react-query'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { queryCliente } from './service/queryCliente';

function App() {
  return (
    <QueryClientProvider client={queryCliente}>
      <AuthProvider>
        <ModalProvider>
          <AppRoutes />
          <GlobalStyle/>
        </ModalProvider>
        <ToastContainer />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
