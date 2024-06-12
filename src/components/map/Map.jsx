import { YMaps, Map as YMapsMap , Placemark} from '@pbe/react-yandex-maps';
import {useState, useEffect} from "react";

export const Map = () => {
    const [userLocation, setUserLocation] = useState({ lat: 53.9, lng: 27.5667 });
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setUserLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            });
        }
    }, []);
    return (
        <>
            <YMaps>
                <div>
                    <YMapsMap defaultState={{
                        center: [55.75, 37.57],
                        zoom: 9,
                        controls: ["zoomControl", "fullscreenControl"]
                    }} modules={["control.ZoomControl", "control.FullscreenControl"]}
                    >
                        <Placemark
                            modules={["geoObject.addon.balloon"]}
                            defaultGeometry={[userLocation.lat, userLocation.lng]}
                            properties={{
                                balloonContentBody:
                                    "This is balloon loaded by the Yandex.Maps API module system",
                            }}
                        />
                    </YMapsMap>
                </div>
            </YMaps>
        </>
    );
}
