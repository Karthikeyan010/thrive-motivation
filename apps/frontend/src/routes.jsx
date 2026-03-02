import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";

export default function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path ="/about" element= {<div>About Page</div>} />
                <Route path ="/plans" element= {<div>Plans & Pricing Page</div>} />
                <Route path ="/blog" element= {<div>Blog Page</div>} />
                <Route path ="/workshops" element= {<div>Workshops Page</div>} />
                <Route path ="/store" element= {<div>Store Page</div>} />
                <Route path ="/contact" element= {<div>Contact Page</div>} />
                <Route path ="/login" element= {<div>Login Page</div>} />
            </Routes>
        </Router>
    )
}