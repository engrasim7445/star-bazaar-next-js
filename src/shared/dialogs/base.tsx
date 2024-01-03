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










export function DialogRevealing({ children }: any) {
  return <DialogBase  className='revealingDialog'>{children}</DialogBase>;
}
export function DialogSketch({ children }: any) {
  return (
    <DialogBase className='sketchDialog'>
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
          width="226"
          height="162"
          rx="3"
          ry="3"
        ></rect>
      </svg>
    </DialogBase>
  );
}
  // $('#modal-customized-container').click(function(){
  //   $(this).addClass('out');
  //   $('body').removeClass('modal-customized-active');
  // });
 // $('.button').click(function(){
  //   var buttonId = $(this).attr('id');
  //   $('#modal-customized-container').removeAttr('class').addClass(buttonId);
  //   $('body').addClass('modal-customized-active');
  // })

// useEffect(() => {
//   const button = document.querySelector('.button') as any;
//   const modalContainer = document.getElementById('modal-customized-container') as any;

//   const handleButtonClick = () => {
//     const buttonId = button.id;
//     modalContainer.removeAttribute('class');
//     modalContainer.classList.add(buttonId);
//     document.body.classList.add('modal-customized-active');
//   };

//   const handleModalContainerClick = (event: any) => {
//     event.currentTarget.classList.add('out');
//     document.body.classList.remove('modal-customized-active');
//   };

//   button.addEventListener('click', handleButtonClick);
//   modalContainer.addEventListener('click', handleModalContainerClick);

//   return () => {
//     // Cleanup: Remove event listeners when the component is unmounted
//     button.removeEventListener('click', handleButtonClick);
//     modalContainer.removeEventListener('click', handleModalContainerClick);
//   };
// }, []);
