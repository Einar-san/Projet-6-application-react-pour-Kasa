import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";

import CoverArticle from "../../components/article/coverArticle";
import FilterTag from "../../components/article/filterTag";
import UserScore from "../../components/article/userScore";
import Description from "../../components/article/description";
import Conveniences from "../../components/article/convenience";

export default function Article() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [articles, setArticles] = useState([]);
    const [isDataFetched, setIsDataFetched] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(process.env.PUBLIC_URL + "/proprioData.json");
                const data = await response.json();
                setArticles(Array.isArray(data) ? data : []);
                setIsDataFetched(true);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const article = articles.find((article) => article.id === id);

    useEffect(() => {
        if (isDataFetched && !article) {
            // Redirect to error page if the article is not found and data is fetched
            navigate("/error");
        }
    }, [article, isDataFetched, navigate]);

    if (!isDataFetched || !article) {
        return null; // Return null temporarily to avoid rendering anything
    }

    return (
        <div className="article-container">
            <CoverArticle article={article} />
            <div className="filter-score">
                <FilterTag article={article} />
                <UserScore article={article} />
            </div>
            <div className="precisions">
                <Description article={article} />
                <Conveniences article={article} />
            </div>
        </div>
    );
}
