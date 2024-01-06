'use client';

export function DialogBase({ children, className, onClick }: any) {
  return (
    <div
      id="modal-customized-container"
      className={className}
      onClick={onClick}
    >
      <div className="modal-customized-background">
        <div className="modal-customized">{children}</div>
      </div>
    </div>
  );
}
export function DialogUnfolding({ children, className, onClick }: any) {
  return <DialogBase className={className} onClick={() => onClick('unfoldingDialog out')}>
    <h1>Dialog Unfolding</h1>
    {children}
    </DialogBase>;
}
{/* <DialogUnfolding className={classNamez} onClick={setClassName} >some my content</DialogUnfolding> */}

export function DialogRevealing({ children, className, onClick }: any) {
  return <DialogBase className={className} onClick={() => onClick('revealingDialog out')}>
    <h1>Dialog Revealing</h1>
    {children}
    </DialogBase>;
}
{/* <DialogRevealing className={classNamez} onClick={setClassName} >some my content</DialogRevealing> */}

export function DialogSketch({ children, className, onClick }: any) {
  return <DialogBase className={className} onClick={() => onClick('sketchDialog out')}>
    <h1>Dialog Sketch</h1>
    {children}
      <svg
        className="modal-customized-svg"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        <rect
          x="0"
          y="0"
          fill="none"
          width="100%"
          height="100%"
          rx="15"
          ry="15"
        ></rect>
      </svg>
    </DialogBase>;
}


{/* <DialogSketch className={classNamez} onClick={setClassName} >some my content</DialogSketch> */}