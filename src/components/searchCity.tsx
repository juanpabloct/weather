import { Button, Grid, TextField } from "@mui/material";
import { Dispatch, useEffect, useState } from "react";
import { Url } from "../conection/url";
import { ErrorCity } from "../types/errorResponse";
import { InfoCityData } from "../types/infoCityData";

export const SearchCity = ({
  SetInfoCity,
  setError,
  error,
  units,
}: {
  SetInfoCity: Dispatch<React.SetStateAction<InfoCityData>>;
  setError: Dispatch<React.SetStateAction<string>>;
  error: string;
  units: string;
}) => {
  const [city, setCity] = useState("");
  useEffect(() => {
    city.length > 0 &&
      Url({ city, units }).then((res) => {
        SetInfoCity(res.data);
      });
  }, [units]);
  return (
    <Grid
      container
      item
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <div>
        <h3 className="text-center mt-5 font-medium text-base my-2">
          Write the City to Search
        </h3>
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          onChange={({ target }) => {
            setCity(target.value);
          }}
          onBlur={async ({ target }) => {
            setCity(target.value);
            try {
              const { data } = await Url({ city: target.value, units: units });
              SetInfoCity(data);
              error.length > 0 && setError("");
            } catch (error: any) {
              setError(error.response.data.message);
            }
          }}
          onKeyDown={async ({ key }) => {
            if (key === "Enter") {
              try {
                const { data } = await Url({ city: city, units });
                SetInfoCity(data);
                error.length > 0 && setError("");
              } catch (error: any) {
                setError(error.response.data.message);
              }
            }
          }}
        />
      </div>
    </Grid>
  );
};
