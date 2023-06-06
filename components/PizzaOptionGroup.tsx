'use client'

import React, { useState } from 'react'

interface PizzaOptionGroupProps {
    children: React.ReactNode;
    onChange: (option: string) => void;
    title: string;
}

const PizzaOptionGroup: React.FC<PizzaOptionGroupProps> = ({
    children,
    onChange,
    title
}) => {

    const [selectedOption, setSelectedOption] = useState("")

    const handleOptionChange = (option: string) => {
        setSelectedOption(option);
        onChange(option);          
    };

    return (
        <div className="flex flex-col space-y-6">
            <h1 className='text-xl font-semibold text-zinc-800'>{title}</h1>

            <div className="flex space-x-4">
                {React.Children.map(children, (child) =>
                    React.cloneElement(child as React.ReactElement, {
                        isSelected: selectedOption === (child as React.ReactElement).props.description,
                        onSelect: () => handleOptionChange((child as React.ReactElement).props.description),
                    })
                )}
            </div>
        </div>

    )
}

export default PizzaOptionGroup