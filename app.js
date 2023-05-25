const $body = $('body')
console.log($body)



 
$.ajax(`https://acnhapi.com/v1/bugs/`)
        .then(response => console.log(response))
 
