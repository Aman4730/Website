import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Card,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import HomeIcon from "@mui/icons-material/Home";

const Responsibilities = ({
  responsibilities,
  setResponsibilities,
  loading,
}) => {
  const [responsibilityInput, setResponsibilityInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const addResponsibility = () => {
    if (responsibilityInput.trim()) {
      if (editIndex !== null) {
        const updatedResponsibilities = [...responsibilities];
        updatedResponsibilities[editIndex] = responsibilityInput;
        setResponsibilities(updatedResponsibilities);
        setEditIndex(null);
      } else {
        setResponsibilities([...responsibilities, responsibilityInput]);
      }
      setResponsibilityInput("");
    }
  };

  const removeResponsibility = (index) => {
    setResponsibilities(responsibilities.filter((_, i) => i !== index));
  };

  const handleEditResponsibility = (index) => {
    setResponsibilityInput(responsibilities[index]);
    setEditIndex(index);
  };
  return (
    <div>
      <label>Responsibilities</label>
      <Box sx={{ display: "flex", gap: 1 }}>
        <TextField
          fullWidth
          multiline
          value={responsibilityInput}
          onChange={(e) => setResponsibilityInput(e.target.value)}
        />
      </Box>
      <Button
        variant="contained"
        fullWidth
        sx={{
          maxWidth: "90px",
          fontWeight: "bold",
          p: 1,
          borderRadius: "10px",
          backgroundColor: "#4786e6",
          marginTop: "10px",
        }}
        onClick={addResponsibility}
        disabled={loading}
      >
        {editIndex !== null ? "Save" : "Add"}
      </Button>

      <Box mt={2}>
        {responsibilities.map((item, index) => (
          <Card
            variant="outlined"
            sx={{
              display: "flex",
              alignItems: "center",
              p: 2,
              borderRadius: 2,
              cursor: "pointer",
              borderColor: "grey.300",
              boxShadow: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <HomeIcon sx={{ fontSize: 40, mr: 2, color: "primary.main" }} />
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  Responsibilities
                  <IconButton
                    sx={{ ml: 1, p: 0.5, backgroundColor: "#f0f0f0" }}
                    onClick={() => handleEditResponsibility(index)}
                  >
                    <EditIcon sx={{ fontSize: 16 }} />
                  </IconButton>
                  <IconButton
                    sx={{ ml: 1, p: 0.5, backgroundColor: "#f8d7da" }}
                    onClick={() => removeResponsibility(index)}
                  >
                    <DeleteIcon sx={{ fontSize: 16, color: "#c00" }} />
                  </IconButton>
                </Typography>

                <Typography variant="body2">{item || "No Address"}</Typography>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default Responsibilities;
