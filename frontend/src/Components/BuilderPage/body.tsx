
import { useState } from 'react';
import bodyStyle from './body.module.css';
import Dialog from "../../Dialog/Dialog.js";
interface BodyProps{
    message:string;
    styles: any;
}

const Body = ({message,styles}:BodyProps) => {

    const[isOpen,setIsOpen]  = useState(false);

    const openDialog =()=>setIsOpen(true);
    const closeDialog = ()=>setIsOpen(false);

    const getStyle = (message: string) => ({
        width: message === 'Desktop' ? '1200px' : message === 'Tablet' ? '900px' : '320px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        border: '1px dashed #ccc',
        margin: '0 auto'
    });
    return (
        <div style={getStyle(message)}>
            <div className={styles.body}>
            <button className={bodyStyle.btnOpenPopup} onClick={openDialog} >Thêm mới section</button>
            <Dialog isOpen = {isOpen} onClose = {closeDialog}>
                <h2>Dialog Title</h2>
                <button onClick={closeDialog}>Đóng</button>
                <p>Nội dung của Dialog.</p>
            </Dialog>
        </div>
        </div>
       
    );
}

export default Body;