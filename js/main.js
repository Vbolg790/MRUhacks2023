document.addEventListener('click', function(e){
    let test = e.target;
    let front = document.querySelector('.frontendContainer');
    let back = document.querySelector('.backendContainer');
    let ds = document.querySelector('.datascienceContainer');
    let span = document.querySelector('.spanText');
    if(test.classList.contains("backendbar") && back.classList.contains('hidden')){
        back.classList.remove('hidden');
        front.classList.add('hidden');
        ds.classList.add('hidden');
        span.style.color="#3545FA"
    }
    
    if(test.classList.contains('frontendbar') && front.classList.contains('hidden')){
        back.classList.add('hidden');
        front.classList.toggle('hidden');
        ds.classList.add('hidden');
        span.style.color="#8244C0"
    }

    if(test.classList.contains('datasciencebar') && ds.classList.contains('hidden')){
        back.classList.add('hidden');
        front.classList.add('hidden');
        ds.classList.remove('hidden');
        span.style.color="#68C8B2"
    }
})