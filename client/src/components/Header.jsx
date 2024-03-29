import React from "react";
import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { toggleTheme } from "../redux/theme/themeSlice";

export default function Header() {
  const path = useLocation().pathname;
  //location= useLocation()
  //const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const {theme} = useSelector((state)=>state.theme)

  const handleSignout = async () => {
    //   try {
    //     const res = await fetch('/api/user/signout', {
    //       method: 'POST',
    //     });
    //     const data = await res.json();
    //     if (!res.ok) {
    //       console.log(data.message);
    //     } else {
    //       dispatch(signoutSuccess());
    //     }
    //   } catch (error) {
    //     console.log(error.message);
    //   }
  };

  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-medium dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to bg-pink-500 rounded-lg text-white">
          10-MiNuTeS-ScHoOl...
        </span>
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="search"
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
        <button
          className="w-12 h-10 lg:hidden border rounded-full"
          color="gray"
        >
          <AiOutlineSearch />
        </button>
      </form>
      <div className="flex gap-2 md:order-2">
        <button
          className="w-12 h-10 hidden sm:inline riunded-full"
          color="gray" pill onClick={() => dispatch(toggleTheme())}
        >
         {theme === 'light' ? <FaSun /> : <FaMoon />}
        
        </button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="user" img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={"/dashboard?tab=profile"}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <>
            <Link to="/signin">
              <Button gradientDuoTone="purpleToBlue" outline>
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button gradientDuoTone="purpleToBlue" outline>
                Sign-Up
              </Button>
            </Link>
          </>
        )}

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
