import app from './app';
import config from './app/config/index';

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`);
});
