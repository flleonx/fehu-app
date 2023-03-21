import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AuthLayout } from "@auth/layouts";
import { Input } from "@common/ui";
import { isValidEmail, isValidUsername } from "@common/helpers";

const schema = yup.object({
  firstName: yup
    .string()
    .required("Este campo es requerido")
    .min(2, "Este campo debe contener al menos dos caracteres"),
  lastName: yup
    .string()
    .required("Este campo es requerido")
    .min(2, "Este campo debe contener al menos dos caracteres"),
  username: yup
    .string()
    .required("Este campo es requerido")
    .min(5, "Este campo debe contener al menos cinco caracteres")
    .test(
      "Username validation",
      "Solo puede contener letras, números y el caracter _ en medio",
      (value) => isValidUsername(value)
    ),
  email: yup
    .string()
    .required("Este campo es requerido")
    .test("Email validation", "Ingrese un email valido", (value) =>
      isValidEmail(value)
    ),
  password: yup
    .string()
    .required("Este campo es requerido")
    .min(8, "La contraseña debe contener al menos 8 caracteres"),
  repeatPassword: yup
    .string()
    .required("Este campo es requerido")
    .oneOf([yup.ref("password")], "Las contraseñas deben coincidir"),
  termsAndConditions: yup
    .boolean()
    .oneOf([true], "Es obligatorio aceptar los términos y condiciones"),
});

type FormData = yup.InferType<typeof schema>;

export const RegisterPage = () => {
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
    <AuthLayout imgUrl="/city.jpg">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:w-9/12 lg:w-7/12 xl:w-full 2xl:w-8/12 p-8"
      >
        <h2 className="font-bold text-4xl">Registro</h2>

        <Input
          register={register}
          name="firstName"
          type="text"
          height={12}
          placeholder="Nombre"
          fullWidth
          error={!!errors.firstName?.message}
          errorMessage={errors.firstName?.message}
        />

        <Input
          register={register}
          name="lastName"
          type="text"
          height={12}
          placeholder="Apellido"
          fullWidth
          error={!!errors.lastName?.message}
          errorMessage={errors.lastName?.message}
        />

        <Input
          register={register}
          name="username"
          type="text"
          height={12}
          placeholder="Username"
          fullWidth
          error={!!errors.username?.message}
          errorMessage={errors.username?.message}
        />

        <Input
          register={register}
          name="email"
          type="email"
          height={12}
          placeholder="Email"
          fullWidth
          error={!!errors.email?.message}
          errorMessage={errors.email?.message}
        />

        <Input
          register={register}
          name="password"
          type="password"
          height={12}
          placeholder="Contraseña"
          fullWidth
          error={!!errors.password?.message}
          errorMessage={errors.password?.message}
        />

        <Input
          register={register}
          name="repeatPassword"
          type="password"
          height={12}
          placeholder="Repetir Contraseña"
          fullWidth
          error={!!errors.repeatPassword?.message}
          errorMessage={errors.repeatPassword?.message}
        />

        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center">
            <input
              className={`w-4 h-4 text-blue-600 bg-gray-100 rounded ${
                errors.termsAndConditions?.message
                  ? "border-red-500"
                  : "border-gray-500"
              }`}
              {...register("termsAndConditions")}
              type="checkbox"
            />
            <label className="ml-2 text-xs sm:text-sm font-medium">
              Estoy de acuerdo con los{" "}
              <span className="text-blue-brand text-bold underline">
                términos y condiciones
              </span>
            </label>
          </div>
        </div>
        <p className="text-sm text-red-500">
          {errors.termsAndConditions?.message}
        </p>

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
