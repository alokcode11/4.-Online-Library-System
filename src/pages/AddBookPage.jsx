// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './AddBookPage.css';

// const AddBookPage = () => {
//   const navigate = useNavigate();
//   const [bookData, setBookData] = useState({
//     title: '',
//     author: '',
//     isbn: '',
//     publicationYear: '',
//     genre: '',
//     description: '',
//     coverImage: '',
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBookData({
//       ...bookData,
//       [name]: value,
//     });
//     // Clear error for this field when user starts typing again
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: '',
//       });
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!bookData.title.trim()) {
//       newErrors.title = 'Title is required';
//     }
    
//     if (!bookData.author.trim()) {
//       newErrors.author = 'Author is required';
//     }
    
//     if (!bookData.isbn.trim()) {
//       newErrors.isbn = 'ISBN is required';
//     } else if (!/^[0-9-]{10,17}$/.test(bookData.isbn)) {
//       newErrors.isbn = 'Invalid ISBN format';
//     }
    
//     if (bookData.publicationYear) {
//       const year = parseInt(bookData.publicationYear);
//       const currentYear = new Date().getFullYear();
//       if (isNaN(year) || year < 1000 || year > currentYear + 5) {
//         newErrors.publicationYear = 'Enter a valid publication year';
//       }
//     }

//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//       return;
//     }
    
//     setIsSubmitting(true);
    
//     try {
//       // Replace with your actual API endpoint
//       const response = await fetch('/api/books', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(bookData),
//       });
      
//       if (!response.ok) {
//         throw new Error('Failed to add book');
//       }
      
//       // Book added successfully, navigate to books list
//       navigate('/books');
//     } catch (error) {
//       console.error('Error adding book:', error);
//       setErrors({ submit: 'Failed to add book. Please try again.' });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleCancel = () => {
//     navigate('/books');
//   };

//   return (
//     <div className="add-book-container">
//       <h1>Add New Book</h1>
      
//       <form className="add-book-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="title">Title *</label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={bookData.title}
//             onChange={handleChange}
//             className={errors.title ? 'error' : ''}
//           />
//           {errors.title && <span className="error-message">{errors.title}</span>}
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="author">Author *</label>
//           <input
//             type="text"
//             id="author"
//             name="author"
//             value={bookData.author}
//             onChange={handleChange}
//             className={errors.author ? 'error' : ''}
//           />
//           {errors.author && <span className="error-message">{errors.author}</span>}
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="isbn">ISBN *</label>
//           <input
//             type="text"
//             id="isbn"
//             name="isbn"
//             value={bookData.isbn}
//             onChange={handleChange}
//             className={errors.isbn ? 'error' : ''}
//             placeholder="e.g., 978-3-16-148410-0"
//           />
//           {errors.isbn && <span className="error-message">{errors.isbn}</span>}
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="publicationYear">Publication Year</label>
//           <input
//             type="number"
//             id="publicationYear"
//             name="publicationYear"
//             value={bookData.publicationYear}
//             onChange={handleChange}
//             className={errors.publicationYear ? 'error' : ''}
//             placeholder="e.g., 2023"
//           />
//           {errors.publicationYear && <span className="error-message">{errors.publicationYear}</span>}
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="genre">Genre</label>
//           <select
//             id="genre"
//             name="genre"
//             value={bookData.genre}
//             onChange={handleChange}
//           >
//             <option value="">Select Genre</option>
//             <option value="Fiction">Fiction</option>
//             <option value="Non-Fiction">Non-Fiction</option>
//             <option value="Science Fiction">Science Fiction</option>
//             <option value="Fantasy">Fantasy</option>
//             <option value="Mystery">Mystery</option>
//             <option value="Romance">Romance</option>
//             <option value="Biography">Biography</option>
//             <option value="History">History</option>
//             <option value="Business">Business</option>
//             <option value="Self-Help">Self-Help</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="description">Description</label>
//           <textarea
//             id="description"
//             name="description"
//             value={bookData.description}
//             onChange={handleChange}
//             rows="4"
//           />
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="coverImage">Cover Image URL</label>
//           <input
//             type="text"
//             id="coverImage"
//             name="coverImage"
//             value={bookData.coverImage}
//             onChange={handleChange}
//             placeholder="https://example.com/book-cover.jpg"
//           />
//         </div>
        
//         {bookData.coverImage && (
//           <div className="cover-preview">
//             <img 
//               src={bookData.coverImage} 
//               alt="Book cover preview" 
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src = '/placeholder-cover.png';
//                 e.target.classList.add('error-image');
//               }}
//             />
//           </div>
//         )}
        
//         {errors.submit && <div className="submit-error">{errors.submit}</div>}
        
//         <div className="form-actions">
//           <button 
//             type="button" 
//             onClick={handleCancel} 
//             className="cancel-button"
//             disabled={isSubmitting}
//           >
//             Cancel
//           </button>
//           <button 
//             type="submit" 
//             className="submit-button"
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? 'Adding...' : 'Add Book'}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddBookPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddBookPage.css';

const AddBookPage = () => {
  const navigate = useNavigate();
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    isbn: '',
    publicationYear: '',
    genre: '',
    description: '',
    coverImage: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!bookData.title.trim()) newErrors.title = 'Title is required';
    if (!bookData.author.trim()) newErrors.author = 'Author is required';
    if (!bookData.isbn.trim()) {
      newErrors.isbn = 'ISBN is required';
    } else if (!/^[0-9-]{10,17}$/.test(bookData.isbn)) {
      newErrors.isbn = 'Invalid ISBN format';
    }
    if (bookData.publicationYear) {
      const year = parseInt(bookData.publicationYear);
      const currentYear = new Date().getFullYear();
      if (isNaN(year) || year < 1000 || year > currentYear + 5) {
        newErrors.publicationYear = 'Enter a valid publication year';
      }
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);

    try {
      const existingBooks = JSON.parse(localStorage.getItem('books')) || [];
      const newBook = { ...bookData, id: Date.now() };
      const updatedBooks = [...existingBooks, newBook];
      localStorage.setItem('books', JSON.stringify(updatedBooks));

      navigate('/books'); // Redirect after saving
    } catch (error) {
      console.error('Error adding book:', error);
      setErrors({ submit: 'Failed to add book. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate('/books');
  };

  return (
    <div className="add-book-container">
      <h1>Add New Book</h1>
      
      <form className="add-book-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={bookData.title}
            onChange={handleChange}
            className={errors.title ? 'error' : ''}
          />
          {errors.title && <span className="error-message">{errors.title}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="author">Author *</label>
          <input
            type="text"
            id="author"
            name="author"
            value={bookData.author}
            onChange={handleChange}
            className={errors.author ? 'error' : ''}
          />
          {errors.author && <span className="error-message">{errors.author}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="isbn">ISBN *</label>
          <input
            type="text"
            id="isbn"
            name="isbn"
            value={bookData.isbn}
            onChange={handleChange}
            className={errors.isbn ? 'error' : ''}
            placeholder="e.g., 978-3-16-148410-0"
          />
          {errors.isbn && <span className="error-message">{errors.isbn}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="publicationYear">Publication Year</label>
          <input
            type="number"
            id="publicationYear"
            name="publicationYear"
            value={bookData.publicationYear}
            onChange={handleChange}
            className={errors.publicationYear ? 'error' : ''}
            placeholder="e.g., 2023"
          />
          {errors.publicationYear && <span className="error-message">{errors.publicationYear}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <select id="genre" name="genre" value={bookData.genre} onChange={handleChange}>
            <option value="">Select Genre</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Mystery">Mystery</option>
            <option value="Romance">Romance</option>
            <option value="Biography">Biography</option>
            <option value="History">History</option>
            <option value="Business">Business</option>
            <option value="Self-Help">Self-Help</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" value={bookData.description} onChange={handleChange} rows="4" />
        </div>
        
        <div className="form-group">
          <label htmlFor="coverImage">Cover Image URL</label>
          <input
            type="text"
            id="coverImage"
            name="coverImage"
            value={bookData.coverImage}
            onChange={handleChange}
            placeholder="https://example.com/book-cover.jpg"
          />
        </div>
        
        {bookData.coverImage && (
          <div className="cover-preview">
            <img 
              src={bookData.coverImage} 
              alt="Book cover preview" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/placeholder-cover.png';
                e.target.classList.add('error-image');
              }}
            />
          </div>
        )}
        
        {errors.submit && <div className="submit-error">{errors.submit}</div>}
        
        <div className="form-actions">
          <button type="button" onClick={handleCancel} className="cancel-button" disabled={isSubmitting}>
            Cancel
          </button>
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Adding...' : 'Add Book'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBookPage;