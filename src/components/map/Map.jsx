import { YMaps, Map as YMapsMap , Placemark} from '@pbe/react-yandex-maps';

export const Map = () => {
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
                            defaultGeometry={[55.751574, 37.573856]}
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
