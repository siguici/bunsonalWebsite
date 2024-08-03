import { JSX, Show } from "solid-js";
import skillFilters from "./SkillFilters";


function SkillButton(props: { category: string; skill: string; link: string | URL | undefined; label: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; }) {

  const filterButton = (filters: String[], skill: string) => {
    return filters.length !== 0 && (filters.includes(skill) || filters.map((s)=>s.includes(skill)).reduce((prev,curr)=>prev&&curr));
  }

  const [filters, setFilters] = skillFilters;

  return (
    <>
      <div
        class={"skillButton se-cursor-pointer se-min-w-fit se-flex se-flex-row se-space-x-1.5 se-items-center se-justify-center" +
          " se-py-1 se-mx-2 se-my-1 se-px-1.5 se-text-sm se-font-medium se-text-regal-blue-50 dark:se-text-regal-blue-50 se-border " +
          "se-rounded-lg "+(
            !filterButton(filters(),props.skill)?"se-border-transparent":
              props.category==="front-end"?"se-bg-green-800 dark:se-bg-green-800 se-border-transparent" :
                props.category==="back-end"?"se-bg-purple-800 dark:se-bg-purple-800 se-border-transparent":"")}
        data-skill={props.skill}
        onMouseOver={()=>{
          if(filters().length === 0) {
            setFilters([props.skill]);
          }
        }}
        onMouseOut={()=>{
          if(filters().length === 1) {
            setFilters([]);
          }
        }}
        onClick={()=>{
          if (props.link && props.link !== "") {
            open(props.link)
          }
        }}
      >
        <p class="skillIconLabel">{props.label}</p>
      </div>
    </>
  );
}

export default SkillButton;
