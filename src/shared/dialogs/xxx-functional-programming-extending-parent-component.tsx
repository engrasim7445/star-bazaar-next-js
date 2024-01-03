
// // Base component
// function BaseComponent({ message }: any) {
//   return <div>{message}</div>;
// }

// // Function to create a new component with prototype-based "inheritance"
// function createDerivedComponent(baseComponent: any, additionalProps: any) {
//   function DerivedComponent(props: any) {
//     // Merge additionalProps with the props passed to the component
//     const mergedProps = { ...props, ...additionalProps };

//     // Call the base component with the merged props
//     return baseComponent(mergedProps);
//   }

//   // Set the prototype of the derived component to the base component
//   DerivedComponent.prototype = Object.create(baseComponent.prototype);

//   return DerivedComponent;
// }

// // Usage
// const ExtendedComponent = createDerivedComponent(BaseComponent, { additionalMessage: ' - Extended' });

// export function App() {
//   const baseMessage = 'Hello from BaseComponent';
//   const extendedMessage = 'Hello from ExtendedComponent';

//   return (
//     <div>
//       <BaseComponent message={baseMessage} />
//       <ExtendedComponent message={extendedMessage} />
//     </div>
//   );
// }

// export default App;
// // DialogLoginCustomer.prototype.lable1 = 'Ahsan';