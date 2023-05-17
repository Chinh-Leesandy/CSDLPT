import {Route, Routes} from 'react-router-dom'
import { Customer } from './components/Customer';
import { CustomerDetail } from './components/CustomerDetail';
import { CustomerTicket } from './components/CustomerTicket';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path = '/' element = {<Customer/>}/>
        <Route  path = '/customer/:id' element = {<CustomerDetail/>}/>
        <Route  path = '/customerTicket/:id' element = {<CustomerTicket/>}/>
      </Routes>
    </div>
  );
}

export default App;
