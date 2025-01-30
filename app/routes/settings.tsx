import { Link, Outlet, useLoaderData, type LoaderFunction } from "react-router";

export const loader: LoaderFunction = () => {
  return new Response(
    JSON.stringify({ message: "This is the settings page" }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export default function Settings() {
  const data = useLoaderData();
  console.log("data:", { data });
  return (
    <>
      <h1 className="capitalize">settings</h1>
      <p>This is the settings page</p>
      <p>From loader {data.message}</p>

      <nav>
        <Link to="app">App</Link> | <Link to="profile">Profile</Link>
      </nav>

      <Outlet />
    </>
  );
}
