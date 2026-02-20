import {
  SkillContainer,
  SkillMarker,
  SkillNumber,
  SkillText,
  SkillTitle,
} from "./components/style";

const Skill = ({ skill, index }) => {
  return (
    <SkillContainer>
      <SkillNumber>0{index}</SkillNumber>
      <SkillTitle>{skill.title}</SkillTitle>
      <SkillText>{skill.text}</SkillText>
      <SkillMarker number={index} />
    </SkillContainer>
  );
};

export default Skill;
