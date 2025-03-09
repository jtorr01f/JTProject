'use client';
import Button from "@/components/Button";
import "@/styles/viewStyles/dashboard.styles.css";
import { useRouter } from "next/navigation";
import { useRef } from "react";

type TaskProps = {
    taskName: string;
    taskDesc: string;
    taskDate: Date;
}

const Dashboard = () => {
    const taskButtonRef = useRef(null);
    const router = useRouter();

    const now = new Date();

    const jtTasks = localStorage.getItem("jt-tasks") || "[]"
    const todaysTasks = JSON.parse(jtTasks).filter((task: TaskProps) => new Date(task.taskDate).getDate === new Date().getDate);
    
    const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'  };
    const formattedDate = now.toLocaleDateString('en-US', dateOptions);

    const onButtonPressed = () => {
        router.push('/addTask');
    }

    return (
        <div className="dashboard-wrapper">
            <div className="dashboard-header ">
                <h3>Welcome to my portfolio!</h3>
                <span>Todays Date and Time: {`${formattedDate}`}</span>
            </div>

            <Button
                id="add-task-button"
                buttonRef={taskButtonRef}
                buttonText="Add A Task"
                onClick={onButtonPressed}
                buttonType="primary"
            />
            <div className="task-card-wrapper">
                {todaysTasks.map((task: TaskProps, index: number) => (
                    <div key={`task-${index}`} className="todays-task-card">
                        <div className="todays-task-header">
                            <div>
                                {task.taskName}
                            </div>
                            {new Date(task.taskDate).toLocaleDateString('en-US', {...dateOptions })}
                        </div>
                        <div className="todays-task-body">
                            {task.taskDesc}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard;