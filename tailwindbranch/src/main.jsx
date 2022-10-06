import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import AuthContextProvider from './contexts/AuthContext';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from "react-query";



const queryClient = new QueryClient();




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <QueryClientProvider client={queryClient}>
       <AuthContextProvider>
         <ChakraProvider>
           <App />
         </ChakraProvider> 
       </AuthContextProvider>
     </QueryClientProvider>  
    </Router>
  </React.StrictMode>
);



