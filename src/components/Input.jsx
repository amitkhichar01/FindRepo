import { InputPropTypes } from "../../propTypes.js";

function Input({ type, name, value, onChange, placeholder }) {
    return (
        <div className="block mb-7">
            <label htmlFor={name} className="pr-2 text-base">
                {name}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required
                id={name}
                className="text-black pl-1 py-1 text-sm  rounded-sm border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent required"
            />
        </div>
    );
}

Input.propTypes = InputPropTypes;

export default Input;
