'use strict';

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text;
}

const post1 = new Post('vladimir', 'abiens abi', new Date());
console.log(post1);
post1.edit('tertium non datur');
console.log(post1);


function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

const attached1 = new AttachedPost('admin', 'abiens2 abi2', new Date());
console.log(attached1);
attached1.makeTextHighlighted();
attached1.edit('tertium2 non2 datur2');
console.log(attached1);