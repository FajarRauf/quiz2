var num;
num=prompt("Enter the number");
if (num>=0 && num %2==0)
{
    console.log("The number",num,"is even")
    
}
else if (num>=0 && num%2!==0)
{
    console.log("The number",num," is odd");
    
}
else 
{
    console.log("The Number",num," Is Negative");
}