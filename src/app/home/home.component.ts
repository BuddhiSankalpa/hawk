import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

  ngOnInit() { 
    this.loadJsFile("../../assets/js/jquery.meanmenu.js") 
    this.loadJsFile("../../assets/js/plugins.js") 
    this.loadJsFile("../../assets/js/magnific.min.js") 
    this.loadJsFile("../../assets/js/bootstrap.min.js") 
    this.loadJsFile("../../assets/js/jquery.steller.min.js") 
    this.loadJsFile("../../assets/js/mapcode.js") 
    this.loadJsFile("../../assets/js/owl.carousel.min.js") 
    this.loadJsFile("../../assets/js/wow.min.js") 
    this.loadJsFile("../../assets/js/main.js");  
  }  
  public loadJsFile(url) {  
    let node = document.createElement('script');  
    node.src = url;  
    node.type = 'text/javascript';  
    document.getElementsByTagName('head')[0].appendChild(node);  
  }  

}
