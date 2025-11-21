import { TbBrandJavascript as JavaScriptImg } from "react-icons/tb";
import { RiJavaLine as JavaImg } from "react-icons/ri";
import { Icon, IconifyIcon } from '@iconify/react';
import cplusplusIcon from '@iconify-icons/logos/c-plusplus';
import csharpIcon from '@iconify-icons/logos/c-sharp';
import tensorflowIcon from '@iconify-icons/logos/tensorflow';
import { PiFileSqlBold as SQLImg } from "react-icons/pi";
import { SiPython as PythonImg } from "react-icons/si";
import { TfiHtml5 as HTMLImg} from "react-icons/tfi";
import { TbBrandAngular as AngularImg} from "react-icons/tb";
import { TbBrandNextjs as NextJSImg} from "react-icons/tb";
import { TbBrandReact as ReactImg } from "react-icons/tb";
import { SiPytorch as PyTorchImg} from "react-icons/si";
import { SiGeopandas as PandasImg } from "react-icons/si";
import { SiNumpy as NumpyImg } from "react-icons/si";
import { SiScikitlearn as ScikitImg} from "react-icons/si";
import { BiLogoSpringBoot as SpringBootImg} from "react-icons/bi";
import { SiAmazonec2 as EC2Img } from "react-icons/si";
import { SiAwsorganizations as AWSS3Img} from "react-icons/si";
import { SiMysql as MySQLImg} from "react-icons/si";
import { BiLogoPostgresql as PostgresQLImg} from "react-icons/bi";
import { FaMicrosoft as MicrosoftSQLImg} from "react-icons/fa";
import { DiEclipse as EclipseImg} from "react-icons/di";
import { TbBrandVscode as VSCodeImg} from "react-icons/tb";
import { SiPostman as PostManImg} from "react-icons/si";
import { TbApi as APIImg} from "react-icons/tb";
import { BiLogoGit as gitImg} from "react-icons/bi";
import { TbBrandCypress as CypressImg } from "react-icons/tb";
import { SiJira as JIRAImg} from "react-icons/si";
import './Skills.css'; // Import CSS file
import { useState } from 'react';
import { IconType } from "react-icons";
type Skill = {
    name: string;
    image: IconType | IconifyIcon | string;
  };
type SkillSet = Record<string, Skill[]>;
function Skills() {
    const skillsList: SkillSet = {
        Languages: [
            { name: "Java", image: JavaImg},
            { name: "C++", image: cplusplusIcon},
            { name: "C#", image: csharpIcon},
            { name: "SQL", image: SQLImg },
            { name: "Python", image: PythonImg},
            { name: "JavaScript", image: JavaScriptImg},
            { name: "HTML", image: HTMLImg},
            { name: "Angular", image: AngularImg},
            { name: "Next.js", image: NextJSImg},
            { name: "React", image: ReactImg}],
        "Frameworks": [
            { name: "PyTorch", image: PyTorchImg},
            { name: "TensorFlow", image: tensorflowIcon},
            { name: "Pandas", image: PandasImg},
            { name: "NumPy", image: NumpyImg},
            { name: "Scikit-Learn", image: ScikitImg},
            { name: "SpringBoot", image: SpringBootImg},
            // { name: "NLTK", image:}
            ],
        "Cloud and Database": [
            { name: "AWS EC2", image: EC2Img},
            { name: "S3", image: AWSS3Img},
            { name: "MySQL", image: MySQLImg},
            { name: "Microsoft SQL Server", image: MicrosoftSQLImg},
            { name: "PostgreSQL", image: PostgresQLImg}],
        "Tools": [
            { name: "Eclipse", image: EclipseImg},
            { name: "VSCode", image: VSCodeImg},
            { name: "Postman", image: PostManImg},
            { name: "RESTful API", image: APIImg},
            { name: "Git", image: gitImg},
            { name: "Cypress", image: CypressImg},
            { name: "JIRA", image: JIRAImg}]
    }
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    return (
      <div className="skills-section">
        <h2>Skills & Technologies</h2>
        <hr />
        <div className="skills-wrapper">
        {Object.entries(skillsList).map(([category, skills]) => (
          <div 
            key={category} 
            className="category-card"
            onClick={() => setActiveCategory(category)}
          >
            <h3>{category}</h3>
            <div className="card-arrow">→</div>
          </div>
        ))}

{activeCategory && (
  <div className="skills-modal" onClick={() => setActiveCategory(null)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <h2 className="modal-title">{activeCategory}</h2>
      <div className="skills-grid">
        {skillsList[activeCategory].map((skill, index) => (
          <div className="skill-card" key={index} style={{ animationDelay: `${index * 0.05}s` }}>
            <div className="skill-icon">
              {typeof skill.image === "object" ? (
                <Icon icon={skill.image} width={48} height={48} />
              ) : typeof skill.image === "function" ? (
                <skill.image size={48} />
              ) : (
                <span>{skill.name}</span>
              )}
            </div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
      <button className="close-btn" onClick={() => setActiveCategory(null)}>×</button>
    </div>
  </div>
)}

    </div>
    </div>
  );
}

export default Skills;
