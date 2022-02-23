"use strict";

const countryData = async (country) => {
  const response = await fetch("https://restcountries.com/v3.1/name/india");
  //   console.log(response, "response");
  const data = await response.json();
  return data;
};
countryData("india")
  .then((data) => {
    console.log("resloved", data[0].flag);
  })
  .catch((err) => {
    console.log("error", err.response);
  });
