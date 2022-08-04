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
    let pageNum = '';
    let temp = '';
    
    for(let j = 0; j < fileName.length; j++){
        if(fileName[j]!=='_'){
            fileNameNew+= fileName[j];
        }
        else{
            temp = fileName.slice(j + 1);
            break;
        }
    }

    let k = 0;

    for(; temp[k] !=='.'; k++){
            pageNum+= temp[k];
    }

    fileName = temp.slice(k);
    pageNum = parseInt(pageNum); 
    return {href: href, pageNum: pageNum, fileName: fileName, fileNameNew: fileNameNew};
}

let objPartOfHref = partOfHref();

let href = objPartOfHref.href;
let pageNum = objPartOfHref.pageNum;
let fileName = objPartOfHref.fileName;
let fileNameNew = objPartOfHref.fileNameNew;

$('.arrow-prev').on('click', function(e){
    pageNum--;
    if(pageNum === 0) pageNum = 24;
    fileNameNew+= '_' + pageNum + fileName;
    href+= '/' + fileNameNew;
    window.location.replace(href);
});

$('.arrow-next').on('click', function(e){
    pageNum++;
    if(pageNum === 25) pageNum = 1;
    fileNameNew+= '_' + pageNum + fileName;
    href+= '/' + fileNameNew;
    window.location.replace(href);
});