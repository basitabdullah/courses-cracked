import { Link } from "react-router-dom";
import "./Course.scss";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const Course = (props) => {
  const {path, name, title, para, listText, img } = props;
  console.log(listText);
  return (
    <div
      className="course"
      style={{
        background: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition : "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="courseWrapper">
        <div className="title">{name}</div>
        <h1>{title}</h1>
        <p>{para}</p>
        <ul>
          <li>
            <IoMdCheckmarkCircleOutline />
            <span>{listText[0].one}</span>
          </li>
          <li>
            <IoMdCheckmarkCircleOutline />
            <span>{listText[1].two}</span>
          </li>
          <li>
            <IoMdCheckmarkCircleOutline />
            <span>{listText[2].three}</span>
          </li>
          {listText[3]?.four && (
            <li>
              <IoMdCheckmarkCircleOutline />
              <span>{listText[3].four}</span>
            </li>
          )}
        </ul>
        <Link to={path}>GET STARTED</Link>
      </div>
    </div>
  );
};

export default Course;
