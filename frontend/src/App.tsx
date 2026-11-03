
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import SignInPage from "./pages/signin/signinpage";
import SignUpPage from "./pages/signup/signuppage";
import ChatPage from "./pages/public/publicpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/public" replace />} />

        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/public" element={<ChatPage />} />

        <Route path="*" element={<Navigate to="/public" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
