export default function FilterTag ({article}) {
    const tags = article.tags.map((tag, index) => (
            <div className={"tag"} key={index}>
                <h3>{tag}</h3>
            </div>
        )
    )
    return (
        <div className={"tags"}>
            {tags}
        </div>
    )
}