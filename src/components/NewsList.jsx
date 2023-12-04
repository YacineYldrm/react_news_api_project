import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { v4 as uuidv4} from 'uuid'

const NewsList = () => {

    const [newsData, setNewsData] = useState(null)
    
    // get passed data from header component (user search input) with useLocation method
    const searchInput = useLocation().state.searchInput.toLowerCase();
    const languageInput = useLocation().state.languageInput;

    // fetch request on search event
    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=${searchInput}&language=${languageInput}&apiKey=${import.meta.env.VITE_API_KEY}`) // <============== INSERT YOUR API KEY HERE ==============<
            .then(response => response.json())
            .then(apiData => setNewsData(apiData))
            .catch((error) => console.log(error));
    }, [searchInput, languageInput])

    // render news list
    return ( 
        <section className="news_list_wrapper">
            <h2>Search results for "{searchInput}"</h2>
            {newsData?.articles.map((article) => (
                <div className="single_news_container" key={uuidv4()}>
                    <h2>{article.title}</h2>
                    <img src={article.urlToImage} />
                    <p>{article.description}</p>
                    <NavLink to={`/read-more`} state={{article}}>Read More</NavLink>
                </div>
            ))}
        </section>
    );
}

export default NewsList;