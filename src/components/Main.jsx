import { Link } from 'react-router-dom';

function Main() {
    return (
        <main>
            <div className={"container"}>
                <Link to="/booking">
                    <button>Reserve a Table</button>
                </Link>
            </div>
        </main>
    );
}

export default Main;
