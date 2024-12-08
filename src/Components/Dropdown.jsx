const Dropdown = ({ options, selectedOption, onSelect, theme }) => (
  <div className="flex flex-col space-y-2">
    {/* Label */}
    <label
      className="font-semibold"
    
    >
      Select Content Type
    </label>

    {/* Select Dropdown */}
    <select
      value={selectedOption}
      onChange={(e) => onSelect(e.target.value)}
      className="border p-2 rounded-md focus:outline-none focus:ring-2"
      style={{
        borderColor: theme?.font,
        backgroundColor: theme?.background,
        color: theme?.font,
      }}
    >
      {options.map((option) => (
        <option
          key={option}
          value={option}
          style={{
            backgroundColor: theme?.background,
            color: theme?.font,
          }}
        >
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdown;
