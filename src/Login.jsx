import { useState } from "react";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
const Login = () => {
  const signIn = useSignIn();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(`name is ${name} password is ${password}`);
    axios
      .post("http://localhost:5001/user/login", {
        name: name,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.acessToken) {
          signIn({
            token: res.data.acessToken,
            expiresIn: 3600,
            tokenType: "Bearer",
            authState: { name: name },
          });
        } else {
          alert("bad user credentials");
        }
        console.log(res.data.acessToken);
      });
  };
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <p>
            <span>Login</span>
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          role="form"
          className="php-email-form p-3 p-md-4"
        >
          <div className="row">
            <div className="col-xl-6 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                value={name}
                placeholder="enter name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-xl-6 form-group">
              <input
                type="text"
                className="form-control"
                value={password}
                placeholder="enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="text-center">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
