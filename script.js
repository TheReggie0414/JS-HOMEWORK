const itemsPerPage = 5;
const data = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);

const contentContainer = document.getElementById('content');
const paginationContainer = document.getElementById('pagination');

const displayPage = (page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageItems = data.slice(startIndex, endIndex);

    contentContainer.innerHTML = '';

    for (const item of pageItems) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = item;
        contentContainer.appendChild(card);
    }
};

const renderPagination = () => {
    const totalPages = Math.ceil(data.length / itemsPerPage);

    paginationContainer.innerHTML = '';

    for (let page = 1; page <= totalPages; page++) {
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.classList.add('page-link');
        pageLink.textContent = page;

        pageLink.addEventListener('click', (event) => {
            event.preventDefault();
            const currentPage = parseInt(event.target.textContent, 10);
            displayPage(currentPage);
        });

        const listItem = document.createElement('li');
        listItem.appendChild(pageLink);

        paginationContainer.appendChild(listItem);
    }
};

displayPage(1);
renderPagination();