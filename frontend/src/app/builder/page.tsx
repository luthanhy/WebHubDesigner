'use client';

import Header from "@/Components/BuilderPage/header";
import Footer from "@/Components/BuilderPage/footer";
import Body from "@/Components/BuilderPage/body";
import SideBar from "@/Components/BuilderPage/sidebar";
import styles from "./page.module.css";
import { useState } from "react";

const Page = () => {
    const [message, setMessage] = useState<string>("");
    return (
        <div className={styles.pageContainer}>
            <Header setMessage = {setMessage} />
            <div className={styles.mainContent}>
                <SideBar styles={styles}/>
                <Body message={message} styles={styles} />
            </div>
            <Footer />
        </div>
    );
}

export default Page;