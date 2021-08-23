const scriptURL = 'https://script.google.com/macros/s/AKfycbwAKq2s8A8tgTgCMb680Zuvj3i1QpB3Mr-im5JUIVtZ6Vxfn_O_Qd91gmsLfY503NV8/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => success(response))
      .catch(error => console.error('Error!', error.message))
})

function success(response) {
    console.log('Success!', response);
    document.getElementById("thanks").style.display = "block";
    document.getElementById("subscribe-btn").style.display = "none";
}