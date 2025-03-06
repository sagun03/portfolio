import { Card, Typography, Grid } from '@mui/material';
import { FaBook, FaHeart } from 'react-icons/fa'; // Import icons from react-icons

const books = ['The Great Gatsby', '1984', 'To Kill a Mockingbird', 'Pride and Prejudice'];
const bookInterests = ['Fiction', 'Dystopian', 'Classic Literature', 'Romance'];

const GradientCards = () => {
  const gradients = [
    '#4A4A4A',
    '#4A4A4A',
    '#4A4A4A',
    '#4A4A4A',
  ]; // Array of gradient colors for the cards

  return (
    <Grid container spacing={4} style={{ padding: '20px' }}>
      {/* Books Column */}
      <Grid item xs={12} md={6}>
        <Typography variant="h5" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
          Books
        </Typography>
        {books.map((book, index) => (
          <Card
            key={index}
            style={{
              background: gradients[index % gradients.length],
              color: 'white',
              borderRadius: '15px',
              marginBottom: '15px',
              padding: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <FaBook size={24} /> {/* Book icon */}
            <Typography variant="h6">{book}</Typography>
          </Card>
        ))}
      </Grid>

      {/* Interests Column */}
      <Grid item xs={12} md={6}>
        <Typography variant="h5" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
          Interests
        </Typography>
        {bookInterests.map((interest, index) => (
          <Card
            key={index}
            style={{
              background: gradients[index % gradients.length], // Cycle through gradients
              color: 'white',
              borderRadius: '15px',
              marginBottom: '15px',
              padding: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <FaHeart size={24} /> {/* Heart icon */}
            <Typography variant="h6">{interest}</Typography>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
};

export default GradientCards;