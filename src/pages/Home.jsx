import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {

    const [users, setUsers] = useState([])
    const [show, setShow] = useState(false)
    const fetchData = async () => {
        const response = await fetch("http://localhost:8000/user/")
        const data = await response.json()
        setUsers(data)
    }

    useEffect(() => {
        fetchData()
    }, [])
    const usenavigate = useNavigate();
    useEffect(() => {
        let username = sessionStorage.getItem('username');
        if (username === '' || username === null) {
            usenavigate('/login');
        }
        if (username === 'admins') {
            setShow(true)
        }
    }, []);

    // Buttons are kept temperorly for testing logic
    return (
        <div>
            <div>
                {
                    show ? <Link to={'/admin'}>Admin</Link> : null
                }
                <button onClick={() => setShow(true)}>Show</button>
                <button onClick={() => setShow(false)}>Hide</button>
                <Link to={'/mentor'}>Mentor</Link>
            </div>
            <div className="header">
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/members'}>Members</Link>
                <Link to={'/research'}>Research</Link>
                <Link to={'/projects'}>Projects</Link>
                <Link style={{ float: 'right' }} to={'/login'}>Logout</Link>
            </div>
            <h1 className="text-center">Bi0s Hardware</h1>
            <div>
                {users.length > 0 && (
                    <ul>
                        {users.map(user => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );

}

export default Home;