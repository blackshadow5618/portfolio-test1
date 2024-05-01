import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    id: 1,
    author: "Jordan Moore",
    title: "The Women: A Novel Hardcover",
    img: "./images/book-1.jpg",
  },
  {
    id: 2,
    author: "Emily Henry",
    title: "Funny Story Hardcover",
    img: "./images/book-2.jpg",
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {/* <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      /> */}

      <EventExamples />

      {books.map((book) => {
        // const { id, img, title, author } = book;

        return (
          // <Book key={id} img={img} title={title} author={author} />;
          // <Book key={book.id} book={book} />
          <Book key={book.id} {...book} />
        );
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = () => {
    console.log("handle form input");
  };

  const handleButtonClick = () => {
    alert("handle button click");
  };

  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};

// const Book = ({ img, title, author }) => {
const Book = (props) => {
  // console.log(props);
  const { img, title, author } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {/* {children} */}
    </article>
  );
};

// const Image = () => (
//   <img src="./images/book-1.jpg" alt="The Women: A Novel Hardcover" />
// );

// const Title = () => <h2>The Women: A Novel Hardcover</h2>;

// const Author = () => {
//   const inlineHeadingStyles = {
//     color: "#617d98",
//     fontSize: "0.75rem",
//     marginTop: "0.5rem",
//   };

//   return (
//     // <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}>
//     //   Jordan Moore
//     // </h4>
//     <h4 style={inlineHeadingStyles}>Jordan Moore</h4>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
