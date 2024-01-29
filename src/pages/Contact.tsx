// src/pages/Contact.tsx
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      Contact Page
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
    </div>
  );
}
