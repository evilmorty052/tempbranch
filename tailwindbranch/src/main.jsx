import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import AuthContextProvider from './contexts/AuthContext';
import UserContextProvider from './contexts/mojocontext';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../src/pages/App.css'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'



const queryClient = new QueryClient();




ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient} retry={6} >
  {/* <ReactQueryDevtools initialIsOpen={false} /> */}
  <React.StrictMode>
    <Router>
       <AuthContextProvider>
         <ChakraProvider>
           <App />
         </ChakraProvider> 
       </AuthContextProvider>
      
    </Router>
  </React.StrictMode>
 
</QueryClientProvider>  
);



