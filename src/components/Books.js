const Books = () => (
  <>
    <section className="bookDisplayCate">
      <small className="category">Musical</small>
      <h3 className="bookTitle">Trap Diaries</h3>
      <small className="bookAuthor">Hamxi3bwoy</small>

      <ul className="ul">
        <li>Comments</li>
        <li>Remove</li>
        <li>Edit</li>
      </ul>
    </section>

    <section className="addBookSec">
      <h2>ADD BOOK</h2>
      <form>
        <input type="text" name="book" value="Title" className="input1" />

        <input type="text" name="author" value="Author" className="input2" />

        <input type="submit" value="Submit" className="input3" />
      </form>
    </section>
  </>
);

export default Books;
