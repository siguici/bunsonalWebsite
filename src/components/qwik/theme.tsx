import { $, component$, useOnDocument } from '@builder.io/qwik'
import { isServer } from '@builder.io/qwik/build'
export const Theme = component$(() => {
  useOnDocument(
    'pageLoad',
    $(() => {
      if (isServer) return
      const theme = document.documentElement.className
      const sun = document.getElementById('dayNightSun')
      const moon = document.getElementById('dayNightMoon')
      if (sun && moon) {
        if (theme === 'dark') {
          document.documentElement.className = 'dark'
          localStorage.setItem('theme', 'dark')
          if (sun.classList.contains('hidden')) sun.classList.remove('hidden')
          sun.classList.add('active')
          if (!moon.classList.contains('hidden'))
            moon.classList.contains('active')
              ? moon.classList.replace('active', 'hidden')
              : moon.classList.add('hidden')
        } else {
          document.documentElement.className = 'light'
          localStorage.setItem('theme', 'light')
          if (moon.classList.contains('hidden')) moon.classList.remove('hidden')
          moon.classList.add('active')
          if (!sun.classList.contains('hidden'))
            sun.classList.contains('active')
              ? sun.classList.replace('active', 'hidden')
              : sun.classList.add('hidden')
        }
      }
    }),
  )
  return (
    <div class="absolute top-0 right-0 z-10">
      <div
        class="dayNight cursor-pointer mt-1 mr-1 lg:mt-2 lg:mr-2 w-fit h-fit z-10"
        id="dayNightButton"
        onClick$={() => {
          const theme = document.documentElement.className
          const sun = document.getElementById('dayNightSun')
          const moon = document.getElementById('dayNightMoon')
          if (sun && moon) {
            if (theme === 'light') {
              document.documentElement.className = 'dark'
              localStorage.setItem('theme', 'dark')
              sun.classList.remove('hidden')
              setTimeout(() => sun.classList.add('active'), 200)
              moon.classList.replace('active', 'hidden')
            } else {
              document.documentElement.className = 'light'
              localStorage.setItem('theme', 'light')
              moon.classList.remove('hidden')
              setTimeout(() => moon.classList.add('active'), 200)
              sun.classList.replace('active', 'hidden')
            }
          }
        }}
      >
        <svg
          class="h-8 w-8"
          id="dayNightSun"
          stroke-width="0.9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#ddf2ff"
          viewBox="0.4 0.4 23.2 23.2"
        >
          <path
            class="svg-elem-1"
            d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
            stroke="#ddf2ff"
            stroke-width="0.9"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            class="svg-elem-2"
            d="M22 12L23 12"
            stroke="#ddf2ff"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            class="svg-elem-3"
            d="M12 2V1"
            stroke="#ddf2ff"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            class="svg-elem-4"
            d="M12 23V22"
            stroke="#ddf2ff"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            class="svg-elem-5"
            d="M20 20L19 19"
            stroke="#ddf2ff"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            class="svg-elem-6"
            d="M20 4L19 5"
            stroke="#ddf2ff"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            class="svg-elem-7"
            d="M4 20L5 19"
            stroke="#ddf2ff"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            class="svg-elem-8"
            d="M4 4L5 5"
            stroke="#ddf2ff"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            class="svg-elem-9"
            d="M1 12L2 12"
            stroke="#ddf2ff"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <svg
          class="h-7 w-7"
          id="dayNightMoon"
          stroke-width="0.9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#ddf2ff"
          viewBox="2.55 2.55 18.9 18.9"
        >
          <path
            class="svg-elem-10"
            d="M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z"
            stroke="#ddf2ff"
            stroke-width="0.9"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  )
})
