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
        return (
            <div >
                {error ? <Error /> :
                    <div>
                        <div className='animeTitle'>Anime: {quote.anime}</div>
                        <div className='animeCharacter'>Character: {quote.character}</div>
                        <div className='animeQuote'>{quote.quote}</div>
                        <button className='nextButton' onClick={() => setNewQuote(prevState => !prevState)}>Next</button>
                    </div>
                }
            </div>
        )
    }

}

export default RandomQuote;