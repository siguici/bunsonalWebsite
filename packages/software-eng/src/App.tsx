import { Component } from "solid-js";
import style from "./index.css?inline";
import SkillBar from './components/skill/SkillBar';
import skills from "./components/skill/skills";
import Xp from "./components/skill/Xp";

const App: Component = (props: any) => {


    return (
        <div
            id="bgSE" class="se-h-full se-w-full se-bg-lght dark:se-bg-drk se-bg-cover se-bg-bottom se-min-h-screen se-min-w-screen se-overflow-y-hidden se-z-0">
            <div
                class="se-flex se-h-full se-max-w-screen se-z-0">
                <div class="se-h-full se-max-h-screen se-w-full se-overflow-hidden se-z-0 transition">
                    <div class="page se-flex se-flex-col se-w-full se-h-full se-space-y-10">
                        <div class="page se-flex se-flex-row se-justify-center se-items-center se-w-full">
                            <SkillBar skills={skills()}></SkillBar>
                        </div>
                        <div class="page se-flex se-flex-col se-justify-start se-items-center se-w-full">
                            <div
                                class="se-mt-2 se-flex se-flex-col md:se-flex-row se-justify-center se-items-center se-bg-gradient-to-br se-from-[rgba(_0,_163,_255,_0.8)] se-to-[rgba(_0,_102,_179,_0.9)] se-backdrop-filter se-backdrop-blur se-rounded-[10px] dark:se-from-[rgba(_15,_23,_42,_0.9)] dark:se-to-[rgba(_15,_23,_42,_1)] se-p-5 se-w-[80vw] se-h-[85vh] lg:se-h-[65vh] se-min-h-fit">
                                <Xp></Xp>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
