import { LoginForm } from "./form";


export default function LoginPage() {
  return (


    <section
      className="flex flex-col justify-center items-center gap-6 my-8 relative 
      border border-dashed border-orange-200 rounded-lg p-4"
    >
      <div className="flex flex-col justify-center gap-2 border-b border-dashed border-orange-200 p-4">
        <h1 className="text-3xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-transparent text-center bg-clip-text">Entrar</h1>
        <h1 className="text-lg md:text-xl text-orange-600 text-center">Faça seu login para pedir sua pizza!</h1>

      </div>
      <LoginForm />
    </section>

  );
}