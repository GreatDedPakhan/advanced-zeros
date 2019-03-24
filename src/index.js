module.exports=function getZerosCount(number,base) {
    var empty=[];
    var arg=new Array(2);
        arg[0]=new Array();
        arg[1]=new Array();
    var i=0,j, divider=2, amount=0, count=0;
        arg[0][0]=divider;
        arg[1][0]=0;

    while(base>1){
        if(base%divider==0){
            base/=divider;
            amount++;
            if(arg[0][i]==divider){
                arg[1][i]=amount;
            }
            else{
                i++;
                arg[0][i]=divider;
                arg[1][i]=amount;
            }
        }
        else{
            divider++;
            amount=0;
        }
    }

    for(j=0;j<arg[0].length;j++){
        i=1;
        while(number/Math.pow(arg[0][j],i)>=1){
            count+=Math.trunc(number/Math.pow(arg[0][j],i));
            i++;
        }
        empty.push(Math.trunc(count/arg[1][j]));
        count=0;
    }

    empty.sort(function(a,b){return a-b});

    return empty[0];
}