import Home from "./pages/Home";
import About from "./pages/About";
import Notfound from "./pages/Notfound";
import Contact from "./pages/Contact";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./pages/Layout";
import EditContact from "./pages/EditContact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/edit/:id" element={<EditContact />} />
      </Route>
      <Route path="*" element={<Notfound />} />
    </Route>
  )
);
export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
