import "@/styles/viewStyles/dashboard.styles.css";

const Dashboard = () => {
    const now = new Date();

    const timeOptions: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' };
    const formattedTime = now.toLocaleTimeString('en-US', timeOptions);
    
    const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', dateOptions);

    return (
        <div className="dashboard-wrapper">
            <h3>Welcome to my portfolio!</h3>
            <span>Todays Date and Time: {`${formattedDate} ${formattedTime}`}</span>
        </div>
    )
}

export default Dashboard;