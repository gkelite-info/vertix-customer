import { Suspense } from 'react'
import TaxfilingContent from './filingyearContent'

export const dynamic = "force-dynamic"

export default function TaxFiling() {
  return (
    <Suspense fallback={<div>Loading layout...</div>}>
      <TaxfilingContent />
    </Suspense>
  )
}