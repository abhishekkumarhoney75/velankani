var xhr = new XMLHttpRequest();

xhr.open('POST', 'https://8wkzqnpku5.execute-api.eu-north-1.amazonaws.com/dev/compare-yourself');
xhr.onreadystatechange = function(event) {
  console.log(event.target.response);
}

xhr.send();

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://8wkzqnpku5.execute-api.eu-north-1.amazonaws.com/dev/fetch-data');
xhr.onreadystatechange = function(event) {
  console.log(event.target.response);
}

xhr.send();