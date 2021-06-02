import { useState, useEffect } from "react";
import Error from "./Error";
import Loading from "./Loading";

const RandomQuote = () => {

    const [quote, setQuote] = useState({});
    const [error, setError] = useState(false)
    const [isloading, setIsLoading] = useState(true)
    const [nextQuote, setNewQuote] = useState(false)

    useEffect(() => {
        fetch('https://animechan.vercel.app/api/random')
            .then(response => response.json())
            .then(quote => {
                setQuote(quote);
                setIsLoading(false)
            })
            .catch(_ => {
                setError(true)
                setIsLoading(false)
            })

    }, [nextQuote])

    if (isloading) {
        return <Loading />
    }
    else {
        return <div>
            {error ? <Error /> : <div>
                <div className="card mx-auto" style={{ width: '75%', margin:'30px' }}>
                    <div className="card-header">{quote.anime}</div>
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">{quote.character}</h6>
                        <p className="card-text">{quote.quote}</p>
                        <button className="btn btn-primary" onClick={() => setNewQuote(prevState => !prevState)}>Next</button>
                    </div>
                </div>
            </div>
            }
        </div>
    }

}

export default RandomQuote;