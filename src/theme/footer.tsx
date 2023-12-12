export default function Footer(){
  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-1">
        <div className="col-start-2 col-span-4 bg-slate-500 h-8  border-spacing-5">01</div>
        <div className="col-start-1 col-end-3 bg-slate-500 h-8  border-spacing-5">02</div>
        <div className="col-end-7 col-span-2 bg-slate-500 h-8  border-spacing-5">03</div>
        <div className="col-start-1 col-end-7 bg-slate-500 h-8  border-spacing-5">04</div>
      </div>
    </div>
  )
}