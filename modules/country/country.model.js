var mongoose = require('mongoose');
var countrySchema = new mongoose.Schema({
  name: {type:String},
  topLevelDomain: [{
    type: String
  }],
  alpha2Code: String,
  alpha3Code: String,
  callingCodes: [{
    type: String
  }],
  capital: String,
  altSpellings: [{
    type: String
  }],
  region: String,
  subregion: String,
  population: Number,
  latlng: [{
    type: String
  }],
  demonym: String,
  area: Number,
  gini: Number,
  timezones: [
    {
      type: String
    }],
  borders: [
    {
      type: String
    }],
  nativeName: String,
  numericCode: Number,
  currencies: [
    {
      type: String
    }],
  languages: [
    {
      type: String
    }],

  // translations: [
  //   {
  //     type: String
  //   }],
  relevance: Number



});
let country = mongoose.model('country', countrySchema);

module.exports = country