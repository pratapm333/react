import { Provider } from 'react-redux';
import './App.css';
import Body from './Body';
import Head from './Head';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './MainContainer';
import WatchPage from './WatchPage';

function App() {
  const appRoute = createBrowserRouter([{
    path: '/',
    element: <Body />,

    children: [
      {
        path: '/',
        element: <MainContainer />
      },
      {
        path: 'watch',
        element: <WatchPage />
      }
    ]
  }])
  return (
    <Provider store={store}>
    <div>
      <Head />
      <RouterProvider router={appRoute} />
    </div>
    </Provider>
  );
}

export default App;
