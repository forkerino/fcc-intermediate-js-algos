/*Convert HTML Entities 
// Convert the characters &, <, >, " (double quote), and 
' (apostrophe), in a string to their corresponding HTML entities.*/

function convertHTML(str) {
  return str.replace(/&/g, '&amp;').replace(/\"/g, '&quot;')
  .replace(/>/g, '&gt;').replace(/</g, '&lt;').replace("'", "&apos;");
}