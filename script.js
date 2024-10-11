document.getElementById('adicionarInfo').addEventListener('click', function () {
    document.getElementById('novaInfoForm').style.display = 'block';
});

document.getElementById('salvarInfo').addEventListener('click', function () {
    let info = document.getElementById('novaInfo').value;
    if (info) {
        let p = document.createElement('p');
        p.textContent = info;
        document.getElementById('perfil').appendChild(p);
        document.getElementById('novaInfoForm').style.display = 'none'
    }
})