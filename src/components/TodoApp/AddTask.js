import { useState } from 'react'
//import { Button, Form } from 'react-bootstrap'

const AddTask = ({ onAdd }) => {
    const [taskName, setTaskName] = useState('')
    const [taskTime, setTaskTime] = useState('')
    const [taskDate, setTaskDate] = useState(new Date());
    const [taskReminder, setTaskReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!taskName) {
            alert('Please add a task')
            return
        }

        onAdd({ taskName, taskDate, taskTime, taskReminder })

        setTaskName('')
        setTaskTime('')
        setTaskDate('');
        setTaskReminder(false)
    }

    return (
        <div className="container border-2">
            <form onSubmit={onSubmit}>

                <div className="input-field">
                    <label className="px-4">Add Task</label>
                    <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
                </div>

                <div className="">
                    <label className="px-4">Select Date</label>
                    <input type="date" name="onDate" value={taskDate} onChange={(e) => setTaskDate(e.target.value)} />
                </div>


                <div className="input-field">
                    <label className="px-4">Enter Time</label>
                    <input type="time" id="appt" name="appt" min="00:00" max="24:00" value={taskTime} onChange={(e) => setTaskTime(e.target.value)}required />
                    {/* <input type="text" value={taskTime} onChange={(e) => setTaskTime(e.target.value)} /> */}
                </div>

                <div className="input-field">
                    <p>
                        <label className="px-4">
                            <input type="checkbox" value={taskReminder} checked={taskReminder} onChange={(e) => setTaskReminder(e.currentTarget.checked)} />
                            <span>Set Reminder</span>
                        </label>
                    </p>
                </div>
                <div className="center py-3">
                    <button className="py-3 px-28 rounded bg-blue-500 hover:bg-blue-900" type="submit" >
                        Save Task
                    </button>
                </div>
            </form>
        </div>
    )
}





export default AddTask
