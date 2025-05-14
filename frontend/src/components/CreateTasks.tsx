import { Link } from 'react-router-dom';

const ManageTask = () => {
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
                    <button title="Messages">Create Tasks</button>
                    <button title="Contacts">Users</button>
                    <button title="Settings">Logout</button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4 w-full">
                <div className="bg-white w-full p-8 rounded-xl shadow-md">
                    <h2 className="text-lg font-bold mb-6 text-left">Create New Task</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block mb-1 font-medium">Title</label>
                            <input
                                type="text"
                                className="w-full border px-4 py-2 rounded-md"
                                placeholder="Enter task title"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Description</label>
                            <textarea
                                rows={3}
                                className="w-full border px-4 py-2 rounded-md"
                                placeholder="Enter task description"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Priority</label>
                            <select className="w-full border px-4 py-2 rounded-md">
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Due Date</label>
                            <input
                                type="date"
                                className="w-full border px-4 py-2 rounded-md"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Checklist</label>
                            <input
                                className="w-full border px-4 py-2 rounded-md mb-2"
                                placeholder="Checklist item 1"
                            />
                            <button
                                type="button"
                                className="text-blue-600 text-sm hover:underline"
                            >
                                + Add Checklist Item
                            </button>
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Assigned To (User IDs)</label>
                            <input
                                className="w-full border px-4 py-2 rounded-md mb-2"
                                placeholder="User ID 1"
                            />
                            <button
                                type="button"
                                className="text-blue-600 text-sm hover:underline"
                            >
                                + Add Assigned User
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Create Task
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default ManageTask;
