import React, { useState } from "react";
import OTPInput from "otp-input-react";
import { useNavigate } from "react-router-dom";
import CircularProgres from "../../components/Loading/CircularProgress";
// import InputSpotlightBorder from "../../components/buttons/input";
function Login() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [otpsent, setOtpsent] = useState(false);
  const [loading, setLoading] = useState(false);

  const HandleProceed = () => {
    setOtpsent(true);
    // setLoading(true);
  };
  const handleSubmit = () => {
    navigate("/add-details");
  };
  return (
    <div className=" ">
      <div className=" w-full px-9  flex md:flex-row  flex-col py-10 items-center gap-10 md:justify-between justify-center">
        <img alt="logo" src="/logo.svg" width="160px" />
      </div>
      <div className=" flex flex-col justify-center  items-center md:flex-row md:justify-between md:mx-44">
        <img
          alt="loginimage"
          src="/login.svg"
          className=" md:w-[400px] w-[250px] "
        />

        <div className=" flex flex-col gap-[14px] mt-4 rounded-lg bg-[#FDECFF] border-2 grad2 border-[#A352AC] px-5 py-2 ">
          {!otpsent && (
            <div className=" flex flex-col gap-8">
              <div className=" font-semibold text-xl text-center mt-8 text-[#A352AC]">
                Enter Your Email Id
              </div>
              <div className="flex items-center p-[9px]  border-2 border-[#9B56AD]  rounded-lg bg-white">
                <img alt="emailicon" src="/gmail.svg" className="w-[22px]" />
                <input
                  type="email"
                  className="outline-none  bg-white text-base font-medium mx-2"
                  placeholder="abcd@gmail.com"
                />
              </div>
            </div>
          )}

          {otpsent && (
            <div className=" flex flex-col gap-8">
              <div className=" font-semibold text-2xl  mt-8 text-center text-[#A352AC]">
                Enter OTP
              </div>
              <OTPInput
                value={otp}
                onChange={setOtp}
                OTPLength={6}
                className=" translate-x-1 "
                inputClassName=" outline-none h-5 w-6 bg-[#FEEDFF] border-2 border-[#8E50A6] text-black rounded-lg font-extrabold"
                otpType="number"
                disabled={false}
              />
            </div>
          )}
          {otpsent ? (
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="mygrad mb-12 p-3 md:w-[300px] justify-center rounded-lg text-base font-semibold flex items-center text-white gap-1"
            >
              {loading ? <CircularProgres /> : "Submit"}
            </button>
          ) : (
            <div className=" flex flex-col gap-4  mb-7 justify-center items-center">
            <button
              disabled={loading}
              onClick={HandleProceed}
              className="mygrad p-3 md:w-[300px] justify-center rounded-lg text-base font-semibold flex items-center text-white gap-1"
            >
              {loading ? <CircularProgres /> : "Proceed"}
            </button>
            <button
              disabled={loading}
              onClick={HandleProceed}
              className=" bg-[#F9C5FF] py-2 w-[55%] justify-center text-[#A352AC] rounded-lg text-sm font-semibold flex items-center border-2 border-[#A352AC] gap-1"
            >
             <img src="/google.png" width="18px"/> Log in with Google
            </button></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
