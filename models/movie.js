const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema({

  country: { // страна создания фильма
    type: String,
    required: true,
  },

  director: { // режиссёр фильма
    type: String,
    required: true,
  },

  duration: { // длительность фильма
    type: Number,
    required: true,
  },

  year: { // год выпуска фильма
    type: String,
    required: true,
  },

  description: { // описание фильма
    type: String,
    required: true,
  },

  image: { // ссылка на постер к фильму
    type: String,
    required: true,
    validate: [validator.isURL, 'Некорректный url'],
  },

  trailerLink: { // ссылка на трейлер фильма
    type: String,
    required: true,
    validate: [validator.isURL, 'Некорректный url'],
  },

  thumbnail: { // миниатюрное изображение постера к фильму
    type: String,
    required: true,
    validate: [validator.isURL, 'Некорректный url'],
  },

  owner: { // _id пользователя, который сохранил фильм
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },

  // movieId: { // _id фильма
  //   type: mongoose.Schema.Types.ObjectId,
  //   // ref: 'user',
  //   required: true,
  // },

  nameRU: { // название фильма на русском языке
    type: String,
    required: true,
  },

  nameEN: { // название фильма на английском языке
    type: String,
    required: true,
  },

});

module.exports = mongoose.model('movie', movieSchema);
