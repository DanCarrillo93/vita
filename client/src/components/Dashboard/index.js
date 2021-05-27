import { useAuth } from "../../util/auth";
import SimpleCard from "../SimpleCard";
// PrivatePage is an example include to demonstrate a route protected from
// unauthenticated users. See the routing in App.js.
function Dashboard() {
  const auth = useAuth();
  return (
    <div className="container mx-auto font-russo">
      <h1 className="text-5xl text-gray-300 flex-root border-4 border-gray-300 rounded p-1 mx-1 mt-2 pb-1">
        Hello, {auth.user.username}!
      </h1>

      <div className="text-gray-200 flex flex-row mt-1">
        <div className="w-1/4 border-4 border-gray-300 rounded p-2 mx-1 my-2 text-3xl">
          Forms
        </div>
        <div className="w-1/2 border-4 border-gray-300 rounded p-2 mx-1 my-2 gap-4 text-3xl">
          Inventory
          <div className="grid grid-cols-3">
            <SimpleCard />
            <SimpleCard />
            <SimpleCard />
            <SimpleCard />
          </div>
        </div>
        <div className="w-1/4 border-4 border-gray-300 rounded p-2 mx-1 my-2 text-3xl">
          Bundles
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
