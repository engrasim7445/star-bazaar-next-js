
'use client';

import { MatDialogSuper } from './base-mat-super-dialog';

export function MatDialog({children, dialogName, className}: any) {
  return (
    <MatDialogSuper dialogName={dialogName} className={className}>
      {children}
    </MatDialogSuper>
  );
}