<script>
'use strict'
let mobileCheck = (function () {
  let check = false
  ;(function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a,
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4),
      )
    )
      check = true
  })(navigator.userAgent || navigator.vendor || window.opera)
  return check
})()
const navigateTo = (url, transition) => {
  setTimeout(function () {
    let link = document.createElement('a')
    link.target = '_blank'
    link.onclick = () => {
      dispatchEvent(new CustomEvent('navigate', { detail: url }))
    }
    link.classList.add('hidden')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, 1000)
  let hello = document.getElementById('hello')
  if (transition === 'hinge') {
    hello && hello.classList.add('animated', 'bounceOutDown')
    let buttons = document.getElementsByClassName('navBtn')
    if (buttons && buttons.length > 0) {
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.add('animated', 'hinge')
      }
    }
    let buttonsAlt = document.getElementsByClassName('altNavBtn')
    if (buttonsAlt && buttonsAlt.length > 0) {
      for (let i = 0; i < buttonsAlt.length; i++) {
        buttonsAlt[i].classList.add('alt-animated', 'altHinge')
      }
    }
  } else if (transition === 'zoomOut') {
    hello && hello.classList.add('animated', 'zoomOut')
    let buttons = document.getElementsByClassName('navBtn')
    if (buttons && buttons.length > 0) {
      for (let i = 0; i < buttons.length; i++) {
        mobileCheck
          ? buttons[i].classList.add('animated', 'zoomOut')
          : buttons[i].classList.add(
              'animated',
              i % 2 === 0 ? 'zoomOutLeft' : 'zoomOutRight',
            )
      }
    }
    let buttonsAlt = document.getElementsByClassName('altNavBtn')
    if (buttonsAlt && buttonsAlt.length > 0) {
      for (let i = 0; i < buttonsAlt.length; i++) {
        mobileCheck
          ? buttonsAlt[i].classList.add('animated', 'zoomOut')
          : buttonsAlt[i].classList.add(
              'animated',
              i % 2 === 0 ? 'zoomOutLeft' : 'zoomOutRight',
            )
      }
    }
  } else if (transition === 'flipOut') {
    hello && hello.classList.add('animated', 'flipOutX')
    let buttons = document.getElementsByClassName('navBtn')
    if (buttons && buttons.length > 0) {
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.add('animated', 'flipOutX')
      }
    }
    let buttonsAlt = document.getElementsByClassName('altNavBtn')
    if (buttonsAlt && buttonsAlt.length > 0) {
      for (let i = 0; i < buttonsAlt.length; i++) {
        buttonsAlt[i].classList.add('animated', 'flipOutX')
      }
    }
  }
}
</script>

<div id="bgLanding"
     class="h-screen w-screen dark:bg-[url('/landing.svg')] bg-[url('/landing-light.svg')] bg-cover bg-bottom min-h-screen min-w-screen overflow-y-hidden">
    <div class="w-full min-h-fit md:max-h-screen flex flex-col justify-center items-center">
        <div
                class="flex flex-col justify-start md:mt-20 sm:portrait:h-screen sm:landscape:h-fit md:landscape:h-screen w-full items-center">
            <div class="w-full px-5 flex flex-row justify-center items-center md:pt-12 lg:pt-0">
                <div
                        class="flex flex-col md:flex-col w-full justify-center items-center space-x-5 my-5 md:space-x-0 md:space-y-2 text-center mt-20 sm:mt-15 md:mt-0 z-20"
                        id="hello">
                    <div class="image-container w-2/12 min-w-28 max-w-36 h-2/12 flex justify-center items-center">
                            <slot name="me"></slot>
<!--                        <img class="rounded-full object-fill mb-10 h-28 w-28 md:h-36 md:w-36" id="me"-->
<!--                             src="/me.png" alt="Nathan"/>-->
                    </div>
                    <p class="text-3xl md:text-3xl lg:text-4xl dark:text-regal-blue-100 text-regal-blue-50 my-0 text-center">Hi,
                        I'm
                        Nathan.</p>
                </div>
            </div>
            <div
                    class="w-9/12 md:3/5 lg:1/2 xl:w-11/12 flex flex-row justify-center items-center py-5 bg-[rgba(_35,_188,_255,_0.1)] backdrop-filter backdrop-blur rounded-[10px] dark:bg-[rgba(_1,_45,_80,_0.8)] mb-10 z-10 lg:mt-5">
                <div class="space-y-4 w-11/12 flex flex-col xl:flex-row xl:space-y-0 xl:space-x-5 justify-center items-center">
                    <button on:click={()=>navigateTo("/software-engineer","hinge")} type="button"
                            class="navBtn softwareEng bg-regal-blue-200
                hover:bg-yellow-600
                dark:bg-regal-blue-700
                dark:hover:bg-purple-900
                w-full py-2 px-2 text-xs lg:text-sm font-medium text-regal-blue-700 hover:text-regal-blue-50 dark:text-regal-blue-50 border-0 rounded-[45px] shadow-[0px_8px_15px_rgba(0,0,0,0.2)] transition-all cursor-pointer outline-0 hover:shadow-[0px_4px_7px_rgba(202,_138,_4,_0.4)] dark:hover:shadow-[0px_4px_7px_rgba(88,28,135,0.4)] hover:-translate-y-[-4px]">
                        Full Stack Software Engineer
                    </button>
                    <button on:click={()=>navigateTo("/blog","flipOut")} class="altNavBtn bg-regal-blue-200
                hover:bg-amber-600
                dark:bg-regal-blue-700
                dark:hover:bg-violet-900
                w-full py-2 px-2 text-xs lg:text-sm font-medium text-regal-blue-700 hover:text-regal-blue-50 dark:text-regal-blue-50 border-0 rounded-[45px] shadow-[0px_8px_15px_rgba(0,0,0,0.2)] transition-all cursor-pointer outline-0 hover:shadow-[0px_4px_7px_rgba(234,_88,_12,_0.4)] dark:hover:shadow-[0px_4px_7px_rgba(112,_26,_117,_0.4)] hover:-translate-y-[-4px]">
                        Blog
                    </button>
                    <button on:click={()=>navigateTo("/interests","zoomOut")}
                            class="navBtn bg-regal-blue-200
                hover:bg-orange-600
                dark:bg-regal-blue-700
                dark:hover:bg-indigo-900
                w-full py-2 px-2 text-xs lg:text-sm font-medium text-regal-blue-700 hover:text-regal-blue-50 dark:text-regal-blue-50 border-0 rounded-[45px] shadow-[0px_8px_15px_rgba(0,0,0,0.2)] transition-all cursor-pointer outline-0 hover:shadow-[0px_4px_7px_rgba(217,_119,_6,_0.4)] dark:hover:shadow-[0px_4px_7px_rgba(49,_46,_129,_0.4)] hover:-translate-y-[-4px]">
                        Hobbies and Interests
                    </button>
                    <button on:click={()=>{
                        navigator.clipboard.writeText("npx nathan");
                        alert("Command copied to clipboard. Ensure you have node/npm installed, then run the copied command. I look forward to hearing from you.");
                    }}
                            class="altNavBtn bg-regal-blue-200
                hover:bg-[#E34A27]
                dark:bg-regal-blue-700
                dark:hover:bg-fuchsia-900
                w-full py-2 px-2 text-xs lg:text-sm font-medium text-regal-blue-700 hover:text-regal-blue-50 dark:text-regal-blue-50 border-0 rounded-[45px] shadow-[0px_8px_15px_rgba(0,0,0,0.2)] transition-all cursor-pointer outline-0 hover:shadow-[0px_4px_7px_rgba(234,_88,_12,_0.4)] dark:hover:shadow-[0px_4px_7px_rgba(112,_26,_117,_0.4)] hover:-translate-y-[-4px]">
                        Contact Me
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
