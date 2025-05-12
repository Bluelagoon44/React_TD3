import React from 'react'
import Experience from './Experience'

const Experiences = ({experiencesList}) => {
    return (
        <section>
            <h2>Mes expériences</h2>
            {experiencesList.map((experience, index)=>(
                <Experience {...experience} key={index} />
            ))}
        </section>
    )
}

export default Experiences