import { Link, Outlet } from "react-router";

export default function Settings() {
  return (
    <>
      <h1 className="capitalize">settings</h1>
      <p>This is the settings page</p>

      <nav>
        <Link to="app">App</Link> | <Link to="profile">Profile</Link>
      </nav>

      <Outlet />
    </>
  );
}
