export function Label({ forId, children }) {
  return (
    <label htmlFor={forId} className="label">
      {children}
    </label>
  );
}

export function Legend({ children }) {
  return (
    <legend className="legend">
      {children}
    </legend>
  );
}