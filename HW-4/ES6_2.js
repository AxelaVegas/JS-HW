
 /* Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных 
видео -> 3 примеры наследования -> механика наследования), 
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты 
типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с 
помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться 
свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству 
highlighted значение true. */

'use strict'

/* function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function(text) {
    this.text = text;
}

function AttachedPost(author, text, date, highlighted) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
} */

class Post {
    constructor(author, text, date){
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text){
        this.text = text;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let post1 = new Post('alex', 'no text', '2022');
console.log(post1);
post1.edit('new text');
console.log(post1);

let post2 = new AttachedPost('max', 'no text', '2022');
console.log(post2);

post2.makeTextHighlighted();
console.log(post2);

post2.edit('new text');

post1.makeTextHighlighted(); // проверил, что родитель не унаследовал метод потомка
                             // Uncaught TypeError: post1.makeTextHighlighted is not a function

