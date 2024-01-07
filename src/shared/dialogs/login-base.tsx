import { MatDialog } from "./base-mat-dialog";

export function DialogLoginBase({children, dialogName}: any) {
  
  return (
    <MatDialog dialogName={dialogName}  >
      Hello from Dialog Login Base
      {children}
    </MatDialog>
  );
}