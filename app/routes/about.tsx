import { Link, Outlet } from "react-router";

export default function About() {
  return (
    <>
      <h1 className="capitalize">about</h1>
      <p>This is the about page</p>

      <nav>
        <Link to="team">Our Team</Link> | <Link to="history">Our History</Link>
      </nav>

      <Outlet />
    </>
  );
}