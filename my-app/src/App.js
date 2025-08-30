// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
// import "./App.css";
// import logo from "./assets/younicorn-logo.jpeg";

// // Pages
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup"; // Add this import
// import AdminDashboard from "./pages/AdminDashboard";
// import GoogleStreetView from "./pages/GoogleStreetView";
// import NFC from "./pages/NFC";
// import Models3D from "./pages/Models3D";

// function App() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const closeMenu = () => setMenuOpen(false);

//   // If not logged in, show only login and signup pages
//   if (!isLoggedIn) {
//     return (
//       <Router>
//         <Routes>
//           <Route 
//             path="/login" 
//             element={<Login setIsAdmin={setIsAdmin} setIsLoggedIn={setIsLoggedIn} />} 
//           />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="*" element={<Navigate to="/login" replace />} />
//         </Routes>
//       </Router>
//     );
//   }

//   return (
//     <Router>
//       <div className="dashboard">
//         {/* Header */}
//         <header className="header">
//           <img src={logo} alt="Younicorn Logo" className="logo" />
//           <h2 className="company-name">
//             Younicorn Management and Entrepreneurial Solutions
//           </h2>
//           <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
//         </header>

//         {/* Sidebar */}
//         <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
//           <div className="sidebar-content">
//             <div className="menu-item">
//               <Link to="/" onClick={closeMenu} className="menu-link orange-gradient">
//                 <span>HOME</span>
//               </Link>
//             </div>
//             <div className="menu-item">
//               <Link to="/google-street" onClick={closeMenu} className="menu-link blue-gradient">
//                 <span>GOOGLE STREET VIEW</span>
//               </Link>
//             </div>
//             <div className="menu-item">
//               <Link to="/nfc" onClick={closeMenu} className="menu-link purple-gradient">
//                 <span>NFC</span>
//               </Link>
//             </div>
//             <div className="menu-item">
//               <Link to="/models-3d" onClick={closeMenu} className="menu-link pink-gradient">
//                 <span>3D MODELS</span>
//               </Link>
//             </div>
//             {isAdmin && (
//               <div className="menu-item">
//                 <Link to="/admin-dashboard" onClick={closeMenu} className="menu-link green-gradient">
//                   <span>ADMIN DASHBOARD</span>
//                 </Link>
//               </div>
//             )}
//             <div className="menu-item">
//               <button 
//                 onClick={() => {
//                   setIsLoggedIn(false);
//                   setIsAdmin(false);
//                   closeMenu();
//                 }} 
//                 className="logout-btn"
//               >
//                 <span>LOGOUT</span>
//               </button>
//             </div>
//           </div>
//         </aside>

//         {/* Overlay */}
//         {menuOpen && <div className="overlay" onClick={closeMenu}></div>}

//         {/* Routes */}
//         <main className="main">
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/google-street" element={<GoogleStreetView />} />
//             <Route path="/nfc" element={<NFC />} />
//             <Route path="/models-3d" element={<Models3D />} />
//             <Route
//               path="/admin-dashboard"
//               element={isAdmin ? <AdminDashboard setIsAdmin={setIsAdmin} /> : <Navigate to="/" />}
//             />
//             <Route path="*" element={<Navigate to="/" replace />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;




import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import "./App.css";
import logo from "./assets/younicorn-logo.jpeg";

// Pages
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";
import GoogleStreetView from "./pages/GoogleStreetView";
import NFC from "./pages/NFC";
import Models3D from "./pages/Models3D";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // If not logged in, show only login and signup pages
  if (!isLoggedIn) {
    return (
      <Router>
        <Routes>
          <Route
            path="/login"
            element={<Login setIsAdmin={setIsAdmin} setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <div className="dashboard">
        {/* Header */}
        <header className="header">
          <img src={logo} alt="Younicorn Logo" className="logo" />
          <h2 className="company-name">Younicorn Management and Entrepreneurial Solutions</h2>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </header>

        {/* Sidebar */}
        <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
          <div className="sidebar-content">
            <div className="menu-item">
              <Link to="/" onClick={closeMenu} className="menu-link orange-gradient">
                <span>HOME</span>
              </Link>
            </div>
            <div className="menu-item">
              <Link to="/google-street" onClick={closeMenu} className="menu-link blue-gradient">
                <span>GOOGLE STREET VIEW</span>
              </Link>
            </div>
            <div className="menu-item">
              <Link to="/nfc" onClick={closeMenu} className="menu-link purple-gradient">
                <span>NFC</span>
              </Link>
            </div>
            <div className="menu-item">
              <Link to="/models-3d" onClick={closeMenu} className="menu-link pink-gradient">
                <span>3D MODELS</span>
              </Link>
            </div>
            {isAdmin && (
              <div className="menu-item">
                <Link to="/admin-dashboard" onClick={closeMenu} className="menu-link green-gradient">
                  <span>ADMIN DASHBOARD</span>
                </Link>
              </div>
            )}
            <div className="menu-item">
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  setIsAdmin(false);
                  closeMenu();
                }}
                className="logout-btn"
              >
                <span>LOGOUT</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Overlay */}
        {menuOpen && <div className="overlay" onClick={closeMenu}></div>}

        {/* Routes */}
        <main className="main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/google-street" element={<GoogleStreetView />} />
            <Route path="/nfc" element={<NFC />} />
            <Route path="/models-3d" element={<Models3D />} />
            <Route
              path="/admin-dashboard"
              element={isAdmin ? <AdminDashboard setIsAdmin={setIsAdmin} /> : <Navigate to="/" />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
