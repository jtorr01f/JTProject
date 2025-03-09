'use client';

import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { IconPencil } from "@tabler/icons-react";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import DateInput from "@/components/DatePicker";
import "@/styles/viewStyles/modalStyles/addTaskModal.styles.css";

const AddTaskModal = () => {
  const tasks = localStorage.getItem("jt-tasks") || "";
  const parsedTasks = tasks?.length > 0 ? JSON.parse(tasks) : [];
  const todaysTasks = parsedTasks.filter(() => {});

  const [currentTasks, setCurrentTasks] = useState(todaysTasks)
  const [taskName, setTaskName] = useState<string>("");
  const [taskDesc, setTaskDesc] = useState<string>("");
  const [taskDate, setTaskDate] = useState<Date>(new Date());

  const router = useRouter();
  const cancelButtonRef = useRef(null);
  const createTaskRef = useRef(null);

  const onTaskAdded = () => {
    const newState = [
      ...currentTasks,
      {
        taskName,
        taskDesc,
        taskDate,
      }
    ]
    setCurrentTasks(newState)

    localStorage.setItem("jt-tasks", JSON.stringify(newState));

    router.back();
  }

  return (
    <div className="add-task-wrapper">
        <div className="modal-body">
          <div className="add-task-top-row">
            <TextInput
              id="add-task-name"
              inputValue={taskName}
              inputLabel="Task Name"
              inputType="input"
              onInputChange={(e) => setTaskName(e.target.value)}
            />
            <DateInput
              id="add-task-datepicker"
              inputLabel="Date"
              selectedDate={taskDate} 
              onDateSelected={(date) => setTaskDate(date || new Date())} 
            />
          </div>
          <TextInput
            id="add-task-desc"
            inputValue={taskDesc}
            inputLabel="Task Description"
            inputType="area"
            areaSize="lg"
            onAreaChange={(e) => setTaskDesc(e.target.value)}
          />
        </div>
        <div className="modal-footer">
          <Button
            id="add-task-cancel-button"
            buttonRef={cancelButtonRef}
            buttonText="Cancel"
            buttonType="secondary"
            onClick={() => router.back()}
          />
          <Button
            id="add-task-button"
            buttonIcon={<IconPencil size={20} />}
            buttonRef={createTaskRef}
            buttonText="Add Task"
            buttonType="primary"
            onClick={onTaskAdded}
          />
        </div>
    </div>
  )
}

export default AddTaskModal