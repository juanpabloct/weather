import { Grid } from "@mui/material";
import Input from "@mui/material/Input";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Grid container>
      <Grid item justifyContent={"center"}>
        <h1>My Weather</h1>
      </Grid>
      <Input />
    </Grid>
  );
}

export default App;
