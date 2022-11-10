import Table from "react-bootstrap/Table";

function DocumentTable() {
  return (
    <Table striped bordered hover className="document-table">
      <thead>
        <tr>
          <th className="text-uppercase fw-light text-gray fs-6 text-black">
            Name
          </th>
          <th className="text-uppercase fw-light text-gray fs-6 text-black">
            Modified
          </th>
          <th className="text-uppercase fw-light text-gray fs-6 text-black">
            Visibility
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-black">Assets</td>
          <td className="text-black">June 5</td>
          <td className="text-black">Public</td>
          <td className="text-right">
            <img src="../assets/images/dots.png" />
          </td>
        </tr>
        <tr>
          <td className="text-black">Assets</td>
          <td className="text-black">June 5</td>
          <td className="text-black">Public</td>
          <td className="text-right">
            <img src="../assets/images/dots.png" />
          </td>
        </tr>
        <tr>
          <td className="text-black">Assets</td>
          <td className="text-black">June 5</td>
          <td className="text-black">Public</td>
          <td className="text-right">
            <img src="../assets/images/dots.png" />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default DocumentTable;
