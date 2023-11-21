import { message, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {  GetAllBooks } from "../../../apicalls/books";


import { useNavigate } from "react-router-dom";



import { SearchOutlined } from "@ant-design/icons";
import "./search.css";

import { HideLoading, ShowLoading } from "../../../redux/loadersSlice";
import BookForm from "./BookForm";

function Bookslists(){
  const [formType, setFormType] = useState("add");
  const [selectedBook, setSelectedBook] = useState(null);
  const [openBookForm, setOpenBookForm] = React.useState(false);
  const [openIssues, setOpenIssues] = React.useState(false);
  const [openIssuesForm, setOpenIssuesForm] = React.useState(false);
  const [bookss, setBookss] = React.useState([]);
  const dispatch = useDispatch();

  const getBookss = async () => {
    try {
      dispatch(ShowLoading());
      const response = await GetAllBooks();
      dispatch(HideLoading());
      if (response.success) {
        setBooks(response.data);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    getBookss();
  }, []);

 
  const columns = [
    {
      title: "Book",
      dataIndex: "image",
    
      render: (image) => <img src={image} alt="book" width="60" height="60" />,
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Author",
      dataIndex: "author",
    },
    {
      title: "Publisher",
      dataIndex: "publisher",
    },
   
  ]
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  
  const navigate = useNavigate();

  const getBooks = async () => {
    try {
      dispatch(ShowLoading());
      const response = await GetAllBooks();
      dispatch(HideLoading());
      if (response.success) {
        setBooks(response.data);
        setFilteredBooks(response.data);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };
  const handleSearch = (value) => {
    const searchTerm = value.toLowerCase();
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm)
    );
    setFilteredBooks(filtered);
  };
    return(
        <div>
          
  <Table columns={columns} dataSource={books} className="mt-1" />

{openBookForm && (
  <BookForm
    open={openBookForm}
    setOpen={setOpenBookForm}
    reloadBooks={getBooks}
    formType={formType}
    selectedBook={selectedBook}
    setSelectedBook={setSelectedBook}
  />
 
)}

        </div>
    )
}
export default Bookslists;