import { type FormEvent } from 'react';

export default function NewGoal() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="goal">Your Goal</label>
        <input type="text" id="goal" />
      </div>
      <div>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" id="summary" />
      </div>
      <button type="submit">Add Goal</button>
    </form>
  );
}
