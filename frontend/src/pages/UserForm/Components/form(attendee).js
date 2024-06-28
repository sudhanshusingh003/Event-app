import React from "react";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function AttendeeDetails() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#8E50A6",
      },
    },
  });
  return (
    <div>
      <div className=" w-full px-9  flex md:flex-row  flex-col py-10 items-center gap-10 md:justify-between justify-center">
        <img alt="logo" src="/logo.svg" width="160px" />
      </div>
      <div className="flex justify-center">
        <div className="  border-2 mt-4 rounded-lg md:w-[30%] mx-4 w-full border-[#8E50A6] px-5 py-4  ">
          <div className=" font-extrabold text-2xl mb-4 text-[#8555A8]">
            Add more details
          </div>
          <form className=" flex flex-col gap-6">
            <ThemeProvider theme={theme}>
              <TextField
                id="filled-basic"
                required
                label="Company Name"
                variant="filled"
              />
              <TextField
                id="filled-basic"
                required
                type="number"
                label="Phone No."
                variant="filled"
              />
              <TextField
                id="filled-basic"
                label="Instagram Id"
                variant="filled"
              />
            </ThemeProvider>
            <button>Submit</button>
          </form>{" "}
        </div>
      </div>
    </div>
  );
}

export default AttendeeDetails;
