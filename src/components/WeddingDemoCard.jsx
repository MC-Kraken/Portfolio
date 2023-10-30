import { Card } from "react-bootstrap";

export const WeddingDemoCard = () => {
    return (
        <div className={"card-container"}>
            <Card style={{width: '18rem'}}>
                <Card.Img className={"bg-dark text-white"} variant="top" src="/wedding.png" />
                <Card.Body className={"bg-dark text-white"}>
                    <Card.Title>Wedding Website</Card.Title>
                    <Card.Text>
                        <a href={"https://mock-wedding-website.vercel.app/"} target={"_blank"} rel="noreferrer">See the demo</a>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}