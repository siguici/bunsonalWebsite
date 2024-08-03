import { $, component$ } from '@builder.io/qwik'

export interface NavButtonProps {
  path?: string
  onClick?: any
  icon: string
  label: string
}

export const NavButton = component$<NavButtonProps>((props: NavButtonProps) => {
  return (
    <div
      class="navButton cursor-pointer flex flex-row space-x-2 items-center justify-center text-xs text-regal-blue-50 dark:text-regal-blue-50 text-center"
      data-path={props.path}
      onClick$={$(() => props.onClick())}
      dangerouslySetInnerHTML={
        props.icon +
        '<p class="navIconLabel hidden md:flex font-semibold">' +
        props.label +
        '</p>'
      }
    ></div>
  )
})
