import { Component, OnInit,Input,ElementRef } from '@angular/core';

@Component({
  selector: 'app-pdf-viewer',
  template: `<div id="Iframe-Master-CC-and-Rs" class="set-margin set-padding set-border set-box-shadow center-block-horiz">
  <div class="responsive-wrapper 
     responsive-wrapper-wxh-572x612"
     style="-webkit-overflow-scrolling: touch; overflow: auto;">

<iframe  src="" style="width:120px; height:100px;" frameborder="0">
<p style="font-size: 110%;"><em><strong>ERROR: </strong>  
An &#105;frame should be displayed here but your browser version does not support &#105;frames. </em>Please update your browser to its most recent version and try again.</p>
       
    </iframe>
  </div>
</div>`
})
export class PDFViewerComponent implements OnInit {
  @Input() url:any;

  iframeurl:any;
  urlName:any;
  constructor(private hostElement: ElementRef,) { 
   }

  ngOnInit() {
  	
  }


  ngOnChanges(){
      this.urlName=this.url;
      this.iframeurl='';
      this.iframeurl="https://docs.google.com/gview?a=v&pid=explorer&chrome=false&api=true&embedded=true&srcid="+this.urlName+"&hl=en&embedded=true";
      const iframe = this.hostElement.nativeElement.querySelector('iframe');
      iframe.src='';
      iframe.src = this.iframeurl;
  }

}
