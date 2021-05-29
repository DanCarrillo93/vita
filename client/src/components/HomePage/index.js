import { useHistory } from "react-router-dom";
import { useAuth } from "../../util/auth";
import SimpleCard from "../SimpleCard";
function HomePage() {
  const history = useHistory();
  const auth = useAuth();

  return (
    <>
      <h1>Home Page</h1>
      {/* hide actions if user is logged in */}
      {!auth.isLoggedIn() && (
        <>
          <button onClick={() => history.push("/login")}>Login</button>
          <button onClick={() => history.push("/signup")}>Signup</button>
        </>
      )}
      <div className="flex flex-row justify-center">
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* <SimpleCard />
          <SimpleCard />
          <SimpleCard />
          <SimpleCard />
          <SimpleCard /> */}
        </div>
      </div>
    </>
  );
}

export default HomePage;
