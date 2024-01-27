'use client'
import { formzUpdate } from "@/core/redux/slice/formz";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";

export function BaseCntrl({ lbl, children }: any) {
  return (
    <div className="w-100">
      <label>{lbl}</label>
      <div className="w-100 flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}

export function BaseFormCntrlHook({name}: any) {
  const dispatch = useDispatch();
  const formz = useSelector((state: any) => state?.formz.data);

  const debouncedFunction = debounce((value: any) => {
    dispatch(formzUpdate({ [name]: value }));
  }, 900);
  const updateForm = (event: any) =>  {
    debouncedFunction(event.target.value)
  }
  return {formz, updateForm}
}
