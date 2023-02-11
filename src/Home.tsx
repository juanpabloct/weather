import { Grid } from "@mui/material";
import { useState } from "react";
import { Header } from "./components/header";
import { InformationCity } from "./components/informationCity";
import { SearchCity } from "./components/searchCity";
import { InfoCityData } from "./types/infoCityData";
function Home() {
  const [error, setError] = useState("");
  const [InfoCity, setInfoCity] = useState<InfoCityData>(Object.create(null));
  const [units, setUnits] = useState("default");

  return (
    <div className="flex items-center justify-center flex-col">
      <Header />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Grid container columns={{ xs: 12 }}>
          <SearchCity
            SetInfoCity={setInfoCity}
            setError={setError}
            error={error}
            units={units}
          />
        </Grid>
      </form>
      {error.length > 0 ? (
        <h3 className="text-center text-red-400 text-sm font-semibold">
          Error: {error}
        </h3>
      ) : (
        InfoCity.name && (
          <InformationCity information={InfoCity} setUnits={setUnits} />
        )
      )}
    </div>
  );
}

export default Home;
