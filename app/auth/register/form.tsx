"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import PizzaLoading from '../../../public/pizzaLoading.svg'

export const RegisterForm = () => {
    let [loading, setLoading] = useState(false);
    let [formValues, setFormValues] = useState({
        name: "",
        email: "",
        password: "",
    });

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                body: JSON.stringify(formValues),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            setLoading(false);
            if (!res.ok) {
                alert((await res.json()).message);
                return;
            }

            signIn(undefined, { callbackUrl: "/" });

        } catch (error: any) {
            setLoading(false);
            console.error(error);
            alert(error.message);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    return (
        <form
            onSubmit={onSubmit}
            className="flex flex-col border border-gray-300 rounded-lg p-4 gap-6"
        >
            <div className="gap-2 flex flex-col">
                <label htmlFor="name">Nome</label>
                <input
                    required
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Seu nome"
                    value={formValues.name}
                    onChange={handleChange}
                    className="w-full border p-4 outline-none focus:border-orange-500 rounded-md text-zinc-900 border-gray-400"
                />
            </div>

            <div className="gap-2 flex flex-col">
                <label htmlFor="name">Email</label>
                <input
                    required
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder="seuemail@exemplo.com"
                    className="w-full border p-4 outline-none focus:border-orange-500 rounded-md text-zinc-900 border-gray-400"
                />
            </div>

            <div className="gap-2 flex flex-col">
                <label htmlFor="password">Senha</label>
                <input
                    required
                    type="password"
                    name="password"
                    id='password'
                    value={formValues.password}
                    onChange={handleChange}
                    placeholder="*******"
                    className="w-full border p-4 outline-none focus:border-orange-500 rounded-md text-zinc-900 border-gray-400"
                />
            </div>

            <button
                type="submit"
                className="inline-block px-7 py-4 bg-orange-500 text-white leading-snug rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out w-full font-bold text-md"
                disabled={loading}
            >
                {loading ? (
                    <svg  className='animate-spin' width="141" height="179" viewBox="0 0 141 179" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.50655 79.3535C4.88615 75.2697 2.80102 70.6555 2.53054 65.7712C2.25554 60.8052 3.84753 55.326 7.03628 49.6273C13.4281 38.2045 25.8729 26.5573 40.0692 17.6576C54.2778 8.75035 69.834 2.84991 82.2503 2.51503C88.4323 2.34829 93.632 3.56445 97.5273 6.25069C101.365 8.89721 104.212 13.1587 105.391 19.672C112.531 59.1096 125.414 120.906 132.555 154.684C133.953 161.299 126.69 166.146 121.176 162.369C91.7825 142.235 38.0479 104.58 9.50655 79.3535Z" stroke="white" stroke-width="5"/>
                    <path d="M8.46689 77.9454C38.4264 13.9453 102.428 14.4749 102.428 14.4749" stroke="white" stroke-width="5"/>
                    <circle cx="44.5" cy="73.5" r="6" stroke="white" stroke-width="3"/>
                    <circle cx="100.5" cy="115.5" r="6" stroke="white" stroke-width="3"/>
                    <circle cx="78.5" cy="65.5" r="10" stroke="white" stroke-width="3"/>
                    <circle cx="85.5" cy="39.5" r="6" stroke="white" stroke-width="3"/>
                    <circle cx="68.5" cy="98.5" r="8" stroke="white" stroke-width="3"/>
                    </svg>
                    

                ) : (
                    <h1>registrar</h1>
                )}
            </button>
            <h5 className="text-gray-500 text-center text-sm">
                Já tem uma conta? <button onClick={() => signIn()} className="text-orange-600 underline hover:text-orange-700" type="button">Entrar</button></h5>
    
        </form>
    );
};
