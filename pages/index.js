import { useState } from 'react'
import Map from '../components/map'
import styles from '../styles/index.module.css'

export default function Index({ events }) {
    const [EventMap, setEventMap] = useState('wildfires')

    // events.map((e, id) => { if (e.categories[0].id === "volcanoes") { console.log(e.geometry[0].coordinates) } })

    return (
        <>
            <header className={styles.header}>
                <div>
                    <h1>WeatherFound</h1>
                    <h3>Rastreo de eventos climatologicos en el planeta tierra</h3>
                </div>
                <h3><a href="https://ignacio-ovando.vercel.app/">Visita mi porfolio</a></h3>
            </header>
            <menu className={styles.menu}>
                <div className={styles.map}>
                    <Map events={events} EventMap={EventMap} />
                </div>
                <div className={styles.changes}>
                    <h2>Seleccionar el evento a mostrar:</h2>
                    <select value={EventMap} onChange={(e) => { setEventMap(e.target.value) }}>
                        <option value="wildfires">Incendios</option>
                        <option value="severeStorms">Tormentas</option>
                        <option value="seaLakeIce">Icebergs</option>
                    </select>
                    <p>Para mostrar estos eventos climatologicos se consultaron los datos de un pagina relacionada con la Nasa, la cual se llama <a href="https://eonet.sci.gsfc.nasa.gov/">EONET</a>, es importante aclarar que la informacion presentada no debe interptetarse como "oficiales", sino como una muestra del uso de la API</p>
                    <h3>Datos consultados debajo:</h3>
                    <a href="https://eonet.sci.gsfc.nasa.gov/api/v3/events">Link!</a>
                </div>
            </menu>
        </>
    )
}


export async function getServerSideProps(ctx) {
    const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/events')
    const { events } = await res.json()
    return { props: { events } }
}

