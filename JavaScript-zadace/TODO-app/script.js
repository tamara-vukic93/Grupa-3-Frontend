'use strict'

const addBtn = document.querySelector('#btn-add');
const input = document.getElementById('new-item');
const resultList = document.querySelector('#list');

const handleDelete = (e) => {
    // idi na parenta koji je p i ukloni ga tako da sve nestane(i input i tekst i button, sve)
    const clickedBtn = e.target;
    console.log(clickedBtn);
    const paragraphForDeletion = clickedBtn.parentElement;
    paragraphForDeletion.remove();
}

const handleStrikeToggle = (e) => {
    const changedCheckbox = e.target;
    const spanTextElement = changedCheckbox.nextElementSibling;
    spanTextElement.classList.toggle('striked');
}

const handleItemAdd = () => {
    // dohvati text iz inputa
    // PAZI
    // 1. - da nije prazan text
    // 2. - da nisu samo razmaci i slicno
    const newItemText = input.value.trim();
    if (newItemText.length === 0) {
        return;
    }

    // pravimo: <input type="checkbox" />
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.addEventListener('change', handleStrikeToggle)

    // pravimo: <span>{TEXT}<span/>
    const textSpan = document.createElement('span');
    textSpan.innerText = newItemText;

    // pravimo: <button>X</button>
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'X';
    deleteBtn.addEventListener('click', handleDelete);

    const newParagraph = document.createElement('p');
    newParagraph.appendChild(checkbox);
    newParagraph.appendChild(textSpan);
    newParagraph.appendChild(deleteBtn);

    resultList.appendChild(newParagraph);

    input.value = '';

}

const handleInputKey = (e) => {
    if (e.key === "Enter") {
        handleItemAdd();
    }
}

addBtn.addEventListener('click', handleItemAdd);
input.addEventListener('keypress', handleInputKey);