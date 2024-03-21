import { Card } from "react-bootstrap";

export default function PyxHealthCard() {
    return (
        <div className={"card-container"}>
            <Card style={{width: '18rem'}}>
                <Card.Img className={"bg-dark text-white"} variant="top" src="/pyx-health.png" />
                <Card.Body className={"bg-dark text-white"}>
                    <Card.Title>Pyx Health</Card.Title>
                    <Card.Text>
                        At <a href="https://hipyx.com/" target="_blank" rel="noreferrer">Pyx Health</a>, I helped develop Thrive Pathway™, an eight-week program designed to help those
                        experiencing persistent or chronic loneliness.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}