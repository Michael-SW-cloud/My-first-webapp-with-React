import Button from './components/Button';


function App() {
  return (
    <div>
      <div>
        <div className="logo">
          <img
            src="https://consider-it.de/wp-content/uploads/2024/06/CIT-horizontal-V1-20240221.svg"
            alt="Logo"
          />
        </div>

        <div className="demo-text">
          <p>Demo-text</p>
        </div>
        
      </div>
      <div className="field-text">
        <input type="text" className="input-text" />
      </div>

      <Button label={"ok"}/>
    </div>
  );
}

export default App;
