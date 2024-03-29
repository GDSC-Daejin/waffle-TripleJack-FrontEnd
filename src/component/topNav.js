import { useNavigate } from "react-router-dom";

function TopNav() {
  let navigate = useNavigate;
  return (
    <div className="homeDiv Top">
      <p
        className="homeTopFont"
        onClick={() => {
          navigate("/home");
        }}
      >
        대카풀
      </p>
      <img
        src={process.env.PUBLIC_URL + "/images/alram.png"}
        style={{ height: "30px", width: "30px" }}
      ></img>
    </div>
  );
}

export default TopNav;
