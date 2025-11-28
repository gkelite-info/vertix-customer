import { Suspense } from 'react'
import TaxfilingContent from './filingyearContent'

export const dynamic = "force-dynamic"

export default function TaxFiling() {
  return (
    <Suspense fallback={
      <div className="p-4 text-[#1D2B48] bg-white flex flex-col items-center justify-center h-[100vh]">
        Loading layout...
      </div>}>
      <TaxfilingContent />
    </Suspense>
  )
}