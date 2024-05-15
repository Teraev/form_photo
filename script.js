const form = document.forms.namedItem('signin')
const inputs = form.querySelectorAll('input')
const ageInput = document.querySelector('#age');
const fileInput = document.getElementById('file');
const previewImg = document.getElementById('preview');


// inputs[0].oninput = (e) => {
//     console.log(inputs[0].value);
// }



form.onsubmit = (e) => {
    e.preventDefault();
    let error_counter = 0
    
    fileInput.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const Filereader = new FileReader();
            Filereader.onload = function () {
                previewImg.src = Filereader.result;
                previewImg.style.display = 'flex';
            };
            Filereader.readAsDataURL(file);
        } else {
            previewImg.src = '';
            previewImg.style.display = 'none';
        }
    };

    inputs.forEach(inp => {
        const parent = inp.parentElement
        if (inp.value.length === 0 && parent.classList.contains('req')) {
            parent.classList.add('error')
            error_counter++
            return
        }
    })

    if (error_counter > 0) {
        return
    }
    submit(e)
}



function submit(e) {
    const user = {}
    const fm = new FormData(e.target)

    fm.forEach((val, key) => user[key] = val)


    console.log(user);
}

ageInput.oninput = () => {
    let age = ageInput.value;
    const parent2 = ageInput.parentElement;

    if (isNaN(age)) {
        parent2.classList.add('error');
        return
    } else {
        parent2.classList.remove('error');
    }
};