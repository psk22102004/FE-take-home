import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "./Components/Dropdown";
import FiltersTab from "./Components/FiltersTab";
import TableComponent from "./Components/TableComponent";
import Pagination from "./Components/Pagination";
import Loader from "./Components/Loader";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("Posts");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [theme, setTheme] = useState({
    background: "#ffffff", 
    font: "#000000"        
  });
  const rowsPerPage = 10;

  const options = ["Posts", "Comments"];
  const columns = selectedOption === "Posts" ? ["ID", "Title"] : ["ID", "Name"];

  // Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const endpoint =
        selectedOption === "Posts"
          ? "https://jsonplaceholder.typicode.com/posts"
          : "https://jsonplaceholder.typicode.com/comments";
      try {
        const response = await axios.get(endpoint);
        setData(response.data);
        setFilteredData(response.data);
        setCurrentPage(1); 
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedOption]);

  // Download CSV
  const handleDownload = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      columns.join(",") +
      "\n" +
      filteredData
        .slice(
          (currentPage - 1) * rowsPerPage,
          currentPage * rowsPerPage
        )
        .map((row) => columns.map((col) => row[col.toLowerCase()]).join(","))
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${selectedOption.toLowerCase()}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleLimitChange = (limit) => {
    setFilteredData(data.slice(0, limit));
  };

  const handleSearch = (id) => {
    const result = data.filter((item) => String(item.id) === id);
    setFilteredData(result.length ? result : data);
  };

  const handleSort = (order) => {
    const sorted = [...filteredData].sort((a, b) =>
      order === "asc" ? a.id - b.id : b.id - a.id
    );
    setFilteredData(sorted);
  };

  const currentData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div
      className={`max-w-5xl mx-auto m-4 rounded-xl border-2 shadow-xl p-6 space-y-6 `}
      style={{ backgroundColor: theme.background, color: theme.font }}
    >
      <h1 className={`text-2xl font-bold font-serif`}>Dynamic Content Manager</h1>
      <Dropdown
        options={options}
        selectedOption={selectedOption}
        onSelect={(option) => {
          setSelectedOption(option);
          setFilteredData([]); 
        }}
        theme={theme}
      />
      <FiltersTab
        onSearch={handleSearch}
        onLimitChange={handleLimitChange}
        onSort={handleSort}
        setTheme={setTheme}
        theme={theme}
      />

      {loading ? (
        <Loader />
      ) : (
        <div>
          <TableComponent data={currentData} columns={columns} theme={theme} />
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredData.length / rowsPerPage)}
            onPageChange={setCurrentPage}
            theme={theme}
          />

          <button
            onClick={handleDownload}
            className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
          >
            Download
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
