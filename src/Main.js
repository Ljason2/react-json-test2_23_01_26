import { BrowserRouter,Routes,Route } from 'react-router-dom';
import App from './component/App'
import About from './pages/About'
import Home from './pages/Home'
import Map from './pages/Map'
import Work from './pages/Work'
import NotFind from './pages/NotFind';

function Main(){
    return(
    <BrowserRouter>
    <App>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Map" element={<Map />}/>
        <Route path="/Work" element={<Work />}/>
        <Route path="*" element={<NotFind />}/>
        </Routes>
    </App>
    </BrowserRouter>
    )
}




export default Main;