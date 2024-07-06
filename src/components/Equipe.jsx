import { integrantes} from "../constants";
import styles from "../style";
import EquipeCard from "./EquipeCard";

const Equipe = () => (
  <section id="equipe" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="flex justify-center items-center">
      <h2 className={styles.heading2}>
        Equipe do projeto
      </h2>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full integrantes-container relative z-[1]">
      {integrantes.map((card) => <EquipeCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Equipe;
