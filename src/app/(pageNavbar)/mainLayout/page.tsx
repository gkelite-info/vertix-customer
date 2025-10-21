import { Suspense } from 'react'
import MainLayoutContent from './MainLayoutContent'

export const dynamic = "force-dynamic"

export default function MainLayoutPage() {
  return (
    <Suspense fallback={<div>Loading layout...</div>}>
      <MainLayoutContent />
    </Suspense>
  )
}