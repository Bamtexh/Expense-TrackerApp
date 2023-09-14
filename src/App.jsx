import './App.css';
import { BrowserRouter as Router,Routes, Route, BrowserRouter} from 'react-router-dom';
import  Auth  from './pages/auth/Auth';
import ExpenseTracker from './pages/expense-tracker/ExpenseTracker';
function App() {
  return (
    <div className='App'>
      <Router>
      <Routes>
      <Route path='/' element={<Auth />} />
        <Route path='/expense-tracker' element={<ExpenseTracker />} />
      </Routes>
      </Router>
    </div>
  )
}

export default App
