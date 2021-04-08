let n= 5;
let row=1;
let col;
while(row<=n){
    col=n-row;
    while(col>0){
        process.stdout.write("  ");
        col-=1;
    }col=1;
    while(col<=row){
        process.stdout.write("* ");
        col+=1;
    }col=1;
    while(col<row){
        process.stdout.write("* ");
        col+=1;
    }
    process.stdout.write("\n");
    row+=1;
}row=1;
while(row<n){
    col=1;
    while(col<=row){
        process.stdout.write("  ");
        col+=1;
    }col=n-row;
    while(col>0){
        process.stdout.write("* ");
        col-=1;
    }col=n-row;
    while(col>1){
        process.stdout.write("* ");
        col-=1;
    }process.stdout.write("\n");
    row+=1;
}
/*
output
        * 
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *
  * * * * * * *
    * * * * *
      * * *
        *
*/