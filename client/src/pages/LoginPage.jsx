import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { UserContext } from "../components/UserContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);
  async function handleLogin(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post("/login", { email, password });
      alert("Login success");
      setRedirect(true);
      setUser(data);
    } catch (error) {
      alert("login fail");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="bg-reddit_dark min-h-screen pt-40">
      <form className="bg-reddit_dark border border-reddit_dark-brightest p-5 w-1/2 lg:w-1/4 mx-auto rounded-2xl text-reddit_text self-center">
        <h1 className="text-xl mb-5">Login</h1>
        <label>
          <span className="text-reddit_text-darker text-sm">Email</span>
          <Input
            type="email"
            className="mt-1 mb-3 w-full"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span className="text-reddit_text-darker text-sm">Password</span>
          <Input
            type="Password"
            className="mt-1 mb-3 w-full"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <Button className="w-full py-2 mb-3" onClick={(e) => handleLogin(e)}>
          Login
        </Button>
        <div>
          You're a newbie?{" "}
          <Link to={"/register"} className=" text-orange-500  font-bold">
            {" "}
            Register now!!
          </Link>
        </div>
      </form>
    </div>
  );
}
