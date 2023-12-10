import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AllNews } from "./components/AllNews";


function App() {
  return (
    <BrowserRouter>
      <AllNews></AllNews>
     
      <Routes>
        
        <Route path="/all-news" element={<AllNews/>}></Route>
        
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
