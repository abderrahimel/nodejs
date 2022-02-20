const querystring = require('querystring');
const url = 'https://www.example.com/p/a/t/h?course=node&lesson=http';


// Isolate the query string from the url
const queryToParse = url.split('?')[1]; // result: course=node&lesson=http'
// parse the isolated query string into an object of key/value 
// { course: 'node', lesson: 'http' }
const parsedQuery = querystring.parse(queryToParse) 
//  add property to object
parsedQuery.exercise = 'querystring';
//  convert the object to query
const modifiedQueryString = querystring.stringify(parsedQuery);

