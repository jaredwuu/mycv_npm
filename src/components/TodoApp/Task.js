// import {FaTimes} from 'react-icons/fa'


const Task = ({ task, onDelete, onToggle }) => {

    return (
        <div className={`${task.taskReminder ? 'border-l-8 border-green-500' : ''} container cursor-pointer py-2 border-2`} onDoubleClick={() => onToggle(task._id)} >
            <div className='text-4xl center pl-2'>
                {task.taskName}{' '}
            </div>
            <i className="fa fa-times text-red-500 hover:text-red-900 absolute transform translate-x-52 -translate-y-7 text-2xl" onClick={() => onDelete(task._id)} />

            <div className='text-2xl center'>{task.taskDate} at {task.taskTime}</div>
        </div>
    )
}

export default Task

