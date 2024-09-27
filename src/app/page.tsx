"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Homepage = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/admin')
  }, [])

  return null
}

export default Homepage