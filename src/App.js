import './App.css';
import Footer from './components/Footer';
import TableReal from './components/TableReal';
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  return (
    <div className="App">
          <Topbar/>
          <div className="container">
          <Sidebar/>
          <div className='others'><TableReal/></div>
          
          </div>
    </div>
  );
}

export default App;
