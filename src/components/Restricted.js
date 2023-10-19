import * as React from "react";

import * as styles from "../styles/components/Restricted.module.css";

export default function Restricted({reason, close}) {
    return (
        <div id="Restricted" className={styles.restrictedWindow} aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className={styles.blurBg}></div>
            <div class={styles.restrictedBluredContainer}>
                <div class={styles.restrictedBluredSubContainer}>
                    <div class={styles.restrictedRelativeContainer}>
                        <div class={styles.restrictedRelativeSubContainer}>
                            <div class="md:flex md:items-start">
                                <div class="mt-2">
                                    <p class="text-sm ">{reason}</p>
                                </div>
                            </div>
                            <div class={styles.modalActions}>
                                <button type="button" onClick={close} class={styles.closeBtn}>Okay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}