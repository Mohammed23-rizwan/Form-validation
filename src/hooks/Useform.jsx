import { useState } from "react";

const Useform = (validate) => {
  const [value, setvalues] = useState({
    Username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errorss, seterror] = useState({});

  const handlechange = (e) => {
    const { name, value } = e.target;

    setvalues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleclick = (event) => {
    event.preventDefault();
    seterror(validate(value));
  };
  return { handlechange, value, handleclick, errorss };
};

export default Useform;
