// import React, { useEffect, useState } from 'react'
// import { RadioGroup, RadioGroupItem } from './ui/radio-group'
// import { Label } from './ui/label'
// import { useDispatch } from 'react-redux'
// import { setSearchedQuery } from '@/redux/jobSlice'

// const fitlerData = [
//     {
//         fitlerType: "Location",
//         array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
//     },
//     {
//         fitlerType: "Industry",
//         array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
//     },
//     {
//         fitlerType: "Salary",
//         array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
//     },
// ]

// const FilterCard = () => {
//     const [selectedValue, setSelectedValue] = useState('');
//     const dispatch = useDispatch();
//     const changeHandler = (value) => {
//         setSelectedValue(value);
//     }
//     useEffect(()=>{
//         dispatch(setSearchedQuery(selectedValue));
//     },[selectedValue]);
//     return (
//         <div className='w-full bg-white p-3 rounded-md'>
//             <h1 className='font-bold text-lg'>Filter Jobs</h1>
//             <hr className='mt-3' />
//             <RadioGroup value={selectedValue} onValueChange={changeHandler}>
//                 {
//                     fitlerData.map((data, index) => (
//                         <div>
//                             <h1 className='font-bold text-lg'>{data.fitlerType}</h1>
//                             {
//                                 data.array.map((item, idx) => {
//                                     const itemId = `id${index}-${idx}`
//                                     return (
//                                         <div className='flex items-center space-x-2 my-2'>
//                                             <RadioGroupItem value={item} id={itemId} />
//                                             <Label htmlFor={itemId}>{item}</Label>
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </div>
//                     ))
//                 }
//             </RadioGroup>
//         </div>
//     )
// }

// export default FilterCard


// import React, { useEffect, useState } from 'react'
// import { RadioGroup, RadioGroupItem } from './ui/radio-group'
// import { Label } from './ui/label'
// import { useDispatch } from 'react-redux'
// import { setSearchedQuery } from '@/redux/jobSlice'

// const fitlerData = [
//     {
//         fitlerType: "Location",
//         array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
//     },
//     {
//         fitlerType: "Industry",
//         array: ["Frontend Devloper", "Backend Devloper", "Full Stack Devloper"]
//     },
//     {
//         fitlerType: "Salary",
//         array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
//     },
// ]

// const FilterCard = () => {
//     const [selectedValue, setSelectedValue] = useState('');
//     const dispatch = useDispatch();
//     const changeHandler = (value) => {
//         setSelectedValue(value);
//     }
//     useEffect(()=>{
//         dispatch(setSearchedQuery(selectedValue));
//     },[selectedValue]);
//     return (
//         <div className='w-full bg-white p-3 rounded-md'>
//             <h1 className='font-bold text-lg'>Filter Jobs</h1>
//             <hr className='mt-3' />
//             <RadioGroup value={selectedValue} onValueChange={changeHandler}>
//                 {
//                     fitlerData.map((data, index) => (
//                         <div>
//                             <h1 className='font-bold text-lg'>{data.fitlerType}</h1>
//                             {
//                                 data.array.map((item, idx) => {
//                                     const itemId = `id${index}-${idx}`
//                                     return (
//                                         <div className='flex items-center space-x-2 my-2'>
//                                             <RadioGroupItem value={item} id={itemId} />
//                                             <Label htmlFor={itemId}>{item}</Label>
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </div>
//                     ))
//                 }
//             </RadioGroup>
//         </div>
//     )
// }

// export default FilterCard


import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label"; // Ensure this component works as expected
import { setSearchedQuery } from "@/redux/jobSlice"; // Redux action to update the search query

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Banglore","Noida", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Devloper","CyberSecurity Devloper","Web3 Devloper","Devops Enginner", "Backend Devloper", "Full Stack Devloper"],
  },
//   {
//     filterType: "Salary",
//     array: ["0-40k", "42-1lakh", "1lakh to 5lakh"],
//   },
// {
//     filterType: "JobType",
//     array: ["Full Time", "Remote", "Hybrid"],
//   },
];

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (value) => {
    setSelectedValue(value); // Update selected value in state
  };

  useEffect(() => {
    // Dispatch the selected value to Redux store
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue, dispatch]);

  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      {filterData.map((data, index) => (
        <div key={index} className="mb-4">
          <h2 className="font-bold text-md">{data.filterType}</h2>
          <RadioGroup
            value={selectedValue} // Bind selectedValue to RadioGroup
            onValueChange={changeHandler} // Trigger changeHandler on selection
          >
            {data.array.map((item, idx) => {
              const itemId = `filter-${index}-${idx}`;
              return (
                <div key={itemId} className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value={item} id={itemId} />
                  <Label htmlFor={itemId}>{item}</Label>
                </div>
              );
            })}
          </RadioGroup>
        </div>
      ))}
    </div>
  );
};

export default FilterCard;


// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
// import { Label } from "./ui/label"; // Ensure this component works as expected
// import { setFilter } from "@/redux/jobSlice"; // Import setFilter action for JobType

// // Filter data now includes JobType
// const filterData = [
//   {
//     filterType: "Location",
//     array: ["Delhi NCR", "Banglore", "Noida", "Hyderabad", "Pune", "Mumbai"],
//   },
//   {
//     filterType: "Industry",
//     array: ["Frontend Developer", "Backend Developer", "Full Stack Developer"],
//   },
//   {
//     filterType: "JobType", // Add JobType to the filter list
//     array: ["Full Time", "Remote", "Hybrid"],
//   },
// ];

// const FilterCard = () => {
//   const [selectedValue, setSelectedValue] = useState({});
//   const dispatch = useDispatch();

//   const changeHandler = (filterType, value) => {
//     setSelectedValue((prevValues) => ({
//       ...prevValues,
//       [filterType]: value, // Update the selected filter type with the corresponding value
//     }));
//   };

//   useEffect(() => {
//     // Dispatch the selected value for each filter type to Redux store
//     Object.keys(selectedValue).forEach((filterType) => {
//       dispatch(setFilter({ filterType, value: selectedValue[filterType] }));
//     });
//   }, [selectedValue, dispatch]);

//   return (
//     <div className="w-full bg-white p-3 rounded-md">
//       <h1 className="font-bold text-lg">Filter Jobs</h1>
//       <hr className="mt-3" />
//       {filterData.map((data, index) => (
//         <div key={index} className="mb-4">
//           <h2 className="font-bold text-md">{data.filterType}</h2>
//           <RadioGroup
//             value={selectedValue[data.filterType]} // Bind selectedValue of each filterType
//             onValueChange={(value) => changeHandler(data.filterType, value)} // Use changeHandler for each filterType
//           >
//             {data.array.map((item, idx) => {
//               const itemId = `filter-${index}-${idx}`;
//               return (
//                 <div key={itemId} className="flex items-center space-x-2 my-2">
//                   <RadioGroupItem value={item} id={itemId} />
//                   <Label htmlFor={itemId}>{item}</Label>
//                 </div>
//               );
//             })}
//           </RadioGroup>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FilterCard;
