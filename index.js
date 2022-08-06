import CountryPicker from "./components/CountryPicker";
import { countryCodes } from "./constants/countryCodes";

export const getCountryCodes = () => countryCodes;
export const findCountry = (code = "") => {
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
export default CountryPicker;
