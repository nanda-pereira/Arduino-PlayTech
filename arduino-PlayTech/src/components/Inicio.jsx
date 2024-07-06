import styles from "../style";
import { arduinogames } from "../assets";

const Inicio = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
    

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Conheça o Arduino{" "}
            <span className="text-gradient">Playtech</span>{" "}
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[580px] mt-5`}>
        Um projeto que busca incentivar a implementação de uma educação 
        com abordagens lúdicas e didáticas nas comunidades escolares em conjunto com
        a eletrônica e cultura maker.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={arduinogames}
          alt="arduino uno"
          className="floating relative z-[5]"
          style={{ width: '1000px', height: 'auto', marginRight: '100px', }}
        />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 yellow_gradient" />
      </div>
    </section>
  );
};

export default Inicio;
