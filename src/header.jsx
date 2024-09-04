

function Header() {
    return(
        <>
        <header className="header">
            <h1>My React App</h1>
            <nav>
                <ul className="header-ul">
                    <li className="header-li"><a href="#home">Home</a></li>
                    <li className="header-li"><a href="#about">About</a></li>
                    <li className="header-li"><a href="#service">Service</a></li>
                    <li className="header-li"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        </>
    );
}
export default Header