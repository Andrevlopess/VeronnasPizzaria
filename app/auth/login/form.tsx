"use client";

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

      console.log(res);
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
        <p className="text-center bg-orange-200 py-4 mb-6 rounded">{error}</p>
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
          <svg className='animate-spin mx-auto' width="35" height="46" viewBox="0 0 35 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.29216 20.8012C1.11462 19.7604 0.577328 18.5774 0.507818 17.3222C0.437405 16.0507 0.845242 14.6583 1.64894 13.2221C3.25919 10.3444 6.38608 7.4214 9.94254 5.19186C13.5015 2.96079 17.4092 1.475 20.5414 1.39052C22.1024 1.34842 23.4299 1.65495 24.4314 2.34558C25.4214 3.02827 26.1479 4.12404 26.4474 5.77831C28.1483 15.1728 31.1543 29.6488 32.976 38.2868C33.4404 40.4891 31.0175 42.1118 29.1776 40.8466C21.6662 35.6815 9.10804 26.8255 2.29216 20.8012Z" stroke="white" />
            <path d="M2.31095 20.6289C9.55922 3.82874 26.25 4.53257 26.25 4.53257" stroke="white" />
            <circle cx="11.1156" cy="19.2459" r="1.37338" stroke="white" />
            <circle cx="25.1034" cy="29.7369" r="1.37338" stroke="white" />
            <circle cx="19.6877" cy="16.9284" r="2.41667" stroke="white" />
            <circle cx="21.3563" cy="10.7533" r="1.37338" stroke="white" />
            <circle cx="17.1103" cy="25.4906" r="1.87295" stroke="white" />
          </svg>


        ) : (
          <h1>registrar</h1>
        )}
      </button>
      <h5 className="text-gray-500 text-center text-sm my-4">
        Ainda não tem uma conta? <Link href='/auth/register' className="text-orange-600 underline">Registrar-se</Link></h5>

    </form>
  );
};