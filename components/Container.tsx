import React from 'react'

interface ContainerProps {
    children?: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <section className='lg:px-24'>
            {children}
        </section>
    )
}

export default Container