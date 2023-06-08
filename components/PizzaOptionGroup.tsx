'use client'

import React, { useState } from 'react'
import { PizzaOptionProps } from './PizzaOption';
import clsx from 'clsx';

interface PizzaOptionGroupProps {
    children: React.ReactNode;
    onChange: (option: PizzaOptionProps) => void;
    title: string;
    disabled?: boolean;
}

const PizzaOptionGroup: React.FC<PizzaOptionGroupProps> = ({
    children,
    onChange,
    title,
    disabled
}) => {

    const [selectedOption, setSelectedOption] = useState<PizzaOptionProps | null>(null)

    const handleOptionChange = (option: PizzaOptionProps) => {
        setSelectedOption(option);
        onChange(option);
        console.log(selectedOption);
    };

    return (
        <div className={clsx('flex flex-col space-y-6 border border-gray-300 p-4 rounded-lg group hover:border-orange-400 transition items-center justify-center relative', {
            'hover:border-orange-100 transition cursor-not-allowed': disabled,
        })}>
            {disabled &&
                <h3 className='opacity-0 group-hover:opacity-100 transition absolute inset-0 flex justify-center items-center backdrop-blur-sm font-bold text-2xl rounded-lg'>Escolha o item anterior primeiro</h3>
            }
            <h1 className='text-xl font-semibold text-zinc-800'>{title}</h1>

            <div className="flex gap-4 flex-wrap items-stretch justify-center">
                {React.Children.map(children, (child) =>
                    React.cloneElement(child as React.ReactElement, {
                        isSelected: selectedOption?.description === (child as React.ReactElement).props.description,
                        onSelect: () => handleOptionChange((child as React.ReactElement).props),
                        disabled: disabled
                    })
                )}
            </div>
            {
                selectedOption ? (
                    <h3 className='text-md text-gray-800'>{`Você escolheu: ${selectedOption.description}`}</h3>
                ) : (
                    <h3 className='text-md text-gray-800'>{`Você ainda não escolheu nenhum...`}</h3>
                )
            }
        </div>

    )
}

export default PizzaOptionGroup