import { useNavigate } from "react-router-dom";
import { useLogOut } from "../hooks/logout.hook";
import { useUser } from "../hooks/user.hook";

const HomePage = ({ ctxUser }) => {
  const userContext = useUser();
  const handleLogOut = useLogOut;
  const redirect = useNavigate();

  if (!ctxUser.email) {
    redirect("/login");
  }

  return (
    <div>
      <h3>User logged in: {ctxUser ? ctxUser.email : null}</h3>
      <button onClick={() => handleLogOut(userContext)}>Sign Out</button>
    </div>
  );
};

export default HomePage;
