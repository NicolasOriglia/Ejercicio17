const boton = document.querySelector('#btn');

boton.addEventListener('click', ()=>{
    alert('You clicked');
});

$(()=>{
    $('#btn').click(()=>{
        console.log('hola, estoy utilizado JQuery!');
    })
})