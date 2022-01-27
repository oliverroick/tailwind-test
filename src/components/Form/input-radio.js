import { Label } from "./Label"

export default function InputRadio({ name, options }) {
  return (
    <>
      {options.map(({ value, label }) => (
        <Label key={`${name}-${value}`}>
          <input
            type="radio"
            name={name}
            value={value}
            className="radio"
          />
            {' '}{label}
          </Label>
      ))}
    </>
  )
}