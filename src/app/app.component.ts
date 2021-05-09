import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'doks-webapp';

  ngOnInit() { 
    this.loadJsFile("../assets/js/jquery.meanmenu.js") 
    this.loadJsFile("../assets/js/plugins.js") 
    this.loadJsFile("../assets/js/magnific.min.js") 
    this.loadJsFile("../assets/js/bootstrap.min.js") 
    this.loadJsFile("../assets/js/jquery.steller.min.js") 
    this.loadJsFile("../assets/js/mapcode.js") 
    this.loadJsFile("../assets/js/owl.carousel.min.js") 
    this.loadJsFile("../assets/js/wow.min.js") 
    this.loadJsFile("../assets/js/main.js");  
  }  
  public loadJsFile(url) {  
    let node = document.createElement('script');  
    node.src = url;  
    node.type = 'text/javascript';  
    document.getElementsByTagName('head')[0].appendChild(node);  
  }  

}
