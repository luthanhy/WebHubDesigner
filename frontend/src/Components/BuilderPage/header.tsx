import styles from './header.module.css'; 

interface HeaderProps {
    setMessage : (message: string) => void;
}

const header = ({setMessage}:HeaderProps) => {
    return (
        <div className={styles.headerContainer}>
        <button onClick={()=>setMessage("Logo")} className={styles.ratioButton}>Logo</button>
        <div className={styles.buttonGroup}>
            <button onClick={()=>setMessage("Desktop")} className={styles.ratioButton}>Desktop</button>
            <button onClick={()=>setMessage("Tablet")} className={styles.ratioButton}>Tablet</button>
            <button onClick={()=>setMessage("Phone")} className={styles.ratioButton}>Phone</button>
        </div>
            <button onClick={()=>setMessage("Setting")} className={styles.settingButton}>Export Html</button>
    </div>
    );
}

export default header;