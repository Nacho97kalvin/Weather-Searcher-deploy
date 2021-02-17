import GoogleMapReact from 'google-map-react'
import styles from '../styles/map.module.css'
import LocationMaker from './LocationMaker'

export default function Map({ events, center, zoom, EventMap }) {
    const API_Key = process.env.API_key
    const fires = events.map((e, id) => {
        if (e.categories[0].id === EventMap) {

            return <LocationMaker key={id} lat={e.geometry[0].coordinates[1]} lng={e.geometry[0].coordinates[0]} EventMap={EventMap} />     // [lng, lat]
        }
    })
    return (
        <div className={styles.maps}>
            <GoogleMapReact
                bootstrapURLKeys={API_Key}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {fires}
            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: - 32.958,
        lng: -60.699
    },
    zoom: 4
}
