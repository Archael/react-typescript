// ReactNode is a custom type package that can be used to describe any JSX content
import { type ReactNode } from 'react';

// type alias is used to define a new type, it is a good practice to use type alias for props
type CourseGoalProps = {
  title: string;
  children: ReactNode;
};

// alternative way to define the type alias using the PropsWithChildren type from the react package
// type CourseGoalProps = PropsWithChildren<{ title: string }>;

export default function CourseGoal({
  // The props are destructured here using the standard object destructuring syntax '{}' and the props are typed using the type alias
  title,
  children,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button>Delete</button>
    </article>
  );
}
