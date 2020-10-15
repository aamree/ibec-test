import * as React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import geo from 'assets/icons/geo-fill.svg';

export interface IMapsProps {
}

export default function Maps (props: IMapsProps) {
  
return (
    <YMaps>
      <div className="d-flex justify-content-center">
        <Map defaultState={{ center: [43.24980082, 76.94582522], zoom: 13 }} width={750} height={500}>
          <Placemark 
            geometry={[43.26410062, 76.92974637]} 
            properties={{balloonContent:  "Mega Park Алматы"}}
            modules={['geoObject.addon.balloon']}
          />
          <Placemark 
            geometry={[43.22941734, 76.94576268]} 
            options={{
              iconLayout: 'default#image',
              iconImageHref: geo,
              iconImageSize: [34, 56]
            }}
          />
        </Map>
      </div>
  </YMaps>
  );
}

