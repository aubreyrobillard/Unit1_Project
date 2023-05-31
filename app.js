const $body = $('body')
console.log($body)



 
const $searchForm = $('form')
 
$searchForm.on('submit', event => {
        
        // prevents refreshign of page after search
        event.preventDefault()
        
        //defined variables
        const formData = new FormData(event.target);
        const bug = formData.get('bug').toLowerCase();
        const $imgScreen = $('.screen-img');
        const $result = $('.screen-txt');
        
        
        const url = (`https://acnhapi.com/v1/bugs/` + bug)
        console.log(url)

     
        

        $.ajax(url)
                .then((data) =>  {
                        console.log(data)
                        $result.html(`
                        <div>
                                ${data.id}
                        </div>
                        `)
                        $imgScreen.html(`<img src=${data.image_uri} alt=${data.name}>`)
                })
                

        
     
 
})



