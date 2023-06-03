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
                        <!-- notes: square brackets for special character naming--!>
                        <div class="result">
                                <b>Name:&nbsp;</b>${data['file-name']}
                        </div>
                        <div class="result">
                                <b>ID:&nbsp;</b>${data.id}
                        </div>
                        <div class="result">
                                <b>Location:&nbsp;</b>${data.availability.location}
                        </div>
                        <div class="result">
                                <b>Rarity:&nbsp;</b>${data.availability.rarity}  
                        </div>
                        <div class="result">
                                <b>Price:&nbsp;</b>${data.price}
                        </div>
                        `)

                        $imgScreen.html(`<img src=${data.image_uri} alt=${data.name}>`)
                })
                

        
     
 
})



