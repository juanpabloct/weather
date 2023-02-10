import { Dispatch } from "react";

export interface CityProps {
  city: string;
  setCity: Dispatch<React.SetStateAction<string>>;
}
