import Useform from "../hooks/Useform";
import validate from "../utils/validates";

const Signup = () => {
  const { handlechange, value, handleclick, errorss } = Useform(validate);
  return (
    <div className="form-right">
      <h2 className="heading">Form Validation</h2>
      <form>
        <div className="input-type">
          <label htmlFor="" className="inputname">
            UserName
          </label>
          <input
            type="text"
            name="Username"
            id="username"
            value={value.Username}
            placeholder="Enter Your UserName"
            onChange={handlechange}
          />
          {errorss.Username && <p>{errorss.Username}</p>}
        </div>
        <div className="input-type">
          <label htmlFor="" className="inputname">
            email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            value={value.email}
            onChange={handlechange}
          />
          {errorss.email && <p>{errorss.email}</p>}
        </div>

        <div className="input-type">
          <label htmlFor="" className="inputname">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password"
            value={value.password}
            onChange={handlechange}
          />
          {errorss.password && <p>{errorss.password}</p>}
        </div>
        <div className="input-type">
          <label htmlFor="" className="inputname">
            Re-enter Your Password
          </label>
          <input
            type="password"
            name="password2"
            id="password2"
            placeholder="Re-enter Your Password"
            value={value.password2}
            onChange={handlechange}
          />
          {errorss.password2 && <p>{errorss.password2}</p>}
        </div>

        <button type="submit" className="button-name" onClick={handleclick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
