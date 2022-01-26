export function Inner ({ children }) {
  return (
    <div className="inner">
      {children}
    </div>
  );
}

export default function Page({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}