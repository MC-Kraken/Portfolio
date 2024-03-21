import { Card } from "react-bootstrap";

export default function ThisWebsiteCard() {
    return (
        <div className={"card-container"}>
            <Card style={{width: '18rem'}}>
                <Card.Img className={"bg-dark text-white"} variant="top" src="/this-website.png" />
                <Card.Body className={"bg-dark text-white"}>
                    <Card.Title>This Website!</Card.Title>
                    <Card.Text>
                        Technologies used: Vite, React, SCSS, Bootstrap, Strava API, AWS Secrets Manager, Vercel Functions, Leaflet, OpenStreetMap, Google Apps Script
                        <br/>
                        <br/>
                        New features are being added regularly, so stay tuned.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}