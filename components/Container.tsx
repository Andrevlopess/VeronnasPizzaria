import React from 'react'

interface ContainerProps {
    children?: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <section className='px-6 py-4 lg:px-24'>
            {children}
        </section>
    )
}

export default Container