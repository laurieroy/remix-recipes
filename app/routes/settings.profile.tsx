import {
  useLoaderData,
  useRouteError,
  type LoaderFunction,
} from "react-router";

export const loader: LoaderFunction = () => {
  return new Response(JSON.stringify({ message: "yo" }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default function Profile() {
  const data = useLoaderData();

  return (
    <>
      <h1 className="capitalize">Profile</h1>
      <p>This is the settings profile page</p>
      <p>From loader {data.message}</p>
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
