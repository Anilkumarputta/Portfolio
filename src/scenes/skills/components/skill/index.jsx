import {
  SkillContainer,
  SkillMarker,
  SkillNumber,
  SkillTitle,
} from "./components/style";

const Skill = ({ skill, index }) => {
  return (
    <SkillContainer>
      <SkillNumber>0{index}</SkillNumber>
      <SkillTitle>{skill.title}</SkillTitle>
      <p style={{ marginTop: "10px" }}>{skill.text}</p>
      <SkillMarker number={index} />
    </SkillContainer>
  );
};

export default Skill;
