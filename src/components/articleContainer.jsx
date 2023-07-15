export default function ArticleContainer ({articles}) {
    const articleElements = articles.map((article, index) => (
        <a className={"card-gallery"} key={index} href={"/articles/"+ article.id}>
            <img src={article.cover}/>
            <div className={"card-banner-title"}><h3>{article.title}</h3></div>
        </a>
        )
    )
    return (
        <div className="gallery">
            {articleElements}
        </div>
    )
}