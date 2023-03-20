import Modal from "./Modal"
import {useState} from 'react'
import './addTask.css'
import { firestore } from "../../firebase.config";
import {collection, addDoc, Timestamp} from 'firebase/firestore'

function AddTask({onClose, open}) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState("");

  /* function to add new task to firestore */
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(firestore, 'foodItems'), {
        title: title,
        description: description,
        category: category,
        created: Timestamp.now()
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }

  return (
    <Modal modalLable="Add Product" onClose={onClose} open={open}>
      <div
      className="grid grid-cols-4 gap-4 w-screen my-14"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <form onSubmit={handleSubmit} className="addTask" name="addTask">
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value.toUpperCase())}
          value={title}
          placeholder="Enter title"
        />
        <input
          type="text"
          name="Category"
          onChange={(e) => setCategory(e.target.value.toUpperCase())}
          value={category}
          placeholder="Enter Category"
        />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task decription"
          value={description}
        ></textarea>
        <button type="submit">Done</button>
      </form>
    </Modal>
  );
}

export default AddTask
