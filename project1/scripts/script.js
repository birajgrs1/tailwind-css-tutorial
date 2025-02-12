document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', function () {
        let answer = this.nextElementSibling;
        let icon = this.querySelector('.toggle-icon');

        if (answer.classList.contains('hidden')) {
            document.querySelectorAll('.faq-answer').forEach(ans => ans.classList.add('hidden'));
            document.querySelectorAll('.toggle-icon').forEach(icn => icn.textContent = '+');

            answer.classList.remove('hidden');
            icon.textContent = 'x';
        } else {
            answer.classList.add('hidden');
            icon.textContent = '+';
        }
    });
});