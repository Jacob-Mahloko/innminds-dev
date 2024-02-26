import Chat  from "./pages/chat";
import Login from "./pages/login";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NotFound from "./pages/notfound";

const App=()=>{
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
        <Route index element={<Login />} />
        <Route path="Chat" element={<Chat />} />
        <Route path="*" element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
  );
}
export default App;