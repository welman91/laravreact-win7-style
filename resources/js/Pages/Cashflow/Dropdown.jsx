export default function Dropdown({ options }) {
  return (
    <div className="custom-select">
      <select>
        {options.length > 0 &&
          options.map((opt) => {
            return (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            )
          })}
      </select>
    </div>
  )
}
