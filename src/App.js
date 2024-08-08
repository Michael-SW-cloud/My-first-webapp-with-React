import Button from './components/Button';
const handelClick = () => {
  console.log("button clicked!");
};

function App() {
  return (
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

      <div className="field-text">
        <input type="text" className="input-text" />
      </div>

      <Button label={"ok"} onClick={handelClick} />
    </div>
  );
}

export default App;
