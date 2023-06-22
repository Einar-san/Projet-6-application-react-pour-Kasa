export default function UserScore ({article}) {
    // Star rating generation
    function generateRatingStars(rating) {
        const maxRating = 5;
        const filledStarSrc = process.env.PUBLIC_URL + '/REDSTAR.svg';
        const emptyStarSrc = process.env.PUBLIC_URL + '/GREYSTAR.svg';
        const stars = [];

        for (let i = 0; i < maxRating; i++) {
            const starSrc = (i < rating) ? filledStarSrc : emptyStarSrc;
            stars.push(<img className={"rating-star"} src={starSrc} alt="Star" key={i} />);
        }

        return stars;
    }
    // Stars elements
    const ratingStars = generateRatingStars(article.rating);
    const userName = article.host.name
    const spaceIndex = article.host.name.indexOf(' ');
    const firstPart = article.host.name.slice(0, spaceIndex);
    const secondPart = article.host.name.slice(spaceIndex + 1);
    return (
        <div className={"user-score"}>
            <div className={"score"}>
                {ratingStars}
            </div>
            <div className={"host"}>
                <h3>{firstPart}
                    <br/>
                    {secondPart}</h3>
                <img src={article.host.picture} alt={article.host.name}/>
            </div>
        </div>
    )
}