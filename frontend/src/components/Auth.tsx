import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { SigninType, SignupType } from "@sandeep28/common";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import Loader from "../ui/Loader";
type AuthType = "signup" | "signin";

type InputsMap = {
  signup: SignupType;
  signin: SigninType;
};
const Auth = <T extends AuthType>({ type }: { type: T }) => {
  const initialInputs: InputsMap[T] = type === "signup"
    ? { name: "", email: "", password: "" }
    : { email: "", password: "" };

  const [loading, setLoading] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [postInputs, setPostInputs] = useState(initialInputs);

  const navigate = useNavigate();

  if (loading) {
    return <Loader />;
  }
  
  
    let token=localStorage.getItem('blogToken');
    if(token){
      navigate('/blogs')
    }
 

 const passwordValidation= (e: ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPostInputs((prevInputs) => ({
      ...prevInputs,
      password: newPassword,
    }));
 
    setValidPassword(newPassword.length >= 6);
  };


  async function sendRequest() {
    setLoading(true);

    if (type === "signup") {
      try {
        const response = await axios.post(
          `${BACKEND_URL}/api/v1/user/signup`,
          postInputs
        );
        const jwt = response.data.jwt;

        localStorage.setItem("blogToken", jwt);

        navigate("/blogs");
        setLoading(false);
      } catch (e) {
        console.log("Error recieved: " + e);
        setLoading(false);
      }
    } else {
      try {
        const response = await axios.post(
          `${BACKEND_URL}/api/v1/user/signin`,
          postInputs
        );
        const jwt = response.data.jwt;

        localStorage.setItem("blogToken", jwt);

        navigate("/blogs");
        setLoading(false);
      } catch (e) {
        console.log("Error recieved: " + e);
        setLoading(false);
      }
    }

 
 
 
  }
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div className="">
          <div className="text-3xl font-bold">Create an Account</div>
          <div>
            {type === "signin"
              ? "Do not have an Account ?"
              : "Already have a account ?"}
            <Link
              className="underline px-1 hover:no-underline"
              to={type === "signin" ? "/signup" : "/signin"}
            >
              {type === "signin" ? " Sign up" : "Sign in"}
            </Link>
          </div>
          <div>
            {type === "signup" ? (
              <LabelledInput
                label="Name"
                placeholder="Enter your name"
                onChange={(e) => {
                  setPostInputs((c) => ({
                    ...c,
                    name: e.target.value,
                  }));
                }}
              />
            ) : null}

            <LabelledInput
              label="Email"
              placeholder="Enter your Email"
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  email: e.target.value,
                }));
              }}
            />

            <LabelledInput
              label="Password"
              type={"password"}
              placeholder="Enter your Pass"
              onChange={passwordValidation}
            />
            {!validPassword && (
              <p className="text-red-500 text-sm pb-4">
                Enter minimum 6 characters
              </p>
            )}
          </div>

          <button
            onClick={sendRequest}
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 w-full focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
          >
            {type === "signup" ? "Signup" : "Signin"}
          </button>
        </div>
      </div>
    </div>
  );
};
interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}
function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div className="my-5">
      <label className="block mb-2 text-md font-medium text-gray-900  ">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default Auth;
