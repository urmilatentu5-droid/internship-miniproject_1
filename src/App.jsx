import React, { useState } from "react";
import "./App.css";

function App() {
  const [subject, setSubject] = useState("");
  const [teacher, setTeacher] = useState("");
  const [time, setTime] = useState("");
  const [schedule, setSchedule] = useState([]);

  const addClass = () => {
    if (!subject || !teacher || !time) {
      alert("Please fill all fields");
      return;
    }

    const newClass = {
      id: Date.now(),
      subject,
      teacher,
      time,
    };

    setSchedule([...schedule, newClass]);

    setSubject("");
    setTeacher("");
    setTime("");
  };

  const deleteClass = (id) => {
    setSchedule(schedule.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <div className="planner-card">
        <h1>📚 Virtual Classroom Schedule Planner</h1>

        <div className="form">
          <input
            type="text"
            placeholder="Enter Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <input
            type="text"
            placeholder="Teacher Name"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
          />

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <button onClick={addClass}>
            Add Class
          </button>
        </div>

        <div className="schedule-list">
          <h2>Today's Schedule</h2>

          {schedule.length === 0 ? (
            <p>No classes scheduled.</p>
          ) : (
            schedule.map((item) => (
              <div key={item.id} className="schedule-item">
                <h3>{item.subject}</h3>
                <p>👨‍🏫 {item.teacher}</p>
                <p>⏰ {item.time}</p>

                <button
                  onClick={() => deleteClass(item.id)}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
