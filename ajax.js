let con=document.getElementById("s")
let fet=document.getElementById("submit")
let res=document.getElementById("data")
let re=document.getElementById("director")
let r=document.getElementById("rating")
let xhr=new XMLHttpRequest();
fet.onclick=function(){
    xhr.open("GET", ` http://www.omdbapi.com/?t=${con.value}&apikey=a2943fb1` )
    xhr.send()
    xhr.onloadend=function(){
        if (xhr.status === 200){
            let response = JSON.parse(xhr.responseText);
            let Name=response["Title"]
            let director=response["Director"]
            let year=response["Year"]
            res.innerHTML="NAME:"+Name
            re.innerHTML="DIRECTOR:"+director
            r.innerHTML="YEAR:"+year
       }else{
            res[0].innerHTML = "something went wrong.";
        }
   }
};
