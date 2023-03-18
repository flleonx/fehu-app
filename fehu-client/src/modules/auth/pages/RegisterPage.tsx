import { Link } from "react-router-dom";
import { AuthLayout } from "@auth/layouts";

export const RegisterPage = () => {
  return (
    <AuthLayout imgUrl="/city.jpg">
      <form className="w-full md:w-9/12 lg:w-7/12 xl:w-full 2xl:w-8/12 p-8">
        <h2 className="font-bold text-4xl">Registro</h2>
        <input
          className="w-full h-14 mt-6 pl-4 font-3xl border-2 border-black rounded"
          type="text"
          name="firstName"
          placeholder="Nombre"
        />
        <input
          className="w-full h-14 mt-6 pl-4 font-3xl border-2 border-black rounded"
          type="text"
          name="lastName"
          placeholder="Apellido"
        />
        <input
          className="w-full h-14 mt-6 pl-4 font-3xl border-2 border-black rounded"
          type="text"
          name="username"
          placeholder="Nombre de usuario"
        />

        <input
          className="w-full h-14 mt-6 pl-4 font-3xl border-2 border-black rounded"
          type="text"
          name="email"
          placeholder="Correo"
        />

        <input
          className="w-full h-14 mt-6 pl-4 font-3xl border-2 border-black rounded"
          type="password"
          name="password"
          placeholder="Contraseña"
        />
        <input
          className="w-full h-14 mt-6 pl-4 font-3xl border-2 border-black rounded"
          type="password"
          name="repeatPassword"
          placeholder="Confirmar contraseña"
        />

        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ml-2 text-xs sm:text-sm font-medium">
              Estoy de acuerdo con los{" "}
              <span className="text-blue-brand text-bold underline">
                términos y condiciones
              </span>
            </label>
          </div>
        </div>

        <button className="w-full h-14 mt-6 bg-black rounded-md text-white font-bold hover:bg-white hover:text-black hover:border-2 hover:border-black">
          Crear cuenta
        </button>

        <p className="text-sm mt-3 flex justify-center">
          ¿Ya tienes una cuenta?
          <Link to="/login" className="font-bold underline pl-2">
            Inicia sesión
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};
