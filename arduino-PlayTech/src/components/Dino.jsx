import styles, { layout } from "../style";
import dinovideo from "../assets/dino.mp4";

const Dino = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Dino<br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Um jogo popular e divertido, seu objetivo é fazer o Dino pular para não bater nos cactos.
      Construído com um display Oled e botão.
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`}>

      <div className="relative z-[5]">
        <video width={400} height={400} autoPlay muted loop style={{ outline: 'none', borderRadius: '8px' } } >
          <source src={dinovideo} type="video/mp4"/>
        </video>
      </div>
    </div>
    
  </section>
);

export default Dino;
