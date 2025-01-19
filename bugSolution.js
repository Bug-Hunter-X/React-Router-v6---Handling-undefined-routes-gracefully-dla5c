This solution uses the `useRoutes` hook.  Other approaches using `<Route>` components and `<Routes>` will also work.

```javascript
import { useRoutes } from 'react-router-dom';

function NotFound() {
  return <h1>404 - Page not found!</h1>;
}

const routes = [
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '*',
    element: <NotFound/>
  }
];

function App() {
  const element = useRoutes(routes);
  return element;
}

```
This solution provides error handling that displays a 404 page if there is no defined route that matches the requested URL, improving the user experience and preventing unexpected behavior.