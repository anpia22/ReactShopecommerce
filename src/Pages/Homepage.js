import './Homepage.css'
const HomePage = () => {

    const tourDetails = [
        {
            id: 'JUL16',
            date: 'JUL 16',
            city: 'DETROIT, MI',
            location: 'DTE ENERGY MUSIC THEATRE',
        },
        {
            id: 'JUL19',
            date: 'JUL 19',
            city: 'TORONTO,ON',
            location: 'BUDWEISER STAGE',
        },
        {
            id: 'JUL19',
            date: 'JUL 19',
            city: 'TORONTO,ON',
            location: 'BUDWEISER STAGE',
        },
    ]

    return (
        <div className='home-section'>
            <div className='top-section'>
                <h1>The Generics</h1>
                <button>Get our Latest Album</button>
                <div className='playButton-Border'><div className="playButton"></div></div>
            </div>

            <div className='tour-section'>
                <h2>Tour</h2>
                <ul>
                    {tourDetails.map(detail => {
                        return (
                            <>
                                <li>
                                    <p>{`${detail.date}`}</p>
                                    <p>{detail.city}</p>
                                    <p>{` ${detail.location}`} </p>
                                    <button>Buy Ticket</button>

                                </li>
                                <hr />
                            </>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default HomePage;