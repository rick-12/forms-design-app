import {
  Box,
  Button,
  Container,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import "./CreateUser.css";
import { MuiTelInput } from "mui-tel-input";
import { DatePicker } from "@mui/x-date-pickers";

function CreateUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [division, setDivision] = useState("");
  const [joiningDate, setJoiningDate] = useState(null);
  const [location, setLocation] = useState("");
  const [office, setOffice] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const body = {
      firstName,
      lastName,
      division,
      joiningDate: joiningDate?.$d.toLocaleDateString(),
      location,
      office,
      phoneNumber,
    };

    console.log(body);
  }

  return (
    <>
      <Container>
        <Box marginTop={3}>
          <Paper elevation={2} id="main-paper">
            <Box component="form" padding="2vh 5vw" onSubmit={handleSubmit}>
              <h2 id="create-user-text">Create a user</h2>
              <Grid2 container rowSpacing={5}>
                <Grid2 container columnSpacing={3}>
                  <TextField
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Grid2>
                <Grid2 container columnSpacing={3}>
                  <FormControl style={{ minWidth: "10vw" }}>
                    <InputLabel id="location-label">Location</InputLabel>
                    <Select
                      labelId="location-label"
                      id="location"
                      value={location}
                      label="Location"
                      onChange={(e) => setLocation(e.target.value)}
                    >
                      <MenuItem value="Pune">Pune</MenuItem>
                      <MenuItem value="Bangalore">Bangalore</MenuItem>
                      <MenuItem value="Mumbai">Mumbai</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    id="outlined-basic"
                    label="Office"
                    variant="outlined"
                    value={office}
                    onChange={(e) => setOffice(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Division"
                    variant="outlined"
                    value={division}
                    onChange={(e) => setDivision(e.target.value)}
                  />
                </Grid2>
                <Grid2 container columnSpacing={3}>
                  <DatePicker
                    value={joiningDate}
                    onChange={(joiningDate) => setJoiningDate(joiningDate)}
                  />
                  <MuiTelInput
                    value={phoneNumber}
                    onChange={(phoneNumber) => setPhoneNumber(phoneNumber)}
                  />
                </Grid2>
              </Grid2>
              <Box textAlign="center" marginTop={3}>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
}

export default CreateUser;
