import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Yoruba from "./pages/Yoruba";
import YorubaLesson from "./pages/YorubaLesson";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/learn/yoruba" element={<Yoruba />} />
      <Route path="/learn/yoruba/lesson/:id" element={<YorubaLesson />} />
    </Routes>
  );
};

export default App;
