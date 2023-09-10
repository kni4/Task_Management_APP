import React, {useState} from "react";
import Button from "@mui/material/Button";
import CreateTaskComponent from "../components/CreateTaskComponent/CreateTaskComponent";

export default function ButtonComponent(props) {
  const [open, setOpen] = useState(false);

  const createTaskModal = () => {
    setOpen(!open)
  };
  return (
    <>
      <Button
        variant="contained"
        onClick={createTaskModal}
        style={{ marginTop: 20, marginLeft: 10 }}
      >
        Create
      </Button>
      {open && <CreateTaskComponent ModalPopup = {createTaskModal} open={open}/>}
    </>
  );
}
