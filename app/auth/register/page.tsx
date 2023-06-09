import { RegisterForm } from "./form";

export default function RegisterPage() {
  return (
    <section
      className="flex flex-col items-center justify-center my-12"
    >
      <div className="flex flex-col gap-6 justify-center items-center">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 text-transparent text-center bg-clip-text">Registro</h1>
        <RegisterForm />
      </div>
    </section>
  );
}
