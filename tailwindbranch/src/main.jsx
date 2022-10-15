import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import AuthContextProvider from './contexts/AuthContext';
import UserContextProvider from './contexts/mojocontext';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from "react-query";
import '../src/pages/App.css'
 



const queryClient = new QueryClient();




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Router>
       <AuthContextProvider>
         <ChakraProvider>
           <App />
         </ChakraProvider> 
       </AuthContextProvider>
    </Router>
     </QueryClientProvider>  
  </React.StrictMode>
);



