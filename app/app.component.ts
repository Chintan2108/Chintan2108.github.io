import { Component } from '@angular/core';

function log(target, name, descriptor) {
  console.log(target, name, descriptor)
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro';
  text = "Go Ahead"
  toggletext = "Come Back"
  buttontext = this.text;
  isav = true;
  
  months = ['Jan', 'Feb', 'Mar','Apr','May','June','Jul','Aug','Sept','Oct','Nov','Dec']

  myChangeFunction(event) {
    console.log('Month changed!')
    console.log(event)
  }

  myClickFunction(event) {
    alert('Quack Quack!')
    console.log(event)
    if(this.isav) {
      this.isav = false;
      this.buttontext = this.toggletext;
    }
    else
    {
      this.isav = true;
      this.buttontext = this.text;
    }
  }

  @log
  aSimpleMethod() {
    console.log("Hey there!")
  }

}

