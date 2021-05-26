import { useState } from "react";
import { useAuth } from "../../util/auth";
import useLoginRedirect from "../../util/useLoginRedirect";

function LoginPage() {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // custom hook redirects to previous page or default page if user is logged in
  useLoginRedirect();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (!password || password.length < 8) {
      return alert("Invalid password. Must contain at least 8 characters.");
    }
    if (!email) {
      return alert("Must provide an email address.");
    }
    await auth.login({ email, password });
  };

  const message = auth.pending
    ? "Processing request..."
    : auth.error || "Please complete the form and click submit.";

  return (
    <div className="container mx-auto px-4 bg-gray-700 rounded-md p-5">
      <h1 className="text-gray-200 text-center text-7xl font-medium border-b-4 pb-10">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-200 text-4xl font-medium mx-12 my-3">Email</label>
          <input
            id="email"
            type="email"
            disabled={auth.pending}
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
            className="mx-12 text-4xl font-medium"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-gray-200 text-4xl font-medium mx-12 my-3">Password</label>
          <input
            id="password"
            type="password"
            disabled={auth.pending}
            value={password}
            onChange={(e) => setPassword(e.target.value.trim())}
            className="mx-12 text-4xl font-medium"
          />
        </div>
        <br />
        <div className="flex flex-row-reverse">
          <button type="submit" className="text-gray-700 text-4xl font-medium bg-gray-200 rounded-lg px-3 py-1 mx-12" disabled={auth.pending}>
            {auth.pending ? "⌛" : "Submit"}
          </button>
        </div>
      </form>
      <div className="flex flex-row-reverse">
        <p className="mx-12 text-xl text-gray-200 mt-2">{message}</p>
      </div>
    </div>
  );
}

export default LoginPage;
