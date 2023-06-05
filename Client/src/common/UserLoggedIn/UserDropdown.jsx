import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
  Button
} from "@material-tailwind/react";
import { connect } from "react-redux";
import { getUser } from "../../AppStore/actions/loginAuth";


function UserDropdown({data, getUser}) {
  const {username, email} = data
  const firstAlphabet = username ? username.charAt(0).toUpperCase() : '';
  return (
    <>
      <Menu>
        <MenuHandler>
          <Button size="lg"  color="white" className="flex justify-center items-center gap-3 bg-gray-400 text-white rounded-full h-10 w-10 p-0">
            {firstAlphabet}
          </Button>
        </MenuHandler>
        <MenuList>
        <MenuItem className="flex items-center gap-2">
            <Typography variant="small" className="font-normal capitalize">
              Mr: <strong>{username}</strong> 
            </Typography>
          </MenuItem>
          <MenuItem className="flex items-center gap-2">
            <Typography variant="small" className="font-normal">
              My Profile
            </Typography>
          </MenuItem>
          <MenuItem className="flex items-center gap-2">
            <Typography variant="small" className="font-normal">
              Edit Profile
            </Typography>
          </MenuItem>
          <hr className="my-2 border-blue-gray-50" />
          <MenuItem className="flex items-center gap-2 " onClick={() => getUser("LOGOUT")}>
            <Typography variant="small" className="font-normal">
              Sign Out
            </Typography>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

const mapStateToProps = (state) => ({
  userData: state.data,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (type) => dispatch(getUser( type)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(UserDropdown);
