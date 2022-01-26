export default function Button({ variation, children }) {
  const classes = ['btn', variation];
  return <button className={`${classes.join(' ')}`}>{children}</button>;
}