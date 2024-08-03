import { JSX, Show } from "solid-js";
import skillFilters from "./SkillFilters";


function SkillButtonThin(props: { category: string; skill: string; link: string | URL | undefined; label: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; }) {

  const filterButton = (filters: String[], skill: string) => {
    return filters.length !== 0 && (filters.includes(skill) || filters.map((s)=>s.includes(skill)).reduce((prev,curr)=>prev&&curr));
  }

  const [filters, setFilters] = skillFilters;

  return (
    <>
      <Show when={/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)} fallback={
        <div
          class={"skillButton se-cursor-pointer se-min-w-fit se-flex se-flex-row se-space-x-0.5 se-items-center se-justify-center" +
            " se-py-0.5 se-mx-2 se-my-0.5 se-px-1 se-text-xs se-font-medium se-text-regal-blue-50 dark:se-text-regal-blue-50 se-border " +
            "se-rounded-lg " + (
              !filterButton(filters(), props.skill) ? "se-border-transparent" :
                props.category === "front-end" ? "se-bg-green-800 dark:se-bg-green-900 se-border-transparent" :
                  props.category === "back-end" ? "se-bg-purple-800 dark:se-bg-purple-900 se-border-transparent" : "")}
          data-skill={props.skill}
          onMouseOver={() => {
            if (filters().length === 0) {
              setFilters([props.skill]);
            }
          }}
          onMouseOut={() => {
            if (filters().length === 1) {
              setFilters([]);
            }
          }}
          onClick={() => {
            if (props.link && props.link !== "") {
              open(props.link)
            }
          }}
        >
          <p class="skillIconLabel se-text-nowrap">{props.label}</p>
        </div>
      }>
        <div
          class={"skillButton se-min-w-fit se-flex se-flex-row se-space-x-0.5 se-items-center se-justify-center" +
            " se-py-0.5 se-mx-1 se-my-0.5 se-px-1 se-text-xs se-font-medium se-text-regal-blue-50 dark:se-text-regal-blue-50 se-border " +
            "se-rounded-lg " + (
                props.category === "front-end" ? "se-bg-green-800 dark:se-bg-green-850 se-border-transparent" :
                  props.category === "back-end" ? "se-bg-purple-800 dark:se-bg-purple-850 se-border-transparent" : "")}
          data-skill={props.skill}
          onClick={() => {
            if (props.link && props.link !== "") {
              open(props.link)
            }
          }}
        >
          <p class="skillIconLabel se-text-nowrap">{props.label}</p>
        </div>
      </Show>
    </>
  );
}

export default SkillButtonThin;
