import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>
        ABOUT ME <hr />
      </h1>
      <div id="imgHead">
        <img
          src="https://damilare-dev.github.io/portfolio/img/me.jpg"
          alt="profile-pic"
        />
      </div>
      <div>
        <p>
          I'm Damilare, a front-end developer in Nigeria currently working and
          learning about React. I am proficient in other languages of UI
          components of Web Development like HTML, CSS, Bootstrap and JavaScript.
          I have a BSc. Degree in Computer Science
        </p>
      </div> <br />

      <div>
        <h3>
          Skills <hr />
        </h3>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Bootstrap</li>
          <li>Tailwind CSS</li>
          <li>Javascript</li>
          <li>React.JS</li>
        </ul>
      </div> <br />
       
      <div>
        <h3>
          Education & Work Experience <hr />
        </h3>
        <table>
          <th> Education </th>
          <th> Experience </th>
          <tr>
            <td>Adeleke University</td>
            <td>
              Bachelor's Degree in Computer Science & Research Assistant for
              Faculty Dean
            </td>
          </tr>
          <tr>
            <td>MTN Nigeria</td>
            <td>
              Interned at MTN NIG. as a KYC analyst and cellular numbers
              decryption
            </td>
          </tr>
          <tr>
            <td>IITA</td>
            <td>
              Gained the experience as a Data Curator & Analyst where i worked
              at International Institute of Tropical Agriculture
            </td>
          </tr>
          <tr>
            <td> OIC HUB </td>
            <td>
              Transitioned on my journey as a Web Developer at OIC HUB - a
              Coding Bootcamp to help gain astounding knowledge in Software
              Engineering
            </td>
          </tr>
        </table>
      </div> <br />
       
      <div>
        <h3>
          Hobbies <hr />
        </h3>
        <ul>
          <li>Watching Movies & TV Shows</li>
          <li>Listening to Music</li>
          <li>Visiting new places</li>
          <li>Coding</li>
          <li>Sleeping & Eating</li>
        </ul>
      </div>
      <div id="btn">
        <a href="https://damilare-dev.github.io/portfolio/" target="blank">
          <button>View Porfolio</button>
        </a>
      </div>
    </>
  );
}

export default App;
