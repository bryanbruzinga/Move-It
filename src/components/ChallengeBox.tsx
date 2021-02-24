import React from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const { activeChallenges, resetChallenge } = React.useContext(
    ChallengesContext
  );

  return (
    <div className={styles.ChallengeBoxContainer}>
      {activeChallenges ? (
        <div className={styles.ChallengeActive}>
          <header>Ganhe {activeChallenges.amount} xp</header>
          <main>
            <img
              src={`icons/${activeChallenges.type}.svg`}
              alt={activeChallenges.type}
            />
            <strong>Novo desafio</strong>
            <p>{activeChallenges.description}</p>
          </main>

          <footer>
            <button
              type="button"
              onClick={resetChallenge}
              className={styles.challengeFailedButton}
            >
              Falhei
            </button>
            <button type="button" className={styles.challengeSucceededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.ChallengeNotActive}>
          <strong>
            Inicie um ciclo para receber desafios a serem completados.
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando os desafios.
          </p>
        </div>
      )}
    </div>
  );
}
