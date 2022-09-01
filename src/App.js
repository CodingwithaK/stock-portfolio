
import './styling/App.css';
import HeaderComponent from './components/HeaderComponent'
import BodyComponent from './components/BodyComponent'
function App() {
  return (
    <div className="App">
      <div className="Header">
        <HeaderComponent/>
      </div>
      <div className="Body">
        <BodyComponent/>
      </div>
     
    </div>
  );
}

export default App;
