import { useRef } from "react";
import loginService from "../services/login";

export interface CredentialsType {
  username: string;
  password: string;
}

const LoginForm = ({ user, setUser }: any) => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const data: CredentialsType = {
        username: usernameRef.current?.value!,
        password: passwordRef.current?.value!,
      };
      const user = await loginService.login(data);
      await setUser(user);
      window.localStorage.setItem("user", JSON.stringify(user))
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handler}>
        <input
          ref={usernameRef}
          name="username"
          type={"text"}
          placeholder="Write your username here"
        />
        <input
          ref={passwordRef}
          name="password"
          type={"password"}
          placeholder="Write your password here."
        />
        <button>Login</button>
      </form>
    </>
  );
};

export default LoginForm;
