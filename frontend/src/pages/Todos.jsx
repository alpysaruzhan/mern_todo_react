import { useSelector } from "react-redux";
import TodoForm from "../components/TodoForm";

export default function Todos() {
  const { user } = useSelector(state => state.auth);

  return (
    <>
      <section>
        <h1>Добро пожаловать, {user && user.name}!</h1>
      </section>

      <TodoForm />
    </>
  );
}
