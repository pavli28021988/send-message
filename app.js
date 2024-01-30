const form =  document.getElementById('message-form');
const message = document.getElementById('message');
const feedback = document.querySelector('.feedback');
const messageContent = document.querySelector('.message-content');

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(message.value === ''){
        /* feedback.style.display = 'block'; */

        feedback.classList.add('show');
        setTimeout(()=>{

            feedback.classList.remove('show');

        },4000)
    }else{

        messageContent.textContent = message.value;
        message.value = '';

    }



})

/* form.addEventListener('submit', (e)=>{

})
 */
