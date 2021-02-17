import { Icon } from '@iconify/react'
import fireIcon from '@iconify/icons-mdi/fire-alert'
import stormIcon from '@iconify/icons-mdi/storm-advisory'
import iceIcon from '@iconify/icons-mdi/snow-advisory'
import styles from '../styles/LocationMaker.module.css'


function LocationMaker({ lat, lng, EventMap }) {
    const selector = () => {
        if (EventMap === "wildfires") {
            return < Icon icon={fireIcon} className={styles.iconFire} />
        } else {
            if (EventMap === "severeStorms") {
                return < Icon icon={stormIcon} className={styles.iconStorm} />
            }
            else {
                return < Icon icon={iceIcon} className={styles.iconIce} />
            }
        }
    }
    return (
        <div>
            {
                selector()
            }
        </div>
    )
}

export default LocationMaker


