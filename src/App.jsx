import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/auth";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ZabbixServersPage from "./pages/ZabbixServersPage";
import ReportsServersPage from "./pages/ReportsServersPage";
import ReportsGroupsPage from "./pages/ReportsGroupsPage";
import SidebarMenu from "./components/SidebarMenu";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
        <SidebarMenu>
          <Routes>
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="/zabbix-servers" element={<ZabbixServersPage />} />
            <Route path="/reports-servers" element={<ReportsServersPage />} />
            <Route path="/reports-groups" element={<ReportsGroupsPage />} />
            <Route path="*" element={<p>Página não existe!</p>} />
          </Routes>
        </SidebarMenu>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
