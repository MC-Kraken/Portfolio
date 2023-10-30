import { Carousel } from 'react-bootstrap';
import { WeddingDemoCard } from './WeddingDemoCard.jsx';
import PyxHealthCard from "./PyxHealthCard.jsx";

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