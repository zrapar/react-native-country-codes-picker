import CountryPicker from "./components/CountryPicker";
import { countryCodes } from "./constants/countryCodes";

export const getCountryCodes = () => countryCodes;
export const findCountryByCode = (code = "") => {
  if (code && code.length !== "") {
    const country = countryCodes.find(
      (country) => country.code.toLowerCase() === code.toLowerCase().trim()
    );
    if (country) {
      return country;
    }
  }
  return null;
};
export const findCountryByDialCode = (dialCode = "") => {
  if (dialCode && dialCode.length !== "") {
    const country = countryCodes.find(
      (country) =>
        country.dial_code.toLowerCase() === dialCode.toLowerCase().trim()
    );
    if (country) {
      return country;
    }
  }
  return null;
};
export const findCountryByName = (name = "") => {
  let country;
  if (name && name.length !== "") {
    for (const cntry of countryCodes) {
      const { name: nameCountry } = cntry;
      Object.keys(nameCountry).forEach((n) => {
        if (nameCountry[n].includes(name)) {
          country = cntry;
        }
      });
    }
  }
  return country;
};
export default CountryPicker;
