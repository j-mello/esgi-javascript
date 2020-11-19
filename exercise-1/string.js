function ucfirst(chaine) {
    if (typeof chaine !== "string" || chaine ==="") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine) {
    if (typeof (chaine) != "string" || chaine === "") return "";

    let str = "";
    let words = chaine.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (i > 0) {
            str += " ";
        }
        str += ucfirst(words[i]);
    }
    return str;
}

function camelCase(chaine) {
    if (typeof chaine !== "string" || chaine ==="") return "";
    let str = "";
    let words = chaine.split(" ");
    for (let i = 0; i<words.length; ++i) {
        str += ucfirst(words[i].toLowerCase());
    }
    return str;
}

// console.log(camelCase("je mange des pommes"))

function snake_case(chaine) {
    if (typeof chaine !== "string" || chaine ==="") return "";
    let str = "";
    let words = chaine.split(" ");
    for(let i=0;i<words.length;i++) {
        if (i > 0) {
            str += "_";
        }
        str += words[i].toLowerCase();
    }
    return str;
}

console.log(snake_case("Salut les enfants"));

function replaceAll(str,A,B) {
    while(str.replace(A,B) !== str) {
        str = str.replace(A,B);
    }
    return str;
}

function leet(chaine) {
    if (typeof chaine !== "string" || chaine ==="") return "";
    const toCrypt = {
        A : 4,
        E : 3,
        I : 1,
        O : 0,
        U : "(_)",
        Y : 7
    }
    for (let key in toCrypt) {
        chaine = replaceAll(chaine, key, toCrypt[key]);
        chaine = replaceAll(chaine, key.toLowerCase(), toCrypt[key]);
    }
    return chaine;
}

console.log(leet("Je suis crypte"));


function prop_access(obj, path) {
    if (typeof(obj) != "object" || obj == null) return path +" not exist";
    if (typeof(path) != "string" || path === "") return obj;
    let pathSplitted = path.split(".");
    for (let elem of pathSplitted) {
        if (typeof(obj[elem]) == "undefined") {
            return path+" not exist";
        }
        obj = obj[elem]
    }
    return obj
}


function verlan(chaine) {
    if (typeof chaine !== "string" || chaine ==="") return "";
    let words = chaine.split(" ");

    let str = "";
    for (let i=0;i<words.length;i++)
    {
        if(i>0) str += " ";

        let verlanWord = "";
        for (let j=words[i].length-1; j>=0; j--)
        {
            verlanWord += words[i].charAt(j);
        }
        str += verlanWord;
    }
    return str;
}

function yoda (chaine) {
    if (typeof chaine !== "string" || chaine ==="") return "";

    return chaine.split(" ").reverse.join(" ");
}

function vig (chaine, code) {
    if (typeof chaine !== "string" || chaine ==="") return "";

    chaine = chaine.toLowerCase();

    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    let numByAlpha = {};
    let alphaByNum = {};

    for (let i=0; i <alphabet.length; i++)
    {
        numByAlpha[alphabet.charAt(i)] = i;
        alphaByNum[i] = alphabet.charAt(i);
    }

    let nbSpace = 0;
    let res = "";
    for (let i=0; i<chaine.length;i++)
    {
        let char = chaine[i];

        if (char != " ")
        {
            let charNumber = numByAlpha[char];
            let charCode = code[(i-nbSpace) % code.length];
            let charCodeNumber = numByAlpha[charCode];

            charNumber += charCodeNumber;
            charNumber %= Object.keys(numByAlpha).length;
            char = alphaByNum[charNumber];
        } else {
            nbSpace += 1;
        }
        res += char;
    }
    return res;

}

//console.log(mod(-15,26));
//console.log(vig("antiConstiTutioNnellement", "foo"));

//console.log(verlan({coucou: ""}));
//console.log(capitalize(" test"));


/*let prairie = {
    animal : {
        type: {
            name: "TOTO"
        }
    }
}
console.log(prop_access(null, ""));*/

//console.log(leet("anacOnda"))
//console.log(camelCase(""));