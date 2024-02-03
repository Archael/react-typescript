import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList.tsx';
import Header from './components/Header.tsx';
import goalsImg from './assets/goals.jpg';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    const newGoal: CourseGoal = {
      id: Math.random(),
      title: 'My new goal',
      description: 'Description of my new goal',
    };
    setGoals((prevGoals) => {
      return [...prevGoals, newGoal];
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList goals={goals} />
    </main>
  );
}
