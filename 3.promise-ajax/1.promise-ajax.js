
function myAjax({url="",dataType='json',method="get",async=true}) {

     return new Promise((resolve,reject)=>{
           let xhr=new XMLHttpRequest();
           xhr.open(method,url,async);
           xhr.responseType=dataType;
           xhr.onload=function () {     //xhr.readState=4 xhr.status = 200
                 if(xhr.status===200){
                       resolve(xhr.response)
                 }else {
                       reject('not found')
                 }
           };
           xhr.onerror=function(){
             reject(err);
           };

           xhr.send();
     })
}