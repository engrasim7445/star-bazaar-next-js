'use client';

export function BtnAlert({data}: any) {
  const showAlert = (fruitName = 'My Message') => {
    alert("Fruit Name : " + fruitName)
  }
  return (
    <button type="button" 
      className="btn btn-info btn-sm  m-3"
      onClick={() => {showAlert(data)}}>
      Click
    </button>
  )
}