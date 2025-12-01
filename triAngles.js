//traingle angle

const triAnlge =( a,b,c ) => {
    if(a==b && b==c)return "eqilateral";
    if(a==b || b==c || a==c) return "isoscelse";
    return "Scalene";
};
console.log(triAnlge(4,3,2));