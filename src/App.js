import './App.css';
import Downbar from './components/Downbar';
import TableReal from './components/TableReal';
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import UpInput from './components/UpInput';
import TableTest from './components/TableTest'

function App() {
  return (
    <div className="App">
          <Topbar/>
          <div className="container">
          <Sidebar/>
          <div className='others'>
            <UpInput/>
            <TableReal/>
            <Downbar/>
            <TableTest/>
            </div>
          
          </div>
    </div>
  );
}

export default App;
