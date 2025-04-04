import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import App from './app';
import Home from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';

// Create Apollo Client instance
const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql', 
  cache: new InMemoryCache(),
});

// Set up your routes using React Router
const router = createBrowserRouter([
  {
    path: '/',  // Main App route
    element: <App />,
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: 'login',  
        element: <Home />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
    ],
  },
 
  {
    path: '*', 
    element: <h1>404 Not Found</h1>,
  },
]);

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}
