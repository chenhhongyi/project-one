var oSlider= document.getElementById('slider-img');
var oPointer= document.getElementById('slider-pointer');
console.log(oSlider);
console.log(oPointer);
var aLi=  oPointer.getElementsByTagName('li');
var aImg= oSlider.getElementsByTagName('img');
for(var i= 0; i<aLi.length; i++){
    aLi[i].index = i;
    aLi[i].onmouseover = function(){
        for(var j=0; j<aLi.length; j++){
            aLi[j].className = '';
            aImg[j].className = '';
        }
        aLi[this.index].className= 'active';
        aImg[this.index].className= 'selected';
    }
}