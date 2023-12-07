import React from 'react';
import styles from './PrincipalMessage.module.css';

const PrincipalMessage = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.message}>
              <h1 className='widclass'>VICE-CHANCELLOR MESSAGE</h1>
              <p>
                The great challenges and difficulties we face today teach us one lesson: that no one else but ourselves would determine our destiny.
                It is my considered view that nations are built in the universities and research labs.
                Our present situation compels us to bring a complete educational revolution in our country. Let us empower our people with the power of the pen.
                Verily, in this lies the secret of our success and the bright future of our forthcoming generations.
              </p>
              <span className='widclass'>Prof. Mr. Mansoor Nasir</span>
              <span className='widclass'>Vice Chancellor</span>
              <span className='widclass'>Islamia College Peshawar</span>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.imageContainer}>
              <img src="./pdf/Principal.jpg" alt="mansoor-sir-profile" className={styles.mansoorSir} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrincipalMessage;
