import React from 'react'

const Experience = ({dateStart, dateEnd, label, organization}) => {
    return (
        <article>
            <p>{dateStart} - {dateEnd}</p>
            <p>{label}</p>
            <p>{organization}</p>
        </article>
    )
}

export default Experience