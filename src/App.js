import logo from './logo.svg';
import './App.css';
import SearchAppBar from './components/HeaderBarComponent'
import TaskDetailsComponent from './components/TaskDetailsComponent/TaskDetailsComponent'

function App() {
  return (
    <div className="App">
      <SearchAppBar/>
      <TaskDetailsComponent/>
    </div>
  );
}

export default App;
