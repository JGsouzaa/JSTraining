var eBooks = [
    { title: "PHP for Absolute Begginers",
    autor: "Jason Lengstorf",
    readingStatus: false },

    { title: "PHP for Absolute Begginers 2",
    autor: "Jason Lengstorf",
    readingStatus: false },

    { title: "PHP for Absolute Begginers 3",
    autor: "Jason Lengstorf",
    readingStatus: false },
];

for ( var k = 0; k < eBooks.length; k++ ) {
   
    var book = "'" + eBooks[k].title + "'" + "by " + eBooks[k].autor;
    if ( eBooks[k].readingStatus ) {
        document.write("Already read " + book + "<br>");
    }
    else {
        document.write("Still need to read" + book + "<br>");
    }
}