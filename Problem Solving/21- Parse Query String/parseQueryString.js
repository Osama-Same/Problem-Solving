/*parseQueryString   */

/*  
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.
If the url does not contain a query string, return undefined
*/
//url.indexOf('?')

function parseQueryString(m) {
  var data = m.parseQueryString("a=hello&b=world");
  return data;
}
console.log(parseQueryString("http://example.com?a=hello&b=99")); // [ [ "a", "hello" ], [ "b", "99" ] ]
console.log(parseQueryString("http://example.com?msg=hello%20world")); // [ [ "msg", "hello world" ] ]
console.log(parseQueryString("http://example.com")); // undefined
