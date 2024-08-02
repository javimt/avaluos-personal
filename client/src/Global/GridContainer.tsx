


export default function GridContainer({children}: {children: React.ReactNode}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 h-full">
        {children}
    </div>
  )
}
