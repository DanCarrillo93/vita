import { useAuth } from "../../util/auth";
import DetailedCard from "../DetailedCard";
// PrivatePage is an example include to demonstrate a route protected from
// unauthenticated users. See the routing in App.js.
function Dashboard() {
  const auth = useAuth();
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl text-gray-200 flex-root">
        Hello, {auth.user.username}!
      </h1>
      ;
      <div className="container mx-auto flex">
        <DetailedCard />
        <DetailedCard />
      </div>
    </div>
  );
}

export default Dashboard;
