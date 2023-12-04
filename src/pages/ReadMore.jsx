import { NavLink, Link, useLocation } from "react-router-dom";
import './ReadMore.scss'

export const ReadMore = () => {

    // get passed data from NewsList component (fetched data) with useLocation method
    const article = useLocation().state.article

    // render component
    return ( 
        <section className="read_more_wrapper">
            <NavLink to='/'>Go Back</NavLink>
            <h2>{article.title}</h2>
            <img src={article.urlToImage} alt="" />
            <p>{article.content}</p>
            <Link to={article.url} target="_blank">Source: <span>{article.source.name}</span> </Link>

        </section>
    );
}
