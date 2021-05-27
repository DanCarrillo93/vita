import { useAuth } from "../../util/auth";
import SimpleCard from "../SimpleCard";
// PrivatePage is an example include to demonstrate a route protected from
// unauthenticated users. See the routing in App.js.
function Dashboard() {
  const auth = useAuth();
  return (
    <div>
      <h1 className="text-5xl text-gray-200">Hello, {auth.user.username}!</h1>;
      <SimpleCard />
    </div>
  );
}

export default Dashboard;
