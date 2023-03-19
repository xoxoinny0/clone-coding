document.querySelector('[type=button]').addEventListener('click', e => {
    document.querySelector('#popup').classList.remove('displaynone');
    document.querySelector('#shadow').classList.remove('displaynone');
})

document.querySelector('.remove').addEventListener('click', e => {
    document.querySelector('#popup').classList.add('displaynone');
    document.querySelector('#shadow').classList.add('displaynone');
})