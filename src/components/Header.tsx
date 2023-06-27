import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  isLoggedIn: boolean;
  setIsLoggedIn: Function;
}

const Header: FunctionComponent<HeaderProps> = ({
  isLoggedIn,
  setIsLoggedIn,
}) => {
  let navigate = useNavigate();
  return (
    <>
      <h1 className="bg-dark text-light text-center py-3 mb-4">
        Book Collection
        {isLoggedIn && (
          <>
            <h5>welcome {sessionStorage.getItem("userEmail")}</h5>
            <button
              className="btn btn-primary"
              onClick={() => {
                navigate("/");
                setIsLoggedIn(false);
                sessionStorage.removeItem("isLoggedIn");
                sessionStorage.removeItem("userEmail");
              }}
            >
              Logout
            </button>
          </>
        )}
      </h1>
    </>
  );
};

export default Header;
