import { Link } from 'react-router-dom';

const ManageTask = () => {
    // Sample task data
    const assignedUsers = 10; // Total users assigned
    const completedUsers = 4; // Number of completed users
    const pendingTasks = 5; // Example number for pending tasks
    const inProgressTasks = 3; // Example number for in-progress tasks

    // Function to generate the progress line with colored segments
    const generateCompletionLine = () => {
        let line = [];
        for (let i = 0; i < assignedUsers; i++) {
            line.push(i < completedUsers ? 'completed' : 'notCompleted');
        }
        return line;
    };

    // Task progress line
    const progressLine = generateCompletionLine();

    // Sample task data for 3 tasks
    const tasks = [
        { title: "Task 1", priority: "high", status: "in-progress", assignedUsers: 5, completedUsers: 2 },
        { title: "Task 2", priority: "medium", status: "completed", assignedUsers: 4, completedUsers: 4 },
        { title: "Task 3", priority: "low", status: "pending", assignedUsers: 6, completedUsers: 0 },   
          { title: "Task 3", priority: "low", status: "pending", assignedUsers: 6, completedUsers: 0 }
    ];

    return (
        <div className="flex min-h-screen bg-[#f5f1ec] text-[#1e1e1e]">
            {/* Sidebar */}
            <aside className="w-48 bg-white shadow-md flex flex-col items-center py-6 sticky top-0 h-screen">
                <div className="mb-6">
                    <p className="font-semibold text-xl text-gray-700">Logo</p>
                </div>
                <nav className="flex flex-col gap-6 text-xl">
                    <button title="Dashboard">
                        <Link to="/admindashboard">Dashboard</Link>
                    </button>
                    <button title="Manage Tasks">
                        <Link to="/manage-tasks">Manage Tasks</Link>
                    </button>
                    <button title="Create Task">
                        <Link to="/create-tasks">Create Tasks</Link>
                    </button>
                    <button title="Users">
                    <Link to="/all-users">Users</Link>
                    </button>
                    <button title="Settings">Logout</button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h1 className="font-bold text-lg">Tasks</h1>
                    {/* Profile section */}
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-300"></div> {/* Profile picture */}
                        <span className="text-sm text-gray-700 font-medium">Admin</span>
                    </div>
                </div>

                {/* Status Section */}
                <div className="flex gap-4 mb-4">
                    <div className="flex items-center gap-1">
                        <span className="font-medium text-sm text-gray-700">Pending</span>
                        <div className="w-4 h-4 bg-gray-500 text-white flex items-center justify-center rounded-full text-xs">
                            {pendingTasks}
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="font-medium text-sm text-gray-700">In Progress</span>
                        <div className="w-4 h-4 bg-gray-500 text-white flex items-center justify-center rounded-full text-xs">
                            {inProgressTasks}
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="font-medium text-sm text-gray-700">Completed</span>
                        <div className="w-4 h-4 bg-gray-500 text-white flex items-center justify-center rounded-full text-xs">
                            {completedUsers} {/* Example, replace with dynamic data */}
                        </div>
                    </div>
                </div>

                {/* Task Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tasks.map((task, index) => {
                        const progressLine = generateCompletionLine(); // Generate progress line dynamically
                        return (
                            <div key={index} className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
                                {/* Priority and Status on Top */}
                                <div className="flex items-center gap-2 mb-2">
                                    {/* Priority Box */}
                                    <div className={`text-xs px-2 py-1 rounded-full 
                                        ${task.priority === 'high' ? 'bg-red-500 text-white' :
                                        task.priority === 'medium' ? 'bg-yellow-500 text-white' :
                                        'bg-green-500 text-white'}`}>
                                        {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} {/* Display "High", "Medium", "Low" */}
                                    </div>

                                    {/* Task Status Box */}
                                    <div className={`text-xs px-2 py-1 rounded-full 
                                        ${task.status === 'completed' ? 'bg-green-500 text-white' :
                                        task.status === 'in-progress' ? 'bg-blue-500 text-white' :
                                        'bg-gray-500 text-white'}`}>
                                        {task.status.charAt(0).toUpperCase() + task.status.slice(1)} {/* Display status */}
                                    </div>
                                </div>

                                {/* Task Title in Next Row */}
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">{task.title}</h3>

                                {/* Task Description */}
                                <p className="text-sm text-gray-500 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus.</p>

                                {/* Assigned Users */}
                                <div className="flex justify-between mb-2">
                                    <div>
                                        <strong className="font-medium text-gray-700 text-sm">Assigned Users:</strong>
                                        <span className="text-gray-600 text-sm">John Doe, Jane Smith</span>
                                    </div>
                                </div>

                                {/* Task Completion Progress Line */}
                                <div className="mt-3">
                                    <h4 className="text-sm font-semibold text-gray-800 mb-1">Task Done: {task.completedUsers}/{task.assignedUsers}</h4>
                                    <div className="flex space-x-1 h-4">
                                        {progressLine.map((status, index) => (
                                            <div
                                                key={index}
                                                className={`h-full w-6 ${status === 'completed' ? 'bg-green-500' : 'bg-gray-300'}`}
                                            ></div>
                                        ))}
                                    </div>
                                </div>

                                {/* Dates */}
                                <div className="flex justify-between mt-3">
                                    <div>
                                        <strong className="font-medium text-gray-700 text-sm">Start Date:</strong>
                                        <span className="text-gray-600 text-sm">2025-05-01</span>
                                    </div>
                                    <div>
                                        <strong className="font-medium text-gray-700 text-sm">Due Date:</strong>
                                        <span className="text-gray-600 text-sm">2025-06-01</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
};

export default ManageTask;
