

const getBooks = async()=> {
    const response = await fetch('http://localhost:3000/booksData.json');
    const data = await response.json();
    return data;
}

const Books = async () => {

    const booksData = await getBooks();
    console.log(booksData, "booksData");

    return (
        <section className='Container mx-auto my-17.5 '>
            <h2>Books</h2>

            {booksData.map((book, ind) => {
                return <div key={ind} >{book.bookName}</div>
            })}

        </section>
    );
};

export default Books;