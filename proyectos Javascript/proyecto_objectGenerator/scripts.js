let stashContainer = document.querySelector('.stash-container');



//open/close stash button
let openCloseBtn = document.querySelectorAll('.open-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (stashContainer.style.display === 'flex') {
            stashContainer.style.display = 'none';
        } else {
            stashContainer.style.display = 'flex';
            stashContainer.style.zIndex = 200;
        }
    })
})
