import { useEffect } from "react";
import { useMap } from "react-leaflet";
import PropTypes from "prop-types";

export const SetViewToBounds = ({ polyline, activeIndex, mapIndex }) => {
    const map = useMap(); // This hook gets the map instance from the nearest MapContainer parent

    useEffect(() => {
        let timeoutId = null;
        console.log(activeIndex, mapIndex);
        if (activeIndex === mapIndex) {
            timeoutId = setTimeout(() => {
                map.invalidateSize();
                if (polyline && polyline.length > 0) {
                    const bounds = L.latLngBounds(polyline);
                    map.fitBounds(bounds);
                }

            }, 10); // Adjust delay as necessary
        }
        // Cleanup the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    }, [map, polyline, activeIndex, mapIndex]);

    return null; // This component does not render anything itself
};

SetViewToBounds.propTypes = {
    polyline: PropTypes.array,
    activeIndex: PropTypes.number,
    mapIndex: PropTypes.number
};