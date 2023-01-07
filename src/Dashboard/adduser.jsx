import { useEffect , useState} from "react";
import { Link, useNavigate } from "react-router-dom";



function adduser (){
    const [users, setUsers] = useState([])

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
        let username=sessionStorage.getItem('username');
        if(username==='' || username ===null){
            usenavigate('/login');
        }
    }, []);

    return (
        <div>
            <div className="header">
            <Link to={'/admin'}>Admin</Link>
                <Link to={'/'}>Home</Link>
                <Link style={{float:'right'}} to={'/login'}>Logout</Link>
            </div>
            <div>
                <Link to={'/adduser'}>AddUser</Link>
            </div>
            <h1 className="text-center">user</h1>
            <div>
                {users.length > 0 && (
                    <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.name}{user.role}</li>
                    ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default adduser;