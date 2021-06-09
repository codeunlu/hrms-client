import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Nav from './layouts/Nav';
import Dashboard from './layouts/Dashboard';
import Footer from './layouts/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;
