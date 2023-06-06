import Image from 'next/image';
import React from 'react'

export interface PizzaOptionProps {
    image: string;
    description: string;
    isSelected?: boolean;
    onSelect?: () => void;
}

const PizzaOption = ({
    image,
    description,
    isSelected,
    onSelect,
}: PizzaOptionProps) => {
    return (
        <button
        type='submit'
        onClick={onSelect}
        className="border border-gray-300 rounded-lg p-4 items-center gap-4 flex justify-center flex-col hover:border-orange-300 transition focus:ring focus:ring-orange-400">
            <Image
                src={image}
                width={200}
                height={200}
                alt="Borda fina pizza"
            />
            <h3 className="text-gray-600 font-semibold text-lg">{description}</h3>
        </button>
    )
}

export default PizzaOption