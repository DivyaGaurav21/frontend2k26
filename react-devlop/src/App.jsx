// import './App.css'
// import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

// import Post from './components/tanstack/Post';
// import Home from './components/tanstack/Home';
// import Tech from './components/tanstack/Tech';
// import RQPostDetails from './components/tanstack/RQPostDetails';
// import PaginatedQuery from './components/tanstack/PaginatedQuery';
// import InfiniteQuery from './components/tanstack/InfiniteQuery';
// import Iq2 from './components/tanstack/Iq2';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-900 px-6 py-4">
//       <ul className="flex gap-6 text-white">
//         <li>
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"
//             }
//           >
//             Home
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/post"
//             className={({ isActive }) =>
//               isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"
//             }
//           >
//             Post
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/tech"
//             className={({ isActive }) =>
//               isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"
//             }
//           >
//             Tech
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/pagination"
//             className={({ isActive }) =>
//               isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"
//             }
//           >
//             pagination
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/infinite-que1"
//             className={({ isActive }) =>
//               isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"
//             }
//           >
//             Infinite Que1
//           </NavLink>
//         </li>

//       </ul>
//     </nav>
//   );
// };

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/post" element={<Post />} />
//         <Route path="/post/:postId" element={<RQPostDetails />} />
//         <Route path="/tech" element={<Tech />} />
//         <Route path="/pagination" element={<PaginatedQuery />} />
//         {/* <Route path="/infinite-que1" element={<InfiniteQuery />} /> */}
//          <Route path="/infinite-que1" element={<Iq2 />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App


import './App.css'
import Pagination from './components/akshay-saini/pagination/Pagination';
import TabForm from './components/akshay-saini/tab-form/TabForm';
// import CountdownTimer from './components/question/CountdownTimer';
// import DebaunceSearch from './components/question/DebaunceSearch';
// import InfiniteScroll from './components/question/InfiniteScroll';
// import ProgressBar from './components/question/ProgressBar';
// import AutoCompleteSearch from './components/question/AutoCompleteSearch';
// import Accordion from './components/question/Accordion';
// import FileUpload from './components/question/FileUpload';
// import EditableList from './components/question/EditableList';
// import HomeUi from './components/question/modal/HomeUi';
// import SearchFilter from './components/question/SearchFilter';
// import MultiStepForm from './components/question/MultiStepForm';
// import Tabs from './components/question/tabs/Tabs';
// import FullyControlledForm from './components/question/FullyControlledForm';
// import TodoList from './components/question/TodoList';
// import FormValidation from './components/question/FormValidation';
// import StarRating from './components/question/ StarRating';
// import CounterStep from './components/question/CounterStep';
// import MyButton from './components/question/MyButton';
// import BasicQue from './components/question/BasicQue';
// import RefHooks from './components/hooks/RefHooks';
// import EffectHooks from './components/hooks/Effect

function App() {
  return (
    <>
      {/* <EffectHooks/>
    <RefHooks/> */}
      {/* <BasicQue/> */}
      {/* <StarRating /> */}
      {/* <CounterStep/>
      <MyButton size='small' variant='danger'>TEST</MyButton> */}
      {/* <RefHooks/> */}
      {/* <FormValidation/> */}
      {/* <TodoList/> */}
      {/* <FullyControlledForm/> */}
      {/* <Tabs/> */}
      {/* <MultiStepForm/> */}
      {/* <HomeUi/> */}
      {/* <SearchFilter/> */}
      {/* <EditableList/> */}
      {/* <FileUpload/> */}
      {/* <Accordion/> */}
      {/* <AutoCompleteSearch/> */}
      {/* <ProgressBar/> */}
      {/* <Accordion/> */}
      {/* <InfiniteScroll/> */}
      {/* <DebaunceSearch/> */}
      {/* <CountdownTimer/> */}
      {/* <TabForm/> */}
      <Pagination/>
    </>
  )
}

export default App;