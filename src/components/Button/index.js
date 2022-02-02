export default function Button({ variation, children, twClasses = '' }) {
  const classes = ['btn', variation, ...twClasses.split(' ')];
  return <button className={`${classes.join(' ')}`}>{children}</button>;
}