import { NextRouter, useRouter as defaultUseRouter } from 'next/router'

type GotoFunction = (url: string) => void
export const useRouter: () => NextRouter & { goto: GotoFunction } = () => {
  const router = defaultUseRouter()
  const goto: GotoFunction = (url) => {
    if (typeof window === undefined) {
      return
    }
    window.location.href = url
  }
  router.push
  return { ...router, ...{ goto } }
}
