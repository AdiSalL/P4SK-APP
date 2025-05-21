const Modal = ({ id, children, text }) => {
    return (
        <div>
            <button
                className="btn bg-red-800 btn-text-green-600"
                onClick={() => document.getElementById(id).showModal()}
            >
                {text}
            </button>
            <dialog id={id} className="modal">
                <div className="modal-box bg-green-600 border-2 border-green-500">
                    {children}
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn text-white bg-green-900 hover:bg-green-600">
                                Tutup
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;
