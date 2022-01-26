import { Inner } from "../Page";

export default function Content({ children }) {
  return (
    <main className="content">
      <Inner>
        { children }
      </Inner>
    </main>
  );
}