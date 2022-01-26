import { Inner } from "../Page";

export default function Header({ children }) {
  return (
    <header className="header">
      <Inner>
        {children}
      </Inner>
    </header>
  );
}