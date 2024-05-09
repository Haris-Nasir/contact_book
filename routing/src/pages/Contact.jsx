
import React, { useEffect, useState } from "react";

function Contact() {
  const [contact, setContact] = useState({
    fullname: '',
    email: '',
  });
  
  const [contacts,setContacts]=useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    let newContact={
      ...contact,
      id:Date.now()
    }
   contacts.push(newContact);
    localStorage.setItem('Contacts Details', JSON.stringify(contacts));

    setContact({
      fullname: '',
    email: ''
    })
  };

 
useEffect(()=>{
  let storedContacts=localStorage.getItem('Contacts Details')
  storedContacts=JSON.parse(storedContacts);
  if(storedContacts!=null)
    {
      setContacts(storedContacts);
    }
},[])

const handleDelete = (id)=>{

let contactArr=JSON.parse(localStorage.getItem('Contacts Details'))
const filteredArr=contactArr.filter((c)=>c.id!=id)

localStorage.setItem('Contacts Details', JSON.stringify(filteredArr));
location.reload();
}




  return (
    <div className="container">
      <form className="row g-3 py-5 w-50" onSubmit={handleSubmit}>
        <div className="col-md-12">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input type="text" onChange={(e) => {setContact({ ...contact, fullname: e.target.value }); }}
        value={contact.fullname}
            className="form-control"
            id="fullName"
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            onChange={(e) => {
              setContact({ ...contact, email: e.target.value });
            }}
            value={contact.email}
            className="form-control"
            id="email"
          />
        </div>
        

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Send a Message
          </button>
        </div>
      </form>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Full Name</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  {
    contacts.length < 1? <tr><td><h1>No data found...</h1></td></tr>:
   contacts.map((c,idx)=>   <tr key={idx}>
    <th scope="row">{idx+1}</th>
    <td>{c.fullname}</td>
    <td>{c.email}</td>
    <td>
    <button className='btn btn-danger me-2' onClick={()=>handleDelete(c.id)}><i className="bi bi-trash"></i></button>
    <button className='btn btn-warning me-2'><i className="bi bi-pencil-square"></i></button>
    <button className='btn btn-success me-2'><i className="bi bi-telephone-forward"></i></button>
    </td>
  </tr>)
  }
   
  </tbody>
</table>

    </div>
  );
}
export default Contact;
