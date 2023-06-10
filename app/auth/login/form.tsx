"use client";

import LoadingComponent from "@/components/LoadingComponent";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";



export const LoginForm = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setFormValues({ email: "", password: "" });

      const res = await signIn("credentials", {
        redirect: false,
        email: formValues.email,
        password: formValues.password,
        callbackUrl,
      });

      setLoading(false);

      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        setError("Email ou senha inválidos");
      }
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const input_style =
    "w-full border p-4 outline-none focus:border-orange-500 rounded-md text-zinc-900 border-gray-400";

  return (
    <form onSubmit={onSubmit} className="border rounded-md p-4 border-gray-400">
      {error && (
        <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>
      )}
      <div className="mb-6 flex flex-col gap-4">
        <label className="text-md" htmlFor="email">Email</label>
        <input
          required
          type="email"
          name="email"
          id='email'
          value={formValues.email}
          onChange={handleChange}
          placeholder="seuemail@exemplo.com"
          className={`${input_style}`}
        />
      </div>
      <div className="mb-6 flex flex-col gap-4">
        <label className="text-md" htmlFor="password">Senha</label>
        <input
          required
          type="password"
          name="password"
          id='password'
          value={formValues.password}
          onChange={handleChange}
          placeholder="********"
          className={`${input_style}`}
        />
      </div>
      <button
        type="submit"
        className="inline-block px-7 py-4 bg-orange-500 text-white font-bold text-md leading-snug rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out w-full"
        disabled={loading}
      >
        {loading ? (
         <LoadingComponent/>
        ) : (
          <h1>Entrar</h1>
        )}
      </button>
      <h5 className="text-gray-500 text-center text-sm my-4">
        Ainda não tem uma conta? <Link href='/auth/register' className="text-orange-600 underline">Registrar-se</Link></h5>

    </form>
  );
};