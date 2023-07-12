import DataTable from "react-data-table-component";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

function ZabbixServersPage() {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "URL",
      selector: (row) => row.url,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      name: "beonup",
      url: "https://monitoramento.beonup.com",
      status: 1,
    },
    {
      id: 2,
      name: "teste 02",
      url: "https://teste01.teste.com",
      status: 1,
    },
    {
      id: 3,
      name: "teste 03",
      url: "https://teste03.teste.com",
      status: 0,
    },
  ];
  return (
    // <div className="container mt-5">
    <div>
      <DataTable columns={columns} data={data} pagination />
    </div>
  );
}

export default ZabbixServersPage;
