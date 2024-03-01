import Chat  from "./pages/chat";
import Login from "./pages/login";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NotFound from "./pages/notfound";
import SearchProvider from "./providers/searchProvider";
const App=()=>{
  return (
    <SearchProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
            <Route index element={<Login />} />
            <Route path="Chat" element={<Chat />} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </SearchProvider>
    
  );
}
export default App;