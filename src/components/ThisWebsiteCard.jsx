import { Card } from "react-bootstrap";

export default function ThisWebsiteCard() {
    return (
        <div className={"card-container"}>
            <Card style={{width: '18rem'}}>
                <Card.Img className={"bg-dark text-white"} variant="top" src="/favicon-resized.png" />
                <Card.Body className={"bg-dark text-white"}>
                    <Card.Title>This Website!</Card.Title>
                    <Card.Text>
                        Technologies used: Vite, React, SCSS, Bootstrap, Strava API, AWS Secrets Manager, Vercel Functions, Leaflet, OpenStreetMap, Google Apps Script
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}