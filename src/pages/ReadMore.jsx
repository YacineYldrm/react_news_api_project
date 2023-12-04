import { NavLink, Link, useLocation } from "react-router-dom";

export const ReadMore = () => {

    // get passed data from NewsList component (fetched data) with useLocation method
    const article = useLocation().state.article

    // render component
    return ( 
        <section>
            <NavLink to='/'>Go Back</NavLink>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <Link to={article.url} target="_blank">{article.source.name}</Link>

        </section>
    );
}
