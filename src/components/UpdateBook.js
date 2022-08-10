import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function UpdateBook() {

  const { id } = useParams();
  const [book, setBook] = useState({});
  

  useEffect(() => {
    axios.get(`http://localhost:4000/books/${id}`)
      .then(res => setBook(res.data))
      .catch(err => console.log(err))
  } , [id])

  const updateBook = async (e) => {
    e.preventDefault();
    const updatedBook = {
      'title': e.target.bookTitle.value,
      'description': e.target.bookDescription.value,
      'status': true,
      'imgURL': e.target.bookImgURL.value,
    }
    await axios.put(`http://localhost:4000/books/${id}`, {updatedBook});
    window.location.href = '/';
  }
  return (
    <div className="container">
      <h1>Update Book</h1>
      <form onSubmit={updateBook}>
        <div className="form-group">
          <label htmlFor="bookTitle">Title</label>
          <input type="text" className="form-control" id="bookTitle" name="bookTitle" defaultValue={book.title} />
        </div>
        <div className="form-group">
          <label htmlFor="bookDescription">Description</label>
          <input type="text" className="form-control" id="bookDescription" name="bookDescription" defaultValue={book.description} />
        </div>
        <div className="form-group">
          <label htmlFor="bookImgURL">Image URL</label>
          <input type="text" className="form-control" id="bookImgURL" name="bookImgURL" defaultValue={book.imgURL} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}


//   async function fetchData() {
//     const {data} = await axios.get(`http://localhost:4000/books/${id}`)
//     console.log(data);
//     setBook(data)
//   }

//   const update = async (e) => {
//     e.preventDefault();
//     const data = {
//       'title': e.target.bookTitle.value,
//       'description': e.target.bookDescription.value,
//       'status': true,
//       'imgURL': e.target.bookImgURL.value
//     }
//     await axios.put(`http://localhost:4000/books/${id}`, {data})
//   }

//   useEffect(() => {
//     fetchData();
//   }, [])

//   return (
//     <form onSubmit={update}>
//     <label htmlFor="">Book Name</label>
//     <input type="text" id='bookTitle' defaultValue={book?.name}/>
//     <br />
//     <label htmlFor="">Book Description</label>
//     <input type="text" name="" id="bookDescription" defaultValue={book?.age}/>
//     <br />
//     <button type='submit'>Update</button>
//   </form>
//   )
// }