import { Container } from '@material-ui/core/';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import store from './components/store';
import Routes from './routes';

const App = () => {

  const localCart = JSON.parse(localStorage.getItem('dioshopping: cart'))

  if (localCart)
    store.dispatch({ type: 'CHANGE_CART', localCart })


  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Container maxWidth="100vw">
          <Routes />
        </Container>
      </Router>
      <div className="opacity-0"><h1>-</h1></div>
      <Footer />
    </Provider>
  )
}

export default App;
