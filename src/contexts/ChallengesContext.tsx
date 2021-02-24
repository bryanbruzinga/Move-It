import React from "react";
import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengeContextData {
    level: number;
    currentExperience: number;
    experienceToNextLevel: number;
    challengesCompleted: number;
    activeChallenges: Challenge;
    startNewChallenge: () => void;
    levelUp: () => void;
    resetChallenge: () => void;  
}

interface ChallengesProviderProps {
  children: React.ReactNode;
}

export const ChallengesContext = React.createContext({} as ChallengeContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = React.useState(1);
  const [currentExperience, setCurrentExperience] = React.useState(0);
  const [challengesCompleted, setChallengesCompleted] = React.useState(0);

  const [activeChallenges, setActiveChallenges] = React.useState(null);

  const experienceToNextLevel = Math.pow((level +1 ) * 4, 2)

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenges(challenge);
  }

  function resetChallenge() {
    setActiveChallenges(null)
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        currentExperience,
        challengesCompleted,
        startNewChallenge,
        activeChallenges,
        resetChallenge,
        experienceToNextLevel
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
