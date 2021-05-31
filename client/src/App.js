import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./util/auth";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import SignupPage from "./components/SignupPage";
import PrivateRoute from "./components/PrivateRoute";
import ListingPage from "./components/ListingPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route path="/listing/:id">
            <ListingPage />
          </Route>
          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route exact path="/signup">
            <SignupPage />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
