"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import PizzaLoading from '../../../public/pizzaLoading.svg'
import LoadingComponent from "@/components/LoadingComponent";

export const RegisterForm = () => {
    let [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
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


            if (!res.ok) {
                setError((await res.json()).message);
                return;
            }

            signIn(undefined, { callbackUrl: "/" });

        } catch (error: any) {
            setLoading(false);
            console.error(error);
            alert(error.message);
        } finally {
            setLoading(false);
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
            {error && (
                <p className="text-center bg-red-300 py-4 rounded">{error}</p>
            )}
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
                    <LoadingComponent />
                ) : (
                    <h1>Registrar</h1>
                )}
            </button>
            <h5 className="text-gray-500 text-center text-sm">
                Já tem uma conta? <button onClick={() => signIn()} className="text-orange-600 underline hover:text-orange-700" type="button">Entrar</button></h5>

        </form>
    );
};
