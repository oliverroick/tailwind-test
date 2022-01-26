export default function Button({ variation, children }) {
  const classes = ['btn', variation];
  return <button class={`${classes.join(' ')}`}>{children}</button>;
}