import './App.css';
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
            <TableTest/>
            </div>
          
          </div>
    </div>
  );
}

export default App;
