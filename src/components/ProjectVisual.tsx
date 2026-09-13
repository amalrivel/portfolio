export function ProjectVisual({ number, screenshot }: { number: string; screenshot?: { src: string; alt: string } }) {
  if (screenshot) {
    return <div className="relative mt-8 min-h-56 overflow-hidden border border-slate-300 bg-[#e9e7e0] sm:min-h-72"><img className="absolute inset-0 size-full object-cover" src={screenshot.src} alt={screenshot.alt} /></div>
  }

  return (
    <div className="relative mt-8 flex min-h-56 items-center justify-center overflow-hidden border border-slate-300 bg-[#e9e7e0] p-5 sm:min-h-72">
      <div className="w-full max-w-xl border border-slate-400 bg-[#f8f7f2] shadow-[10px_10px_0_#c8c5bb]">
        <div className="flex items-center justify-between border-b border-slate-300 px-4 py-3">
          <div className="flex gap-1.5">
            <i className="size-2 rounded-full bg-slate-400" />
            <i className="size-2 rounded-full bg-slate-300" />
            <i className="size-2 rounded-full bg-slate-200" />
          </div>
          <span className="font-mono text-[10px] text-slate-600">
            case-study/{number}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-4 p-5">
          <div className="space-y-2">
            <div className="h-2 w-16 bg-slate-300" />
            <div className="h-2 w-20 bg-slate-200" />
            <div className="h-2 w-12 bg-slate-200" />
          </div>
          <div className="col-span-2 space-y-3">
            <div className="h-4 w-3/4 bg-slate-800" />
            <div className="h-20 border border-slate-300 bg-white" />
            <div className="flex gap-2">
              <div className="h-2 w-1/3 bg-slate-300" />
              <div className="h-2 w-1/4 bg-slate-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
