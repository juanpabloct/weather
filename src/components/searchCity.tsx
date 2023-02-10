import { Grid, TextField } from "@mui/material";
import { CityProps } from "../types/states";

export const SearchCity = ({ city, setCity }: CityProps) => {
  return (
    <Grid
      container
      item
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <div>
        <h3 className="text-center mt-5 font-medium text-base">
          Write the City to Search
        </h3>
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          onChange={({ target }) => {
            setCity(target.value);
          }}
        />
      </div>
    </Grid>
  );
};
