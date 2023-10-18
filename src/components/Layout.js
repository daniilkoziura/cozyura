import * as React from "react"
import Header from "./Header"

import * as styles from "../styles/components/Layout.module.css"

export default function Layout({ children }) {
    return (
        <>
            <Header/>
                <main className={styles.mainLayout}>{children}</main>
            {/* <footer> Designed and build by Daniil Koziura </footer> */}
        </>
    )
}