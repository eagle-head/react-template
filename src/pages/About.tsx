// src/pages/About.tsx
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      About Page
      <nav>
        <Link to="/">Home</Link> |<Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}
