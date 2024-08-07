import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div>

      
        <div className='logo'>
          <img
            src="https://consider-it.de/wp-content/uploads/2024/06/CIT-horizontal-V1-20240221.svg"
            alt="Logo"
          />
        </div>
        <div className='demo-text'>
          <p>Demo-text</p>
        </div>
      </div>
      <div className='field-text'>
          <input type='text' className='input-text'/>
      </div>

      <div className='div-go-button'>
        <button className='go-button'>GO</button>
      </div>

    </div>
  );
}

export default App;
