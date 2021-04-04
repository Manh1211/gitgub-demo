var arr = new Array();

function sangnguyento(n){
    let arr = new Array();

    arr[0] = arr[1] = 0;
    for(let i = 2; i <= n; i++){
        arr[i] = 1;
    }
    for(let i = 0; i <= n; i++){
        if(arr[i] == 1){
            for(let j = i * 2; j <= n; j += i){
                arr[j] = 0;
            }
        }
    }
    console.log("snt la: ");
    for(let i = 0; i <= n; i++){
        if(arr[i] == 1){
            console.log(i);  
        }
    }
}
function ouput(){
    var a;
    a = prompt();
    sangnguyento(a);
}
function hello_user(){
    var name;
    name = prompt();
    
    alert('Hello welcome ' + name + ' to my web');
}