// import React, { useState, useEffect } from 'react';
// import { getCustomers } from '../../API'; // Assuming you have an api.js file with the getCustomers function

// const CustomerComponent = () => {
//   const [customers, setCustomers] = useState([]);

//   useEffect(() => {
//     const fetchCustomers = async () => {
//       try {
//         const customersData = await getCustomers(); // Call the getCustomers function to get the JSON object
//         setCustomers(customersData.users); // Update the customers state with the users array from the JSON object
//       } catch (error) {
//         console.error('Error fetching customers:', error);
//       }
//     };

//     fetchCustomers();
//   }, []); // Empty dependency array to run the effect only once

//   return (
//     <div>
//       <h1>Customer List</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Date</th>
//             <th>Job ID</th>
//             <th>Mobile Number</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {customers.map((customer, index) => (
//             <tr key={index}>
//               <td>{customer.NAME}</td>
//               <td>{customer.DATE}</td>
//               <td>{customer['JOB ID']}</td>
//               <td>{customer['MOBILE NUMBER']}</td>
//               <td>{Array.isArray(customer.STATUS) ? customer.STATUS.join(', ') : customer.STATUS}</td>
//               <td>{Array.isArray(customer.ACTIONS) ? customer.ACTIONS.join(', ') : customer.ACTIONS}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CustomerComponent;

import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory } from "../../API";
import {
  EditOutlined,
  EyeOutlined,
  DeleteOutlined,
  MailOutlined,
  PrinterOutlined,
} from "@ant-design/icons";

function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table
        style={{ width: "1156px", top: "191px" }}
        loading={loading}
        columns={[
          {
            title: "Photo",
            dataIndex: "image",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },

          {
            title: "Name",
            dataIndex: "name",
            render: () => "Rida Talbi",
          },
          {
            title: "Date",
            dataIndex: "date",
            render: () => "24/04/2024;10:30",
          },
          {
            title: "Job ID",
            dataIndex: "jobId",
            render: () => "ABC000006",
          },
          {
            title: "MOBILE NUMBER",
            dataIndex: "mobile number",
            render: () => "0661425689",
          },

          {
            title: "Status",
            render: ({ completedAt, cancelledAt }) => {
              if (completedAt) {
                return <span style={{ color: "green" }}>Completed</span>;
              } else if (cancelledAt) {
                return <span style={{ color: "red" }}>Cancelled</span>;
              } else {
                return <span style={{ color: "green" }}>COMPLETED</span>;
              }
            },
          },

          {
            title: "Actions",
            dataIndex: "actions",
            render: () => (
              <span>
                <EditOutlined style={{ color: "red", margin: "2px" }} />
                <EyeOutlined style={{ color: "red", margin: "2px" }} />
                <DeleteOutlined style={{ color: "red", margin: "2px" }} />
                <MailOutlined style={{ color: "red", margin: "2px" }} />
                <PrinterOutlined style={{ color: "red", margin: "2px" }} />
              </span>
            ),
          },

          // {
          //   title: "address",
          //   dataIndex: "address",
          //   render: (address) => {
          //     return (
          //       <span>
          //         {address.address}, {address.city}
          //       </span>
          //     );
          //   },
          // },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 8,
        }}
      ></Table>
    </Space>
  );
}
export default Customers;
