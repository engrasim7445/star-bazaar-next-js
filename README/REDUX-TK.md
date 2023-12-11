### Configuring Redux
- Store
```javascript
const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    
  }
})
```
- Slice
```javascript
const { createSlice, nanoid } =  require('@reduxjs/toolkit');

const initialState = {
  users: []
}

const slice = createSlice({
  initialState,
  reducers: {
    addUser: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.name
      }
      state.users.push(data)
    }
  }
});
```
- Providers
```javascript
"use client"
import { store } from './store'
const { Provider } = require("react-redux");

// Create a Layer around React App for Redux
export function Providers({ children }) {
  return <Provider store={store}>
    {children}
  </Provider>
}
```

- Layout
```javascript
import './globals.css'
import { Providers } from './web/z/redux-rtk/providers';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="/js/common.js" async  />
      </head>
      <body>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <Providers>
                {children}
              </Providers>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}

```
- Redux Dispatch
```javascript
'use client';
import { useState } from "react";
import { useDispatch } from 'react-redux'
import UsersDisplay from "./users-display";
import { addUser } from "../../z/redux-rtk/slice";

export default function Page() {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const setForm = (e) => {
    if (e.target) {
      setUser({ ...user, [e.target.name]: e.target.value })
    }
  }
  const userDispatch = () => {
    dispatch(addUser(user))
  }
  return (<div className="col-md-4">
    <h3>User Add</h3>
    <div className="mb-3">
      <label className="form-label">Name</label>
      <input name="name" type="email" className="form-control"
        onChange={setForm}
      />
    </div>
    <select onChange={setForm} className="form-select"
      name="gender">
      <option defaultValue=''>Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="others">Others...</option>
    </select>
    <div className="mb-3">
      <label className="form-label">Description</label>
      <textarea className="form-control" rows="3"
        onChange={setForm}
        name="desc"></textarea>
    </div>
    <button type="button" className="btn btn-primary mb-4" onClick={userDispatch} >Submit</button>
    <UsersDisplay />
  </div>)
}
```