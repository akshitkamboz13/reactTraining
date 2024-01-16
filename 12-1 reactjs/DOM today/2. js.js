// Function to create and append a new list item
function appendListItem(text) {
    const listItem = document.createElement('li');
    listItem.textContent = text;
    return listItem;
}

// Function to create and prepend a new list item
function prependListItem(text) {
    const listItem = document.createElement('li');
    listItem.textContent = text;
    return listItem;
}

// Function to demonstrate DOM manipulation
function manipulateDOM() {
    // Select the container div
    const container = document.getElementById('app');

    // Append items to the container
    container.appendChild(appendListItem('Appended Item 1'));
    container.appendChild(appendListItem('Appended Item 2'));

    // Prepend items to the container
    container.prepend(prependListItem('Prepended Item 1'));
    container.prepend(prependListItem('Prepended Item 2'));
}

// Call the DOM manipulation function
manipulateDOM();
