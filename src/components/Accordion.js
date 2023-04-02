import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Arrow } from '../assets/icons/arrow.svg'
import '../styles/components/Accordion.css'

export default function Accordion({ isActive, dynamicData, title }) {
    const [expanded, setExpanded] = useState(isActive)
    const [selected, setSelected] = useState(dynamicData[0]?.payload)

    useEffect(() => {
        setExpanded(isActive)
        setSelected(dynamicData[0]?.payload)
    }, [isActive])

    return (
        <div className="accordion">
            <div className={`accordion-header ${expanded && ('active')}`} onClick={() => setSelected(dynamicData[0]?.payload)}>
                <Link to={`/${title.payload}/${dynamicData[0]?.payload}`} as="button" onClick={() => setExpanded(true)}>
                    {title.title}
                    <Arrow />
                </Link>
            </div>
            <div className={`accordion-content ${expanded && ('expand')}`}>
                <ul>
                    {dynamicData.map(item => (
                        <li onClick={() => setSelected(item.payload)}>
                            <Link className={`${selected === item.payload && ('selected')}`} to={`/${title.payload}/${item.payload}`}>{item.nama}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}