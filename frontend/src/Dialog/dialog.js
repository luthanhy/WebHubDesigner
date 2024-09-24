const Dialog = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <>
            <div className="overlay" onClick={onClose} />
            <div className="modal">
                {children}
            </div>
            <style jsx>{`
                .overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 50;
                }
                .modal {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 100;
                    width: 50%;
                    background: white;
                    padding: 20px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
            `}</style>
        </>
    );
}
