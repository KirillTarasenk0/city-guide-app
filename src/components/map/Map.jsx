import { YMaps, Map as YMapsMap , Placemark} from '@pbe/react-yandex-maps';
import {useState, useEffect} from "react";
import './Map.css';

export const Map = () => {
    const [userLocation, setUserLocation] = useState({ lat: 53.9, lng: 27.5667 });
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setUserLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            }, (error) => {
                console.log(error);
            }, {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            });
        }
    }, []);
    return (
        <>
            <YMaps>
                <div>
                    <YMapsMap
                        defaultState={{
                            center: [userLocation.lat, userLocation.lng],
                            zoom: 9,
                            controls: ["zoomControl", "fullscreenControl"]
                        }}
                        modules={["control.ZoomControl", "control.FullscreenControl"]}
                        className="map"
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
