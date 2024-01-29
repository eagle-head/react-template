// src/pages/Home.tsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      Home Page
      <nav>
        <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}
