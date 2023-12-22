import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import MinimizableWebChat from './components/MinimizableWebChat/MinimizableWebChat';
import TopBar from './components/TopBar/TopBar';

function App() {
  return (
    <div>
      <TopBar/>
      <Dashboard/>
      <MinimizableWebChat/>
    </div>
  );
}

export default App;
