import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import "./TaskDetailsComponent.css";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Modal from "@mui/material/Modal";
import {
  Select,
  MenuItem,
  InputLabel,
  TextField,
  Stack,
  FormHelperText,
  FormControl,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import DropdownComponent from "../../common/DropdownComponent";

const classes = {
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 20,
    textAlign: "center",
    color: "blue",
    fontFamily: "Roboto",
  },
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TaskDetailsComponent() {
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = useState(false);
  const [viewWorkFlow, setViewWorkFlow] = useState("");
  const [summary, setSummary] = useState("");
  const [etaTime, setEtaTime] = useState(0);
  const [description, setDescription] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [updatedTask, setUpdatedTask] = useState();
  const [subTasks, setSubTasks] = React.useState([
    {
      id: 1,
      summary: "Analysis and development",
      eta: 3,
      description: "Create the material ui accordion",
      viewWorkFlow: "TO DO",
    },
  ]);

  useEffect(() => {
    setSubTasks(subTasks);
  }, [subTasks]);

  const eta = [
    { value: 1, hours: 1 },
    { value: 2, hours: 2 },
    { value: 3, hours: 3 },
    { value: 5, hours: 5 },
    { value: 8, hours: 8 },
  ];

  const viewFlows = [
    { value: "TO DO", name: "TO DO" },
    { value: "IN PROGRESS", name: "IN PROGRESS" },
    { value: "DONE", name: "DONE" },
  ];

  const createSubTask = () => setOpen(true);
  const handleClose = () => {
    resetValues();
  };
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function formFielsSubTaskCreated(event) {
    let name = event.target.name;
    let value = event.target.value;
    if (name === "viewWorkFlow") {
      setViewWorkFlow(value);
    } else if (name === "eta") {
      setEtaTime(value);
    } else if (name === "summary") {
      setSummary(value);
    } else {
      setDescription(value);
    }
  }

  const handleSubmit = (event) => {
    console.log(event, "##################");
    let newObj = {
      id: 0,
      summary: "",
      eta: 0,
      description: "",
      viewWorkFlow: "",
    };
    subTasks.forEach((element) => {});
    newObj.id = subTasks.length + 1;
    if (description) {
      newObj.description = description;
    }
    if (summary) {
      newObj.summary = summary;
    }
    if (etaTime > 0) {
      newObj.eta = etaTime;
    }
    if (viewWorkFlow) {
      newObj.viewWorkFlow = viewWorkFlow;
    }
    subTasks.push(newObj);
    console.log(subTasks, "######");
    resetValues();
  };

  const resetValues = () => {
    setViewWorkFlow("");
    setSummary("");
    setEtaTime(0);
    setDescription("");
    setOpen(false);
  };

  const updateTaskDetails = () => {
    console.log(updatedTask, "updatedTask");
    subTasks.forEach((element) => {
      if (element.id === updatedTask.id) {
        element.viewWorkFlow = viewWorkFlow;
        element.summary = summary;
        element.eta = etaTime;
        element.description = description;
      }
    });
    resetValues();
    setIsUpdate(false);
  };

  const handleUpdate = (e) => {
    setUpdatedTask(e);
    subTasks.forEach((element) => {
      if (element.id === e.id) {
        setViewWorkFlow(e.viewWorkFlow);
        setSummary(e.summary);
        setEtaTime(e.eta);
        setDescription(e.description);
      }
    });
    setIsUpdate(true);
    setOpen(true);
  };

  const handleDelete = (e) => {
    let finalTaskList = subTasks.filter((x) => {
      return x.id !== e.id;
    });
    setSubTasks([...finalTaskList]);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={createSubTask}
        style={{
          marginTop: "2rem",
          marginRight: "7.25rem",
          float: "Right",
        }}
      >
        Create Sub Task
      </Button>
      <div className="accordion-container">
        {subTasks?.map((item, index) => (
          <Accordion
            key={`accordion_${index}`}
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`pane${index + 1}1a-content`}
              id={`pane${index + 1}-header`}
              key={`accordionSummary${index}`}
            >
              <Typography
                sx={{ width: "33%", flexShrink: 0 }}
                variant="h6"
                key={`bugDedectNo_${index}`}
              >
                Bug defect no: CSESV{item.id}
              </Typography>
              <Button
                variant="contained"
                onClick={() => handleUpdate(item)}
                style={{
                  marginBottom: "1rem",
                  marginLeft: "35rem",
                  float: "Right",
                }}
              >
                Update
              </Button>
              <Button
                variant="contained"
                onClick={() => handleDelete(item)}
                style={{
                  marginBottom: "1rem",
                  marginLeft: 10,
                  float: "Right",
                }}
              >
                Delete
              </Button>
            </AccordionSummary>
            <AccordionDetails>
              <div style={classes.root}></div>
              <Grid container spacing={3} key={`gridContainer_${index}`}>
                {item && item.viewWorkFlow === "TO DO" && (
                  <Grid item xs={6} sm={4} key={`gridItem_${index}`}>
                    <Paper style={classes.paper} key={`todo_${index}`}>
                      To Do
                      <div style={{ marginTop: "0.5rem" }}>
                        <Card sx={{ maxWidth: 600 }}>
                          <CardContent>
                            <Typography variant="h6" gutterBottom>
                              sub-task:{index + 1}
                            </Typography>

                            <>
                              <div key={`Todo_${index}`}>
                                <Typography variant="h6" component="div">
                                  {item.Summary}
                                </Typography>
                                <Typography
                                  sx={{ mb: 1.5 }}
                                  color="text.secondary"
                                >
                                  ETA:{item.eta} hours
                                </Typography>
                                <Typography variant="body1">
                                  {item.description}
                                </Typography>
                              </div>
                            </>
                          </CardContent>
                        </Card>
                      </div>
                    </Paper>
                  </Grid>
                )}
                {item && item.viewWorkFlow === "IN PROGRESS" && (
                  <Grid item xs={6} sm={4} key={`inProgress_${index}`}>
                    <Paper style={classes.paper}>
                      In Progress
                      <div style={{ marginTop: "0.5rem" }}>
                        <Card sx={{ maxWidth: 600 }}>
                          <CardContent>
                            <Typography variant="h6" gutterBottom>
                              sub-task:{index + 1}
                            </Typography>

                            <>
                              <div key={`Todo_${index}`}>
                                <Typography variant="h6" component="div">
                                  {item.Summary}
                                </Typography>
                                <Typography
                                  sx={{ mb: 1.5 }}
                                  color="text.secondary"
                                >
                                  ETA:{item.eta} hours
                                </Typography>
                                <Typography variant="body1">
                                  {item.description}
                                </Typography>
                              </div>
                            </>
                          </CardContent>
                        </Card>
                      </div>
                    </Paper>
                  </Grid>
                )}
                {item && item.viewWorkFlow === "DONE" && (
                  <Grid item xs={6} sm={4} key={`done_${index}`}>
                    <Paper style={classes.paper}>
                      Done
                      <div style={{ marginTop: "0.5rem" }}>
                        <Card sx={{ maxWidth: 600 }}>
                          <CardContent>
                            <Typography variant="h6" gutterBottom>
                              sub-task:{index + 1}
                            </Typography>

                            <>
                              <div key={`Todo_${index}`}>
                                <Typography variant="h6" component="div">
                                  {item.Summary}
                                </Typography>
                                <Typography
                                  sx={{ mb: 1.5 }}
                                  color="text.secondary"
                                >
                                  ETA:{item.eta} hours
                                </Typography>
                                <Typography variant="body1">
                                  {item.description}
                                </Typography>
                              </div>
                            </>
                          </CardContent>
                        </Card>
                      </div>
                    </Paper>
                  </Grid>
                )}
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create a Sub task
          </Typography>
          <>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <form onSubmit={handleSubmit}>
                <Stack spacing={2} direction="row" sx={{ marginBottom: 0 }}>
                  <InputLabel>View Workflow</InputLabel>

                  <Select
                    id="viewWorkFlow"
                    name="viewWorkFlow"
                    onChange={formFielsSubTaskCreated}
                    value={viewWorkFlow}
                    style={{
                      height: "2.5rem",
                      width: "15rem",
                    }}
                    required
                  >
                    {viewFlows.map((item) => (
                      <MenuItem value={item.value}>{item.name}</MenuItem>
                    ))}
                  </Select>
                  <InputLabel sx={{ ml: 5 }}>ETA*</InputLabel>
                  <Select
                    onChange={formFielsSubTaskCreated}
                    value={etaTime}
                    name="eta"
                    style={{ height: "2.5rem", width: "15rem" }}
                    required
                  >
                    {eta.map((item) => (
                      <MenuItem value={item.value}>{item.hours}</MenuItem>
                    ))}
                  </Select>
                </Stack>
                <TextField
                  style={{ marginTop: "10px" }}
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="Summary"
                  name="summary"
                  onChange={formFielsSubTaskCreated}
                  value={summary}
                  fullWidth
                  required
                />
                <TextField
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="Description"
                  style={{ height: "1.5rem", marginTop: "10px" }}
                  name="description"
                  onChange={formFielsSubTaskCreated}
                  value={description}
                  fullWidth
                  required
                />
                <div style={{ marginTop: "2.5rem" }}>
                  <Button
                    variant="contained"
                    onClick={handleClose}
                    style={{
                      marginBottom: "1rem",
                      marginLeft: 10,
                      float: "Right",
                    }}
                  >
                    Cancel
                  </Button>
                  {(isUpdate && (
                    <Button
                      variant="contained"
                      onClick={updateTaskDetails}
                      style={{
                        marginBottom: "1rem",
                        marginLeft: 10,
                        float: "Right",
                      }}
                    >
                      Update
                    </Button>
                  )) || (
                    <Button
                      variant="contained"
                      type="submit"
                      style={{
                        marginBottom: "1rem",
                        marginLeft: 10,
                        float: "Right",
                      }}
                    >
                      Create
                    </Button>
                  )}
                </div>
              </form>
            </Typography>
          </>

          <Typography id="modal-modal-description" sx={{ mt: 5 }}></Typography>
        </Box>
      </Modal>
    </>
  );
}
