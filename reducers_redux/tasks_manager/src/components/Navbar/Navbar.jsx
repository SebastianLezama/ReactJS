import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../features/slices/loginSlice";
import Button from "@mui/material/Button";
import "./Navbar.scss";

const Navbar = () => {
  const { user } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  return (
    <div className="navBar">
      <div>Tasks Manager</div>
      <div className="user">
        <div style={{ textTransform: "capitalize" }}>{user}</div>
        <Button
          type="submit"
          className="button-submit"
          label="logout"
          color="secondary"
          variant="contained"
          onClick={() => {
            dispatch(logOut());
          }}
          disabled={user.length === 0}
        >
          Log out
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
