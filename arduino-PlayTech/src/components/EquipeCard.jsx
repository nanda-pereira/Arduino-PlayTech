import styles from "../style";

const EquipeCard = ({ name, img }) => (
  <div className="flex justify-between flex-col px-8 py-6 rounded-[20px]  max-w-[900px] md:mr-5 sm:mr-5 mr-0 my-5 integrantes-card">
      <img src={img} alt={name} className="w-[230px] h-[220px] rounded-[10px]" />
      <div className={`flex-1 ${styles.flexCenter}`}>
        <h4 className="font-poppins font-semibold text-[20px] leading-[60px] text-white">
          {name}
        </h4>
      </div>
  </div>
);


export default EquipeCard;
