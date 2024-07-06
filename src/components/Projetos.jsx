import {componentes } from "../assets";
import styles, { layout } from "../style";

const Projetos = () => (
  <section id="projetos" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={componentes} 
      className="floating relative z-[5]"
      style={{ width: '1000px', height: 'auto', marginRight: '5%', }}
      alt="componentes, sensor ultrassônico, led, buzzeer e botão" />

    <div className="absolute z-[1] w-[50%] h-[50%] rounded-full white__gradient bottom-40" />
    <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
    <div className="absolute z-[0] w-[50%] h-[50%] right-600 bottom-20 yellow_gradient2" />

</div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Nossos projetos <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Construídos com o microcontrolador arduino, sensor ultrassônico e atuadores simples
      </p>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Mostrando que aprender IoT e Arduino pode ser divertido e sem complicações!
      </p>
    </div>
  </section>
);

export default Projetos;
