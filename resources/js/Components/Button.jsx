export default function Button({
    type = "button",
    text = "",
    onClick,
    disabled = false,
}) {
    return (
        <button
            disabled={disabled}
            className="btn bg-green-800 text-white"
            type={type}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
