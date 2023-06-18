export default function CoverArticle ({article}) {
    return (
        <div className={"cover-article"}>
            <img className={"cover-article-img"} src={article.cover}/>
            <h1>{article.title}</h1>
            <h2>{article.location}</h2>
        </div>
    )
}