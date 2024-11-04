import React from 'react'
import fieldSections from './fieldsDummyAPI'
import AccordionItem from './CareerAccordionItems'
function CareerCards() {


    return (
        <>
            <div className="container mx-auto px-4 py-8">
                {fieldSections.map((section, index) => (
                    <AccordionItem key={index} title={section.title} jobs={section.jobs} />
                ))}
            </div>
        </>
    )
}

export default CareerCards