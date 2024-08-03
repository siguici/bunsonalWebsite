import { For, Show } from "solid-js";
import SkillButton from "./SkillButton";

function SkillBar(props: any) {
  return (
    <div class="se-rounded-t-none se-w-[60vw] se-min-h-[5rem] se-h-fit se-bg-gradient-to-br se-from-[rgba(_0,_163,_255,_0.6)] se-to-[rgba(_0,_102,_179,_0.9)] se-backdrop-filter se-backdrop-blur se-rounded-[10px] dark:se-from-[rgba(_15,_23,_42,_0.9)] dark:se-to-[rgba(_15,_23,_42,_1)]
        se-hidden md:se-hidden lg:se-flex xl:se-flex 2xl:se-flex se-flex-row se-justify-start se-items-center se-px-0 md:se-px-5 lg:se-px-10">
      <div class="se-flex se-flex-row se-flex-wrap se-w-12/12 se-h-11/12  se-py-2 se-justify-center se-items-center"
        // no-scrollbar scroll-smooth
        // " onWheel={(event)=> {
        //   event.preventDefault();
        //   event.currentTarget.scroll(scrollPosition + event.deltaX > 0 ? event.deltaX : event.deltaY, 0);
        // }}
      >
        <For each={props.skills}>
          {(item, index) => (
            <SkillButton label={item.label} skill={item.skill} category={item.category}
                         link={item.link}></SkillButton>
          )}
        </For>
      </div>
    </div>
  );
}

export default SkillBar;
