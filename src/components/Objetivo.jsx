import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Objetivo = () =>  (
  <section id="objetivo" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        A geração futura deve estar preparada<br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
        Acreditamos que a comunidade escolar pode ajudar enfrentar os desafios do mundo moderno e suas tecnologias,
        garantindo a autonomia do aluno através de metodologias ativas
      </p>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Objetivo;
