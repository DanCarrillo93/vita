import { useAuth } from "../../util/auth";
import Nav from "./Nav";

function Navbar() {
  const auth = useAuth();
  return (
    <nav className="bg-gray-700">
      <ul className="flex flex-row justify-between content-center">
        <Nav exact to="/">
          <div className="font-russo text-gray-200 text-6xl p-3 tracking-widest">
            VITA
          </div>
        </Nav>
        {auth.isLoggedIn() ? <UserNavs auth={auth} /> : <GuestNavs />}
      </ul>
    </nav>
  );
}

// Renders navigation controls intended for authenticated users
function UserNavs({ auth }) {
  return (
    <div className="flex flex-row">
      <Nav to="/private">Private</Nav>
      <button onClick={() => auth.logout()}>Logout</button>
    </div>
  );
}

// Renders navigation controls intended for user's that aren't logged in.
function GuestNavs() {
  return (
    <div className="flex flex-row">
      <Nav className="px-3 font-russo text-2xl text-gray-200" to="/login">Login</Nav>
      <Nav className="px-3 font-russo text-2xl text-gray-200" to="/signup">Sign Up</Nav>
    </div>
  );
}

export default Navbar;
