'use strict';

//ПЕРЕКЛЮЧЕНИЕ PREV/NEXT-СТРАНИЦ
function partOfHref(){
    let href = document.location.href;
    let fileName = '';
    
    for(let i = href.length - 1; i >= 0; i--){ 
            if(href[i]!=='/'){
                fileName = href[i] + fileName;
            }
            else {
                href = href.slice(0 , i);
                break;
            }
    }

    let fileNameNew = '';
    let pageNum = 1;

    for(let j = 0; j < fileName.length; j++){
        if(fileName[j]!=='_'){
            fileNameNew+= fileName[j];
        }
        else{
            pageNum = parseInt(fileName.slice(j + 1, j+ 2)); //+1
            fileName = fileName.slice(j + 2 );
            // if(pageNum === 25) pageNum = 1;
            // fileNameNew+= '_' + pageNum + fileName;
            // break;
        }
    }
    // href+= '/' + fileNameNew;
    // window.location.replace(href);
    return {href: href, pageNum: pageNum, fileName: fileName, fileNameNew: fileNameNew};
}