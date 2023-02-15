// import whois from 'whois-api';
import './App.css';
import { } from '@mui/material'

function App() {
  return (
  
function lookup() {

  const xhr = new XMLHttpRequest();
  const domain= "google.com"
  xhr.open('GET', 'https://whois.com/whois/' + domain);
  xhr.onload = function() {
    if (xhr.status === 200) {
      var result = xhr.responseText;
      console.log(result); // or do something else with the result
    } else {
      console.log('Request failed.  Returned status of ' + xhr.status);
    }
  };
  xhr.send();
}   
  );
  
}

export default App;
