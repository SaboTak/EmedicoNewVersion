import './App.css';
import {Provider} from 'react-redux';
import store from './store/store'
import {useSelector} from 'react-redux'

/* Import components */
import {Login} from './Components/Login/Login'
import { Layout } from './Components/Layout/Layout.jsx';
import {Logout} from './Components/Logout/Logout'

function App() {

  return (
    <Provider store={store}>
      <Login />
      <Layout /> 
    </Provider>

  );
}

export default App;
