import './App.css'

// const element1 = <h2>Hello, world!</h2>
// const element2 = (
//   <ul>
//     <li>A</li>
//     <li>B</li>
//     <li>C</li>
//   </ul>
// )

// function BasicExpressions() {
//   const name = "Jaehun";
//   const age = 25;
//   const isAdmin = true;

//   return (
//     <div>
//       <p>Name: {name}</p>
//       <p>Age next year: {age + 1}</p>
//       <p>{name + "s Profile"}</p>
//       <p>{`${name} is ${age} years old`}</p>
//       <p>Admin status: {String(isAdmin)}</p>
//       <p>{String(age)}</p>
//     </div>
//   )
// }

// function ObjectArrayExpressions() {
//   const user = {
//     name: "Jaehun",
//     email: "jaehun@example.com"
//   };
//   const colors = ["red", "green", "blue"];
//   const numbers = [1, 2, 3, 4, 5];

//   return (
//     <div>
//       <p>User: {user.name} ({user.email})</p>
//       <p>First color: {colors[0]}</p>
//       <p>Color count: {colors.length}</p>

//       <p>
//         Doubled: {
//           numbers.map(n => n * 2).join(", ")
//         }
//       </p>

//       <p>
//         Evens: {
//           numbers.filter(n => n % 2 === 0).join(", ")
//         }
//       </p>
//       <p>
//         Sorted: {
//           numbers.sort((a, b) => b - a)
//         }
//       </p>
//     </div>
//   )
// }

// function FunctionExpressions() {
//   const getGreeting = (name) => `Hello, ${name}!`;
  
//   const formatDate = (date) => {
//     return new Date(date).toLocaleDateString();
//   };

//   const calculateTotal = (items) => {
//     return items.reduce((sum, item) => sum + item.price, 0);
//   };

//   const items = [ { id: 1, price: 10}, { id: 2, price: 20 } ];

//   return (
//     <div>
//       <p>{getGreeting("Jaehun")}</p>
//       <p>Today: {formatDate(new Date())}</p>
//       <p>Total: ${calculateTotal(items)}</p>
//       <p>Good {(() => {
//         const hours = new Date().getHours();
//         return hours < 12 ? "morning!" : "afternoon!";
//       })()}</p>
//     </div>
//   )
// }

// function ElementExpressions() {
//   return (
//     <section>
//       {element1}
//       {element2}
//     </section>
//   )
// }

// const isLoggedIn = true;

// function getUserContent(userStatus) {
//   return (
//     userStatus === "admin" ? (
//       <>
//         <h2>Admin Dashboard</h2>
//         <button>Manage Users</button>
//       </>
//     ) : userStatus === "member" ? (
//       <p>Welcome to the community!</p>
//     ) : (
//       <a href="/signup">Sign up here</a>
//     )
//   )
// }

// const hasMessages = true
// const message = null

// import reactLogo from './assets/react.svg'
// const reactLogoAlt = "React logo"
// console.log(reactLogo)

import ButtonA from './ButtonA'
import ButtonB from './ButtonB'

function App() {

  // const fruits = ["Apple", "Banana", "Cherry"]
  // const books = [
  //   { id: 1, title: 'React Basics', published: true, publisher: 'Manning' },
  //   { id: 2, title: 'Advanced Hooks', published: false, publisher: 'OReilly' },
  //   { id: 3, title: 'JSX in Depth', published: true, publisher: 'Packt' }
  // ];

  // const publisheds = books.filter(book => book.published)
  // const disableInput = true
  // const divStyle = {
  //   backgroundColor: "red",
  //   margin: "12px",
  //   padding: "20px",
  //   borderRadius: "8px"
  // }

  // const styleA = {
  //   color: 'darkred',
  //   fontWeight: 'bold'
  // }
  // const styleB = {
  //   color: 'navy',
  //   textDecoration: 'underline'
  // }
  // const isPrimary = true

  return (
    // <>
    //   {/* JSX Practices */}

    //   {/* <h1>JSX</h1> */}
    //   {/* <BasicExpressions /> */}
    //   {/* <ObjectArrayExpressions/> */}
    //   {/* <FunctionExpressions/> */}
    //   {/* <ElementExpressions /> */}
    //   {/* {isLoggedIn ? <h1>Hello!</h1> : <h1>Sign in</h1>}
    //   {isLoggedIn ? (
    //     <>
    //       <h2>Welcome back!</h2>
    //       <p>You are logged in. Enjoy your time here!</p>
    //     </>
    //   ) : (
    //     <>
    //       <h2>Hello, Guest!</h2>
    //       <p>Please log in to access more features.</p>
    //     </>
    //   )} */}
    //   {/* {getUserContent("admin")}
    //   {getUserContent("member")}
    //   {getUserContent("guest")} */}
    //   {/* {hasMessages && <h2>You have new messages!</h2>}
    //   {message && <p>Message: {message}</p>}
    //   <p>
    //     Message: {message ?? <em>No messahe</em>}
    //   </p>
    //   <p>
    //     Messahe: {message || <em>Empty</em>}
    //   </p> */}
    //   {/* {[0, 123, 'A', 'Hello', true, false]} */}
    //   {/* {[
    //     <button>A</button>,
    //     <button>B</button>,
    //     <button>C</button>
    //   ]} */}
    //   {/* <ul>
    //     {fruits.map((fruit, index) => (
    //       <li key={index}>{fruit}</li>
    //     ))}
    //   </ul> */}
    //   {/* {publisheds.length > 0 && <h2>Published Books</h2>}
    //   {publisheds.length ?
    //     publisheds.map(book =>
    //       <article key={book.id}>
    //         <strong>{book.title}</strong>
    //         <em> - {book.publisher}</em>
    //       </article>
    //     )
    //   : <p>No published boos found.</p>} */}
    // </>
    <>
      {/* <label
        htmlFor="username"      // for
        >   
          Username:
      </label>
      <input 
        type="text"
        id='username'

        className='input-field' // class
        autoComplete='off'      // autocomplete

        maxLength={20}          // maxlength
        spellCheck={true}       // spellcheck
        readOnly={false}        // readonly
        tabIndex={0}            // tabindex 

        disabled={disableInput}
        placeholder={
          disableInput ? "(DISABLED)" : "Enter your name."
        }
      /> */}
      {/* <img 
        src={reactLogo} 
        alt={reactLogoAlt}
        width={256}
        height={228}
      /> */}
      {/* <span style={
        {
          fontWeight: "bold",
          fontStyle: "italic"
        }
      }>
        Bold & Italic
      </span> */}
      {/* <div style={divStyle}>
        DIV 1
      </div>
      <div
        style={{
          ...divStyle,
          backgroundColor: "blue",
          color: "white",
          fontWeight: "bold"
        }}
      >
        DIV2
      </div> */}
      {/* <div style={isPrimary ? styleA : styleB}>
        This text has dynamic styling.
      </div>
      <span
        style={{
          fontSize: isPrimary ? '1.5em' : '1em',
          opacity: isPrimary ? 1 : 0.5
        }}>
        So does this text.
      </span> */}
      <ButtonA />
      <ButtonB />
    </>
  )
}

export default App
