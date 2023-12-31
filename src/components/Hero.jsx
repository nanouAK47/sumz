import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/nanouAK47")}
          className="black_btn"
        >
          Code source
        </button>
      </nav>

      <h1 className="head_text">
        Résumés des articles avec <br className="max-md:hidden" />
        <span className="orange_gradient">ChatGPT-4</span>
      </h1>
      <h2 className="desc">
        Simplifié votre lecture avec Summize, le site gratuit pour résumer et
        simplifier des articles !
      </h2>
    </header>
  );
};

export default Hero;
