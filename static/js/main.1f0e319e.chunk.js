(this["webpackJsonplandingpage-react-template"]=this["webpackJsonplandingpage-react-template"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('{"Header":{"title":"Deskreen","paragraph":"Deskreen turns any device to a second screen for your computer"},"About":{"paragraph":"Deskreen is a free desktop app that makes any device with a web browser a second screen over WiFi. Deskreen can be used for mirror entire display to any device that has a web browser. Also you can limit Deskreen to select only one application window view to share - very useful for presentation purposes. The best feature of Deskreen is using any device as second screen! To have a true extended desktop experience Deskreen should be used with Dummy Display Plug."},"Testimonials":[{"img":"img/testimonials/01.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"John Doe"},{"img":"img/testimonials/02.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"Johnathan Doe"},{"img":"img/testimonials/03.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"John Doe"},{"img":"img/testimonials/04.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"Johnathan Doe"},{"img":"img/testimonials/05.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"John Doe"},{"img":"img/testimonials/06.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"Johnathan Doe"}],"Contact":{"address":"4321 California St, San Francisco, CA 12345 ","phone":"+1 123 456 1234","email":"info@company.com","facebook":"fb.com","twitter":"twitter.com","youtube":"youtube.com"}}')},12:function(e,a,t){e.exports=t(20)},17:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(7),r=t.n(s),o=(t(17),t(1)),c=t(2),i=t(3),m=t(4),u=t(8),d=t.n(u),p=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{id:"menu",className:"navbar navbar-default navbar-fixed-top smart-scroll",style:{width:"100vw"}},l.a.createElement("div",{className:"container",style:{width:"100vw"}},l.a.createElement("div",{className:"col-xs-12 col-md-12 col-lg-11 col-offset-lg-1"},l.a.createElement("div",{className:"navbar-header"},l.a.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1"}," ",l.a.createElement("span",{className:"sr-only"},"Toggle navigation")," ",l.a.createElement("span",{className:"icon-bar"})," ",l.a.createElement("span",{className:"icon-bar"})," ",l.a.createElement("span",{className:"icon-bar"})," "),l.a.createElement("a",{id:"navbar-brand-with-donate-button",className:"navbar-brand page-scroll",href:"#page-top"},l.a.createElement("div",{className:"row align-items-center deskreen-brand-row"},l.a.createElement("div",{className:"col col-xs-4 col-md-5 col-lg-6"},l.a.createElement("div",{className:"col col-xs-1 col-lg-4"},l.a.createElement("img",{src:"img/deskreen-logo-icon_512x512.png",style:{height:"50px",transform:"translateY(-15px)"}})),l.a.createElement("div",{className:"col col-xs-6",id:"deskreen-name-navbar"},l.a.createElement("span",null,"Deskreen"))),l.a.createElement("div",{className:"col col-xs-2"},l.a.createElement("button",{id:"donate-patreon-button",type:"button",className:"btn btn-custom btn-lg",style:{height:"50px",transform:"translateY(-15px)",borderRadius:"50px"}},l.a.createElement("span",{style:{fontWeight:900}},"DONATE! "),l.a.createElement("i",{className:"fa fa-heart",style:{fontSize:"20px",color:"rgb(255,29,29)",transform:"translateY(3px)"}})))))," "),l.a.createElement("div",{className:"collapse navbar-collapse",id:"bs-example-navbar-collapse-1"},l.a.createElement("ul",{className:"nav navbar-nav navbar-right"},l.a.createElement("li",null,l.a.createElement("a",{href:"#features",className:"page-scroll"},"Features")),l.a.createElement("li",null,l.a.createElement("a",{href:"#about",className:"page-scroll"},"About")),l.a.createElement("li",null,l.a.createElement("a",{href:"#video-demos",className:"page-scroll"},"Demos")),l.a.createElement("li",null,l.a.createElement("a",{href:"#howtos",className:"page-scroll"},"How to")),l.a.createElement("li",null,l.a.createElement("a",{href:"#testimonials",className:"page-scroll"},"Purpose")),l.a.createElement("li",null,l.a.createElement("a",{href:"#team",className:"page-scroll"},"Team")),l.a.createElement("li",null,l.a.createElement("a",{href:"#contact",className:"page-scroll"},"Contribute")))))))}}]),t}(n.Component),h=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("header",{id:"header",style:{width:"100vw"}},l.a.createElement("div",{className:"intro",style:{width:"100vw"}},l.a.createElement("div",{className:"overlay",style:{width:"100vw"}},l.a.createElement("div",{className:"container",style:{width:"100vw"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8 col-md-offset-2 intro-text"},l.a.createElement("div",{className:"row"},l.a.createElement("img",{src:"img/deskreen-logo-icon_512x512.png",style:{width:200,height:200}})),l.a.createElement("h1",null,this.props.data?this.props.data.title:"Loading",l.a.createElement("span",null)),l.a.createElement("p",null,this.props.data?this.props.data.paragraph:"Loading"),l.a.createElement("p",null,"Free Download:"),l.a.createElement("a",{href:"https://github.com/pavlobu/deskreen/releases/download/v1.0.0/Deskreen.Setup.1.0.0.exe",className:"btn btn-custom btn-lg page-scroll",target:"_blank"},l.a.createElement("i",{className:"fa fa-windows"})," Windows"),l.a.createElement("a",{href:"https://github.com/pavlobu/deskreen/releases/download/v1.0.0/Deskreen-1.0.0.dmg",className:"btn btn-custom btn-lg page-scroll",target:"_blank"},l.a.createElement("i",{className:"fa fa-apple"})," MacOS"),l.a.createElement("a",{href:"https://github.com/pavlobu/deskreen/releases/download/v1.0.0/deskreen_1.0.0_amd64.deb",className:"btn btn-custom btn-lg page-scroll",target:"_blank"},l.a.createElement("i",{className:"fa fa-linux"})," Linux (.deb)"),l.a.createElement("a",{href:"https://github.com/pavlobu/deskreen/releases/latest",className:"btn btn-custom btn-lg page-scroll",target:"_blank"},"others")))))))}}]),t}(n.Component),E=t(9),g=t(10),f=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"features",className:"text-center"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-md-10 col-md-offset-1 section-title"},l.a.createElement("h2",null,"Features")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-6 col-md-4 feature-with-icon"},l.a.createElement("a",{id:"link-to-second-screen-demo-video",href:"#second-screen-demo-video",className:"page-scroll"},l.a.createElement("div",{className:"icon-features"},l.a.createElement("i",{className:"fa fa-tablet",style:{transform:"rotate(90deg)"}}),l.a.createElement("i",{className:"fa fa-laptop"})),l.a.createElement("h3",null,"Second Screen")),l.a.createElement("p",null,"Use any device with a web browser as a second screen for your computer"," ",l.a.createElement("a",{id:"link-to-what-is-display-dummy-plug",href:"#what-is-display-dummy-plug",className:"page-scroll"},"(with Display Dummy Plug)."))),l.a.createElement("div",{className:"col-xs-6 col-md-4 feature-with-icon"},l.a.createElement("div",{className:"icon-features"},l.a.createElement("i",{className:"fa fa-square",style:{transform:"translate(7px,7px)"}}),l.a.createElement("i",{className:"fa fa-square-o",style:{transform:"translate(-7px,-7px)"}})),l.a.createElement("h3",null,"Share Screen"),l.a.createElement("p",null,"Share your computer entire screen to any device that has a web browser.")),l.a.createElement("div",{className:"col-xs-6 col-md-4 feature-with-icon"},l.a.createElement("div",{className:"icon-features"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",height:"40px",style:{fill:"white",transform:"translateX(2px)"}},l.a.createElement("path",{d:g.a.icon[4]}))),l.a.createElement("h3",null,"Share App View"),l.a.createElement("p",null,"Limit Deskreen to share only a single application view to any device with a web browser.")),l.a.createElement("div",{className:"col-xs-6 col-md-4 feature-with-icon"},l.a.createElement("div",{className:"icon-features"},l.a.createElement("i",{className:"fa fa-wifi"})),l.a.createElement("h3",null,"WiFi Compatible"),l.a.createElement("p",null,"Deskreen is smart to share screen view over WIFI. No cables needed.")),l.a.createElement("div",{className:"col-xs-6 col-md-4 feature-with-icon"},l.a.createElement("div",{className:"icon-features",style:{fontSize:"25px"}},l.a.createElement("div",{style:{transform:"translateY(10px)"}},l.a.createElement("i",{className:"fa fa-tablet"}),l.a.createElement("i",{className:"fa fa-desktop"}),l.a.createElement("i",{className:"fa fa-mobile"}),l.a.createElement("i",{className:"fa fa-laptop"}))),l.a.createElement("h3",null,"Multiple Devices Support"),l.a.createElement("p",null,"Connect as many devices as you want at the same time. Share your screen to all of them")),l.a.createElement("div",{className:"col-xs-6 col-md-4 feature-with-icon"},l.a.createElement("div",{className:"icon-features"},l.a.createElement("i",{className:"fa fa-magic"})),l.a.createElement("h3",null,"Advanced Video Quality Control"),l.a.createElement("p",null,"You can change picture quality while sharing a screen. Auto quality change supported.")),l.a.createElement("div",{className:"col-xs-6 col-md-4 feature-with-icon"},l.a.createElement("div",{className:"icon-features"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",height:"40px",style:{fill:"white",transform:"translateX(2px)"}},l.a.createElement("path",{d:E.a.icon[4]}))),l.a.createElement("h3",null,"Easy to Use"),l.a.createElement("p",null,"Three easy steps to connect with a deskreen. User oriented design with features that you need.")),l.a.createElement("div",{className:"col-xs-6 col-md-4 feature-with-icon"},l.a.createElement("div",{className:"icon-features"},l.a.createElement("i",{className:"fa fa-shield"})),l.a.createElement("h3",null,"Secure"),l.a.createElement("p",null,"Deskreen was built with security in mind. It uses an industry starndard of End-to-end encryption.")),l.a.createElement("div",{className:"col-xs-6 col-xs-offset-3 col-md-offset-0 col-md-4 feature-with-icon"},l.a.createElement("div",{className:"icon-features"},l.a.createElement("i",{className:"fa fa-tachometer"})),l.a.createElement("h3",null,"Fast"),l.a.createElement("p",null,"Depending on your WiFi speed Deskreen works fast providing you with a good user experience.")))))}}]),t}(n.Component);function b(){return l.a.createElement("blockquote",{className:"blockquote warning-blockquote"},l.a.createElement("h4",{style:{}},l.a.createElement("strong",null,"IMPORTANT:")," we are NOT selling any of these! You can buy one of them on your own from Amazon, Aliexpress, Ebay etc."))}function v(e,a){return l.a.createElement("div",{className:"col-xs-12 col-md-4 img-responsive",align:"center"},l.a.createElement("img",{src:e,style:{height:"200px",width:"auto",marginBottom:"10px"}}),l.a.createElement("h4",{className:"text-center"},a))}var w=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"about"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-md-6",align:"center"}," ",l.a.createElement("img",{src:"img/intro-bg.jpg",className:"img-responsive",alt:"",style:{}})," "),l.a.createElement("div",{className:"col-xs-12 col-md-6"},l.a.createElement("div",{className:"about-text"},l.a.createElement("h2",null,"About Deskreen"),l.a.createElement("p",null,this.props.data?this.props.data.paragraph:"loading...")))),l.a.createElement("div",{id:"what-is-display-dummy-plug",className:"row",style:{marginTop:"40px"}},l.a.createElement("div",{className:"col-xs-12 col-md-8 col-md-offset-2"},l.a.createElement("h3",null,"What is a Display Dummy Plug? (aka. Ghost or Virtual Display Plug)"),l.a.createElement("hr",{className:"custom-hr-blue"}),b(),l.a.createElement("p",null,"It is a small plug that looks similar to USB Flash Drive. When you plug them in to your computer, they are making your computer think that external display is connected. Display Dummy Plugs are very cheap and can be bought in online stores such as Amazon, Aliexpress, Ebay or even in one of your local tech store!"))),l.a.createElement("div",{className:"row",style:{marginTop:"20px"}},l.a.createElement("div",{className:"col-xs-12 col-md-8 col-md-offset-2"},l.a.createElement("h3",null,"Examples of how a Display Dummy Plug looks like"),l.a.createElement("hr",{className:"custom-hr-blue"}),b(),l.a.createElement("h4",null,"Please note that colors and sizes may differ for different manufacturers."),l.a.createElement("div",{className:"row"},v("img/plugs/hdmi.jpg","HDMI plug"),v("img/plugs/dp.jpg","DP plug"),v("img/plugs/mini-dp.jpg","Mini DP plug"))))))}}]),t}(n.Component),y=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"video-demos",className:"text-center",style:{width:"100%"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"section-title row"},l.a.createElement("h2",null,"VIDEO DEMONSTRATION"),l.a.createElement("h3",null,"In the following videos we want to show you real examples of working with Deskreen.")),l.a.createElement("div",{className:"row"},l.a.createElement("hr",{className:"custom-hr"}),l.a.createElement("h3",{id:"second-screen-demo-video",style:{fontWeight:"900"}},"Second Screen Demo Using Display Dummy Plug:"),l.a.createElement("div",{className:"col-xs-12 col-md-8 col-md-offset-2"},l.a.createElement("iframe",{className:"video-fluid",width:"560",height:"315",src:"https://www.youtube.com/embed/rmg5tZ4iSx8",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),l.a.createElement("p",null,"Altrenative video link:"),l.a.createElement("video",{className:"video-fluid",style:{width:"100%",margin:"0 auto"},preload:"none",poster:"img/poster/second-screen.jpg",controls:!0},l.a.createElement("source",{src:"video/second-screen.mp4",type:"video/mp4"}))))))}}]),t}(n.Component),N=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"howtos",className:"text-center",style:{width:"100%"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"section-title"},l.a.createElement("h2",null,"How to use Deskreen"),l.a.createElement("h3",null,"THREE EASY STEPS"),l.a.createElement("hr",{className:"custom-hr-blue-how-to"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-sm-8 col-sm-offset-2",align:"center"},l.a.createElement("blockquote",{className:"blockquote success-blockquote"},l.a.createElement("h4",null,l.a.createElement("strong",null,"NOTE:")," Deskreen shares your computer screen to a web browser. That means"," ",l.a.createElement("strong",null,l.a.createElement("em",null,"ANY"))," ","device, such as: phone, tablet, other computer or even smart TV, can be used to extend your computer screen while you are using Deskreen."," ",l.a.createElement("strong",null,l.a.createElement("em",null,"ALSO"))," ",l.a.createElement("strong",null,"you can connect as many devices as you want! (phones, tablets, other computers, smart TVs etc.)")))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-sm-8 col-sm-offset-2",align:"center"},l.a.createElement("h3",null,"STEP ONE: CONNECT"),l.a.createElement("p",{className:"howto-step-guide"},"When you have your computer with Deskreen running - Scan QR code with a tablet or phone, or type in web browser address bar manually what you see in prompt. That will open a page on your tablet with connection status."),l.a.createElement("img",{className:"img-responsive",src:"img/steps/1.jpg"}),l.a.createElement("p",{className:"howto-step-guide"},"When you follow a link by QR code, or typing it manually in browser address bar, you will see message box like below. The address highlighted in green should match with what you see on your computer Deskreen app and device you try to connect with (eg. phone, tablet). If adresses match, then you can click Allow button. This will lead you to step two."),l.a.createElement("img",{className:"img-responsive",src:"img/steps/2.jpg"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-sm-8 col-sm-offset-2",align:"center"},l.a.createElement("h3",null,"STEP TWO: SELECT"),l.a.createElement("p",null,"When you clicked 'Allow' button, you will be asked to choose what screen source you want to share. You will be prompted to select one of two options: Share Entire Screen or Share Application Window. Like in an image below."),l.a.createElement("img",{className:"img-responsive",src:"img/steps/3.jpg"}),l.a.createElement("h4",null,"STEP TWO (a): Application Window Sharing"),l.a.createElement("p",null,"When you click on Application Window Button you can select what app window to share like in image below. Click on preview box and you will proceed to step three."),l.a.createElement("img",{className:"img-responsive",src:"img/steps/4.jpg"}),l.a.createElement("h4",null,"STEP TWO (b): Entire Screen Sharing (Mirror Screen and Second Screen Use Cases)"),l.a.createElement("p",null,"If you want to share entire screen click on 'Entire Screen' button. You can choose to share entire screen when you need to mirror entire screen or use it as second screen, when Dummy Display Plug is connected. Click on preview box and you will proceed to step three."),l.a.createElement("img",{className:"img-responsive",src:"img/steps/5.jpg"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-sm-8 col-sm-offset-2",align:"center"},l.a.createElement("h3",null,"STEP THREE: CONFIRM"),l.a.createElement("p",null,"This is a final step. Here you just double check, to make sure everything as you wanted. If you've changed your mind, you can go back, or even disconnect a device by clicking 'Connected info' green button."),l.a.createElement("img",{className:"img-responsive",src:"img/steps/6.jpg"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-sm-8 col-sm-offset-2",align:"center"},l.a.createElement("h3",null,"SUCCESS!"),l.a.createElement("p",null,"After all done you will see 'Success!' message, and you can repeat procedure to connect one more device."),l.a.createElement("img",{className:"img-responsive",src:"img/steps/7.jpg"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-sm-8 col-sm-offset-2",align:"center"},l.a.createElement("h3",null,"Connected Devices Panel"),l.a.createElement("p",null,"By clicking blue 'Connected Devices' button in top bar you will be able to disconnect one or all connected devices. In case of emergency, just quit Deskreen app, and all screen sharing sessions will stop immediately."),l.a.createElement("img",{className:"img-responsive",src:"img/steps/8.jpg"}))),l.a.createElement("hr",{className:"custom-hr-blue-how-to"}),l.a.createElement("h2",{style:{fontSize:"22px"}},"Requirements and Permisions for Deskreen app"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-sm-8 col-sm-offset-2",align:"center"},l.a.createElement("h3",null,l.a.createElement("i",{className:"fa fa-apple"})," MacOS Permission to allow Deskreen to record screen"),l.a.createElement("blockquote",{className:"blockquote warning-blockquote"},l.a.createElement("strong",null,"Deskreen works via screen recording technology")," ","to live stream screen data to your tablet, phone. (Similar to how YouTube live streaming works). So you will have to provide a screen recording Permission for Deskreen on MacOS in order to make it work."),l.a.createElement("img",{className:"img-responsive",src:"img/steps/9.jpg"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-sm-8 col-sm-offset-2",align:"center"},l.a.createElement("h3",null,l.a.createElement("i",{className:"fa fa-windows"})," Windows Permission to allow Deskreen to access Local and Public Networks"),l.a.createElement("blockquote",{className:"blockquote warning-blockquote"},"On ",l.a.createElement("i",{className:"fa fa-windows"})," Windows you need to add 'Local Network Access' for Deskreen on first start."))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-sm-8 col-sm-offset-2",align:"center"},l.a.createElement("h3",null,"Firewals, antivirus etc."),l.a.createElement("blockquote",{className:"blockquote warning-blockquote"},"Deskreen is not yet code signed. That means your antivirus will complain when you run it for the first time."," ",l.a.createElement("strong",null,"Please donate so we rase funds for making it code signed."),"You shold treat Deskreen as exception for your malware protection software. Also Firewals both on your computer and WiFi router should not be blocking any Deskreen access and activity. Otherwise deskreen will not work smooth as expected.")))))}}]),t}(n.Component),k=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"testimonials"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"section-title text-center"},l.a.createElement("h2",null,"Why Deskreen?"),l.a.createElement("h4",{style:{fontSize:"20px"}},l.a.createElement("strong",null,l.a.createElement("em",null,"Deskreen"))," ","- is a blend of words ",l.a.createElement("strong",null,"'desktop'")," and"," ",l.a.createElement("strong",null,"'screen'"),".")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-md-offset-3"},l.a.createElement("div",{className:"testimonial"},l.a.createElement("div",{className:"testimonial-image"}," ",l.a.createElement("img",{src:"img/team/01.png",alt:""})," "),l.a.createElement("div",{className:"testimonial-content"},l.a.createElement("p",null,"\"It all started with me wanting to use my iPad as a second screen for my Macbook. But I found that it is already outdated to use a MacOS built in feature called 'Sidecar' and I have to buy a new iPad. I also have a Windows PC and sometimes I needed to use my iPad as second screen for it as well. I tried to look for FREE solutions out there, but I could not find anything that would fit my requirements. Besides, all methods and software I found were different for Windows, Mac and Linux. I got very confused about it. Then I got an idea of creating Deskreen. I decided to make it free and open-source to help people to solve this problem. Deskreen works the same for Windows, MacOS and Linux."),l.a.createElement("p",null,"..."),l.a.createElement("p",null,'People nowadays are buying new devices very often and may have an old tablet, phone or laptop that they stopped using. If your old tablet, phone or laptop is still able to run a browser, Deskreen can help you to bring a new life to your old digital buddy, and you can start using it as a second monitor for your laptop."'),l.a.createElement("div",{className:"testimonial-meta"}," ",l.a.createElement("strong",null,"- ",l.a.createElement("a",{href:"https://www.linkedin.com/in/pavlobu/",target:"_blank"},"Pavlo (Paul) Buidenkov")),", ",l.a.createElement("em",null,"Deskreen Creator"))))))))}}]),t}(n.Component),x=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"team",className:"text-center"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-md-8 col-md-offset-2 section-title"},l.a.createElement("h2",null,"Meet the Team")),l.a.createElement("div",{id:"row"},l.a.createElement("div",{className:"col-xs-12 team"},l.a.createElement("div",{className:"thumbnail"}," ",l.a.createElement("img",{src:"img/team/01.png",alt:"...",className:"team-img"}),l.a.createElement("div",{className:"caption"},l.a.createElement("h4",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/pavlobu/",target:"_blank"},"Pavlo (Paul) Buidenkov")),l.a.createElement("p",null,"Deskreen Creator"))))),l.a.createElement("div",{className:"col-md-8 col-md-offset-2 section-title",style:{marginBottom:"50px"}},l.a.createElement("p",null,"Hi, I'm Paul - the guy behind Deskreen. I did a lot of planning, research and development to bring Deskreen to life. It was a lot of fun!")),l.a.createElement("div",{id:"team-open-source-icon",className:"col-xs-12"},l.a.createElement("i",{className:"fa fa-users"})),l.a.createElement("div",{className:"col-md-8 col-md-offset-2 section-title"},l.a.createElement("div",{className:"caption"},l.a.createElement("h4",{style:{marginTop:"15px"}},"Stellar open-source contributors")),l.a.createElement("p",{style:{marginTop:"30px"}},"If you are a developer, consider contributing to Deskreen community on our github page and you will be listed here ;)"))))}}]),t}(n.Component),D=t(5),S=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{id:"contact"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-10 col-md-offset-1"},l.a.createElement("h2",{className:"text-center"},"Contribute to deskreen"),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("button",{id:"donate-patreon-button-contribute-section",type:"button",className:"btn btn-custom btn-lg",style:{height:"50px",width:"100%",borderRadius:"50px"}}," ",l.a.createElement("div",{className:"col-xs-1 col-md-offset-1"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",height:"22px",style:{fill:"rgb(255,29,29)"}},l.a.createElement("path",{d:D.b.icon[4]}))),l.a.createElement("div",{className:"col-xs-8",style:{transform:"translate(10px, 0px)"}},l.a.createElement("strong",null," Donate on Patreon")))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("button",{id:"donate-patreon-button-contribute-section",type:"button",className:"btn btn-custom btn-lg",style:{height:"50px",width:"100%",borderRadius:"50px"}}," ",l.a.createElement("div",{className:"col-xs-1 col-md-offset-1"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",height:"25px",style:{fill:"black",transform:"translateY(-5px)"}},l.a.createElement("path",{d:D.a.icon[4]}))),l.a.createElement("a",{href:"https://github.com/pavlobu/deskreen",target:"_blank"},l.a.createElement("div",{className:"col-xs-7",style:{transform:"translate(10px, 0px)"}},l.a.createElement("strong",{style:{color:"white"}}," contribute on GitHub"))))))),l.a.createElement("div",{className:"row",style:{color:"white"}},l.a.createElement("div",{className:"col-md-10 col-md-offset-1"},l.a.createElement("h2",{className:"text-center",style:{fontSize:"23px"}},"Why your contribution is important to us"),l.a.createElement("p",null,"Deskreen was made not to get any financial profit, but for benefit to the others. Deskreen is completely free forever. Also it is open-source, which means anyone can see the source code, to make sure it is not doing any harm to anyone. Deskreen was made completely out of good will and will be maintained by it."),l.a.createElement("p",null,"If you contribute financially, it will help us to stay motivated to do bug fixes and add new features to make Deskreen even better."),l.a.createElement("p",null,"If you are a developer your contribution on our Github is kindly welcome."))),l.a.createElement("div",{className:"row",style:{color:"white"}},l.a.createElement("div",{className:"col-md-10 col-md-offset-1"},l.a.createElement("h2",{className:"text-center",style:{fontSize:"23px"}},"Our wishlist"),l.a.createElement("div",{className:"col-md-8 col-md-offset-2"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("ul",{class:"goals-list list-group text-left"},l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("i",{className:"fa fa-circle-o"})," \xa0",l.a.createElement("strong",null,l.a.createElement("em",null,"Code Signing")," - (Funds needed!)"))),l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("i",{className:"fa fa-circle-o"})," \xa0Bug Fixes\xa0\u221e")),l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("i",{className:"fa fa-circle-o"})," ","\xa0Maintenance\xa0\u221e")),l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("i",{className:"fa fa-circle-o"})," \xa0Save trusted devices (autoconnect)")),l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("i",{className:"fa fa-circle-o"})," \xa0Translating app to other languages")))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("ul",{class:"goals-list list-group text-left"},l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("i",{className:"fa fa-circle-o"})," \xa0Support more platforms (ex. RaspberryPI)")),l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("i",{className:"fa fa-circle-o"})," \xa0Autostart on login")),l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("i",{className:"fa fa-circle-o"})," \xa0Access through system tray")),l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("i",{className:"fa fa-circle-o"})," \xa0Remote control")),l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("i",{className:"fa fa-circle-o"})," \xa0Stylus support (for drawing)")),l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("i",{className:"fa fa-circle-o"})," \xa0And many many more..."))))),l.a.createElement("div",{className:"col-md-10 col-md-offset-1"},l.a.createElement("p",{style:{fontSize:"21px"}},"Your contribution will help us to achieve our goals faster. Depending on how active Deskreen's community is, we are going to implement the above listed features in future updates of Deskreen.")))))),l.a.createElement("div",{id:"footer"},l.a.createElement("div",{className:"container text-center"},l.a.createElement("p",null,l.a.createElement("a",{id:"pavlobu-copyright",href:"https://www.linkedin.com/in/pavlobu/",target:"_blank",rel:"nofollow"},"Pavlo (Paul) Buidenkov \xa9")," "),l.a.createElement("p",null,"Powered with"," ",l.a.createElement("i",{className:"fa fa-heart",style:{fontSize:"20px",color:"rgb(255,29,29)",transform:"translateY(3px)"}})," ","from"," ",l.a.createElement("a",{href:"https://www.linkedin.com/in/pavlobu/",target:"_blank",rel:"nofollow"},"Pavlo (Paul) Buidenkov"," "),"using:"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/issaafalkattan/React-Landing-Page-Template",target:"_blank",rel:"nofollow"},"\xa9 React Landing Page Template.")," ","Design by"," ",l.a.createElement("a",{href:"http://www.templatewire.com",target:"_blank",rel:"nofollow"},"TemplateWire")))))}}]),t}(n.Component),O=t(11),j=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={landingPageData:{}},e}return Object(c.a)(t,[{key:"getlandingPageData",value:function(){this.setState({landingPageData:O})}},{key:"componentDidMount",value:function(){this.getlandingPageData()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d.a,{id:"fork-me-on-github",href:"https://github.com/pavlobu/deskreen",target:"_blank",position:"right"},"Fork me on GitHub"),l.a.createElement(p,null),l.a.createElement(h,{data:this.state.landingPageData.Header}),l.a.createElement(f,{data:this.state.landingPageData.Features}),l.a.createElement(w,{data:this.state.landingPageData.About}),l.a.createElement(y,null),l.a.createElement(N,null),l.a.createElement(k,null),l.a.createElement(x,{data:this.state.landingPageData.Team}),l.a.createElement(S,{data:this.state.landingPageData.Contact}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.1f0e319e.chunk.js.map