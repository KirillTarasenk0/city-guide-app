import { YMaps, Map as YMapsMap } from '@pbe/react-yandex-maps';

export const Map = () => {
    return (
        <>
            <YMaps>
                <div>
                    <YMapsMap defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
                </div>
            </YMaps>
        </>
    );
}
