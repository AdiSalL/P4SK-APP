export default function Toast({ message, className }) {
    return (
        <div className={`toast toast-end z-50 ${className}`}>
            <div className="alert alert-danger text-white font-bold">
                <span>{message} !</span>
            </div>
        </div>
    );
}
