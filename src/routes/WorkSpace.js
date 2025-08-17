import PianoContainer from '../components/PianoContainer.js';
import logo from '../images/logo.png'
const WorkSpace = () =>{
    return (
        <>
        <header className='bg-dark text-white text-left text-bold'>
            <nav class="navbar navbar-expand-sm bg-dark">

            <div className="container-fluid">
                <ul class="navbar-nav">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="Logo" style={{ width: '60px', height: '60px' }} />
                    </a>
                    <h1 className="navbar-text text-white">BrickNotes</h1>
                </ul>

                <div className='navbar-collapse'>
                    <ul className="navbar-nav ms-auto fs-6 fw-bold justify-content-end gap-3">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/app">APP</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/about">ABOUT</a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </header>
        <div className='container mt-4 border'>
            <div className='row'>
                <PianoContainer />
            </div>
        </div>
        </>
    );
}

export default WorkSpace