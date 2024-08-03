import {
  $,
  component$,
  useOnDocument,
  useSignal,
  useStyles$,
} from '@builder.io/qwik'
import { NavButton } from './navButton'
import { isServer } from '@builder.io/qwik/build'
import styles from './nav.css?inline'

interface NavProps {
  entries: {
    icon: string
    label: string
    path: string
  }[]
}

export const Nav = component$<NavProps>((props: NavProps) => {
  const navOpen = useSignal(false)
  const toggleNav = $(() => {
    setTimeout(() => {
      navOpen.value = !navOpen.value
      setTimeout(() => {
        document
          .querySelectorAll('svg.nav')
          .forEach((svg) => svg.classList.add('active'))
      }, 300)
      setTimeout(() => {
        document
          .querySelectorAll('p.navIconLabel')
          .forEach((svg) => svg.classList.add('active'))
      }, 300)
    }, 300)
  })
  useStyles$(styles)
  useOnDocument(
    'pageLoad',
    $(() => {
      if (isServer) return
      setTimeout(() => {
        document
          .querySelectorAll('svg.nav')
          .forEach((svg) => svg.classList.add('active'))
      }, 300)
      setTimeout(() => {
        document
          .querySelectorAll('p.navIconLabel')
          .forEach((svg) => svg.classList.add('active'))
      }, 300)
    }),
  )
  return (
    <div class="flex flex-row md:flex-col items-start justify-start w-1/4 h-fit absolute p-1.5 z-20">
      <div class="flex flex-col items-start justify-start w-fit h-fit navDiv mt-0.5 ml-0.5 lg:mt-2 lg:ml-2">
        <ul class="flex flex-row lg:flex-col items-start justify-center w-fit h-fit list-none portrait:space-x-3 landscape:space-x-0 portrait:space-y-0 landscape:space-y-3">
          {navOpen.value ? (
            <li>
              <NavButton
                icon='<svg class="nav w-7 h-7" viewBox="0 0 24 24" stroke-width="0.9" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff" width="24" height="24"><path d="M5 7H6" stroke="#ffffff" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round" class="svg-elem-11"></path><path d="M2 17.7143V6.28571C2 5.02335 2.99492 4 4.22222 4H19.7778C21.0051 4 22 5.02335 22 6.28571V17.7143C22 18.9767 21.0051 20 19.7778 20H4.22222C2.99492 20 2 18.9767 2 17.7143Z" stroke="#ffffff" stroke-width="0.9" class="svg-elem-21"></path><path d="M10 14L12 12M12 12L14 10M12 12L10 10M12 12L14 14" stroke="#ffffff" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round" class="svg-elem-31"></path></svg>'
                label="Close"
                onClick={$(() => toggleNav())}
              ></NavButton>
            </li>
          ) : (
            <li>
              <NavButton
                icon="<svg class='nav w-6 h-6' stroke-width='0.9' fill='none' xmlns='http://www.w3.org/2000/svg' color='#ddf2ff' viewBox='2.55 4.55 18.9 14.9'><path d='M3 5H21' stroke='#ddf2ff' stroke-width='0.9' stroke-linecap='round' stroke-linejoin='round' class='svg-elem-1'></path><path d='M3 12H21' stroke='#ddf2ff' stroke-width='0.9' stroke-linecap='round' stroke-linejoin='round' class='svg-elem-2'></path><path d='M3 19H21' stroke='#ddf2ff' stroke-width='0.9' stroke-linecap='round' stroke-linejoin='round' class='svg-elem-3'></path></svg>"
                label="Menu"
                onClick={$(() => toggleNav())}
              ></NavButton>
            </li>
          )}
          {navOpen.value &&
            props.entries &&
            props.entries.map((prop, index) => (
              <li key={index}>
                <NavButton
                  icon={prop.icon}
                  label={prop.label}
                  path={prop.path}
                  onClick={$(() => {
                    setTimeout(function () {
                      const link = document.createElement('a')
                      link.onclick = () => {
                        dispatchEvent(
                          new CustomEvent('navigate', { detail: prop.path }),
                        )
                      }
                      link.classList.add('hidden')
                      document.body.appendChild(link)
                      link.click()
                      document.body.removeChild(link)
                    }, 10)
                    const navClicked = document.querySelector('.transition')
                    navClicked &&
                      navClicked.classList.add('animated', 'bounceOutUp')
                  })}
                ></NavButton>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
})
