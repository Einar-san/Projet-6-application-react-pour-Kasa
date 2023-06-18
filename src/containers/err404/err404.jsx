import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="error-page">
            <h1>404</h1>
            <p>Oups! la page que vous demandez n'existe pas.</p>

            <a href="/">Retourner à la page d'accueil</a>

        </div>
    );
}