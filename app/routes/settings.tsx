import {
  Link,
  Outlet,
  useLoaderData,
  useRouteError,
  type LoaderFunction,
} from "react-router";

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

export function ErrorBoundary() {
  const error = useRouteError();

  if (error instanceof Error) {
    return (
      <div className="bg-red-300 border-2 border-red-600 rounded-md p-4">
        <h1 className="">Whoops, something went wrong. </h1>
        <p>{error.message}</p>
      </div>
    );
  }

  return <div>An unexpected error occurred</div>;
}
