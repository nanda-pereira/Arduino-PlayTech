import styles, { layout } from "../style";
import maquete from "../assets/maquete.png";

const SensorEstacionamento = () => (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Sensor de Estacionamento<br className="sm:block hidden" />
            </h2>
            <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
                Construído com sensor ultrassônico HC-SR04, buzzer e LEDs. Funciona a partir da detecção do movimento do carro, que ao se movimentar para trás, poderá observar a sinalização dos LEDs e a emissão de som. <br />
                O sensor se encontra inserido na maquete, buscando ilustrar uma smart city.
            </p>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`}>
            <div className="relative z-5">
                <img
                    src={maquete}
                    alt="Maquete"
                    style={{ width: '100%', height: '100%'}}
                />
            </div>
        </div>
    </section>
);

export default SensorEstacionamento;
