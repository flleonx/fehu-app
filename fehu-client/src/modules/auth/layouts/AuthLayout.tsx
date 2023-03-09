interface Props {
  children: JSX.Element;
  imgUrl: string;
}

export const AuthLayout = ({ children, imgUrl }: Props) => {
  return (
    <section className="flex justify-center items-center w-screen h-screen bg-very-light-gray-brand">
      <div className="flex flex-col w-full xl:w-5/12 2xl:w-2/4 h-screen p-4">
        <div className="flex items-center lg:pl-6 w-full h-16">
          <h2 className="font-sans text-3xl font-bold">Fehu</h2>
        </div>

        <div className="flex flex-1 justify-center items-center w-full">
          {children}
        </div>

        <div className="flex items-center lg:pl-6 w-full h-16">
          <p className="text-mono text-sm">@ Fehu 2023</p>
        </div>
      </div>

      <div className="xl:w-7/12 2xl:w-2/4 h-screen p-4 hidden xl:block">
        <img className="w-full h-full rounded-xl" src={imgUrl} alt="city" />
      </div>
    </section>
  );
};
