import { Link } from 'react-router-dom'
import './styles.css'

function NotFound () {
    return(
        <div >

            <header className='header'>
                <p>404 NOT FOUND</p>
            </header>

            <main className='main'>
                <section className="content">
                
                <img src="https://github.com/EstebanDev08/404-page-not-found/blob/master/img/Scarecrow.png?raw=true" alt="scarecrow"/>

                <div className="info-error-content">
                    <h1>I have bad news for you</h1>
                    <p>The page you are looking for might be removed or is temporarily unavailable</p>
                   <Link to={"/"}><button> Back to homepage </button></Link> 
                </div>
                </section>
            </main>

            <footer> <p>created by EstebanDev with ❤️</p></footer>
        </div>
    )
}

export {NotFound}