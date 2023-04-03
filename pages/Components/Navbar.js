import style from "../../styles/Navbar.module.css";

const Navbar = ()=>{

    return(
        <div className={style.Child1}>
            <div className={style.logo}>

                <span>BLOGAPP</span>

            </div>
            <div className={style.categories}>

                <li>Web Development</li>
                <li>Astronomy</li>
                <li>Sports</li>
                <li>Education</li>
                <li>Photography</li>

            </div>
        </div>
    )
}

export default Navbar;