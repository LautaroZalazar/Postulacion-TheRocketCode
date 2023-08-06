import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormContainer from "./components/formContainer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
