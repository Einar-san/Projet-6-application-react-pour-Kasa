export default function Banner (props) {
    const { imgSrc, description } = props;
    return (
        <div className={"banner"}>
            <img className={"banner-img"} src={imgSrc}/>
            <div className={"banner-description"}>{description}</div>
        </div>
    )
}