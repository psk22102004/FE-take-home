const TableComponent = ({ data, columns, theme }) => (
    <div
      className="overflow-x-auto shadow-md rounded-lg border"
      style={{ borderColor: theme?.font  }} 
    >
      <table
        className="w-full table-auto text-sm text-left"
        style={{
          backgroundColor: theme?.background , 
          color: theme?.font , 
        }}
      >
        <thead
          className="uppercase"
          style={{
            backgroundColor: theme?.font ? `${theme.font}20` : "#f1f1f1", 
            color: theme?.font ,
          }}
        >
          <tr>
            {columns.map((col) => (
              <th key={col} className="px-6 py-3">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={row.id}
              style={{
                backgroundColor:
                  index % 2 === 0
                    ? theme?.background
                    : theme?.background
                    ? `${theme.background}cc` 
                    : "#f9f9f9",
                color: theme?.font ,
              }}
            >
              {columns.map((col) => (
                <td key={col} className="px-6 py-2">
                  {row[col.toLowerCase()]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
  export default TableComponent;
  