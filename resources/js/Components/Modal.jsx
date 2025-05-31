import { Trash } from "lucide-react";

const Modal = ({ id, children, text, onClick = "", isDelete = false }) => {
    return (
        <div>
            <button
                className="btn bg-green-700 btn-text-green-600"
                onClick={() => document.getElementById(id).showModal()}
            >
                {text}
            </button>
            <dialog id={id} className="modal">
                <div className="modal-box bg-green-600 border-2 border-green-500">
                    {children}
                    <div className="modal-action">
                        <form
                            method="dialog"
                            className="flex w-full justify-between gap-2"
                        >
                            <button
                                className={
                                    isDelete
                                        ? "btn  bg-red-600 flex-1 hover:bg-red-800"
                                        : " hidden"
                                }
                                onClick={onClick}
                            >
                                <Trash></Trash>
                            </button>
                            <button className="btn text-white flex-1 bg-green-900 hover:bg-green-600">
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
