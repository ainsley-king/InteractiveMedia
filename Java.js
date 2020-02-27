d3.select("body")
    .append("img")
        .attr("src","farm.jpg")
    .on("click",function()
       {
    d3.select("img").attr("src","ship.jpg")
}
    
       
       )
{
    
    
}


d3.select("body")
    .append("img")
        .attr("src","new york.jpg")
    .on("click",function()
       {
    d3.select(this).attr("src","farm.jpg")
    
} )

.on("mouseover",function()
   {
    d3.select(this).attr("src","ship.jpg")
}
   )

d3.select("body")
    .append("img")
        .attr("src","ship.jpg")
    .on("click",function()
       {
    d3.select(this).attr("src","new york.jpg")
}
       
       )

.on("mouseleave",function()
   {
    d3.select(this).attr("src","farm.jpg")
    
}
   
   )

