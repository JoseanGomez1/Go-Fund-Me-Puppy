import { Routes, Route } from "react-router-dom";
import Puppies from "../../pages/puppies";
import Show from "../../pages/show/";
import NotFound from "../../pages/ErrorPage";

export default function Main(props) {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Puppies />} /> {/* Correct the component name */}
        <Route path="/puppies/:id" element={<Show />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </main>
  );
}
