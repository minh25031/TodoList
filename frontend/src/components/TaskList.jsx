

import TaskEmptyState from './TaskEmptyState'
import TaskCard from './TaskCard'

const TaskList = () => {
    let filter = 'all'
    const filterTasks = [
        {
            _id: '1',
            title: 'Task 1',
            status: 'started',
            completedAt: null,
            createdAt: new Date(),
        },
        {
            _id: '2',
            title: 'Task 2',
            status: 'completed',
            completedAt: new Date(),
            createdAt: new Date(),
        }
    ]

    if (!filterTasks || filterTasks.length === 0) {
        return <TaskEmptyState filter={filter} />
    }
    return (
        <div className="space-y-3 ">
            {filterTasks.map((task, index) => (
                <TaskCard key={task._id ?? index} task={task} index={index} />
            ))}
        </div>
    )
}

export default TaskList