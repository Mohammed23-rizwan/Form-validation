import Useform from "../hooks/Useform";
import validate from "../utils/validates";

const Signup = () => {
  const { handlechange, value, handleclick, errorss } = Useform(validate);
  return (
    <div className="Form-right">
      <h2>Form Validation</h2>
      <form>
        <div className="input-type">
          <label htmlFor="" className="inputname">
            UserName
          </label>
          <input
            type="text"
            name="Username"
            id=""
            value={value.Username}
            placeholder="Enter Your UserName"
            onChange={handlechange}
          />
          {errorss.username && <p>{errorss.username}</p>}
        </div>
        <div className="input-type">
          <label htmlFor="" className="inputname">
            email
          </label>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter Your Email"
            value={value.email}
            onChange={handlechange}
          />
        </div>
        {errorss.email && <p>{errorss.email}</p>}
        <div className="input-type">
          <label htmlFor="" className="inputname">
            Password
          </label>
          <input
            type="password"
            name="password"
            id=""
            placeholder="Enter Your Password"
            value={value.password}
            onChange={handlechange}
          />
        </div>
        <div className="input-type">
          <label htmlFor="" className="inputname">
            Re-enter Your Password
          </label>
          <input
            type="password"
            name="password2"
            id=""
            placeholder="Re-enter Your Password"
            value={value.password2}
            onChange={handlechange}
          />
        </div>
        <button type="submit" onClick={handleclick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
