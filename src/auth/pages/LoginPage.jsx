import {Link} from "react-router-dom";


export const LoginPage = () => {
  return (
    <main className="flex justify-center items-center w-full h-screen bg-zinc-950 font-openSans">
      <div className="h-[380px] lg:h-96 lg:w-[440px]">
        <form
          action=""
          className="flex flex-col gap-4 p-4 justify-center h-full"
        >
          {/* <h3 className="text-xl font-bold text-teal-200 mb-6 text-center w-full">Login</h3> */}
          <label htmlFor="email">
            <h4 className="font-semibold text-white">Email</h4>
            <input type="email" id="email" className="inputs" />
          </label>
          <label htmlFor="password">
            <h4 className="font-semibold text-white">Password</h4>
            <input type="password" id="password" className="inputs" />
          </label>
          <div className="flex flex-col justify-center items-center lg:flex-row gap-2 mt-4 lg:mt-6 w-full">
            <button className="bg-cyan-500 px-3 py-2 rounded-lg text-lg text-white font-semibold w-full shadow-lg transition hover:bg-emerald-500 hover:scale-105">
              Login
            </button>
            <Link to='sign-up' className="text-cyan-400  text-center px-3 py-2 rounded-lg text-lg  font-semibold w-full shadow-lg transition hover:text-emerald-500 hover:scale-105">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
