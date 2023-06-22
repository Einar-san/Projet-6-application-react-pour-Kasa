export default function Banner (props) {
    const { imgSrc, description } = props;
    return (
        <div className={"banner"}>
            <img className={"banner-img"} src={imgSrc}/>
            <div className={"banner-description"}><p>{description}</p></div>
        </div>
    )
}