import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Express on Vercel'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
