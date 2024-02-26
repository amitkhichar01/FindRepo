import { BtnPropTypes } from "../../propTypes.js";

function Btn({ name, href, bgColor }) {
      return (
          <a href={href} className={`py-2 px-3 mr-5 rounded ${bgColor} md:mr-2`} target="_blank" rel="noreferrer">
              {name}
          </a>
      );
}

Btn.propTypes = BtnPropTypes;

export default Btn;
