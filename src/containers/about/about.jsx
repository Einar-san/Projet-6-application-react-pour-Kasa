import Banner from "../../components/banner";
import Accordion from "../../components/accordion";

export default function Aboute () {
    return (
        <div className={"about-container"}>
            <Banner imgSrc={process.env.PUBLIC_URL + '/BANNERABOUT.jpg'} description={""}/>
            <Accordion key={"accordion1"} title={"Fiabilité"} content={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont\n" +
                " régulièrement vérifiées par nos équipes."} classElement={"about-element"}/>
            <Accordion key={"accordion2"} title={"Respect"} content={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de\n" +
                "perturbation du voisinage entraînera une exclusion de notre plateforme."} classElement={"about-element"}/>
            <Accordion key={"accordion3"} title={"Service"} content={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de\n" +
                "perturbation du voisinage entraînera une exclusion de notre plateforme."} classElement={"about-element"}/>
            <Accordion key={"accordion4"} title={"Sécurité"} content={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement\n" +
                "correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au\n" +
                "locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons\n" +
                "également des ateliers sur la sécurité domestique pour nos hôtes."} classElement={"about-element"}/>

        </div>
    )
}

