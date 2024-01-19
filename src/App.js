import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import MinimizableWebChat from './components/MinimizableWebChat/MinimizableWebChat';
import NewsComponent from './components/NewsComponent/NewsComponent';
import TopBar from './components/TopBar/TopBar';

function App() {
  return (
    <div>
      <TopBar/>
      <NewsComponent/>
      <Dashboard/>
      <MinimizableWebChat/>
    </div>
  );
}

export default App;
