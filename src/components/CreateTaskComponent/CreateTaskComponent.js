import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./CreateTaskComponent.css";
import {
  Select,
  MenuItem,
  FormHelperText,
  InputLabel,
  FormControl,
  TextField,
  Stack,
} from "@mui/material";
// import Textarea from '@mui/joy/Textarea';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function CreateTaskComponent(props) {
  const createProjects = [
    { id: 1, name: "Financial Portal" },
    { id: 2, name: "Management Sector" },
  ];
  const issuesType = [
    { id: 1, name: "Story" },
    { id: 2, name: "Defect" },
    { id: 3, name: "Epic" },
    { id: 4, name: "Task" },
    { id: 5, name: "Test" },
    { id: 6, name: "Bug" },
  ];
  const assignes = [
    { id: 1, name: "Nithin" },
    { id: 2, name: "Sampath" },
  ];

  const viewFlows = [
    { id: 1, name: "Waiting for development" },
    { id: 2, name: "In Progress" },
    { id: 3, name: "In Development" },
    { id: 4, name: "Dev completed" },
    { id: 5, name: "Done" },
  ];

  const [project, setProject] = useState("");
  const [issueType, setIssueType] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [assigne, setAssigne] = useState("");
  const [ETA, setETA] = useState("");

  const handleClose = () => {
    props.ModalPopup("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      "@@@@@@",
      project,
      issueType,
      summary,
      description,
      assigne,
      ETA
    );
  };
  function handleSummary(event) {
    console.log(event.target.value, '$$$$$$');
    setSummary(event.target.value)
  }
  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Create issue
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          All fields marked with an asterisk(*) are required
        </Typography>
        <div style={{ marginTop: "10px", marginLeft: "5rem", width: "50rem" }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 0 }}>
              <InputLabel>Assigne(Name)*</InputLabel>
              <Select
                value={assigne}
                onChange={(e) => setAssigne(e.target.value)}
                style={{ height: "2.5rem", width: "15rem" }}
                required
              >
                {assignes.map((item) => (
                  <MenuItem value={item.id}>{item.name}</MenuItem>
                ))}
              </Select>
            </Stack>
            <InputLabel>Project*</InputLabel>
            <Select
              value={project}
              onChange={(e) => setProject(e.target.value)}
              fullWidth
              style={{ height: "2.5rem" }}
              required
            >
              {createProjects.map((item) => (
                <MenuItem value={item.id}>{item.name}</MenuItem>
              ))}
            </Select>
            <InputLabel style={{ marginTop: "10px" }}>Issue Type*</InputLabel>
            <Select
              value={issueType}
              onChange={(e) => setIssueType(e.target.value)}
              fullWidth
              style={{ height: "2.5rem" }}
              required
            >
              {issuesType.map((item) => (
                <MenuItem value={item.id}>{item.name}</MenuItem>
              ))}
            </Select>
            <TextField
              style={{ marginTop: "10px" }}
              type="text"
              variant="outlined"
              color="secondary"
              label="Summary"
              onChange={handleSummary}
              value={summary}
              fullWidth
              required
            />
            <TextField
              style={{ marginTop: "10px" }}
              type="text"
              variant="outlined"
              color="secondary"
              label="Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              fullWidth
              required
            />
            <Button
              variant="outlined"
              color="secondary"
              type="submit"
              style={{ marginTop: "10px" }}
            >
              Create
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              type="submit"
              style={{ marginTop: "10px" }}
              onClick={handleClose}
              sx={{ ml: 2 }}
            >
              Cancel
            </Button>
          </form>
        </div>
      </Box>
    </Modal>
  );
}
