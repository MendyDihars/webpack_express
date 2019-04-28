document.querySelectorAll('.export').forEach(btn => {
    let form = document.getElementById("form");
    let input = document.getElementById("input");
    btn.addEventListener('click', () => {
        input.value = btn.dataset.value;
        form.submit();
    })
})