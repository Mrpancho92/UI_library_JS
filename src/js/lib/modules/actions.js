import $ from '../core';
// МЕТОДЫ ДЛЯ РАБОТЫ С ЭЛЕМЕНТАМИ НА СТРАНИЦЕ
//------------------------------------------------------------------------------------
// Метод котрый получает или меняет html структуру внутри какого то элемента
$.prototype.html = function(content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        };
    };
    return this;
};
//------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------
// Получение определенного элемента по номеру
$.prototype.eq = function(i) {
    const swap = this[i];
    const objLength = Object.keys(this).length;
    for (let i = 0; i < objLength; i++) {
        delete this[i];
    }
    this[0] = swap;
    this.length = 1;
    return this;
};
//------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------
// Получить номер попорядку среди всех соседей у одного общего родителя
$.prototype.index = function() {
    const parent = this[0].parentNode;
    const childs = [...parent.children];
    const findMyIndex = (item) => {
        return item == this[0];
    };
    return childs.findIndex(findMyIndex);
};
//------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------
// Находит элементы среди уже выбранных элементов 
// (допустим берем все div и из них находим те у которых есть определенный класс)
$.prototype.find = function(selector) {
    let numberOfItems = 0;  // - количество элементов которые подошли по selector
    let counter = 0; // количество новых записаных элементов в this

    const copyObj = Object.assign({}, this); // Cоздание поверхностной неглубокой копии объекта

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector);
        if (arr.length == 0 ) {
            continue;
        }
        for (let j = 0; j < arr.length; j++) {
            this[counter] = arr[j];
            counter++;
        }
        numberOfItems += arr.length;
    }
    this.length = numberOfItems;
    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }
    return this;
};
//------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------
// Метод находит ближайшего родителя с selector у элемента с каким то классом,
// если элементов с классом будет несколько то на каждый будет найден ближайший родитель с selector.
// Пример - $('.some').closest('.findme'); 
$.prototype.closest = function(selector) {
    let counter = 0;
    
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].closest(selector);
        if (this[i] === null || this[i] === undefined) {
            return `Element ${selector} not found`;
        }
        counter++;
    }
    const objLength = Object.keys(this).length;
    for (; counter < objLength; counter++) {
        delete this[counter];
    }
    return this;
};
//------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------
// Получить всех соседей внутри родительсткого блока исключая сам элемент 
// над которым было произведено это действие
$.prototype.siblings = function() {
    let numberOfItems = 0;
    let counter = 0;

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children;
      
        for (let j = 0; j < arr.length; j++) {
            if (copyObj[i] === arr[j]) {
                continue;
            }
            this[counter] = arr[j];
            counter++;
        }
        numberOfItems += arr.length -1;
    }

    this.length = numberOfItems;
    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }
    return this;
};
//------------------------------------------------------------------------------------