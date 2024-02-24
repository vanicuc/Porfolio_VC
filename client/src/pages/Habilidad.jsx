const skills = [
  { name: "React.js", image: "./react-original.png" },
  { name: "Vue.js", image: "./vuejs-original.png" },
  { name: "Javascript", image: "./Javascript.png" },
  { name: "HTML", image: "./html5-original.png" },
  { name: "CSS", image: "./css3-original.png" },
  { name: "Node.js", image: "./Nodejs.png" },
  { name: "MySQL", image: "./mysql-original-wordmark.png" },
  { name: "Sequelize", image: "./sequelize-plain.png" },
  { name: "Postman", image: "./Postman.png" },
  { name: "GitHub", image: "./github-original.png" },
  { name: "Git", image: "./git-plain.png" },
];

export default function Habilidad() {
  return (
    <>
      <div className="skill_name">
        <h1>Hard Skills</h1>
      </div>
      <div className="Hard_skills_container">
        {skills.map((skill, index) => (
          <div key={index} className="Hard_skill">
            <p>{skill.name}</p>
            <img src={skill.image} alt={skill.name} className="Skills" />
          </div>
        ))}
      </div>
      <img src="skill.jpeg" alt="DeskHome_art 2" className="DesckHome_art_2" />
    </>
  );
}
