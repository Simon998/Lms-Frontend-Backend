import InstructorSidebar from "./InstructorSidebar";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Link } from 'react-router-dom';

const baseURL = 'http://127.0.0.1:8000/api';

function rowedStudents() {
   
    const [studentData, setstudentData] = useState([]);
    const { quiz_id } = useParams();

    useEffect(() => {
        try {
            axios.get(baseURL+'/attempted-quiz/'+quiz_id)
            .then((res) => {
                setstudentData(res.data);
            });
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <InstructorSidebar />
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Student Attempt List</h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Username</th>
                                        <th>Result</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {studentData.map((row, index) => (
                                        <tr key={index}>
                                            <td>{row.student.full_name}</td>
                                            <td>{row.student.email}</td>
                                            <td>{row.student.username}</td>
                                            <td>
                                                <Link to="#">Quiz Result</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default rowedStudents;
///needs to be worked on///