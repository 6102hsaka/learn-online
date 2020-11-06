import './App.css';
import Header from './components/HeaderComponent';
import MainComponent from './components/MainComponent';
import Footer from './components/FooterComponent';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <MainComponent />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
