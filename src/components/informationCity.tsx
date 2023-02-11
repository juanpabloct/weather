import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Dispatch } from "react";
import { InfoCityData } from "../types/infoCityData";
import { IconWeather } from "./iconWeather";
import { SectionInformation } from "./sectionInformation";

export const InformationCity = ({
  information,
  setUnits,
}: {
  information: InfoCityData;
  setUnits: Dispatch<React.SetStateAction<string>>;
}) => {
  const { coord, dt, name, weather, main } = information;

  return (
    <div className="flex flex-col mt-2 w-3/5">
      <h2 className="font-semibold text-center">Information</h2>
      <div>
        <SectionInformation description={name} title="Name" />
        <SectionInformation
          description={coord.lon + ""}
          title="West Longitud"
        />
        <SectionInformation
          description={coord.lat + ""}
          title="North Latitude"
        />
        <SectionInformation description={new Date().toString()} title="Fecha" />
        {weather.map((item, i) => {
          const { description, icon, main } = item;
          return (
            <SectionInformation
              key={i}
              description={description}
              title="Clima"
              icon={<IconWeather alt={description} img={icon} />}
            />
          );
        })}
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Options Temperature
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="default"
            name="radio-buttons-group"
            onChange={({ target }) => {
              setUnits(target.value);
            }}
          >
            <FormControlLabel
              value="imperial"
              control={<Radio />}
              label="Fahrenheit"
            />
            <FormControlLabel
              value="metric"
              control={<Radio />}
              label="Celsius"
            />
            <FormControlLabel
              value="default"
              control={<Radio />}
              label="Kelvin"
            />
          </RadioGroup>
        </FormControl>
        <SectionInformation description={main.temp + ""} title="Temperature" />
      </div>
    </div>
  );
};
