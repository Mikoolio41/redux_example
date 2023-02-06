import { useSelector } from "react-redux";

export const Home = () => {
  const username = useSelector((state) => state.user.value.username);

  return <div>Hello, {username}</div>;
};
