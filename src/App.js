import { Route, BrowserRouter, Routes } from 'react-router-dom'; // Updated import statement

import Rootlayout from './Layout/Rootlayout';
import Home from './Components/Home';
import About from './Components/About';

import SocialMedia from './Components/SocialMedia';
import BlinksName from './Components/BlinksName';

function App() {
  return (
    <BrowserRouter > {/* Use BrowserRouter here */}
      <Routes> {/* Use Routes component */}
        <Route path='/' element={<Rootlayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='socialmedia' element={<SocialMedia />} />
          <Route path='blinksname' element={<BlinksName />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;