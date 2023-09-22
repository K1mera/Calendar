

export const NavBar = () => {
  return (
    <nav className="lg:h-16 bg-zinc-950 mb-4 shadow-lg text-white text-xl font-cormorant font-bold flex px-8 items-center justify-between">
      <span>
        <i className="fas fa-calendar-alt mr-2"></i>
        User
      </span>
      <button className="border border-red-500 px-2 py-1 text-red-500 rounded-lg">
        <i className="fas fa-sign-out-alt mr-1"></i>
        <span>Exit</span>
      </button>
    </nav>
  )
}
