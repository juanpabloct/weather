import axios from "axios";
import { urlProps } from "../types";

export const Url = async ({ city, units }: urlProps) => {
  const { VITE_API_TOKEN } = import.meta.env;
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${VITE_API_TOKEN}&units=${units}`
  );
};
