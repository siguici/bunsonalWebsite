import skills from "./skills";

interface SkillInfo {
  label: string;
  category: string;
  link: string;
}

// Function to convert the array to a dictionary
const skillsDictionary = () => {
  const skillsArray = skills();
  const dictionary: { [key: string]: SkillInfo } = {}; // Define the type of the dictionary

  skillsArray.forEach(skill => {
    dictionary[skill.skill] = {
      label: skill.label,
      category: skill.category,
      link: skill.link
    };
  });

  return dictionary;
};
export default skillsDictionary;
