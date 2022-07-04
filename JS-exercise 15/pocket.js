const newButton=document.querySelector(".new-button");
const delButton=document.querySelector(".delete-button");
const modalBg1=document.querySelector("#modal1Bg");
const modalBg2=document.querySelector(".modal2-bg")
const modalBg3=document.querySelector("#modal3Bg");
const modal1=document.querySelector(".modal1");
const closeModal1=document.querySelector(".close-modal1");
const closeModal2=document.querySelector(".close-modal2");
const closeModal3=document.querySelector("#closeModal3");
const notesTitle=document.querySelector("#notesTitle");
const imageURL=document.querySelector("#imageUrl");
const content=document.querySelector("#content");
const firstColor=document.querySelector("#newFirstColor");
const secondColor=document.querySelector("#newSecondColor");
const thirdColor=document.querySelector("#newThirdColor");
const fourthColor=document.querySelector("#newFourthColor");
const fifthColor=document.querySelector("#newFifthColor");
const firstColorCheck=document.querySelector("#tickFirst");
const secondColorCheck=document.querySelector("#tickSecond");
const thirdColorCheck=document.querySelector("#tickThird");
const fourthColorCheck=document.querySelector("#tickFourth");
const fifthColorCheck=document.querySelector("#tickFifth");
const addButton=document.querySelector(".add-button");
const container=document.querySelector(".container");
const notesTitleErr=document.querySelector(".notes-title");
const contentErr=document.querySelector(".content");
const yesDeleteButton=document.querySelector(".yes-delete");
const emptyNotes=document.querySelector(".empty-notes");
const notesContainerClick=document.querySelector(".notes-container");
const individualTitle=document.querySelector(".individual-title");
const individualDate=document.querySelector(".individual-date");
const individualImg=document.querySelector(".individual-image");
const individualDescription=document.querySelector(".individual-description");
const individualNoteContainer=document.querySelector(".individual-note");
const individualNoteColor=document.querySelector(".note-color");
const backArrow=document.querySelector(".fa-arrow-left");
const individualDelete=document.querySelector(".delete");
const editButton=document.querySelector(".edit-button");
const editNotesTitle=document.querySelector(".edit-notes-title");
const editNotesContent=document.querySelector(".edit-content");
const editImgUrl=document.querySelector(".edit-img");
const saveButton=document.querySelector(".save-button");
const editFirstColor=document.querySelector("#editFirstColor");
const editSecondColor=document.querySelector("#editSecondColor");
const editThirdColor=document.querySelector("#editThirdColor");
const editFourthColor=document.querySelector("#editFourthColor");
const editFifthColor=document.querySelector("#editFifthColor");
const individualDeleteModal=document.querySelector("#individualDelete");
const closeEditDeleteModal=document.querySelector("#closeEditDeleteModal");
const confirmIndividualDelete=document.querySelector("#confirmIndividualDelete");
const loadButton=document.querySelector(".load-button");
const editTickFirst=document.querySelector(".edit-tick-first");
const editTickSecond=document.querySelector(".edit-tick-second");
const editTickThird=document.querySelector(".edit-tick-third");
const editTickFourth=document.querySelector(".edit-tick-fourth");
const editTickFifth=document.querySelector(".edit-tick-fifth");
const editCloseModal=document.querySelector("#editCloseModal");
const editClose=document.querySelector("#closeEditModalWarning");
const confirmEditClose=document.querySelector("#confirmEditClose");
const editTitleErr=document.querySelector("#editNotesTitleErr");
const editContentErr=document.querySelector("#editContentErr");

/*initial declarations*/
let noteTitle="";
let bgColor="";
let editBgColor="";
let notesT="";
let imageUrl="";
let contentt="";
let notesDate="";
let storageCount=localStorage.getItem("count");
let individualNote="";
let editTitle="";
let editContent="";
let editImageUrl="";
let load=0;
let loadCount=10;
let j=1;
let i="";
let selectedNote="";

//load more Handler
const loadMoreHandler=()=> {
    load=0;
    localStorageHandler();
}

//local storage handler for fetching all added notes
const localStorageHandler=()=> {
    if(!(localStorage.getItem("count")))
    {
        delButton.classList.add("display");
        emptyNotes.classList.remove("display");
        loadButton.classList.add("display");
    }
    if(localStorage.getItem("count")!=0)
    {
        for(i=j;i<=storageCount;i++)
        {
            if(i==storageCount)
            {
                j=i+1;
                loadButton.classList.add("display");
                emptyNotes.classList.add("display");
                delButton.classList.remove("display");
            }
            if(localStorage.getItem(`${i}`))
            {
                ++load;
                if(load<=loadCount)
                    {
                        container.insertAdjacentHTML('beforeend',localStorage.getItem(`${i}`));
                    }  
                else 
                {
                    j=i;
                    emptyNotes.classList.add("display");
                    delButton.classList.remove("display");
                    bgColor=window.getComputedStyle( firstColor ,null).getPropertyValue('background-color');
                    editBgColor=window.getComputedStyle( editFirstColor ,null).getPropertyValue('background-color');
                    firstColorCheck.classList.remove("display");
                    firstColorCheck.classList.add("tick");
                    editTickFirst.classList.remove("display");
                    editTickFirst.classList.add("tick")
                    container.classList.remove("display");
                    loadButton.classList.remove("display");
                    return;
                }
            }   
            else {
                delButton.classList.add("display");
                emptyNotes.classList.remove("display");
            }              
        }
    }  
    else 
    {
        delButton.classList.add("display");
        emptyNotes.classList.remove("display");
        loadButton.classList.add("display");
    }
    bgColor=window.getComputedStyle( firstColor ,null).getPropertyValue('background-color');
    editBgColor=window.getComputedStyle( editFirstColor ,null).getPropertyValue('background-color');
    firstColorCheck.classList.remove("display");
    firstColorCheck.classList.add("tick");
    editTickFirst.classList.remove("display");
    editTickFirst.classList.add("tick")
    container.classList.remove("display");
};
//end of local storage handler
localStorageHandler();

//local storage reset handler
const localStorageResetHandler=()=>
{
    modalBg2.classList.add("display");
    let count=localStorage.getItem("count");
    for(let i=1;i<=storageCount;i++)
    {
        localStorage.removeItem(`${i}`);
    }
    let child = container.lastElementChild; 
        while (child) {
            container.removeChild(child);
            child = container.lastElementChild;
        }
    localStorage.setItem("count",0);
    storageCount=0;
    container.classList.add("display");
    emptyNotes.classList.remove("display");
    delButton.classList.add("display");
    loadButton.classList.add("display");
}
//end of local storage reset handler

//first modal display handler
const firstModalDisplayHandler=()=>
{
     modalBg1.classList.remove("display");
}
//first modal close handler
const closeFirstModalHandler=()=>
{
    modalBg1.classList.add("display");
}
//second modal display handler
const secondModalDisplayHandler=()=>
{
     modalBg2.classList.remove("display");
}
//second modal close handler
const closeSecondModalHandler=()=>
{
    modalBg2.classList.add("display");
}
//notes title,image url,content fetching handler
const notesTitleHandler=(e)=> {
       notesT=e.target.value;
       addButton.classList.remove("opacity"); 
}
const imageUrlHandler=(e)=> {
    imageUrl=e.target.value;
}
const contentHandler=(e)=> {
    contentt=e.target.value;
    addButton.classList.remove("opacity"); 
}

//new note color select handler
const newNoteColorClickHandler=(e)=> {
    
    firstColorCheck.classList.add("display");
    firstColorCheck.classList.remove("tick");
    secondColorCheck.classList.add("display");
    secondColorCheck.classList.remove("tick");
    thirdColorCheck.classList.add("display");
    thirdColorCheck.classList.remove("tick");
    fourthColorCheck.classList.add("display");
    fourthColorCheck.classList.remove("tick");
    fifthColorCheck.classList.add("display");
    fifthColorCheck.classList.remove("tick");


    if(e.path[2].id==="newFirstColor" || e.path[0].id==="newFirstColor")
    {
        firstColorCheck.classList.remove("display");
        firstColorCheck.classList.add("tick");
        bgColor=window.getComputedStyle( firstColor ,null).getPropertyValue('background-color');
    }
    else if(e.path[2].id==="newSecondColor" || e.path[0].id==="newSecondColor")
    {
        secondColorCheck.classList.remove("display");
        secondColorCheck.classList.add("tick");
        bgColor=window.getComputedStyle( secondColor ,null).getPropertyValue('background-color');
    }
    else if(e.path[2].id==="newThirdColor" || e.path[0].id==="newThirdColor")
    {
        thirdColorCheck.classList.remove("display");
        thirdColorCheck.classList.add("tick");
        bgColor=window.getComputedStyle( thirdColor ,null).getPropertyValue('background-color');
    }
    else if(e.path[2].id==="newFourthColor" || e.path[0].id==="newFourthColor")
    {
        fourthColorCheck.classList.remove("display");
        fourthColorCheck.classList.add("tick");
        bgColor=window.getComputedStyle( fourthColor ,null).getPropertyValue('background-color');
    }
    else if(e.path[2].id==="newFifthColor" || e.path[0].id==="newFifthColor")
    {
        fifthColorCheck.classList.remove("display");
        fifthColorCheck.classList.add("tick");
        bgColor=window.getComputedStyle( fifthColor ,null).getPropertyValue('background-color');
    }    
}

//notes container click handler
const notesContainerClickHandler=(e)=> {

    if(String(e.path[1].className)=="notes-container")
    {
        backArrow.classList.remove("display");
        delButton.classList.add("display");
        individualDelete.classList.remove("display");
        newButton.classList.add("display");
        editButton.classList.remove("display");
        individualNote=e.path[1].outerHTML;
        if(e.path[1].childNodes[3]) 
        {
            container.classList.add("display");
            individualImg.classList.remove("display");
            individualNoteContainer.classList.remove("display");
            individualTitle.textContent=e.path[1].childNodes[0].innerText;
            individualDate.textContent=e.path[1].childNodes[1].innerText;
            individualImg.src=e.path[1].childNodes[2].attributes[0].nodeValue;
            individualDescription.textContent=e.path[1].childNodes[3].innerText;
            individualNoteColor.style.background=e.path[1].style.background;
            editNotesTitle.value=e.path[1].childNodes[0].innerText;
            editNotesContent.value=e.path[1].childNodes[3].innerText;
            editImgUrl.value=e.path[1].childNodes[2].attributes[0].nodeValue;
            editImageUrl=e.path[1].childNodes[2].attributes[0].nodeValue;
            editTitle=e.path[1].childNodes[0].innerText;
            editContent=e.path[1].childNodes[3].innerText;
        }
        else
        {
            container.classList.add("display");
            individualNoteContainer.classList.remove("display");
            individualTitle.textContent=e.path[1].childNodes[0].innerText;
            individualDate.textContent=e.path[1].childNodes[1].innerText;
            individualImg.classList.add("display");
            individualDescription.textContent=e.path[1].childNodes[2].innerText;
            individualNoteColor.style.background=e.path[1].style.background;
            editNotesTitle.value=e.path[1].childNodes[0].innerText;
            editNotesContent.value=e.path[1].childNodes[2].innerText;
            editTitle=e.path[1].childNodes[0].innerText;
            editContent=e.path[1].childNodes[2].innerText;
        }
    }
};
//end of notes container click handler

//note create handler
const noteCreateHandler=()=>
{
    if(notesT && contentt)
    {
        container.classList.remove("display");
        storageCount++;
        let date=new Date();
        let mon=date.toLocaleString('default', { month: 'short' })
        let dd = String(date.getDate()).padStart(2, '0');;
        let yyyy = date.getFullYear();
        notesTitleErr.classList.add("display");
        contentErr.classList.add("display");
        const notesDiv=document.createElement("div");
        const h1=document.createElement("h1");
        h1.append(notesT);
        h1.classList.add("note-title");
        notesDiv.appendChild(h1);
        const p=document.createElement("p");
        p.style.height="70%";
        p.style.marginTop="5%";
        const notesD=document.createElement("p");
        notesD.append(`${mon} ${dd},${yyyy}`);
        notesD.classList.add("date");
        notesDiv.append(notesD);
        if(imageUrl)
        {
            const img=document.createElement("img");
            img.src=imageUrl;
            img.classList.add("image");
            notesDiv.append(img);
            p.style.height="20%";
            p.style.marginTop=0;
        }
        p.append(contentt);
        p.classList.add("notes-content");
        notesDiv.style.background=bgColor;
        notesDiv.classList.add("notes-container");
        notesDiv.append(p);
        localStorage.setItem(`${storageCount}`,notesDiv.outerHTML);
        container.append(notesDiv);
        localStorage.setItem("count",storageCount);
        emptyNotes.classList.add("display");
        delButton.classList.remove("display");
    }
    else if (notesT && !contentt) {
        contentErr.classList.remove("display");
        notesTitleErr.classList.add("display");
    }
    else {
        notesTitleErr.classList.remove("display");
        contentErr.classList.add("display");
    }
};
//end of note create handler

//save and edit handler
const saveEditHandler=()=> {
        if(editTitle && editContent)
        {
            editContentErr.classList.add("display");
            editTitleErr.classList.add("display");
            modalBg3.classList.add("display");
            individualDeleteModal.classList.add("display");
            individualNoteContainer.classList.add("display");
            for(let i=1;i<=storageCount;i++)
            {
                if(localStorage.getItem(i)!==null)
                {
                    if(localStorage.getItem(i)===individualNote)
                    {
                        localStorage.removeItem(i);
                        var child = container.lastElementChild; 
                        while (child) {
                            container.removeChild(child);
                            child = container.lastElementChild;
                        }
                        if(localStorage.getItem("count")!=0)
                        {
                            for(let i=1;i<=storageCount;i++)
                            {
                                if(localStorage.getItem(`${i}`))
                                container.insertAdjacentHTML('beforeend',localStorage.getItem(`${i}`));
                            }
                            emptyNotes.classList.add("display");
                            delButton.classList.remove("display");
                        }
                        else {
                            delButton.classList.add("display");
                            emptyNotes.classList.remove("display");
                        }
                        if(container.firstChild!=null)
                        {
                            container.classList.remove("display");
                        }
                        else 
                        {
                            container.classList.add("display");
                            emptyNotes.classList.remove("display");
                        }
                        backArrow.classList.add("display");
                        individualDelete.classList.add("display");
                        newButton.classList.remove("display");
                        editButton.classList.add("display");
                        container.classList.remove("display");
                        storageCount++;
                        let date=new Date();
                        let mon=date.toLocaleString('default', { month: 'short' })
                        let dd = String(date.getDate()).padStart(2, '0');;
                        let yyyy = date.getFullYear();
                        const notesDiv=document.createElement("div");
                        const h1=document.createElement("h1");
                        h1.append(editTitle);
                        h1.classList.add("note-title");
                        notesDiv.appendChild(h1);
                        const p=document.createElement("p");
                        p.style.height="50%";
                        const notesD=document.createElement("p");
                        notesD.append(`${mon} ${dd},${yyyy}`);
                        notesD.classList.add("date");
                        notesDiv.append(notesD);
                        if(editImageUrl)
                        {
                            const img=document.createElement("img");
                            img.src=editImageUrl;
                            img.classList.add("image");
                            notesDiv.append(img);
                            p.style.height="20%";
                        }
                        p.append(editContent);
                        p.classList.add("notes-content");
                        notesDiv.style.background=editBgColor;
                        notesDiv.classList.add("notes-container");
                        notesDiv.append(p);
                        localStorage.setItem(`${storageCount}`,notesDiv.outerHTML);
                        container.append(notesDiv);
                        localStorage.setItem("count",storageCount);
                        emptyNotes.classList.add("display");
                        delButton.classList.remove("display");
                        return;
                    }
                }
            } 

        }
        else if(editTitle && !editContent)
        {
            editContentErr.classList.remove("display");
            editTitleErr.classList.add("display");
        }
        else 
        {
            editTitleErr.classList.remove("display");
            editContentErr.classList.add("display");
        }
};
//end of save and edit handler


//back arow handler
const backArrowHandler=()=>
{
    backArrow.classList.add("display");
    delButton.classList.remove("display");
    individualDelete.classList.add("display");
    newButton.classList.remove("display");
    editButton.classList.add("display");
    container.classList.remove("display");
    individualNoteContainer.classList.add("display");
}
//delete individual note handler
const deleteIndividualNoteHandler=()=> {
    individualDeleteModal.classList.remove("display");
}
//edit button click handler
const editClickHandler=()=>{
    modalBg3.classList.remove("display")
}
//modal3 close handler
const closeModal3Handler=()=>
{
    editCloseModal.classList.remove("display");
}
//close-edit warning handler
const closeEditWarningHandler=()=> {
    editCloseModal.classList.add("display");
}
//confirm-edit close handler
const confirmEditCloseHandler=()=> {
    modalBg3.classList.add("display");
    editCloseModal.classList.add("display");
}

//edit title handler
const editTitleHandler=(e)=> {
    if(e.target.value)
    {
        editTitle=e.target.value;
        saveButton.classList.remove("opacity");
    }   
}
//edit image handler
const editImgHandler=(e)=> {
    if(e.target.value)
    {
        editImageUrl=e.target.value;
        saveButton.classList.remove("opacity");
    }  
}
//edit content handler
const editContentHandler=(e)=> {
    if(e.target.value)
    {
        editContent=e.target.value;
        saveButton.classList.remove("opacity");
    }
}
const closeEditDeleteModalHandler=()=> {
    individualDeleteModal.classList.add("display");
}
//confirm individual delete handler
const confirmIndividualDeleteHandler=()=> {
    
    individualDeleteModal.classList.add("display");
    individualNoteContainer.classList.add("display");
    for(let i=1;i<=storageCount;i++)
    {
        if(localStorage.getItem(i)!==null)
        {
            if(localStorage.getItem(i)===individualNote)
            {
                localStorage.removeItem(i);
                var child = container.lastElementChild; 
                while (child) {
                    container.removeChild(child);
                    child = container.lastElementChild;
                }
                if(localStorage.getItem("count")!=0)
                {
                    for(let i=1;i<=storageCount;i++)
                    {
                        if(localStorage.getItem(`${i}`))
                        container.insertAdjacentHTML('beforeend',localStorage.getItem(`${i}`));
                    }
                    emptyNotes.classList.add("display");
                    delButton.classList.remove("display");
                }
                else {
                    delButton.classList.add("display");
                    emptyNotes.classList.remove("display");
                }
                if(container.firstChild!=null)
                {
                    container.classList.remove("display");
                }
                else {
                    container.classList.add("display");
                    emptyNotes.classList.remove("display");
                    delButton.classList.add("display");
                }
                backArrow.classList.add("display");
                individualDelete.classList.add("display");
                newButton.classList.remove("display");
                editButton.classList.add("display");
                return;
            }
        }
    } 
};


//edit color-check  handlers

const editColorHandler=(e)=> {
    
    saveButton.classList.remove("opacity");
    editTickFirst.classList.add("display");
    editTickFirst.classList.remove("tick");
    editTickSecond.classList.add("display");
    editTickSecond.classList.remove("tick");
    editTickThird.classList.add("display");
    editTickThird.classList.remove("tick");
    editTickFourth.classList.add("display");
    editTickFourth.classList.remove("tick");
    editTickFifth.classList.add("display");
    editTickFifth.classList.remove("tick");  
  
    if(e.path[2].id==="editFirstColor" || e.path[0].id==="editFirstColor")
    {
        editTickFirst.classList.remove("display");
        editTickFirst.classList.add("tick");
        editBgColor=window.getComputedStyle( editFirstColor ,null).getPropertyValue('background-color');
    }
    else if(e.path[2].id==="editSecondColor" || e.path[0].id==="editSecondColor")
    {
        editTickSecond.classList.remove("display");
        editTickSecond.classList.add("tick");
        editBgColor=window.getComputedStyle( editSecondColor ,null).getPropertyValue('background-color');
    }
    else if(e.path[2].id==="editThirdColor" || e.path[0].id==="editThirdColor")
    {
        editTickThird.classList.remove("display");
        editTickThird.classList.add("tick");
        editBgColor=window.getComputedStyle( editThirdColor ,null).getPropertyValue('background-color');
    }
    else if(e.path[2].id==="editFourthColor" || e.path[0].id==="editFourthColor")
    {
        editTickFourth.classList.remove("display");
        editTickFourth.classList.add("tick");
        editBgColor=window.getComputedStyle( editFourthColor ,null).getPropertyValue('background-color');
    }
    else if(e.path[2].id==="editFifthColor" || e.path[0].id==="editFifthColor")
    {
        editTickFifth.classList.remove("display");
        editTickFifth.classList.add("tick");
        editBgColor=window.getComputedStyle( editFifthColor ,null).getPropertyValue('background-color');
    }
    
}

//event listeners 
newButton.addEventListener("click",firstModalDisplayHandler);
closeModal1.addEventListener("click",closeFirstModalHandler);
delButton.addEventListener("click",secondModalDisplayHandler)
closeModal2.addEventListener("click",closeSecondModalHandler)
firstColor.addEventListener("click",newNoteColorClickHandler);
secondColor.addEventListener("click",newNoteColorClickHandler);
thirdColor.addEventListener("click",newNoteColorClickHandler);
fourthColor.addEventListener("click",newNoteColorClickHandler);
fifthColor.addEventListener("click",newNoteColorClickHandler);
addButton.addEventListener("click",noteCreateHandler);
notesTitle.addEventListener("input",notesTitleHandler);
imageURL.addEventListener("input",imageUrlHandler);
content.addEventListener("input",contentHandler);
yesDeleteButton.addEventListener("click",localStorageResetHandler);
container.addEventListener("click",notesContainerClickHandler);
backArrow.addEventListener("click",backArrowHandler);
editButton.addEventListener("click",editClickHandler);
individualDelete.addEventListener("click",deleteIndividualNoteHandler);
closeModal3.addEventListener("click",closeModal3Handler);
editNotesTitle.addEventListener("change",editTitleHandler);
editImgUrl.addEventListener("change",editImgHandler);
editNotesContent.addEventListener("change",editContentHandler);
editFirstColor.addEventListener("click",editColorHandler);
editSecondColor.addEventListener("click",editColorHandler);
editThirdColor.addEventListener("click",editColorHandler);
editFourthColor.addEventListener("click",editColorHandler);
editFifthColor.addEventListener("click",editColorHandler);
closeEditDeleteModal.addEventListener("click",closeEditDeleteModalHandler);
confirmIndividualDelete.addEventListener("click",confirmIndividualDeleteHandler);
loadButton.addEventListener("click",loadMoreHandler);
editClose.addEventListener("click",closeEditWarningHandler);
confirmEditClose.addEventListener("click",confirmEditCloseHandler);
saveButton.addEventListener("click",saveEditHandler);