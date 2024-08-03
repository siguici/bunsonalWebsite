import skillFilters from "./SkillFilters";
import { createSignal, For, Show } from "solid-js";
import skillsDict from "./skillsDict";
import SkillButtonThin from "./SkillButtonThin";
import '../../index.css';

  const pages = [
    {
      context: "Main Page",
      skillList: []
    },
    {
      context: "This Website :)",
      skillList: ['css','js','ts','tailwindcss','solidjs,ts','astrojs,ts','vitejs,ts','single-spa,ts','mitosisjs,ts'],
      title: "Not Your Average Personal Website",
      blob: "This site demonstrates some of the flexibility front-end developers have when using a modern stack, incorporating 4 different frameworks. To read more about my development of this site and what makes it special, check out my <a class='se-text-regal-blue-300 se-underline' href='/blog/first-foray' target='_blank'>blog post.</a>",
    },
    {
      context: "While working as a Full Stack Software Engineer at BNY Mellon as part of the SETUP Program...",
      skillList: ["css","js","ts","java","angularjs,ts","spring-boot,java","kafka"],
      title: "Account Validation Services",
      blob: "During my initial tenure at the bank, I spearheaded the development of the backend infrastructure for a novel application facilitating ASV, AOA, and AOV requests to Early Warning Systems via an internal service. Under the mentorship of my manager and colleagues, I engineered the Spring Boot API from inception, while contributing to the Angular frontend as required. Our efforts culminated in the successful testing and deployment of the application within 7 months, swiftly garnering client adoption."
    },
    {
      context: "While working as a Lead Full Stack Software Engineer at BNY Mellon...",
      skillList: ["css","js","ts","java","angularjs,ts","spring-boot,java","spring-cloud,java","mongo","hazelcast,java"],
      title: "Treasury Services Online Banking: Early Days",
      blob: "Following the completion of AVS, I transitioned to a newly established team where I assumed responsibility for architecting the initial framework and structure of our APIs, including the establishment of our API gateway and implementation of new certificates. Additionally, I played a pivotal role in formulating a substantial portion of the enduring business logic. Leveraging the foundational knowledge acquired from prior projects, I predominantly focused on backend development during this phase, albeit occasionally addressing frontend requirements as needed."
    },
    {
      context: "While working as a Lead Full Stack Software Engineer at BNY Mellon...",
      skillList: ["java","spring-boot,java"],
      title: "Treasury Services Online Banking: Challenges",
      blob: "As the product continued to mature, my role evolved to include more responsibility. During this phase, my tasks predominantly entailed resolving complex, often uncharted issues that demanded innovative solutions. One such challenge involved integrating RSA SecurId prompts for specific actions based on entitlements. Despite initial complexities, adept coordination with the RSA Service team facilitated access to a new REST API, streamlining subsequent implementation through the utilization of interceptors and thread-scoped classes."
    },
    {
      context: "While working as a Lead Full Stack Software Engineer at BNY Mellon...",
      skillList: ["java","spring-boot,java","hazelcast,java"],
      title: "Treasury Services Online Banking: Challenges (cont.)",
      blob: `While the integration of RSA SecurId presented its own set of challenges, it merely scratched the surface of the complexities we encountered. Subsequently, I led the development of a demo API environment mirroring application functionalities, while remaining entirely detached from client data repositories. Collaborating with assigned interns, we expedited the development process, leveraging Hazelcast cache as a surrogate database for non-retrieval operations, thereby facilitating comprehensive product modeling for both existing and prospective clients.`
    },
    {
      context: "While working as a Lead Full Stack Software Engineer at BNY Mellon...",
      skillList: ["java","spring-boot,java","spring-integration,java","yavi,java","mongo","hazelcast,java"],
      title: "Treasury Services Online Banking: Challenges (cont.)",
      blob: "Among the array of challenges faced, the creation of a file import service emerged as notably difficult. This service required efficient processing of large data files containing complex payment information in diverse formats inherited from the legacy system. To tackle this challenge, I carefully designed a solution using the Spring Integration framework alongside the YAVI validation framework. This strategy entailed detailed, asynchronous validation of each line in the file, covering both formatting and business logic, before aggregating the outcomes. Importantly, this service plays a crucial role in facilitating the transition of clients from the old platform to TS Online Banking."
    },
    {
      context: "While working as a Lead Full Stack Software Engineer at BNY Mellon...",
      skillList: ["java","sql","spring-boot,java","spring-integration,java","mongo","hazelcast,java"],
      title: "Treasury Services Online Banking: Challenges (cont.)",
      blob: "If not for imports, implementing migration would have been easily my most troublesome task. Initially, our process relied on the periodic provision of client data extracts by the legacy system management and development team, and subsequent manual import of said files into our Mongo database. With that in mind, we leveraged the pre-existing imports service for our initial implementation. However, the focus subsequently shifted to autonomously obtaining these extracts, requiring direct connections to the legacy MSSQL and DB2 databases. This transition at first involved the creation and manipulation of intermediary files before the actual ingestion to our Mongo instance, an evidently inefficient approach. Therefore, I undertook a redevelopment initiative to bypass file generation entirely. Despite encountering obstacles, we successfully accomplished the task, once again easing client transition from the legacy platform to TS Online Banking."
    },
    {
      context: "While working as a Lead Full Stack Software Engineer at BNY Mellon...",
      skillList: ["css","js","ts","java","angularjs,ts","spring-boot,java","mongo","hazelcast,java"],
      title: "Treasury Services Online Banking: Challenges (cont.)",
      blob: "Although not a direct personal challenge, our team faced the task of entirely revamping our application website to align with specifications devised by a newly established, specialized design team. To facilitate this transition, I made key contributions to our new search page, ensuring seamless functionality from end to end, encompassing both UI and API development. Subsequently, several features I pioneered were integrated as components within the framework of the new design system."
    },
    {
      context: "While working as a Lead Full Stack Software Engineer at BNY Mellon...",
      skillList: ["css","js","ts","angularjs,ts"],
      title: "AI Hub",
      blob: "Presently, alongside my ongoing contributions to Treasury Services, I am providing assistance to the AI Hub team in the development of their micro-frontend site using Angular and the single-spa library."
    },
    {
      context: "Personal Project",
      skillList: ["golang"],
      title: "FIX API",
      blob: "Developed a comprehensive API wrapper leveraging the QuickFixGo library, employed to interface with the IBM FIX Gateway, facilitating seamless execution of requests."
    },
  ];

  const [filters, setFilters] = skillFilters;

  const [page, setPage] = createSignal(0);

  const getPrevPage = () => {
    if(page()>0) {
      setPage(page()-1);
    }
  };


  const getNextPage = () => {
    if(page()<pages.length-1) {
      setPage(page()+1);
    }
  };


function Xp(props: any) {
  return (
    <div class="se-w-full se-h-full se-flex se-flex-col md:se-flex-row"
     onMouseOver={()=>{
       if (page() !== 0 && filters().length === 0) {
         setFilters(pages[page()].skillList);
       }
     }}
     onMouseOut={()=>{
       setFilters([]);
     }}>
      <div class="se-flex se-flex-col se-justify-center se-items-center se-h-2/6 se-min-h-fit se-w-full md:se-h-full md:se-w-4/12 lg:se-w-3/12 se-overflow-y-auto">
        <div class="se-w-11/12 se-min-h-fit">
          <Show when={page() === 0}>
            <div class="se-w-full se-h-fit se-flex se-flex-row md:se-flex-col se-justify-center se-items-center md:se-items-end top se-space-x-10 se-min-h-fit">
              <a href="https://www.linkedin.com/in/nathanduarte" class="se-cursor-pointer">
                <div class="se-flex se-flex-row se-justify-center se-items-center">
                  <p class="se-hidden md:se-flex se-text-regal-blue-100 se-text-xs lg:se-text-sm se-font-light">LinkedIn</p>
                    <svg class="se-h-7 se-w-7 lg:se-h-8 lg:se-w-8 se-stroke-regal-blue-100 se-m-2" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 17V13.5V10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 7.01L7.01 6.99889" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  <p class="se-flex md:se-hidden se-text-regal-blue-100 se-text-xs se-font-light">LinkedIn</p>
                </div>
              </a>
              <div class="se-flex se-flex-row se-justify-center se-items-center se-cursor-pointer"
                   onClick={() => fetch('https://nduartech.tiiny.site/dist/resume.pdf').then(resp => resp.blob()).then(blob => {
                     const url = URL.createObjectURL(blob);
                     const a = document.createElement("a");
                     a.style.display = "none";
                     a.href = url;
                     a.download = "NathanDuarteResume.pdf";
                     document.body.appendChild(a);
                     a.click();
                     URL.revokeObjectURL(url);
                   }).catch(() => alert("Download failed"))}>
                <p class="se-text-regal-blue-100 se-text-xs lg:se-text-sm se-font-light">Resume PDF</p>
                  <svg class="se-h-6 se-w-6 lg:se-h-7 lg:se-w-7 se-stroke-regal-blue-100 se-m-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 21.4V2.6C4 2.26863 4.26863 2 4.6 2H16.2515C16.4106 2 16.5632 2.06321 16.6757 2.17574L19.8243 5.32426C19.9368 5.43679 20 5.5894 20 5.74853V21.4C20 21.7314 19.7314 22 19.4 22H4.6C4.26863 22 4 21.7314 4 21.4Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 10L16 10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 18L16 18" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 14L12 14" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 2V5.4C16 5.73137 16.2686 6 16.6 6H20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </div>
            </div>
          </Show>
          <Show when={page() !== 0}>
            <div
              class="se-w-full se-h-fit se-flex se-flex-col se-justify-center se-items-center se-top se-space-x-2 se-min-h-fit">
              <p class="se-text-regal-blue-100 se-text-sm se-font-light se-text-center">Context: {pages[page()].context}</p>
              <div class="se-flex se-flex-row se-flex-wrap se-w-full se-h-full se-justify-center se-items-center se-mt-1 md:se-mt-2 lg:se-hidden lg:se-invisible">
                <p class="se-text-regal-blue-100 se-text-sm se-font-light se-text-center se-inline-flex">Tags: </p>
                <For each={pages[page()].skillList}>
                  {(item) => (
                    <SkillButtonThin label={skillsDict()[item].label} skill={item} category={skillsDict()[item].category}
                                 link={skillsDict()[item].link}></SkillButtonThin>
                  )}
                </For>
              </div>
            </div>
          </Show>
        </div>
      </div>
      <div
        class="se-flex se-flex-col se-justify-center se-items-center se-h-4/6 se-w-full md:se-h-full md:se-w-8/12 lg:se-w-9/12 se-bg-transparent se-overflow-y-hidden">
        <Show when={page() === 0}>
          <div class="se-w-9/12 se-h-full se-flex se-flex-col se-items-center se-justify-start lg:se-justify-center se-space-y-3 se-overflow-y-auto no-scrollbar">
            <p class="se-text-white se-text-xs md:se-text-sm lg:se-text-xl se-text-center se-pt-5 se-pb-5">As a Full Stack Software Engineer, I've had
              the opportunity to tackle some unique problems. Here I examine the methodologies and skills I've employed over the course of my
              career
              and personal projects <i class="se-font-serif">(Interactive Resume)</i>.</p>
            <p class="se-text-regal-blue-100 se-text-xs se-text-center">To move forward, hit next. To go back, hit back. Also
              included on this page
              are shortcuts to my LinkedIn profile as well as my resume.</p>
          </div>
        </Show>
        <Show when={page() !== 0}>
          <div
            class="se-w-9/12 se-h-full se-flex se-flex-col se-items-center se-justify-start lg:se-justify-center se-space-y-0 se-overflow-y-auto no-scrollbar">
            <p class="se-text-white se-text-xs md:se-text-lg lg:se-text-xl se-text-center se-pt-5 se-pb-5">{pages[page()].title}</p>
            <p class="se-text-regal-blue-100 se-text-xs md:se-text-sm se-text-center se-leading-normal md:se-leading-loose" innerHTML={pages[page()].blob}></p>
          </div>
        </Show>
        <div class="se-w-1/2 se-h-fit se-flex se-flex-row se-justify-center se-items-center se-space-x-10">
          <div class="se-flex se-flex-row se-justify-center se-items-center se-cursor-pointer"
               onClick={() => getPrevPage()}>
            <svg class={"se-h-8 se-w-8 " + (page() > 0 ? "se-stroke-regal-blue-100" : "se-stroke-gray-700") + " se-m-2"} stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.75 12H6.75M6.75 12L9.5 14.75M6.75 12L9.5 9.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 15V9C2 6.79086 3.79086 5 6 5H18C20.2091 5 22 6.79086 22 9V15C22 17.2091 20.2091 19 18 19H6C3.79086 19 2 17.2091 2 15Z" stroke-width="1.5"></path></svg>
            <p class={(page() > 0 ? "se-text-regal-blue-100" : "se-text-gray-700") + " se-text-xs se-font-light"}>Back</p>
          </div>
          <div class="se-flex se-flex-row se-justify-center se-items-center se-cursor-pointer"
               onClick={() => getNextPage()}>
            <p class={(page() < pages.length - 1 ? "se-text-regal-blue-100" : "se-text-gray-700") + " se-text-xs se-font-light"}>Next</p>
            <svg class={"se-h-8 se-w-8 "+(page()<pages.length-1?"se-stroke-regal-blue-100":"se-stroke-gray-700")+" se-m-2"} stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M6.75 12H16.75M16.75 12L14 14.75M16.75 12L14 9.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 15V9C2 6.79086 3.79086 5 6 5H18C20.2091 5 22 6.79086 22 9V15C22 17.2091 20.2091 19 18 19H6C3.79086 19 2 17.2091 2 15Z" stroke-width="1.5"></path></svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Xp;
