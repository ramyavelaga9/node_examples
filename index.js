var rect = {
    perimeter:(x,y)=> (2*(x+y)),
    area:(x,y)=> (x*y)
};
function solveRect(l,b){
    console.log('Solving for'+l+"  "+b);
    if(l<=0 || b<=0){
        console.log('Dimensions must be greater than zero');
    }
    else{
        console.log("area is"+rect.area(l,b));
        console.log("perimeter is"+rect.perimeter(l,b));
    }
}
solveRect(2,4);
solveRect(0,2);
solveRect(2,-3);