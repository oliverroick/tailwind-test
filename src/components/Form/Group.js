export default function FormGroup ({ twClasses = '', children }) {
  const classNames = ['form-group', 'flex', 'flex-col', ...twClasses.split(' ')]
  return (
    <div className={classNames.join(' ')}>
      {children}
    </div>
  );
}