import './App.css';
import {Provider} from 'react-redux';
import store from './store/store'
import {useSelector} from 'react-redux'

/* Import components */
import {Login} from './Components/Login/Login'
import { Layout } from './Components/Layout/Layout';
import {Logout} from './Components/Logout/Logout'
import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);

  return (
    <Provider store={store}>
      {user ? <Layout /> : <Login />}
    </Provider>

  );
}

export default App;
