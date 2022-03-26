<template>
<div>
  <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img src="../../assets/arrow.png" draggable="true" ondragstart="drag(event)" id="drag1" />
</div>

<div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

</div>
</template>

<script>
export default {
name:"levelOneS5",

data(){
    return{

    }
},

methods:{
    allowDrop(ev)
{
ev.preventDefault();
},

    drag(ev)
{
ev.dataTransfer.setData("Text",ev.target.id);
},

   drop(ev)
{
ev.preventDefault();
var data=ev.dataTransfer.getData("Text");
ev.target.appendChild(document.getElementById(data));
}
},

components:{

}
}
</script>

<style>
#drag1{
    width: 100px;
    height: 70px;
}
#div1{
    float:left; 
    width:198px; 
    height:66px; 
    margin:10px;
    padding:10px;
    border:3px solid #000000;
}
#div2{
    float:left; 
    width:198px; 
    height:66px; 
    margin:10px;
    padding:10px;
    border:3px solid #000000;
}
</style>