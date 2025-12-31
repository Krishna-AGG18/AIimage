import { Routes, Route } from "react-router-dom";
import { Home, Gallery, Landing, Login, Signup, ImagePage } from "./pages/index";
import ProtectedRoute from "./components/ProtectedRoute";
import HomeLayout from "./components/HomeLayout";

const App = () => {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomeLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="gallery/:id" element={<ImagePage />} />
      </Route>
    </Routes>
  );
};

export default App;
