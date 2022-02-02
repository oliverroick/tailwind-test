import { Inner } from "../Page";

export default function Header({ children }) {
  return (
    <header className="header">
      <Inner>
        <h1>A tailwind form</h1>
        <nav>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </nav>
      </Inner>
    </header>
  );
}