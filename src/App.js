import React, { useState } from "react";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import Create from "./pages/Create";
import Home from "./pages";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/search";
import Cchat from "./pages/chat";





function App() {
  const [visible, setVisible] = useState(false)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
        <Route path="/cree" element={<Create visible={visible} setVisible={setVisible} />} />
        <Route path="/search" element={<Search />} />
        <Route path="/chat" element={<Cchat />} />

      </Routes>

    </div>




  )

}

export default App;