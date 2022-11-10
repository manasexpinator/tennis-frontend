import Dropdown from "react-bootstrap/Dropdown";

function ListDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
        className=" fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block "
      >
        Listing <img src="assets/images/list_arw.png" />
      </Dropdown.Toggle>

      <Dropdown.Menu className="">
        <Dropdown.Item href="#/action-1" className="fs-5">
          Events
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2" className="fs-5">
          Fundraiser
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="fs-5">
          Job
        </Dropdown.Item>
        <Dropdown.Item href="#/action-4" className="fs-5">
          Sponsers
        </Dropdown.Item>
        <Dropdown.Item href="#/action-5" className="fs-5">
          Tennis Coach
        </Dropdown.Item>
        <Dropdown.Item href="#/action-6" className="fs-5">
          Tennis Club
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ListDropdown;
