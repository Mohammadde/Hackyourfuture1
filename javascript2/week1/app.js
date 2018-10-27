let bookNames = 
                ["oca_oracle_certified_associate_java_se_8_programme",//Jeanne Boyarsky, Scott Selikoff
                "the_c++_programming_language,_4th_edition",//Bjarne Stroustrup
                "python_programming:_an_introduction_to_computer_science",//John Zelle
                "extreme_programming_pocket_guid",//Ward Cunningham
                "a_smarter_way_to_learn_javaScript",//Mark Myers
                "full_stack_react_projects",//Shama Hoque
                "thinking_in_java",//Bruce Eckel
                "mastering_node_js_second_edition",//Sandro Pasquali
                "mysql_8_Administrators_guide",//Chintan Mehta
                "the_road_to_learn_react",//Robin Wieruch
                ];
/** Titles:
 * OCA Oracle Certified Associate Java SE 8 Programme 
 * The C++ Programming Language, 4th Edition
 * Python Programming: An Introduction to Computer Science
 * Extreme Programming Pocket Guid
 * A Smarter Way to Learn JavaScript
 * Full-Stack React Projects:Modern web development using React 16, Node, Express, and MongoDB
 * Thinking in Java
 * Mastering Node.js Second Edition
 * MySQL 8 Administrator's Guide
 * The road to learn React
*/

// console.log(bookNames);
// write books id on HTML from an array
function createUl(arr){
    let ul = document.createElement('ul');
    ul.setAttribute('id','booksName');
    document.body.appendChild(ul)
    for (let i=0; i<arr.length; i++){
      let li = document.createElement('li');
      li.setAttribute('id', i);
      li.innerHTML = arr[i];
      ul.appendChild(li);
    }
}

// createUl(bookNames);

// books object
let books = {
    oca_oracle_certified_associate_java_se_8_programme:
    {
        title: "OCA Oracle Certified Associate Java SE 8 Programme",
        language: "english",
        author: "Jeanne Boyarsky"
    },
    the_cplusplus_programming_language_4th_edition:
    {
        title: "The C++ Programming Language, 4th Edition",
        language: "english",
        author: "Bjarne Stroustrup"
    },
    
    python_programming_an_introduction_to_computer_science:
    {
        title: "Python Programming: An Introduction to Computer Science",
        language: "english",
        author: "John Zelle"
    },
    extreme_programming_pocket_guid:
    {
        title: "Extreme Programming Pocket Guid",
        language: "english",
        author: "Ward Cunningham"
    },

    a_smarter_way_to_learn_javaScript:
    {
        title: "A Smarter Way to Learn JavaScript",
        language: "english",
        author: "Mark Myers"
    },

    full_stack_react_projects:
    {
        title: "Full-Stack React Projects:Modern web development using React 16, Node, Express, and MongoDB",
        language: "english",
        author: "Shama Hoque"
    },

    thinking_in_java:
    {
        title: "Thinking in Java",
        language: "english",
        author: "Bruce Eckel"
    },

    mastering_node_js_second_edition:
    {
        title: "Mastering Node.js Second Edition",
        language: "english",
        author: "Sandro Pasquali"
    },

    mysql_8_Administrators_guide:
    {
        title: "MySQL 8 Administrator's Guide",
        language: "english",
        author: "Chintan Mehta"
    },
                
                
    the_road_to_learn_react:
    {
        title: "The road to learn React",
        language: "english",
        author: "Robin Wieruch"
    },

}

// write books object on HTML
function viewBooks(obj) {
    let booksUl = document.createElement('ul');
    document.body.appendChild(booksUl)
      for (let i=0; i<Object.keys(obj).length; i++){
        let book_li = document.createElement('li');
        book_li.setAttribute('id', Object.keys(obj)[i]);
        booksUl.appendChild(book_li);
  
        let title = document.createElement('h1');
        title.innerHTML = obj[Object.keys(obj)[i]].title;
  
        let language = document.createElement('h2');
        language.innerHTML = obj[Object.keys(obj)[i]].language;
  
        let author = document.createElement('h2');
        author.innerHTML = obj[Object.keys(obj)[i]].author;
        book_li.appendChild(title);
        book_li.appendChild(language);
        book_li.appendChild(author);
    }
}

// viewBooks(books);

let booksCover = { 
    Microsoft Flight Simulator:"./img/img1.jpg",

    Tiltfactor Laboratory:"./img/img2.jpg",
    
    A Force More Powerful:"./img/img3.jpg",

    Darfur is Dying:"./img/img4.jpg",

    PeaceMaker:"./img/img5.jpg",

    World Without Oil:"./img/img6.jpg",

    IBM City One:"./img/img7.jpg",

    A man called Ove:"./img/img8.jpg",

    So far so close:"./img/img9.jpg",          
                
    jungles hamilton briston:"./img/img10.jpg",
}

//To view book imgage at the appropriate li
function viewImages(obj){
//   console.log("calling viewImages function ");
//   console.log(obj);
  for (let i=0; i<Object.keys(obj).length; i++){
    let li = document.getElementById(Object.keys(obj)[i]);
    let img = document.createElement('img');
    let key = Object.keys(obj)[i];
    img.setAttribute("src", obj[key]);
    img.setAttribute("alt", "books cover");
    li.appendChild(img);
    }
  }
  
// viewImages(booksCover);