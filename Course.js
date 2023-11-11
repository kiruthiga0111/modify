// // import React, { useState, useEffect } from 'react';

// // import { Form, Button, Table, Badge,Modal, Dropdown, } from 'react-bootstrap';

// // const App = () => {
// //   const [showModal, setShowModal] = useState(false);
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [address, setAddress] = useState('');
// //   const [selectedCourses, setSelectedCourses] = useState([]);
// //   const [amountPaid, setAmountPaid] = useState();

// //   const [invoiceId, setInvoiceId] = useState('');
// //   const [newInvoice, setInvoiceData] = useState([]);

// //   const CourseInvoiceSystem = () => {
// //     const courses = [
// //       { id: 1, name: 'FULL STACK', amount: 5000},
// //       { id: 2, name: 'JAVASCRIPT', amount: 3000 },
// //       { id: 3, name: 'FRONTEND', amount: 2000 },
// //     ];



// //     const calculateTotalAmount = () => {
// //       return selectedCourses.reduce((total, course) => total + course.amount, 0);
// //     };

// //     const calculateRemainingAmount = () => {
// //       return calculateTotalAmount() - amountPaid;
// //     };

// //     const handleDropdownChange = (e) => {
// //       const courseId = parseInt(e.target.value, 10);
// //       const selectedCourse = courses.find((course) => course.id === courseId);

// //       if (selectedCourse) {
// //         setSelectedCourses((prevSelected) => [...prevSelected, selectedCourse]);
// //       }
// //     };

// //     const handleAmountPaidChange = (e) => {
// //       const newAmountPaid = parseFloat(e.target.value);
// //       setAmountPaid(isNaN(newAmountPaid) ? 0 : newAmountPaid);
// //     };

// //     const handleDeleteCourse = (courseId) => {
// //       setSelectedCourses((prevSelected) => prevSelected.filter((course) => course.id !== courseId));
// //     };

// //     const handlePaymentStatus = () => {
// //       const remainingAmount = calculateRemainingAmount();

// //       if (amountPaid === 0) {
// //         return <Badge bg="danger">Unpaid</Badge>;
// //       } else if (remainingAmount === 0) {
// //         return <Badge bg="success">Paid</Badge>;
// //       } else {
// //         return (
// //           <Badge bg="warning">
// //             Partially Paid (Remaining: Rs: {remainingAmount})
// //           </Badge>
// //         );
// //       }
// //     };

// //     const handlePaymentSubmit = () => {
// //       // Handle payment logic here
// //       console.log('Payment submitted:', {

// //         selectedCourses,
// //         amountPaid,
// //         totalAmount: calculateTotalAmount(),
// //         paymentStatus: handlePaymentStatus(),
// //       });
// //     };
// //   };



// //   const generateInvoiceId = () => {
// //     const currentDate = new Date();
// //     const year = currentDate.getFullYear();
// //     const month = (`0${currentDate.getMonth() + 1}`).slice(-2);
// //     const day = (`0${currentDate.getDate()}`).slice(-2);
// //     const hours = (`0${currentDate.getHours()}`).slice(-2);
// //     const minutes = (`0${currentDate.getMinutes()}`).slice(-2);
// //     const seconds = (`0${currentDate.getSeconds()}`).slice(-2);

// //     setInvoiceId(`${year}${month}${day}_${hours}${minutes}${seconds}`);
// //   };

// //   const handleSubmit = () => {
// //     handlePayment();

// //     const invoiceData = {
// //       name,
// //       email,
// //       address,
// //       invoiceId,
// //       date: new Date().toLocaleDateString(),
// //       course: selectedCourses,

// //     };

// //     setInvoiceData([...newInvoice, invoiceData]);
// //     localStorage.setItem('tnewInvoice', JSON.stringify([...newInvoice, invoiceData]));

// //     handleClose();
// //   };

// //   useEffect(() => {
// //     const storednewInvoice = localStorage.getItem('tnewInvoice');
// //     if (storednewInvoice) {
// //       setInvoiceData(JSON.parse(storednewInvoice));
// //     }
// //   }, []);


// //   const handleShow = () => setShowModal(true);
// //   const handleClose = () => setShowModal(false);




// //   return (
// //     <div>
// //       <Button variant="primary" onClick={() => { generateInvoiceId(); handleShow(); }}>
// //         Open Popup
// //       </Button>

// //       <Modal show={showModal} onHide={handleClose}>
// //         <Modal.Header closeButton>
// //           <Modal.Title>Invoice Information</Modal.Title>
// //         </Modal.Header>
// //         <Modal.Body>
// //           <Form>
// //             <Form.Group controlId="name">
// //               <Form.Label>Name</Form.Label>
// //               <Form.Control
// //                 type="text"
// //                 placeholder="Enter your name"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //               />
// //             </Form.Group>

// //             <Form.Group controlId="email">
// //               <Form.Label>Email</Form.Label>
// //               <Form.Control
// //                 type="email"
// //                 placeholder="Enter your email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //               />
// //             </Form.Group>

// //             <Form.Group controlId="address">
// //               <Form.Label>Address</Form.Label>
// //               <Form.Control
// //                 as="textarea"
// //                 rows={3}
// //                 placeholder="Enter your address"
// //                 value={address}
// //                 onChange={(e) => setAddress(e.target.value)}
// //               />
// //             </Form.Group>



// //             <Form.Group controlId="courseDropdown">
// //           <Form.Label>Select Courses:</Form.Label>
// //           <Form.Select onChange={handleDropdownChange} multiple>
// //             {courses.map((course) => (
// //               <option key={course.id} value={course.id}>
// //                 {course.name} - Rs: {course.amount}
// //               </option>
// //             ))}
// //           </Form.Select>
// //         </Form.Group>
// //         <Table striped bordered hover>
// //         <thead>
// //           <tr>
// //             <th>Course</th>
// //             <th>Amount</th>
// //             <th>Action</th>
// //           </tr>
// //         </thead>
// //         <br></br>
// //         <tbody>
// //           {selectedCourses.map((course) => (
// //             <tr key={course.id}>
// //               <td>{course.name}</td>
// //               <td>Rs: {course.amount}</td>
// //               <td>
// //                 <Button variant="danger" onClick={() => handleDeleteCourse(course.id)}>
// //                   Delete
// //                 </Button>
// //               </td>
// //             </tr>
// //           ))}
// //           <br></br>
// //         </tbody>
// //       </Table>
// //       <strong>Total Amount: Rs: {calculateTotalAmount()}</strong>
// //       <Form>
// //         <Form.Group controlId="amountPaid">
// //           <Form.Label>Amount Paid:</Form.Label>
// //           <Form.Control
// //             type="number"
// //             value={amountPaid}
// //             onChange={handleAmountPaidChange}
// //           />
// //         </Form.Group>
// //         <br></br>
// //         <div>{handlePaymentStatus()}</div>
// //         <br></br>

// //         </Form>
// //       </Form>
// //       </Modal.Body>



// //       <Modal.Footer>
// //           <Button variant="secondary" onClick={handleClose}>
// //             Close
// //           </Button>
// //           <Button variant="primary" onClick={handleSubmit}>
// //             Save Changes
// //           </Button>
// //         </Modal.Footer>
// // </Modal>





// //         {/* <Button variant="primary" onClick={handlePaymentSubmit}>
// //           Submit Payment
// //         </Button> */}







// //       <Table striped bordered hover>
// //         <thead>
// //           <tr>
// //             <th>Name</th>
// //             <th>Email</th>
// //             <th>Address</th>
// //             <th>Invoice ID</th>
// //             <th>Date</th>
// //             {/* <th>Course</th>
// //             <th>Amount</th>
// //             <th>Status</th> */}
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {newInvoice.map((item, index) => (
// //             <tr key={index}>
// //               <td>{item.name}</td>
// //               <td>{item.email}</td>
// //               <td>{item.address}</td>
// //               <td>{item.invoiceId}</td>
// //               <td>{item.date}</td>
// //               {/* <td>{item.course}</td>
// //               <td>{`$${item.amount}`}</td>
// //               <td>{item.status}</td> */}
// //             </tr>
// //           ))}
// //         </tbody>
// //       </Table>
// //     </div>
// //   );
// // };

// // export default App;




// // import { BsFillEyeFill, BsTrash, BsPencil, BsDownload } from 'react-icons/bs';





// // <tbody>
// //           {tnewInvoice.map((invoice) => (
// //             <tr key={invoice.id}>
// //               <td>{invoice.id}</td>
// //               <td>{invoice.name}</td>
// //               <td>{invoice.email}</td>
// //               <td>{invoice.address}</td>
// //               <td>Rs: {invoice.totalAmount}</td>
// //               <td>{invoice.paymentStatus}</td>
// //               <td>
// //                 <OverlayTrigger overlay={<Tooltip id={`view-tooltip-${invoice.id}`}>View</Tooltip>}>
// //                   <Button variant="info" onClick={() => handleView(invoice.id)}>
// //                     <BsFillEyeFill />
// //                   </Button>
// //                 </OverlayTrigger>

// //                 <OverlayTrigger overlay={<Tooltip id={`edit-tooltip-${invoice.id}`}>Edit</Tooltip>}>
// //                   <Button variant="warning" onClick={() => handleEdit(invoice.id)}>
// //                     <BsPencil />
// //                   </Button>
// //                 </OverlayTrigger>

// //                 <OverlayTrigger overlay={<Tooltip id={`delete-tooltip-${invoice.id}`}>Delete</Tooltip>}>
// //                   <Button variant="danger" onClick={() => handleDelete(invoice.id)}>
// //                     <BsTrash />
// //                   </Button>
// //                 </OverlayTrigger>

// //                 <OverlayTrigger overlay={<Tooltip id={`download-tooltip-${invoice.id}`}>Download</Tooltip>}>
// //                   <Button variant="success" onClick={() => handleDownload(invoice.id)}>
// //                     <BsDownload />
// //                   </Button>
// //                 </OverlayTrigger>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </Table>
// //     </div>
// //   );
// //           };


// import React, { useState, useEffect } from 'react';
// import {
//   Button,
//   Modal,
//   Form,
//   Table,
//   Badge,
//   OverlayTrigger,
//   Tooltip,
// } from 'react-bootstrap';
// import {
//   BsFillEyeFill,
//   BsTrash,
//   BsPencil,
//   BsDownload,
// } from 'react-icons/bs';

// const InvoicePopup = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
//   const [selectedCourses, setSelectedCourses] = useState([]);
//   const [amountPaid, setAmountPaid] = useState(0);
//   // const [newInvoice, setInvoiceData] = useState([]);
//   const [newInvoice, setInvoiceData] = useState([]);
//   const courses = [
//     { id: 1, name: 'FULL STACK', amount: 5000 },
//     { id: 2, name: 'JAVASCRIPT', amount: 3000 },
//     { id: 3, name: 'FRONTEND', amount: 2000 },
//   ];

//   const handleClose = () => setShowModal(false);
//   const handleShow = () => setShowModal(true);

//   const handleDropdownChange = (e) => {
//     const courseId = parseInt(e.target.value, 10);
//     const selectedCourse = courses.find((course) => course.id === courseId);

//     if (selectedCourse) {
//       setSelectedCourses((prevSelected) => [...prevSelected, selectedCourse]);
//     }
//   };

//   const handleDeleteCourse = (courseId) => {
//     setSelectedCourses((prevSelected) =>
//       prevSelected.filter((course) => course.id !== courseId)
//     );
//   };

//   const calculateTotalAmount = () => {
//     return selectedCourses.reduce((total, course) => total + course.amount, 0);
//   };

//   const calculateRemainingAmount = () => {
//     return calculateTotalAmount() - amountPaid;
//   };

//   const handlePaymentStatus = () => {
//     const remainingAmount = calculateRemainingAmount();

//     if (amountPaid === 0) {
//       return <Badge bg="danger">Unpaid</Badge>;
//     } else if (remainingAmount === 0) {
//       return <Badge bg="success">Paid</Badge>;
//     } else {
//       return (
//         <Badge bg="warning">
//           Partially Paid (Remaining: Rs: {remainingAmount})
//         </Badge>
//       );
//     }
//   };

//   const handlePaymentSubmit = () => {
//     const newInvoice = {
//       id: generateInvoiceId(),
//       name,
//       email,
//       address,
//       selectedCourses,
//       amountPaid,
//       totalAmount: calculateTotalAmount(),
//       paymentStatus: handlePaymentStatus(),
//     };

//     // setInvoiceData((newInvoice) => [...newInvoice, setInvoiceData]);
//     // // Add logic for further processing or submission
//     // // Reset state and close modal if needed

//     setInvoiceData((prevData) => {
//       const newData = { ...prevData, [newInvoice.id]: newInvoice };
//       return newData;
//     });
  
//   //   // Add logic for further processing or submission
//   //   // Reset state and close modal if needed
//   //   handleClose();
//   // };






//     localStorage.setItem('newInvoice', JSON.stringify([...newInvoice, setInvoiceData]));
//     handleClose();
//   };


//   useEffect(() => {
//     const storednewInvoice = localStorage.getItem('tnewInvoice');
//     if (storednewInvoice) {
//       setInvoiceData(JSON.parse(storednewInvoice));
//     }
//   }, []);












//   const generateInvoiceId = () => {
//     const currentDate = new Date();
//     const year = currentDate.getFullYear();
//     const month = (`0${currentDate.getMonth() + 1}`).slice(-2);
//     const day = (`0${currentDate.getDate()}`).slice(-2);
//     const hours = (`0${currentDate.getHours()}`).slice(-2);
//     const minutes = (`0${currentDate.getMinutes()}`).slice(-2);
//     const seconds = (`0${currentDate.getSeconds()}`).slice(-2);

//     return `${year}${month}${day}_${hours}${minutes}${seconds}`;
//   };

//   useEffect(() => {
//     // You can perform any additional logic here when the component mounts
//   }, []);

//   const handleView = (invoiceId) => {
//     // Add logic to handle the view action
//     console.log('View Invoice:', invoiceId);
//   };

//   const handleEdit = (invoiceId) => {
//     // Add logic to handle the edit action
//     console.log('Edit Invoice:', invoiceId);
//   };

//   const handleDelete = (invoiceId) => {
//     // Add logic to handle the delete action
//     setInvoiceData((prevnewInvoice) =>
//       prevnewInvoice.filter((invoice) => invoice.id !== invoiceId)
//     );
//     console.log('Delete Invoice:', invoiceId);
//   };

//   const handleDownload = (invoiceId) => {
//     // Add logic to handle the download action
//     console.log('Download Invoice:', invoiceId);
//   };

//   return (
//     <div>
//       <Button variant="primary" onClick={handleShow}>
//         Open Popup
//       </Button>

//       <Modal show={showModal} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Invoice Information</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="name">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId="email">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId="address">
//               <Form.Label>Address</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 placeholder="Enter your address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId="courseDropdown">
//               <Form.Label>Select Courses:</Form.Label>
//               <Form.Select onChange={handleDropdownChange} multiple>
//                 {courses.map((course) => (
//                   <option key={course.id} value={course.id}>
//                     {course.name} - Rs: {course.amount}
//                   </option>
//                 ))}
//               </Form.Select>
//             </Form.Group>

//             <Table striped bordered hover>
//               <thead>
//                 <tr>
//                   <th>Course</th>
//                   <th>Amount</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {selectedCourses.map((course) => (
//                   <tr key={course.id}>
//                     <td>{course.name}</td>
//                     <td>Rs: {course.amount}</td>
//                     <td>
//                       <Button
//                         variant="danger"
//                         onClick={() => handleDeleteCourse(course.id)}
//                       >
//                         Delete
//                       </Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>

//             <strong>Total Amount: Rs: {calculateTotalAmount()}</strong>
//             <Form>
//               <Form.Group controlId="amountPaid">
//                 <Form.Label>Amount Paid:</Form.Label>
//                 <Form.Control
//                   type="number"
//                   value={amountPaid}
//                   onChange={(e) => setAmountPaid(e.target.value)}
//                 />
//               </Form.Group>
//               <div>{handlePaymentStatus()}</div>
//             </Form>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handlePaymentSubmit}>
//             Submit Payment
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Invoice ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Address</th>
//             <th>Total Amount</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {newInvoice.map((invoice) => (
//             <tr key={invoice.id}>
//               <td>{invoice.id}</td>
//               <td>{invoice.name}</td>
//               <td>{invoice.email}</td>
//               <td>{invoice.address}</td>
//               <td>Rs: {invoice.totalAmount}</td>
//               <td>{invoice.paymentStatus}</td>
//               <td>
//                 <OverlayTrigger
//                   overlay={<Tooltip id={`view-tooltip-${invoice.id}`}>View</Tooltip>}
//                 >
//                   <Button variant="info" onClick={() => handleView(invoice.id)}>
//                     <BsFillEyeFill />
//                   </Button>
//                 </OverlayTrigger>

//                 <OverlayTrigger
//                   overlay={<Tooltip id={`edit-tooltip-${invoice.id}`}>Edit</Tooltip>}
//                 >
//                   <Button
//                     variant="warning"
//                     onClick={() => handleEdit(invoice.id)}
//                   >
//                     <BsPencil />
//                   </Button>
//                 </OverlayTrigger>

//                 <OverlayTrigger
//                   overlay={<Tooltip id={`delete-tooltip-${invoice.id}`}>Delete</Tooltip>}
//                 >
//                   <Button
//                     variant="danger"
//                     onClick={() => handleDelete(invoice.id)}
//                   >
//                     <BsTrash />
//                   </Button>
//                 </OverlayTrigger>

//                 <OverlayTrigger
//                   overlay={<Tooltip id={`download-tooltip-${invoice.id}`}>Download</Tooltip>}
//                 >
//                   <Button
//                     variant="success"
//                     onClick={() => handleDownload(invoice.id)}
//                   >
//                     <BsDownload />
//                   </Button>
//                 </OverlayTrigger>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default InvoicePopup;

// import React, { useState, useEffect } from 'react';

// import { Form, Button, Table, Badge,Modal, Dropdown, } from 'react-bootstrap';

// const App = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
//   const [selectedCourses, setSelectedCourses] = useState([]);
//   const [amountPaid, setAmountPaid] = useState();

//   const [invoiceId, setInvoiceId] = useState('');
//   const [data, setData] = useState([]);

//   const CourseInvoiceSystem = () => {
//     const courses = [
//       { id: 1, name: 'FULL STACK', amount: 5000},
//       { id: 2, name: 'JAVASCRIPT', amount: 3000 },
//       { id: 3, name: 'FRONTEND', amount: 2000 },
//     ];


  
//     const calculateTotalAmount = () => {
//       return selectedCourses.reduce((total, course) => total + course.amount, 0);
//     };
  
//     const calculateRemainingAmount = () => {
//       return calculateTotalAmount() - amountPaid;
//     };
  
//     const handleDropdownChange = (e) => {
//       const courseId = parseInt(e.target.value, 10);
//       const selectedCourse = courses.find((course) => course.id === courseId);
  
//       if (selectedCourse) {
//         setSelectedCourses((prevSelected) => [...prevSelected, selectedCourse]);
//       }
//     };
  
//     const handleAmountPaidChange = (e) => {
//       const newAmountPaid = parseFloat(e.target.value);
//       setAmountPaid(isNaN(newAmountPaid) ? 0 : newAmountPaid);
//     };
  
//     const handleDeleteCourse = (courseId) => {
//       setSelectedCourses((prevSelected) => prevSelected.filter((course) => course.id !== courseId));
//     };
  
//     const handlePaymentStatus = () => {
//       const remainingAmount = calculateRemainingAmount();
  
//       if (amountPaid === 0) {
//         return <Badge bg="danger">Unpaid</Badge>;
//       } else if (remainingAmount === 0) {
//         return <Badge bg="success">Paid</Badge>;
//       } else {
//         return (
//           <Badge bg="warning">
//             Partially Paid (Remaining: Rs: {remainingAmount})
//           </Badge>
//         );
//       }
//     };
  
//     const handlePaymentSubmit = () => {
//       // Handle payment logic here
//       console.log('Payment submitted:', {

//         selectedCourses,
//         amountPaid,
//         totalAmount: calculateTotalAmount(),
//         paymentStatus: handlePaymentStatus(),
//       });
//     };
//   };



//   const generateInvoiceId = () => {
//     const currentDate = new Date();
//     const year = currentDate.getFullYear();
//     const month = (`0${currentDate.getMonth() + 1}`).slice(-2);
//     const day = (`0${currentDate.getDate()}`).slice(-2);
//     const hours = (`0${currentDate.getHours()}`).slice(-2);
//     const minutes = (`0${currentDate.getMinutes()}`).slice(-2);
//     const seconds = (`0${currentDate.getSeconds()}`).slice(-2);

//     setInvoiceId(`${year}${month}${day}_${hours}${minutes}${seconds}`);
//   };

//   const handleSubmit = () => {
//     handlePayment();

//     const newData = {
//       name,
//       email,
//       address,
//       invoiceId,
//       date: new Date().toLocaleDateString(),
//       course: selectedCourses,
     
//     };

//     setData([...data, newData]);
//     localStorage.setItem('invoiceData', JSON.stringify([...data, newData]));

//     handleClose();
//   };

//   useEffect(() => {
//     const storedData = localStorage.getItem('invoiceData');
//     if (storedData) {
//       setData(JSON.parse(storedData));
//     }
//   }, []);

  
//   const handleShow = () => setShowModal(true);
//   const handleClose = () => setShowModal(false);

  
  

//   return (
//     <div>
//       <Button variant="primary" onClick={() => { generateInvoiceId(); handleShow(); }}>
//         Open Popup
//       </Button>

//       <Modal show={showModal} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Invoice Information</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="name">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId="email">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId="address">
//               <Form.Label>Address</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 placeholder="Enter your address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//               />
//             </Form.Group>



//             <Form.Group controlId="courseDropdown">
//           <Form.Label>Select Courses:</Form.Label>
//           <Form.Select onChange={handleDropdownChange} multiple>
//             {courses.map((course) => (
//               <option key={course.id} value={course.id}>
//                 {course.name} - Rs: {course.amount}
//               </option>
//             ))}
//           </Form.Select>
//         </Form.Group>
//         <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Course</th>
//             <th>Amount</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <br></br>
//         <tbody>
//           {selectedCourses.map((course) => (
//             <tr key={course.id}>
//               <td>{course.name}</td>
//               <td>Rs: {course.amount}</td>
//               <td>
//                 <Button variant="danger" onClick={() => handleDeleteCourse(course.id)}>
//                   Delete
//                 </Button>
//               </td>
//             </tr>
//           ))}
//           <br></br>
//         </tbody>
//       </Table>
//       <strong>Total Amount: Rs: {calculateTotalAmount()}</strong>
//       <Form>
//         <Form.Group controlId="amountPaid">
//           <Form.Label>Amount Paid:</Form.Label>
//           <Form.Control
//             type="number"
//             value={amountPaid}
//             onChange={handleAmountPaidChange}
//           />
//         </Form.Group>
//         <br></br>
//         <div>{handlePaymentStatus()}</div>
//         <br></br>

//         </Form>
//       </Form>
//       </Modal.Body>


             
//       <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSubmit}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
// </Modal>





//         {/* <Button variant="primary" onClick={handlePaymentSubmit}>
//           Submit Payment
//         </Button> */}
        
      
  

      
      

//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Address</th>
//             <th>Invoice ID</th>
//             <th>Date</th>
//             {/* <th>Course</th>
//             <th>Amount</th>
//             <th>Status</th> */}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index}>
//               <td>{item.name}</td>
//               <td>{item.email}</td>
//               <td>{item.address}</td>
//               <td>{item.invoiceId}</td>
//               <td>{item.date}</td>
//               {/* <td>{item.course}</td>
//               <td>{`$${item.amount}`}</td>
//               <td>{item.status}</td> */}
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default App;




// import { BsFillEyeFill, BsTrash, BsPencil, BsDownload } from 'react-icons/bs';





// <tbody>
//           {invoiceData.map((invoice) => (
//             <tr key={invoice.id}>
//               <td>{invoice.id}</td>
//               <td>{invoice.name}</td>
//               <td>{invoice.email}</td>
//               <td>{invoice.address}</td>
//               <td>Rs: {invoice.totalAmount}</td>
//               <td>{invoice.paymentStatus}</td>
//               <td>
//                 <OverlayTrigger overlay={<Tooltip id={`view-tooltip-${invoice.id}`}>View</Tooltip>}>
//                   <Button variant="info" onClick={() => handleView(invoice.id)}>
//                     <BsFillEyeFill />
//                   </Button>
//                 </OverlayTrigger>

//                 <OverlayTrigger overlay={<Tooltip id={`edit-tooltip-${invoice.id}`}>Edit</Tooltip>}>
//                   <Button variant="warning" onClick={() => handleEdit(invoice.id)}>
//                     <BsPencil />
//                   </Button>
//                 </OverlayTrigger>

//                 <OverlayTrigger overlay={<Tooltip id={`delete-tooltip-${invoice.id}`}>Delete</Tooltip>}>
//                   <Button variant="danger" onClick={() => handleDelete(invoice.id)}>
//                     <BsTrash />
//                   </Button>
//                 </OverlayTrigger>

//                 <OverlayTrigger overlay={<Tooltip id={`download-tooltip-${invoice.id}`}>Download</Tooltip>}>
//                   <Button variant="success" onClick={() => handleDownload(invoice.id)}>
//                     <BsDownload />
//                   </Button>
//                 </OverlayTrigger>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
//           };


import React, { useState, useEffect } from 'react';
import {
  Button,
  Modal,
  Form,
  Table,
  Badge,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import {
  BsFillEyeFill,
  BsTrash,
  BsPencil,
  BsDownload,
} from 'react-icons/bs';

const InvoicePopup = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [amountPaid, setAmountPaid] = useState(0);
  const [invoiceData, setInvoiceData] = useState([]);

  const courses = [
    { id: 1, name: 'FULL STACK', amount: 5000 },
    { id: 2, name: 'JAVASCRIPT', amount: 3000 },
    { id: 3, name: 'FRONTEND', amount: 2000 },
  ];

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleDropdownChange = (e) => {
    const courseId = parseInt(e.target.value, 10);
    const selectedCourse = courses.find((course) => course.id === courseId);

    if (selectedCourse) {
      setSelectedCourses((prevSelected) => [...prevSelected, selectedCourse]);
    }
  };

  const handleDeleteCourse = (courseId) => {
    setSelectedCourses((prevSelected) =>
      prevSelected.filter((course) => course.id !== courseId)
    );
  };

  const calculateTotalAmount = () => {
    return selectedCourses.reduce((total, course) => total + course.amount, 0);
  };

  const calculateRemainingAmount = () => {
    return calculateTotalAmount() - amountPaid;
  };

  const handlePaymentStatus = () => {
    const remainingAmount = calculateRemainingAmount();

    if (amountPaid === 0) {
      return <Badge bg="danger">Unpaid</Badge>;
    } else if (remainingAmount === 0) {
      return <Badge bg="success">Paid</Badge>;
    } else {
      return (
        <Badge bg="warning">
          Partially Paid (Remaining: Rs: {remainingAmount})
        </Badge>
      );
    }
  };

  const handlePaymentSubmit = () => {
    const newInvoice = {
      id: generateInvoiceId(),
      name,
      email,
      address,
      selectedCourses,
      amountPaid,
      totalAmount: calculateTotalAmount(),
      paymentStatus: handlePaymentStatus(),
    };


    const handleClose = () => {
      resetForm();
      setShowModal(false);
    };
  
    const resetForm = () => {
      setName('');
      setEmail('');
      setAddress('');
      setSelectedCourses([]);
      setAmountPaid(0);
    };
    setInvoiceData((prevData) => [...prevData, newInvoice]);
    // Add logic for further processing or submission
    // Reset state and close modal if needed
    resetForm();
    handleClose();
  };

  //   setInvoiceData((prevData) => [...prevData, newInvoice]);
  //   // Add logic for further processing or submission
  //   // Reset state and close modal if needed
  //   handleClose();
  // };

  const generateInvoiceId = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (`0${currentDate.getMonth() + 1}`).slice(-2);
    const day = (`0${currentDate.getDate()}`).slice(-2);
    const hours = (`0${currentDate.getHours()}`).slice(-2);
    const minutes = (`0${currentDate.getMinutes()}`).slice(-2);
    const seconds = (`0${currentDate.getSeconds()}`).slice(-2);

    return `${year}${month}${day}_${hours}${minutes}${seconds}`;
  };

  useEffect(() => {
    // You can perform any additional logic here when the component mounts
  }, []);

  const handleView = (invoiceId) => {
    // Add logic to handle the view action
    console.log('View Invoice:', invoiceId);
  };

  const handleEdit = (invoiceId) => {
    // Add logic to handle the edit action
    console.log('Edit Invoice:', invoiceId);
  };

  const handleDelete = (invoiceId) => {
    // Add logic to handle the delete action
    setInvoiceData((prevData) =>
      prevData.filter((invoice) => invoice.id !== invoiceId)
    );
    console.log('Delete Invoice:', invoiceId);
  };

  const handleDownload = (invoiceId) => {
    // Add logic to handle the download action
    console.log('Download Invoice:', invoiceId);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Open Popup
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Invoice Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="courseDropdown">
              <Form.Label>Select Courses:</Form.Label>
              <Form.Select onChange={handleDropdownChange} multiple>
                {courses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.name} - Rs: {course.amount}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {selectedCourses.map((course) => (
                  <tr key={course.id}>
                    <td>{course.name}</td>
                    <td>Rs: {course.amount}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleDeleteCourse(course.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <strong>Total Amount: Rs: {calculateTotalAmount()}</strong>
            <Form>
              <Form.Group controlId="amountPaid">
                <Form.Label>Amount Paid:</Form.Label>
                <Form.Control
                  type="number"
                  value={amountPaid}
                  onChange={(e) => setAmountPaid(e.target.value)}
                />
              </Form.Group>
              <div>{handlePaymentStatus()}</div>
            </Form>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePaymentSubmit}>
            Submit Payment
          </Button>
        </Modal.Footer>
      </Modal>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Invoice ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.id}</td>
              <td>{invoice.name}</td>
              <td>{invoice.email}</td>
              <td>{invoice.address}</td>
              <td>Rs: {invoice.totalAmount}</td>
              <td>{invoice.paymentStatus}</td>
              <td>
                <OverlayTrigger
                  overlay={<Tooltip id={`view-tooltip-${invoice.id}`}>View</Tooltip>}
                >
                  <Button variant="info" onClick={() => handleView(invoice.id)}>
                    <BsFillEyeFill />
                  </Button>
                </OverlayTrigger>

                <OverlayTrigger
                  overlay={<Tooltip id={`edit-tooltip-${invoice.id}`}>Edit</Tooltip>}
                >
                  <Button
                    variant="warning"
                    onClick={() => handleEdit(invoice.id)}
                  >
                    <BsPencil />
                  </Button>
                </OverlayTrigger>

                <OverlayTrigger
                  overlay={<Tooltip id={`delete-tooltip-${invoice.id}`}>Delete</Tooltip>}
                >
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(invoice.id)}
                  >
                    <BsTrash />
                  </Button>
                </OverlayTrigger>

                <OverlayTrigger
                  overlay={<Tooltip id={`download-tooltip-${invoice.id}`}>Download</Tooltip>}
                >
                  <Button
                    variant="success"
                    onClick={() => handleDownload(invoice.id)}
                  >
                    <BsDownload />
                  </Button>
                </OverlayTrigger>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default InvoicePopup;



