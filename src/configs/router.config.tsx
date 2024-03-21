import { createBrowserRouter } from 'react-router-dom';

// Configs
import pageUrlConfig from './pageUrl.config';

// Views
import HomeView from '@views/home/index.view';

export default createBrowserRouter([
  {
    path: pageUrlConfig.home,
    element: <HomeView />,
    children: [],
  },
]);
