import cors from 'cors';
import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path'; // uncomment out when deploying to heroku
import {
  getBusinessesByLatLong,
  getBusinessesByAddress,
  getBusinessInfo,
  getBusinessReviews
} from './controllers/yelp';

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'build'))); // uncomment out when deploying to heroku

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html')); // uncomment out when deploying to heroku
});

app.get(`/search/:latitude/:longitude`, (req: express.Request, res: express.Response) => {
  getBusinessesByLatLong(req.params.latitude, req.params.longitude)
    .then(response => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send(`Error retrieving list of businesses: ${err}`);
    })
})

app.get(`/search/:location`, (req: express.Request, res: express.Response) => {
  getBusinessesByAddress(req.params.location)
    .then(response => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send(`Error due to invalid location: ${err}`);
    })
})

app.get(`/:id`, (req: express.Request, res: express.Response) => {
  getBusinessInfo(req.params.id)
    .then(response => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send(`Error retrieving specific business info: ${err}`)
    })
})

app.get(`/:id/reviews`, (req: express.Request, res: express.Response) => {
  getBusinessReviews(req.params.id)
    .then(response => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send(`Error retrieving business reviews: ${err}`)
    })
})

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}!`);
});

module.exports = app;