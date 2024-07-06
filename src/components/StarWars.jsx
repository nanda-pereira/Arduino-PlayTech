import styles, { layout } from "../style";
import starwars from "../assets/starwars.mp4";

const Dino = () => (
    <section className={layout.sectionReverse}>
    <div className={`flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`}>
                <video width={400} height={400} autoPlay muted loop style={{ outline: 'none', borderRadius: '8px' }} >
                    <source src={starwars} type="video/mp4" />
                </video>
    </div>


        <div className={`flex-1 md:ml-10 ml-0 md:mt-0 mt-10 relative`}>
            <h2 className={styles.heading2}>
                Star Wars<br className="sm:block hidden" />
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Um jogo nostálgico que remete ao universo de Star Wars.
            Seu objetivo é fugir dos alvos e passar de nível!<br/>
            Construído com display Oled, buzzer e botões.
            </p>
        </div>
    </section >
);

export default Dino;
