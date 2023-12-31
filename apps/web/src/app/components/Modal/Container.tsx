'use client'

import {
  HTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
  memo,
  useCallback,
  useState,
} from 'react'
import { Content } from './Content'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  openModalButton: ReactElement
  children?: ReactNode
}

export const Container = memo(function Container({
  openModalButton,
  children,
}: ContainerProps) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false)

  const memoizedSetIsModalOpen = useCallback((value: boolean) => {
    setIsPopUpOpen(value)
  }, [])

  return (
    <>
      {cloneElement(openModalButton, {
        onClick: () => memoizedSetIsModalOpen(true),
      })}

      <Content
        open={isPopUpOpen}
        setOpen={memoizedSetIsModalOpen}
      >
        {children}
      </Content>
    </>
  )
})
