import Dropdown from "react-bootstrap/Dropdown";

function ListDropdown(props) {
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
        <Dropdown.Item onClick={() => props.showListing(21)} className="fs-5">
          Events
        </Dropdown.Item>
        <Dropdown.Item onClick={() => props.showListing(22)} className="fs-5">
          Fundraiser
        </Dropdown.Item>
        <Dropdown.Item onClick={() => props.showListing(23)} className="fs-5">
          Job
        </Dropdown.Item>
        <Dropdown.Item onClick={() => props.showListing(24)} className="fs-5">
          Sponsers
        </Dropdown.Item>
        <Dropdown.Item onClick={() => props.showListing(25)} className="fs-5">
          Tennis Coach
        </Dropdown.Item>
        <Dropdown.Item onClick={() => props.showListing(26)} className="fs-5">
          Tennis Club
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ListDropdown;
