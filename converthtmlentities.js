/*Convert HTML Entities 
// Convert the characters &, <, >, " (double quote), and 
' (apostrophe), in a string to their corresponding HTML entities.*/

function convertHTML(str) {
  return str.replace(/&/g, '&amp;').replace(/\"/g, '&quot;')
  .replace(/>/g, '&gt;').replace(/</g, '&lt;').replace("'", "&apos;");
}

function convertHTML(str) {
  
  const lookup={
    '&': '&amp;',
    '<': '&lt;',
    '>' : '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };

  return str.replace(/([&\"><\'/])/g, (match, p1) => lookup[p1]);
}
    