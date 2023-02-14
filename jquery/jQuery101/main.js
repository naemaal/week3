const header = $("h1")
console.log(header)
$("h1").css("background-color", "blue")
$(".red-div").css("background-color", "red")
$("li:first-child").css("background-color", "green")
$("li:last-child").css("background-color", "pink")
$("#brown-div").css("background-color", "brown")

$("#b1").addClass("box")
$("#b2").addClass("box")

$('#my-input').val()
$("#my-input").val("Terabyte")

$("button").on("click", function () {
    alert($("#my-input").val())
})

$("#b1").hover(function () {
    $("#b1").css("background-color", "blue")
})

$(".box").hover(function(){
    $(this).css("background-color", "blue")
})
//const data = $("div").data()
//console.log("Item with barcode " + data.barcode + " will expire on " + data.expirationdate)

$(".feedme").on("click", function(){
    let divCopy = `<div class=feedme> ${$(this).text()} </div>`
    
    $("body").append(divCopy)
  })
  

  $("#plague").hover(function(){
    $("#plague").remove()
})


$("button").on("click", function(){
    $("#blogs").append("<div class='blog'>Cool blog</div>")
  })
  
  $("#blogs").on("click", ".blog", function(){
    $(".blog").text("blargh") 
  })

  $('#btn').click(alert('hi'))
  
  $('.box').css('background-color', 'red')
  // Notice the two dollar signs:
  
  
  // 1. The first is for the template literal - this allows us to combine text and variables easily
  // 2. The second is our normal jQuery function that converts this into a jQuery object


  $(".remove").on("click", function(){
    alert($(this).closest(".post").data().id)
  })

  $("button").on("click", function(){
    console.log($(this).closest("div").find("span").text())
  })

  $("button").on("click", function(){
    console.log($(".container").find("p").text())
  })

  
  let x = "flap"
let y = {a: "shlop", x: "dub"}
const all = [x, y]

x = all[1].x
$("#corq").siblings(".nalo").append("<div>" + x + " - Ryk</div>")




