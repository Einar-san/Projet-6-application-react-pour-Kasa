import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import FilterTag from "../../components/article/filterTag";
import UserScore from "../../components/article/userScore";
import Accordion from "../../components/accordion";
import Carousel from "../../components/article/carousel";

export default function Article() {
    const { id } = useParams();// Extracts the "id" parameter from the URL
    const navigate = useNavigate();// Retrieves the navigation function from the router
    const [articles, setArticles] = useState([]);// State variable to store the articles
    const [isDataFetched, setIsDataFetched] = useState(false);// State variable to track if data has been fetched

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetches the data from a JSON file
                const response = await fetch(process.env.PUBLIC_URL + "/proprioData.json");
                const data = await response.json();

                // Updates the articles state with the fetched data
                setArticles(Array.isArray(data) ? data : []);

                // Marks the data as fetched
                setIsDataFetched(true);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();// Fetches the data when the component mounts
    }, []);

    const article = articles.find((article) => article.id === id);// Finds the article with the specified ID

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
            <Carousel images={article.pictures} />
            <div className="filter-score">
                <FilterTag article={article} />
                <UserScore article={article} />
            </div>
            <div className="precisions">
                <Accordion title={"Description"} content={article.description} classElement={"description"}/>
                <Accordion title={"Equipements"} content={article.equipments} classElement={"description"} />
            </div>
        </div>
    );
}
