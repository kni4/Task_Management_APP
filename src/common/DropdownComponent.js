import React from "react";
import {
  Select,
  MenuItem,
  FormHelperText,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useState, useEffect } from "react";
import "./common.css";

export default function DropdownComponent(props) {
  const [defaultValues, setDefaultValues] = useState([]);
  const [selected, setSelected] = useState("");
  console.log(props, "#####");
  const dashboards = [
    { id: 1, name: "View System dashboard" },
    { id: 2, name: "Manage Dashboards" },
  ];
  const projects = [
    { id: 1, name: "Financial Sector" },
    { id: 2, name: "Banking Sector" },
  ];
  
  const issues = [
    { id: 1, name: "Recent Issues" },
    { id: 2, name: "Archived Issues" },
  ];
  const boards = [
    { id: 1, name: "CSEV board" },
    { id: 2, name: "Financial Boards" },
  ];
  const structure = [
    { id: 1, name: "Create Structure" },
    { id: 2, name: "Manage Structure" },
  ];
  const plans = [
    { id: 1, name: "View Plans" },
    { id: 2, name: "Manage Shared teams" },
  ];

  const viewFlows = [
    { value: 1, name: "TO DO" },
    { value: 2, name: "IN PROGRESS" },
    { value: 3, name: "DONE" },
  ];

  useEffect(() => {
    if (props.text === "Dashboards") {
      setDefaultValues(dashboards);
    } else if (props.text === "Projects") {
      setDefaultValues(projects);
    } else if (props.text === "Issues") {
      setDefaultValues(issues);
    } else if (props.text === "Boards") {
      setDefaultValues(boards);
    } else if (props.text === "Structure") {
      setDefaultValues(structure);
    }else if (props.text === "View Work Flow") {
      setDefaultValues(viewFlows);
    } else {
      setDefaultValues(plans);
    }
  }, []);

  const selectionChangeHandler = (event) => {
    setSelected(event.target.value);
  };
  return (
    <FormControl
      className="dropdown-svg-icon"
      style={{ marginTop: 10, marginLeft: 10 }}
    >
      <InputLabel className="dropdown-svg-icon">{props.text}</InputLabel>
      <Select
        className="dropdown-svg-icon"
        value={selected}
        onChange={selectionChangeHandler}
        style={{color:"black"}}
      >
        {defaultValues.map((item) => (
          <MenuItem value={item.id}>{item.name}</MenuItem>
        ))}
      </Select>
      <FormHelperText className="dropdown-svg-icon">
        Select a {props.text}
      </FormHelperText>
    </FormControl>
  );
}
