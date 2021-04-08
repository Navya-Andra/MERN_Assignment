let n=5;
let row=1;
while(row<=n){
    let col=1;
    let i = n-row;
    while(i>0){
        process.stdout.write(" ");
        i-=1;
    }
    while(col<=row)
    {
        process.stdout.write( col+" ");
        col+=1;
    }
    col-=2;
    while(col>0){
        process.stdout.write(col+" ");
        col-=1;
    }
    process.stdout.write("\n");
    row+=1;
}
/*
output - 
      1
   1  2  1
  1  2  3  2 1
 1  2  3  4  3 2 1
1  2  3  4  5  4 3 2 1
*/