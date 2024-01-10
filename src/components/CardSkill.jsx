import "../styles/Skills.scss";

export const CardSkill = ({ item }) => {
  const { icon, title } = item;

  return (
    <li className="item-tecnology">
      <img
        src={icon}
        width={50}
        height={50}
        alt="Icono"
        title={title}
        className="icono-tec"
        loading="lazy"
      />
    </li>
  );
};
