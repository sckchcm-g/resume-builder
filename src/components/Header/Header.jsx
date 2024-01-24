function Header() {
  return (
    <header className="shadow-lg sticky top-0 px-10 bg-white">
      <a href="https://google.com/" className="flex items-center">
        <img
          src="https://i.pinimg.com/550x/39/6c/d8/396cd8e1d8557f73c786892cffa4f13c.jpg"
          alt="InspirationApp Logo"
          className="object-contain h-12 w-12 rounded-lg"
        />
        <span className="text-2xl text-fuchsia-600 font-semibold">
          &nbsp;Inspiration App
        </span>
      </a>
    </header>
  );
}

export default Header;
