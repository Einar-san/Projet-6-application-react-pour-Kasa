export default function FilterTag ({article}) {
    const tags = article.tags.map((tag, index) => (
            <div className={"tag"} key={index}>
                <h3>{tag}</h3>
            </div>
        )
    )
    return (
        <div className={"info"}>
            <h1>{article.title}</h1>
            <h2>{article.location}</h2>
            <div className={"tags"}>
                {tags}
            </div>
        </div>

    )
}