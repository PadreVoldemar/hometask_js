'use strict';

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

const post1 = new Post('vladimir', 'abiens abi', new Date());
console.log(post1);
post1.edit('tertium non datur');
console.log(post1);


class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const attached1 = new AttachedPost('admin', 'abiens2 abi2', new Date());
console.log(attached1);
attached1.makeTextHighlighted();
attached1.edit('tertium2 non2 datur2');
console.log(attached1);
