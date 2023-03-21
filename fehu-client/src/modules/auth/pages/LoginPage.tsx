import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AuthLayout } from "@auth/layouts";
import { Input } from "@common/ui";
import { isValidEmail } from "@common/helpers";

const schema = yup
  .object({
    email: yup
      .string()
      .required("Este campo es requerido")
      .test("Email validation", "Ingrese un email valido", (value) =>
        isValidEmail(value)
      ),
    password: yup.string().required("Este campo es requerido"),
    rememberSession: yup.boolean(),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <AuthLayout imgUrl="/work.jpg">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:w-9/12 lg:w-7/12 xl:w-full 2xl:w-8/12 p-8"
      >
        <h2 className="font-bold text-4xl">Bienvenido nuevamente</h2>

        <Input
          register={register}
          name="email"
          type="text"
          fullWidth
          placeholder="Ingresa tu username o email"
          error={!!errors.email?.message}
          errorMessage={errors.email?.message}
        />

        <Input
          register={register}
          name="password"
          type="password"
          fullWidth
          placeholder="Ingrese una contraseña"
          error={!!errors.password?.message}
          errorMessage={errors.password?.message}
        />

        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center">
            <input
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded"
              {...register("rememberSession")}
              type="checkbox"
            />
            <label className="ml-2 text-xs sm:text-sm font-medium">
              Recordar mi sesión
            </label>
          </div>

          <a href="#" className="ml-2 text-xs sm:text-sm font-medium">
            Olvidé mi contraseña
          </a>
        </div>

        <button
          className="w-full h-14 mt-6 bg-black rounded-md text-white font-bold hover:bg-white hover:text-black hover:border-2 hover:border-black"
          type="submit"
        >
          Iniciar sesión
        </button>

        <p className="text-sm mt-3 flex justify-center">
          ¿No tienes una cuenta?
          <Link to="/register" className="font-bold underline pl-2">
            Registrate
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};
