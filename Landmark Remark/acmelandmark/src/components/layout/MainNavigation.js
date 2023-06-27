import {Link} from 'react-router-dom'
import classes from './MainNavigation.module.css';

function MainNavigation ()
{
    return(
        <header className={classes.header}>
            <div className={classes.div}>LandMark</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/filter'>Filter</Link>
                    </li>
                    <li>
                        <Link to='/'>All SaveLocation</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )

}

export default MainNavigation;