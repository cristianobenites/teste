import "dotenv/config.js";
import app from './src/app.js';

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening http://localhost:${port} :)` )
});
