import React, { useState } from "react";

const FiltersTab = ({ onSearch, onLimitChange, onSort, setTheme, theme }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [limit, setLimit] = useState("");

  //these are my custom themsess!!!
  const themes = [
    { name: "Light", value: { background: "#ffffff", font: "#000000" } },
    { name: "80s After Dark", value: { background: "#1B1D36", font: "#FCA6D1" } },
    { name: "Creame", value: { background: "#EEEBE2", font: "#121212" } },
    { name: "Black Panther", value: { background: "#101820", font: "#CF6BDD" } },
    { name: "Anti-Hero", value: { background: "#00002E", font: "#FF3D8B" } },
    { name: "Cool", value: { background: "#DADBDC", font: "#3846B1" } },
    { name: "Funk", value: { background: "#040613", font: "#4FCDB9" } },
  ];

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleThemeChange = (e) => {
    const selectedTheme = themes.find(
      (theme) => theme.name === e.target.value
    );
    if (selectedTheme) {
      setTheme(selectedTheme.value);
    }
  };

  return (
    <div
      className="flex flex-wrap items-center space-x-4 mb-4 p-4 rounded-lg"
      style={{
        backgroundColor: theme?.background ,
        color: theme?.font ,
      }}
    >
      {/* Search */}
      <div>
        <label
          className="block text-sm font-medium"
          style={{ color: theme?.font  }}
        >
          Search by ID
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded-md focus:outline-none focus:ring-2"
            style={{
              borderColor: theme?.font ,
              backgroundColor: theme?.background ,
              color: theme?.font ,
            }}
            placeholder="Enter ID"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 rounded-md hover:opacity-90"
            style={{
              backgroundColor: theme?.font ,
              color: theme?.background ,
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* Limit */}
      <div>
        <label
          className="block text-sm font-medium"
          style={{ color: theme?.font  }}
        >
          Limit Rows
        </label>
        <input
          type="number"
          value={limit}
          min="1"
          onChange={(e) => {
            setLimit(e.target.value);
            onLimitChange(e.target.value);
          }}
          className="border p-2 rounded-md focus:outline-none focus:ring-2"
          style={{
            borderColor: theme?.font ,
            backgroundColor: theme?.background ,
            color: theme?.font ,
          }}
        />
      </div>

      {/* Sort */}
      <div>
        <label
          className="block text-sm font-medium"
          style={{ color: theme?.font  }}
        >
          Sort Order
        </label>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onSort("asc")}
            className="px-4 py-2 rounded-md hover:opacity-90"
            style={{
              backgroundColor: theme?.font ,
              color: theme?.background ,
            }}
          >
            Ascending
          </button>
          <button
            onClick={() => onSort("desc")}
            className="px-4 py-2 rounded-md hover:opacity-90"
            style={{
              backgroundColor: theme?.font ,
              color: theme?.background ,
            }}
          >
            Descending
          </button>
        </div>
      </div>

      {/* Theme Dropdown */}
      <div>
        <label
          className="block text-sm font-medium"
          style={{ color: theme?.font  }}
        >
          Select Theme
        </label>
        <select
          onChange={handleThemeChange}
          className="border p-2 rounded-md focus:outline-none focus:ring-2"
          style={{
            borderColor: theme?.font ,
            backgroundColor: theme?.background ,
            color: theme?.font ,
          }}
        >
          {themes.map((theme, idx) => (
            <option
              key={idx}
              value={theme.name}
              style={{
                backgroundColor: theme?.background ,
                color: theme?.font ,
              }}
            >
              {theme.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FiltersTab;
