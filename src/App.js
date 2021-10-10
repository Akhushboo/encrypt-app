// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [inp, setInp] = useState('');
  const [encrypted, setEncrypted] = useState('');
  const [key, setKey] = useState(0);

  const handleEncryption = () => {
    let encryptedString = '';
    inp.split('').map((letter) => {
      let newCode;
      let code = letter.charCodeAt(0);
      console.log(code);
      if(code + key > 122){
        newCode = 97 + (122-code);
      } else {
        newCode = code + key;
      }
      encryptedString += String.fromCharCode(newCode);
      console.log(encryptedString);
      return letter;
    });
    setEncrypted(encryptedString);
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <input type="text" id="inpStr" placeholder='input String' value={inp} onChange={(e) => setInp(e.target.value)} />
      <input type="text" id="key" value={key} onChange={(e) => setKey(e.target.value)} />
      <input type="button" value="Encrypt" onClick={() => handleEncryption()}/>
      <input type="text" id="encrypted"placeholder='Encrypted String'  value={encrypted} onChange={(e) => setEncrypted(e.target.value)} />

    </div>
  );
}

export default App;
