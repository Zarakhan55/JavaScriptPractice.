let araeShape="circle";
a=9;
b=90;
var rslt;
switch(araeShape){
case "square":
    rslt=a*a;
    console.log("square"+rslt);
    break;
    case "rectangluer":
        rslt =a*b;
        console.log("rectangler"+rslt);
        break;
        case "circle":
            var r=2;
            rslt=3.142 *(r*r);
            console.log("circle"+rslt);
            break;
            default:
                console.log("No shape match");

}