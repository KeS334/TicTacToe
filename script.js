var gameMode = 0;
//buttons
function info(){
    hideM1();
    showM2();
}
function mainMenu(){
    hideM2();
    hideM4();
    showM1();
}
function game1(){
    hideM1();
    showM4();
    gameMode = 0;
    showName();
    reset();
}
function mode(){
    hideM1();
    showM3();
    reset();
}
function GM1(){
    hideM3();
    showM4();
    gameMode = 1;
    hideName();
}
function GM2(){
    hideM3();
    showM4();
    gameMode = 2;
    hideName();
}
function hideName(){
    var player = document.getElementById("player");
    player.style.display = "none";
    reset();
}
function showName(){
    var player = document.getElementById("player");
    player.style.display = "block";
}
function Load(){
    hideM1();
    showM4();
}
//

function hideM1(){
    var menu1 = document.getElementById("menu1");
    menu1.style.display = "none";
}
function showM1(){
    var menu1 = document.getElementById("menu1");
    menu1.style.display = "block";
}
function hideM2(){
    var menu2 = document.getElementById("menu2");
    menu2.style.display = "none";
}
function showM2(){
    var menu2 = document.getElementById("menu2");
    menu2.style.display = "block";
}
function hideM3(){
    var menu3 = document.getElementById("menu3");
    menu3.style.display = "none";
}
function showM3(){
    var menu3 = document.getElementById("menu3");
    menu3.style.display = "block";
}
function hideM4(){
    var menu4 = document.getElementById("menu4");
    menu4.style.display = "none";
}
function showM4(){
    var menu4 = document.getElementById("menu4");
    menu4.style.display = "block";
}
//-----------------------PvP
var step;
var ps = new Array(9)
for(i=0;i<9;i++){
    ps[i] = 0;
};
function onTab1(){
    var p1 = document.getElementById("p1");
    var images = ["img1.png","img2.png","img3.png"];
    if ((step == true)&&(ps[0]==0)) {
        p1.src = images[1];
        step = false;
        ps[0]=1;
    }
    else if(ps[0]==0){
        p1.src = images[2];
        step = true;
        ps[0]=2
    }   
    setTimeout(test, 100);
};
function onTab2(){
    var p2 = document.getElementById("p2");
    var images = ["img1.png","img2.png","img3.png"];
    if ((step == true)&&(ps[1]==0)) {
        p2.src = images[1];
        step = false;
        ps[1]=1;
    }
    else if (ps[1]==0) {
        p2.src = images[2];
        step = true;
        ps[1]=2;
    }    
    setTimeout(test, 100);
};
function onTab3(){
    var p3 = document.getElementById("p3");
    var images = ["img1.png","img2.png","img3.png"];
    if ((step == true)&&(ps[2]==0)) {
        p3.src = images[1];
        step = false;
        ps[2]=1;
    }
    else if (ps[2]==0){
        p3.src = images[2];
        step = true;
        ps[2]=2;
    }    
    setTimeout(test, 100);
};
function onTab4(){
    var p4 = document.getElementById("p4");
    var images = ["img1.png","img2.png","img3.png"];
    if ((step == true)&&(ps[3]==0)) {
        p4.src = images[1];
        step = false;
        ps[3]=1;
    }
    else if (ps[3]==0){
        p4.src = images[2];
        step = true;
        ps[3]=2;
    }   
    setTimeout(test, 100);
};
function onTab5(){
    var p5 = document.getElementById("p5");
    var images = ["img1.png","img2.png","img3.png"];
    if ((step == true)&&(ps[4]==0)) {
        p5.src = images[1];
        step = false;
        ps[4]=1;
    }
    else if (ps[4]==0){
        p5.src = images[2];
        step = true;
        ps[4]=2;
    }    
    setTimeout(test, 100);
};
function onTab6(){
    var p6 = document.getElementById("p6");
    var images = ["img1.png","img2.png","img3.png"];
    if ((step == true)&&(ps[5]==0)) {
        p6.src = images[1];
        step = false;
        ps[5]=1;
    }
    else if (ps[5]==0){
        p6.src = images[2];
        step = true;
        ps[5]=2;
    }   
    setTimeout(test, 100);
};
function onTab7(){
    var p7 = document.getElementById("p7");
    var images = ["img1.png","img2.png","img3.png"];
    if ((step == true)&&(ps[6]==0)) {
        p7.src = images[1];
        step = false;
        ps[6]=1;
    }
    else if (ps[6]==0){
        p7.src = images[2];
        step = true;
        ps[6]=2;
    }    
    setTimeout(test, 100);
};
function onTab8(){
    var p8 = document.getElementById("p8");
    var images = ["img1.png","img2.png","img3.png"];
    if ((step == true)&&(ps[7]==0)) {
        p8.src = images[1];
        step = false;
        ps[7]=1;
    }
    else if (ps[7]==0){
        p8.src = images[2];
        step = true;
        ps[7]=2;
    }   
    setTimeout(test, 100);
};
function onTab9(){
    var p9 = document.getElementById("p9");
    var images = ["img1.png","img2.png","img3.png"];
    if ((step == true)&&(ps[8]==0)) {
        p9.src = images[1];
        step = false;
        ps[8]=1;
    }
    else if (ps[8]==0){
        p9.src = images[2];
        step = true;
        ps[8]=2;
    } 
    setTimeout(test, 100);
};
function test(){        
    var player1 = document.getElementById("player1");
    var player2 = document.getElementById("player2");    
    var winner;
    if(step){
        winner = "Player 1";
        player2.style.display = "inline";
        player1.style.display = "none";
    }
    else{ 
        winner = "Player 2";
        player1.style.display = "inline";
        player2.style.display = "none";
    }
    if ((step)&&(gameMode != 0)){
        winner = "You";
    }
    if ((!step)&&(gameMode != 0)){
        winner = "Computer";
    }
    for(i=0;i<9;i+=3){
     if((ps[i]==ps[i+1])&&(ps[i]==ps[i+2])&&(ps[i]!=0)){
         alert(winner +" won!");
         reset();
     } 
    }
    for(i=0;i<3;i++){
        if((ps[i]==ps[i+3])&&(ps[i]==ps[i+6])&&(ps[i]!=0)){
            alert(winner +" won!");
            reset();
        }
    }
    if (((ps[0]==ps[4])&&(ps[0]==ps[8])&&(ps[0]!=0))||((ps[2]==ps[4])&&(ps[2]==ps[6])&&(ps[2]!=0))){
        alert(winner +" won!");
        reset();
        };  
    var draw=0;
    for(i=0;i<9;i++){
        if((ps[i]==1)||(ps[i]==2))
        draw++ ;   
    }
    if (draw==9){
        alert("Draw!");
        reset();
    }
    if (gameMode==1){
        Cmode1();
    }
    if (gameMode == 2){
        Cmode2();
    }
}
function Cmode1(){
    function randomInt(){
        return Math.floor(Math.random()*8);
    }
    if (step){
    var k = randomInt();
    while((ps[k]==1)||(ps[k]==2)){
        var k = randomInt();        
    }
        switch(k){
                case 0: onTab1();
                break;
                case 1:onTab2();
                break;
                case 2:onTab3();
                break;
                case 3:onTab4();
                break;
                case 4:onTab5();
                break;
                case 5:onTab6();
                break;
                case 6:onTab7();
                break;
                case 7:onTab8();
                break;
                case 8:onTab9();
                break;
        }
    }
}
function Cmode2(){
    function randomInt(){
        return Math.floor(Math.random()*8);
    }
    if (step){
    var k = randomInt();
    while((ps[k]==1)||(ps[k]==2)){
        var k = randomInt();        
    }
    /*NORMAL MODE*/
    /*---------------DEFF---------------*/    
    //gor
    if(((ps[0]==2)&&(ps[1]==2))&&(ps[2]==0)){var k = 2;}
    if(((ps[3]==2)&&(ps[4]==2))&&(ps[5]==0)){var k = 5;}
    if(((ps[6]==2)&&(ps[7]==2))&&(ps[8]==0)){var k = 8;}
        
    if(((ps[0]==2)&&(ps[1]==0))&&(ps[2]==2)){var k = 1;}
    if(((ps[3]==2)&&(ps[4]==0))&&(ps[5]==2)){var k = 4;}
    if(((ps[6]==2)&&(ps[7]==0))&&(ps[8]==2)){var k = 7;}
        
    if(((ps[0]==0)&&(ps[1]==2))&&(ps[2]==2)){var k = 0;}
    if(((ps[3]==0)&&(ps[4]==2))&&(ps[5]==2)){var k = 3;}
    if(((ps[6]==0)&&(ps[7]==2))&&(ps[8]==2)){var k = 6;}
    //ver
    if(((ps[0]==2)&&(ps[3]==2))&&(ps[6]==0)){var k = 6;}
    if(((ps[1]==2)&&(ps[4]==2))&&(ps[7]==0)){var k = 7;}
    if(((ps[2]==2)&&(ps[5]==2))&&(ps[8]==0)){var k = 8;}
        
    if(((ps[0]==2)&&(ps[3]==0))&&(ps[6]==2)){var k = 3;}
    if(((ps[1]==2)&&(ps[4]==0))&&(ps[7]==2)){var k = 4;}
    if(((ps[2]==2)&&(ps[5]==0))&&(ps[8]==2)){var k = 5;}    
    
    if(((ps[0]==0)&&(ps[3]==2))&&(ps[6]==2)){var k = 0;}
    if(((ps[1]==0)&&(ps[4]==2))&&(ps[7]==2)){var k = 1;}
    if(((ps[2]==0)&&(ps[5]==2))&&(ps[8]==2)){var k = 2;}   
    //cross
    if(((ps[0]==2)&&(ps[4]==2))&&(ps[8]==0)){var k = 8;}
    if(((ps[0]==2)&&(ps[4]==0))&&(ps[8]==2)){var k = 4;}
    if(((ps[0]==0)&&(ps[4]==2))&&(ps[8]==2)){var k = 0;}
        
    if(((ps[2]==2)&&(ps[4]==2))&&(ps[6]==0)){var k = 6;}
    if(((ps[2]==2)&&(ps[4]==0))&&(ps[6]==2)){var k = 4;}
    if(((ps[2]==0)&&(ps[4]==2))&&(ps[6]==2)){var k = 2;}    
        
        /*---------------ATT---------------*/
    
    if(((ps[0]==1)&&(ps[1]==1))&&(ps[2]==0)){var k = 2;}
    if(((ps[3]==1)&&(ps[4]==1))&&(ps[5]==0)){var k = 5;}
    if(((ps[6]==1)&&(ps[7]==1))&&(ps[8]==0)){var k = 8;}
        
    if(((ps[0]==1)&&(ps[1]==0))&&(ps[2]==1)){var k = 1;}
    if(((ps[3]==1)&&(ps[4]==0))&&(ps[5]==1)){var k = 4;}
    if(((ps[6]==1)&&(ps[7]==0))&&(ps[8]==1)){var k = 7;}
        
    if(((ps[0]==0)&&(ps[1]==1))&&(ps[2]==1)){var k = 0;}
    if(((ps[3]==0)&&(ps[4]==1))&&(ps[5]==1)){var k = 3;}
    if(((ps[6]==0)&&(ps[7]==1))&&(ps[8]==1)){var k = 6;}
    //ver
    if(((ps[0]==1)&&(ps[3]==1))&&(ps[6]==0)){var k = 6;}
    if(((ps[1]==1)&&(ps[4]==1))&&(ps[7]==0)){var k = 7;}
    if(((ps[2]==1)&&(ps[5]==1))&&(ps[8]==0)){var k = 8;}
        
    if(((ps[0]==1)&&(ps[3]==0))&&(ps[6]==1)){var k = 3;}
    if(((ps[1]==1)&&(ps[4]==0))&&(ps[7]==1)){var k = 4;}
    if(((ps[2]==1)&&(ps[5]==0))&&(ps[8]==1)){var k = 5;}    
    
    if(((ps[0]==0)&&(ps[3]==1))&&(ps[6]==1)){var k = 0;}
    if(((ps[1]==0)&&(ps[4]==1))&&(ps[7]==1)){var k = 1;}
    if(((ps[2]==0)&&(ps[5]==1))&&(ps[8]==1)){var k = 2;}   
    //cross
    if(((ps[0]==1)&&(ps[4]==1))&&(ps[8]==0)){var k = 8;}
    if(((ps[0]==1)&&(ps[4]==0))&&(ps[8]==1)){var k = 4;}
    if(((ps[0]==0)&&(ps[4]==1))&&(ps[8]==1)){var k = 0;}
        
    if(((ps[2]==1)&&(ps[4]==1))&&(ps[6]==0)){var k = 6;}
    if(((ps[2]==1)&&(ps[4]==0))&&(ps[6]==1)){var k = 4;}
    if(((ps[2]==0)&&(ps[4]==1))&&(ps[6]==1)){var k = 2;}    
        
    /*END*/    
        switch(k){
                case 0: onTab1();
                break;
                case 1:onTab2();
                break;
                case 2:onTab3();
                break;
                case 3:onTab4();
                break;
                case 4:onTab5();
                break;
                case 5:onTab6();
                break;
                case 6:onTab7();
                break;
                case 7:onTab8();
                break;
                case 8:onTab9();
                break;
        }
    }
}

function reset(){
    if (gameMode != 0){
        step=false;
    }
    var img = document.getElementsByTagName("img");
    var images = ["img1.png","img2.png","img3.png"];
    for(i=0;i<10;i++){
        img[i].src = images[0];
        ps[i] = 0;
    }
}