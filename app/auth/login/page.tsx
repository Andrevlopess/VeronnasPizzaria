import { LoginForm } from "./form";


export default function LoginPage() {
  return (
    <>

      <div
        className="flex flex-col justify-center items-center gap-6 my-12 px-4"
      >
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-6xl font-extrabold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-transparent text-center bg-clip-text">Entrar</h1>
            <h1 className="text-xl text-orange-600 text-center">Faça seu login para pedir sua pizza!</h1>

          </div>
          <LoginForm />
      </div>
    </>
  );
}