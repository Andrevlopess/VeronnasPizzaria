import Image from 'next/image';
import React from 'react'
import clsx from 'clsx';

export interface PizzaOptionProps {
    image: string;
    description: string;
    isSelected?: boolean;
    onSelect?: () => void;
    imageOnPizza: string;
    isIngredient?: boolean;
    disabled?: boolean;
}

const PizzaOption = ({
    image,
    description,
    isSelected,
    onSelect,
    isIngredient,
    disabled
}: PizzaOptionProps) => {

    return (
        <button
            type='submit'
            onClick={onSelect}
            disabled={disabled}
            className={clsx("border border-gray-300 rounded-lg p-4 items-center gap-6 flex justify-between flex-col hover:border-orange-300 transition", {
                'ring ring-orange-400': isSelected,
                'cursor-not-allowed': disabled
            })}>
            <Image
                src={image}
                width={isIngredient ? 100 : 200}
                height={isIngredient ? 100 : 200}
                alt={`${description} image`}
            />
            <h3 className="text-gray-600 font-semibold text-md">{description}</h3>
        </button>
    )
}

export default PizzaOption