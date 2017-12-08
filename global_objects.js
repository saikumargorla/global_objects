console.log(process.argv);  //display command line arguments
console.log(__filename);    //display the filepath
console.log(__dirname);     //display directorypath
let count=0;
let interval=setInterval(function(){
    count++;
    console.log(count,'called every 2000 milliseconds');
    if(count==3){
        console.log('exit after 3 iterations');
        clearInterval(interval);
    }
},2000);

setTimeout(function(){
    console.log('time out');

},1000);