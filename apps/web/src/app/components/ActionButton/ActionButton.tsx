'use client'
import { ButtonHTMLAttributes, ReactNode, memo } from 'react'
import { twMerge } from 'tailwind-merge'

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  errors?: boolean
  classNameToMerge?: string
  actionFn?: () => void
}

export const ActionButton = memo(function ActionButton({
  children,
  errors,
  classNameToMerge,
  actionFn,
  ...rest
}: ActionButtonProps) {
  function onClickHandle() {
    if (actionFn) {
      actionFn()
    }

  }

  return (
    <button
      className={twMerge(
        `flex flex-row gap-1 h-fit w-fit items-center rounded-[0.280rem] bg-slate-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`,
        classNameToMerge,
      )}
      onClick={onClickHandle}
      {...rest}
    >
      {children && children}

    </button>
  )
})
