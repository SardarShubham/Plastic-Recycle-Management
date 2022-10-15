import logo from './logo.svg';
import './App.css';

import reportWebVitals from './reportWebVitals';
import { Routes, Route} from 'react-router-dom';
import homepage from './Components/homepage';
import mcorp from './Components/mcorp';
import person from './Components/person';
import Example from './Components/Example';
function App() {
  return (
    <Routes>
      <Route path ='/' element = {<homepage/>}/>
      <Route path='/user' element={<person/>}/>
      <Route path='/muncipal' element={<mcorp/>}/>
      <Route path='/ee' element={<Example/>}/>
    </Routes>
  );
}

export default App;
