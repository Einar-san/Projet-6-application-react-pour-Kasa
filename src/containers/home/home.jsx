// Make sur to do the export early, else it will cause an error
import React, { useEffect, useState } from "react";
import Banner from "../../components/banner";
import ArticleContainer from "../../components/articleContainer";

export default function Home() {
    const [articles, setArticles] = useState([]);
    const description = "Chez vous, partout et ailleur";

    useEffect(() => {
        fetch(process.env.PUBLIC_URL + "/proprioData.json")
            .then((response) => response.json())
            .then((data) => setArticles(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className={"home-content"}>
            <Banner imgSrc={process.env.PUBLIC_URL + "/Banner.jpg"} description={description} />
            <ArticleContainer articles={articles} />
        </div>
    );
}
