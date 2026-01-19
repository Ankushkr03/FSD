import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  Rating,
  Box,
  Snackbar,
  Alert
} from "@mui/material";

function App() {
  const [value, setValue] = useState(1);
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    setOpen(true);
  };

  const handleReset = () => {
    setName("");
    setValue(1);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "center" }}>
          <Typography variant="h6">Experiment 2 - UI Design</Typography>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          height: "calc(100vh - 64px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f4f6f8",
          padding: 2
        }}
      >
        <Card sx={{ width: 350 }}>
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>
              Product Feedback Form
            </Typography>

            <TextField
              label="Your Name"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Box sx={{ mt: 2, textAlign: "center" }}>
              <Typography>Rate this product</Typography>
              <Rating
                value={value}
                onChange={(e, newValue) => setValue(newValue)}
              />
            </Box>

            <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
              <Button variant="contained" fullWidth onClick={handleSubmit}>
                Submit
              </Button>

              <Button variant="outlined" fullWidth onClick={handleReset}>
                Reset
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="success" onClose={() => setOpen(false)}>
          Feedback submitted successfully!
        </Alert>
      </Snackbar>
    </>
  );
}

export default App;
