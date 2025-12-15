function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">Bold<span className="logo-dot">.</span></div>
                <nav className="nav">
                    <a href="#home" className="active">Home</a>
                    <div className="dropdown">
                        <a href="#dropdown" className="dropdown-link">
                            Dropdown <span className="caret">▼</span>
                        </a>
                        <div className="dropdown-menu">
                            <a href="#option1">Option 1</a>
                            <a href="#option2">Option 2</a>
                            <a href="#option3">Option 3</a>
                        </div>
                    </div>
                    <a href="#inner-page">Inner Page</a>
                    <a href="#contact">Contact us</a>
                </nav>
                <button className="btn-free-templates">Free templates</button>
            </div>
        </header>
    );
}

