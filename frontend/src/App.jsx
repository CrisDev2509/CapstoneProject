import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./views/home/Home";
import Project from "./views/project/Project";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:projectId" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
