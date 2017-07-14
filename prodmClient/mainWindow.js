   const {remote} = require('electron');
   const app = remote.app;
   const BrowserWindow = remote.BrowserWindow;
   const win = BrowserWindow.getFocusedWindow();
   
   var closed_button = document.querySelector("#closed");
   var left_button = document.querySelector("#left");
   var right_button = document.querySelector("#right");
   var full_screen_button = document.querySelector("#full");
   var framecontainer = document.querySelector("#framecontainer");
   var sidecontainer = document.querySelector("#sidecontainer");
   //var tools = document.querySelector("#tools");
   var mainframe = $("#mainframe");
   mainframe.prop("src","http://localhost:8088/estore/console.jsp");
   //mainframe.prop("src","http://www.hungryoff.com/estore/console.jsp");

   closed_button.addEventListener("mouseover",function(event){
        this.src = "node_modules/images/button_close_hover.png";
   });

   closed_button.addEventListener("mouseout",function(event){
       this.src = "node_modules/images/button_close.png";
   });

   closed_button.addEventListener("click",function(event){
       app.quit();
   },false);

   left_button.addEventListener("click",function(event){
        console.log("click the left button");
        left_button.style.display = "none";
        right_button.style.display = "";
        win.setResizable(true);
        win.setFullScreen(false);
        win.setSize(60, 600,true);
        
        //if(!win.isMovable())  //设置窗口可移动，该接口官方文档介绍说该方法对linux无效.
            //win.setMovable(true);
        win.setPosition(1, 1, true);
        win.setResizable(false);
        framecontainer.style.display = "none";
        sidecontainer.style.display = "";
   });
   
   right_button.addEventListener("click",function(event){
        console.log("click the right button");
        right_button.style.display = "none";
        left_button.style.display = "";
        win.setResizable(true);
        win.setFullScreen(false);
        win.setSize(60, 600,true);
        
        if(!win.isMovable())  //设置窗口可移动，该接口官方文档介绍说该方法对linux无效.
            win.setMovable(true);
        var myscreen = remote.screen;
        var size = myscreen.getPrimaryDisplay().workAreaSize;
        win.setPosition(size.width, 1, true);
        win.setResizable(false); 
        framecontainer.style.display = "none";
        sidecontainer.style.display = "";
   }); 

   full_screen_button.addEventListener("click",function(event){
       if(!win.isFullScreen()){
            win.setResizable(true);
            win.setFullScreen(true);
        }
        
   });

   //tools.addEventListener("click",function(event){
   //    win.webContents.openDevTools();
  // })
   

  win.on("enter-full-screen",function(event){
    //var tools = document.querySelector("#tools");
    //tools.style.display = "";
    //win.webContents.openDevTools();
    sidecontainer.style.display = "none";
    if(right_button.style.display=="none")
        right_button.style.display = "";
    if(left_button.style.display=="none")
        left_button.style.display = "";
    if(framecontainer.style.display = "none")
        framecontainer.style.display = "";
    win.setResizable(false);
  });

  win.on("leave-full-screen",function(event){
    //var tools = document.querySelector("#tools");
    //tools.style.display = "none";
    //win.webContents.closeDevTools();
    
  });

   