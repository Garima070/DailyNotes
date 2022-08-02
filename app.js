console.log("welcome to notes app")
shownotes();
let addbtn=document.getElementById('addbtn')
addbtn.addEventListener("click",function(e)
{
    alert('Note is successfully added')
    let addtxt=document.getElementById("addtxt")
    let addtitle=document.getElementById("title")
    let notes=localStorage.getItem("notes")
    if(notes==null)
    {
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes)
    }
    let myobj={
        title:addtitle.value,
        text:addtxt.value
    }
    notesobj.push(myobj)
    localStorage.setItem("notes",JSON.stringify(notesobj))
    addtxt.value="";
    addtitle.value="";
    console.log(notesobj)
    shownotes();
})
function shownotes()
{
    let notes=localStorage.getItem("notes")
    if(notes==null)
    {
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes)
    }
    let html=""
    notesobj.forEach(function(element,index)
    {
        html+=`
        <div  class="notecard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body" >
                    <h5 class="card-title"> ${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                    <button id="${index}" onclick="deletenode(this.id)" class="btn btn-primary">Delete</button>
                </div>
            </div>
        `;
    })
    let noteselm=document.getElementById('notes')
    if(notesobj.length!=0)
    {
        noteselm.innerHTML=html
    }
    else{
        noteselm.innerHTML=`nothing to show ! use "aAdd a note " section above to add notes`
    }
}
function deletenode(index)
{
    console.log("i am deleting",index)
    let notes=localStorage.getItem("notes")
    if(notes==null)
    {
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes)
    }
    notesobj.splice(index,1)
    localStorage.setItem("notes",JSON.stringify(notesobj))
    shownotes();
}
search=document.getElementById('searchtxt')
search.addEventListener("input",function()
{
    let inputval=search.value.toLowerCase();
    console.log("input event is fired",inputval)
    let notecard=document.getElementsByClassName('notecard')
    Array.from(notecard).forEach(function(element)
    {
        let cardtxt=element.getElementsByTagName("p")[0];
        if(cardtxt.innerText.includes(inputval))
        {
            element.style.display="block"
        }
        else
        {
            element.style.display="none"
        }
        // console.log(cardtxt)
    })
    
    })


