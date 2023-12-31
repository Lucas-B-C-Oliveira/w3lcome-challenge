'use client'
import { Fragment, ReactNode, memo } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/solid'

interface Props {
  children: ReactNode
  open: boolean
  setOpen: (value: boolean) => void
}


export const Content = memo(function Content({
  open,
  setOpen,
  children,
}: Props) {


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={(value: any) => {
          if (typeof setOpen !== 'undefined') {
            setOpen(value)
          }
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 z-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <div className={` fixed inset-0 z-10 overflow-y-auto `}>
          <div
            className={`flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0`}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div

                className={`pointer-events-none p-6 flex absolute flex-row items-center justify-center`}
              >
                <Dialog.Panel
                  className={`
                    pointer-events-auto transform  flex gap-1 flex-col rounded-lg bg-white p-6 text-left shadow-xl transition-all w-fit h-fit
                `}
                >
                  <button
                    className="absolute top-1 right-1"
                    onClick={() => {
                      if (typeof setOpen !== 'undefined') {
                        setOpen(false)
                      }
                    }}
                  >
                    <XMarkIcon className="w-5 h-5 text-pink-400 hover:text-pink-300" />
                  </button>

                  {children}
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
})
