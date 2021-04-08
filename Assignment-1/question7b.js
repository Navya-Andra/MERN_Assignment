//number pattern
let n=5;
let row=1;
while(row<=n){
    let col=1;
    while(col<=row){
        process.stdout.write(col+" ");
        col+=1;
    }
    row+=1;
    process.stdout.write("\n");
}
/* output
1 
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/