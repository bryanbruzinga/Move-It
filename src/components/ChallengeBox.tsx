import React from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const {
    activeChallenges,
    resetChallenge,
    completeChallenge,
  } = React.useContext(ChallengesContext);

  const { resetCountdown } = React.useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

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
              onClick={handleChallengeFailed}
              className={styles.challengeFailedButton}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
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
            Realize os exercícios para ganhar Xp e subir de nível.
          </p>
        </div>
      )}
    </div>
  );
}
