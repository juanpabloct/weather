import { Grid } from "@mui/material";
import { useState } from "react";
import { Header } from "./components/header";
import { SearchCity } from "./components/searchCity";
function Home() {
  const [city, setCity] = useState("");
  console.log(city);
  return (
    <>
      <Header />
      <div>
        <Grid container columns={{ xs: 12 }}>
          <SearchCity city={city} setCity={setCity} />
        </Grid>
      </div>
    </>
  );
}

export default Home;
