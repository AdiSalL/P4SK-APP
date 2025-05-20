export default function TextInput({
    titleInput = "Title Input",
    condition = "",
    type = "input",
    placeholder = "",
    className = "",
    disabled = false,
    onChange,
    value,
}) {
    return (
        <fieldset className={`fieldset`}>
            <legend className="fieldset-legend">{titleInput}</legend>
            <input
                disabled={disabled}
                type={`${type}`}
                className={`text-black  bg-white input ${className}`}
                placeholder={`${placeholder}`}
                onChange={onChange}
                value={value}
            />
            <p className="label">{condition}</p>
        </fieldset>
    );
}
