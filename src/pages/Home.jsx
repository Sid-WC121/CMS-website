import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
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
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/members'}>Members</Link>
                <Link to={'/research'}>Research</Link>
                <Link to={'/projects'}>Projects</Link>
                <Link style={{float:'right'}} to={'/login'}>Logout</Link>
            </div>
            <h1 className="text-center">Bi0s Hardware</h1>
        </div>
    );
}

export default Home;