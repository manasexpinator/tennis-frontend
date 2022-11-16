import Dropdown from "react-bootstrap/Dropdown";

function MatchDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
        className=" fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block "
      >
        Matches <img src="assets/images/list_arw.png" />
      </Dropdown.Toggle>

      <Dropdown.Menu className="">
        <Dropdown.Item href="#/action-1" className="fs-5">
          My Stats
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2" className="fs-5">
          My Tournaments
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="fs-5">
          My Leaderboards
        </Dropdown.Item>
        <Dropdown.Item href="#/action-4" className="fs-5">
          New Match
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default MatchDropdown;
