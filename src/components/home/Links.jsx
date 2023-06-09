import { NavLink } from "react-router-dom";
import { links } from "../../data/dumpData";

const Links = ({ style }) => {
  return (
    <ul className={style}>
      {links.map(({ title, name }) => {
        return (
          <NavLink to={name} key={name}>
            {title}
          </NavLink>
        );
      })}
    </ul>
  );
};

export default Links;
