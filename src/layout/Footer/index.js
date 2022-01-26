import { Inner } from "../Page";

export default function Footer({ children }) {
  return (
    <footer className="footer">
      <Inner>
        {children}
      </Inner>
    </footer>
  );
}