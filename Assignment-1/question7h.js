let n = 5;
let row = n;
let col;
while (row > 0) {
    col = row;
    while (col > 0) {
        process.stdout.write("* ");
        col -= 1;
    }
    col = n - row;
    while (col > 0) {
        process.stdout.write("  ");
        col -= 1;
    }
    col = n - row - 1;
    while (col > 0) {
        process.stdout.write("  ");
        col -= 1;
    }
    col = row;
    while (col > 0) {
        col -= 1;
        process.stdout.write('* ');
        if (row == n && col == 1) {
            break;
        }
    }
    process.stdout.write("\n");
    row -= 1;
}row=2;
while(row <= n){
    col = row;
    while(col > 0){
        process.stdout.write("* ");
        col-=1;
    }col=n-row;
    while(col > 0){
        process.stdout.write("  ");
        col-=1;
    }col=n-row;
    while(col > 1){
        process.stdout.write("  ");
        col-=1;
    }
    col=row;
    while(col>0){
        if(row==n && col==1){
            break;
        }
        process.stdout.write("* ");
        col-=1;
    }
    process.stdout.write("\n");
    row+=1;
}

/*
output
* * * *   * * * *
* * *       * * *
* *           * *
*               *
* *           * *
* * *       * * *
* * * *   * * * *
* * * * * * * * *

*/