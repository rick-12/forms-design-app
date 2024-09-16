import './App.css';
import CreateUser from './components/Create User/CreateUser';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CreateUser />
      </LocalizationProvider>
    </div>
  );
}

export default App;
