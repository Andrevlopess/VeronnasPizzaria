import { RegisterForm } from "./form";

export default function RegisterPage() {
  return (
    <section
      className="flex flex-col justify-center items-center gap-6 my-8"
    >
      <div className="flex flex-col justify-center gap-2">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-transparent text-center bg-clip-text">Bem vindo</h1>
        <h1 className="text-xl text-orange-600">Faça seu registro para pedir sua pizza!</h1>

      </div>
      <RegisterForm />
    </section>
  );
}
