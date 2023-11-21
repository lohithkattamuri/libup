import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Bookslists from "./pages/Profile/Books/booksList";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ContactForms from './pages/contact/Details';
import "./stylesheets/alignments.css";
import "./stylesheets/theme.css";
import "./stylesheets/sizes.css";
import "./stylesheets/custom-components.css";
import "./stylesheets/form-elements.css";
import ProtectedRoute from "./components/ProtectedRoute";
import Loader from "./components/Loader";
import { useSelector } from "react-redux";
import Profile from "./pages/Profile";
import BookDescription from "./pages/BookDescription";
import ContactForm from "./pages/contact/Details";

function App() {
  const { loading } = useSelector((state) => state.loaders);
  return (
    <div>
      {loading && <Loader />}

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                 <Home />
              </ProtectedRoute>
               
              
            }
          />
          <Route
            path="/book/:id"
            element={
              <ProtectedRoute>
                <BookDescription />
              </ProtectedRoute>
            }
          />
           <Route path="/bookslist" element={
           <ProtectedRoute><Bookslists /></ProtectedRoute>} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          
           <Route path="/contact" element={<ProtectedRoute><ContactForms /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
