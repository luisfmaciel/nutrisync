import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Link to={'/dashboard'} >
            <h1>HOME</h1>
        </Link>
    )
} 

export default Home;