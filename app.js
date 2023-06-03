const $body = $('body')
console.log($body)


// assign title to search box
const $searchForm = $('form')
 
// once "Go!" or "Enter" is pushed, this will happen...
$searchForm.on('submit', event => {
        
        // prevents refreshign of page after search
        event.preventDefault()

        
        //defined variables
        const formData = new FormData(event.target);
        const bug = formData.get('bug').toLowerCase();
        const $imgScreen = $('.screen-img');
        const $result = $('.screen-txt');
        const $imgError = (`<img src="./giphy.gif">`)
        
        // Pull information from API url with searched insects name
        const url = (`https://acnhapi.com/v1/bugs/` + bug)
        // console.log(url)


         // Loading notification
        $imgScreen.empty();
        $(`[name="bug"]`)[0].value = "";
        $result.html(`<div>Searching for Critters...</div>`);

        $.ajax(url)
                .then((data) =>  {
                        console.log(data)
                        // divs for lines of results displayed in text screen
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
                                <b>Price:&nbsp;</b>$${data.price}
                        </div>
                        `)
                        // API image pulled from array to display in image screen
                        $imgScreen.html(`<img src=${data.image_uri} alt=${data.name}>`)

                })
                // catch typos with an error message
                .catch(() => {
                        $result.html(`<div> Sorry, no insect on file</div>`);
                        // display error image
                        $imgScreen.html($imgError)
                })
                
})



