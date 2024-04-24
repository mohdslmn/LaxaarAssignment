

// export const getCustomers = () => {
//   return fetch("https://dummyjson.com/users").then((res) => res.json())
//   }
export const getCustomers = async () => {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();

    // Modify the data by adding extra properties to each user object
    data.users.forEach(user => {
      user.EXTRA_PROP1 = "Value 1";
      user.EXTRA_PROP2 = "Value 2";
      // Add more extra properties if needed
    });

    // Return the modified data with extra properties
    return data;
  } catch (error) {
    console.error('Error fetching customers:', error);
    throw error; // Re-throw the error for the caller to handle
  }
};



// // Updated getCustomers function without Photo and address properties
// // Updated getCustomers function with modified JSON data
// export const getCustomers = () => {
//   return new Promise((resolve) => {
//     const customersData = {
//       users: [
//         {
//           NAME: "Rida Talbi",
//           DATE: "24/04/2024;10:30",
//           "JOB ID": "ABC000006",
//           "MOBILE NUMBER": "0661425689",
//           STATUS: ["Completed", "Processing", "Cancel"],
//           ACTIONS: ["Edit", "Delete"]
//         },
//         {
//           "$repeat": 5,
//           "$item": {
//             NAME: "Rida Talbi",
//             DATE: "24/04/2024;10:30",
//             "JOB ID": "ABC000006",
//             "MOBILE NUMBER": "0661425689",
//             STATUS: "$user.STATUS",
//             ACTIONS: ["Edit", "Delete"]
//           }
//         }
//       ],
//       user: {
//         STATUS: ["Completed", "Processing", "Cancel"]
//       }
//     };
//     resolve(customersData);
//   });
// };



export const getComments = () => {
  return fetch("https://dummyjson.com/comments").then((res) => res.json());
};
