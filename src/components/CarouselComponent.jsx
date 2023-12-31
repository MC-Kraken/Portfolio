import { WeddingDemoCard } from './WeddingDemoCard.jsx';
import PyxHealthCard from "./PyxHealthCard.jsx";
import { Carousel } from "react-bootstrap";

export const CarouselComponent = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <WeddingDemoCard />
            </Carousel.Item>
            <Carousel.Item>
                <PyxHealthCard />
            </Carousel.Item>
        </Carousel>
    );
}