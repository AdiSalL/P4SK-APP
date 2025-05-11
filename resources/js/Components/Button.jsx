export default function Button({ type = "button", text = "", onClick }) {
    return (
        <button
            className="btn bg-green-800 text-white"
            type={type}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
