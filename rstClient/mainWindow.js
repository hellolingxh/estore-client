   const {remote} = require('electron');
   const app = remote.app;
   const BrowserWindow = remote.BrowserWindow;
   const win = BrowserWindow.getFocusedWindow();
   
   var closed_button = document.querySelector("#closed");
   var mainframe = $("#mainframe");
   mainframe.prop("src","http://localhost:8080/client/index.jsp");

   closed_button.addEventListener("mouseover",function(event){
        this.src = "node_modules/images/button_close_hover.png";
   });

   closed_button.addEventListener("mouseout",function(event){
       this.src = "node_modules/images/button_close.png";
   });

   closed_button.addEventListener("click",function(event){
       app.quit();
   },false);
   