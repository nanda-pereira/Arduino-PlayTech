import styles from "./style";
import { Projetos, Objetivo, Dino, StarWars, Footer, Navbar, Equipe, Inicio, SensorEstacionamento } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Inicio />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Objetivo />
        <Projetos />
        <Dino />
        <StarWars />
        <SensorEstacionamento />
        <Equipe />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
