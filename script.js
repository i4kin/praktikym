const apiKey = '9c4e4e37ac104ae9b4c23558448a05cd';
const searchButton = document.querySelector("#submit");
const input = document.querySelector("search");

let recipes = [];
$('#grid').on("click",function(){
    $('.control').removeClass("row-4").addClass("col-4")
})
$('#list').on("click",function(){
    $('.control').removeClass("col-4").addClass("row-4")
})
function getRecipes() {
    var x = document.getElementById("search").value;
    var diet = "";
    if(document.getElementById("check").checked==true){
        diet = "&diet=vegetarian";
    }
$.ajax({
    method: 'GET',
    url: 'https://api.spoonacular.com/recipes/complexSearch?apiKey=9c4e4e37ac104ae9b4c23558448a05cd&query='+x+''+diet+'&number=10',
    })
    .done(response => {
        recipes = response.results;
        let html = '<div class="row">';
        console.log('ajax completed');
        console.log(response);
        recipes.forEach(recipe => {
        html+='<div class="col-4 control">'+recipe.title+'<br> <img src="'+recipe.image+'"></div>'
        })
        html+='</div>'
        $('#gallery').html(html);
    })
    .fail(response => {
        console.log('ajax failed');
    })
};

$('#submit').click(()=> {
    getRecipes();
})
//getRecipes();