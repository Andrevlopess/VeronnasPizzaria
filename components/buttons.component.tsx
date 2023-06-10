"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import {RxExit} from 'react-icons/rx'


export const LoginButton = () => {
  return (
    <button className="bg-orange-500 hover:shadow-md transition rounded-lg py-2 px-4 text-white focus:ring-2 focus:ring-orange-300" onClick={() => signIn()}>
      Entrar
    </button>
  );
};

export const RegisterButton = () => {
  return (
    <Link href="/auth/register" style={{ marginRight: 10 }}>
      Registrar
    </Link>
  );
};

export const LogoutButton = () => {
  return (
    <button className="border border-gray-500 hover:border-orange-200 rounded-lg px-4 py-2 transition hover:text-white hover:bg-orange-500 hover:shadow-md flex items-center gap-2" onClick={() => signOut()}>
      <h3 className="hidden md:flex">Sair</h3>
      <RxExit/>
    </button>
  );
};

export const ProfileButton = () => {
  return <Link href="/profile">Perfil</Link>;
};
