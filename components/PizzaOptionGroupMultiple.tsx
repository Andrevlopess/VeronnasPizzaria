'use client'

import React, { useState, useEffect } from "react";
import { PizzaOptionProps } from "./PizzaOption";
import clsx from "clsx";



interface PizzaOptionGroupMultipleProps {
    children: React.ReactNode;
    onChange: (options: PizzaOptionProps[]) => void;
    title: string;
    possiblesChoices: number;
    disabled?: boolean;
}

const PizzaOptionGroupMultiple: React.FC<PizzaOptionGroupMultipleProps> = ({
    children,
    onChange,
    title,
    possiblesChoices,
    disabled
}) => {

    const [selectedOptions, setSelectedOptions] = useState<PizzaOptionProps[]>([]);

    const handleOptionChange = (option: PizzaOptionProps) => {
        const isOptionSelected = selectedOptions.some(selectedOption =>
            selectedOption.description === option.description
        );

        if (isOptionSelected) {
            const updatedOptions = selectedOptions.filter(
                selectedOption => selectedOption.description !== option.description
            );
            setSelectedOptions(updatedOptions);
        } else {
            if (selectedOptions.length >= possiblesChoices) {
                return;
            }

            const updatedOptions = [...selectedOptions, option];

            setSelectedOptions(updatedOptions)
        }
    };

    useEffect(() => {
        onChange(selectedOptions);
    }, [selectedOptions])


    return (
        <div className={clsx('flex flex-col space-y-6 border border-gray-300 p-4 rounded-lg group hover:border-orange-400 transition items-center justify-center relative', {
            'hover:border-orange-100 transition cursor-not-allowed': disabled,
        })}>


            {disabled &&
                <h3 className='opacity-0 group-hover:opacity-100 transition absolute inset-0 flex justify-center items-center backdrop-blur-sm font-bold text-2xl rounded-lg'>Escolha o item anterior primeiro</h3>
            }

            <h1 className='text-xl font-semibold text-zinc-800'>{title}</h1>

            <div className="grid grid-cols-4 gap-4">
                {React.Children.map(children, (child) => {
                    const isSelected = selectedOptions.some(selectedOption =>
                        selectedOption.description === (child as React.ReactElement).props.description
                    );

                    return React.cloneElement(child as React.ReactElement, {
                        isSelected,
                        onSelect: () => handleOptionChange((child as React.ReactElement).props),
                        disabled: disabled
                    });
                })}
            </div>
        </div>
    )
}

export default PizzaOptionGroupMultiple