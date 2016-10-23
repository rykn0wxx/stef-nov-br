"use strict";function MainCtrlFunction(a){var b=window.jQuery,c=(window.d3,window._,window.Highcharts,this);c.$scope=a,a.xAxis=[],a.chartSeries=[{name:"INC",type:"column",yAxis:1,data:[7.9,9.7,11.8,12.6,9.9],tooltip:{valueSuffix:"%"}},{name:"% Device Count",type:"spline",data:[17,17,17,17,17],marker:{enabled:!1},tooltip:{valueSuffix:"%"}},{name:"TASK",type:"column",yAxis:1,data:[1.4,1.8,1.7,.6,1.1],tooltip:{valueSuffix:"%"}}],c.lastUpdate=+new Date,c.timeout=3e3,c.replaceSeries=function(b){var d=c.getSeries(b);a.chartConfig.series=d.series,a.chartConfig.subtitle=d.subtitle},a.chartConfig={options:{chart:{type:"areaspline"},plotOptions:{spline:{lineWidth:2}},xAxis:[{categories:["2015 Q3","2015 Q4","2016 Q1","2016 Q2","2016 Q3"]}],yAxis:[{labels:{formatter:function(){return this.value+"%"}},title:{text:"Device Count"},opposite:!0,min:0},{gridLineWidth:0,title:{text:"Ticket Volume"},labels:{formatter:function(){return this.value+"%"}},min:0}]},series:a.chartSeries,title:{text:null},subtitle:{text:"Service Desk - Asia"},credits:{enabled:!0},loading:!1,size:{}},c.getData=function(){b("#c1").highcharts({title:{text:null},subtitle:{text:"Service Desk - Asia"},plotOptions:{spline:{lineWidth:2}},xAxis:[{categories:["2015 Q3","2015 Q4","2016 Q1","2016 Q2","2016 Q3"]}],yAxis:[{labels:{formatter:function(){return this.value+"%"}},title:{text:"Device Count"},opposite:!0,min:0},{gridLineWidth:0,title:{text:"Ticket Volume"},labels:{formatter:function(){return this.value+"%"}},min:0}],tooltip:{shared:!0},series:[{name:"INC",type:"column",yAxis:1,data:[7.9,9.7,11.8,12.6,9.9],tooltip:{valueSuffix:"%"}},{name:"% Device Count",type:"spline",data:[17,17,17,17,17],marker:{enabled:!1},tooltip:{valueSuffix:"%"}},{name:"TASK",type:"column",yAxis:1,data:[1.4,1.8,1.7,.6,1.1],tooltip:{valueSuffix:"%"}}]}),b("#c2").highcharts({chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1},title:{text:null},subtitle:{text:"% Device Count"},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.0f}%</b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,color:"#000000",connectorColor:"#000000",format:"<b>{point.name}</b>: {point.percentage:.0f} %"}}},series:[{type:"pie",name:"Global share",data:[{name:"Asia",y:17,sliced:!0,selected:!0,events:{click:function(a){a.preventDefault(),c.replaceSeries(this.name)}}},{name:"Europe",y:35,color:"#b0bec5",events:{click:function(a){a.preventDefault(),c.replaceSeries(this.name)}}},{name:"N.America",y:32,color:"#90a4ae",events:{click:function(a){c.replaceSeries(this.name)}}},{name:"S.America",y:16,color:"#cfd8dc",events:{click:function(a){c.replaceSeries(this.name)}}}]}]})},setTimeout(function(){c.getData()},100)}angular.module("stefNovBrApp",["ngRoute","highcharts-ng"]).config(["$routeProvider",function(a){a.when("/main",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/tickets",{templateUrl:"views/tickets.html",controller:"TicketsCtrl",controllerAs:"tickets"}).otherwise({redirectTo:"/main"})}]).directive("a",function(){return{restrict:"E",link:function(a,b,c){(""===c.href||"#"===c.href)&&b.on("click",function(a){a.preventDefault(),a.stopPropagation()})}}}).directive("sidebarLinks",[function(){return{restrict:"C",link:function(a,b){var c=b.find("a");c.on("click",function(){c.removeClass("selected"),angular.element(this).addClass("selected")})}}}]).run([function(){var a=window.Highcharts;a.theme={chart:{backgroundColor:"rgba(150,150,150,0.1)",className:"hc-chart"},lang:{contextButtonTitle:"ACA context menu",decimalPoint:".",downloadJPEG:"Export as JPG",downloadPDF:"Export as PDF",downloadSVG:"Export as SVG",drillUpText:"Back to {series.name}",loading:"This will be awesome...",months:["January","February","March","April","May","June","July","August","September","October","November","December"],noData:"No data to display",numericSymbols:["k","M","G","T","P","E"],printChart:"Export Chart",resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],thousandsSep:",",weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},credits:{enabled:!0,href:"mailto:ariel.andrade@stefanini.com?subject=Stefanini Dashboard Query",text:"Created by ACAndrade",style:{fontSize:"10px",fontFamily:"Roboto, Verdana, Arial, sans-serif",color:"rgba(255,255,255,0.2)"}},title:{style:{fontFamily:"Roboto",color:"rgba(255,255,255,0.8)",textTransform:"uppercase",fontSize:"16px",fontWeight:"medium"}},subtitle:{style:{textTransform:"uppercase",fontSize:"12px",fontFamily:"Roboto",fontStyle:"italic",color:"rgba(255,255,255,0.4)"}},legend:{itemStyle:{color:"rgba(255,255,255,0.5)"}},plotOptions:{bar:{borderWidth:1,borderColor:"rgba(0,0,0,0.1)"},series:{borderWidth:1,borderColor:"rgba(0,0,0,0.1)",groupPadding:.01},column:{pointPadding:.1,borderWidth:0,borderColor:"rgba(0,0,0,0.1)",borderRadius:1,states:{hover:{enabled:!0}}},spline:{lineWidth:1,marker:{lineWidth:2,fillColor:"#fff",lineColor:"#484343",symbol:"circle"},dataLabels:{style:{color:"#808080",fontWeight:"regular",fontSize:"10px",fontFamily:"Verdana"}}},line:{lineWidth:1}},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.5)",style:{fontSize:"11px",color:"#F0F0F0"}},yAxis:{gridLineColor:"#707073",labels:{style:{color:"rgba(255,255,255,0.4)"}},lineColor:"rgba(0,0,0,0.1)",lineWidth:0,tickColor:"rgba(0,0,0,0.4)",title:{style:{color:"rgba(255,255,255,0.5)"},text:null}},xAxis:{gridLineColor:"#707073",labels:{style:{color:"rgba(255,255,255,0.4)"}},lineColor:"rgba(0,0,0,0.1)",lineWidth:0,tickColor:"rgba(0,0,0,0.4)",title:{style:{color:"rgba(255,255,255,0.5)"}}},exporting:{buttons:{contextButton:{menuItems:[{text:"Export to PNG (small)",onclick:function(){this.exportChart({width:250})}},{text:"Export to PNG (large)",onclick:function(){this.exportChart()},separator:!1},{text:"Export as SVG",onclick:function(){this.exportChartLocal({type:"image/svg+xml"})},separator:!1}]}}},colors:["#3498db","#464545","#F15A60","#6AC37A","#80BFE9","#F48388","#EFEF80","#9370DB","#D98880","#87CEFA","#CCCCCC","#E7B2D4"]},a.setOptions(a.theme),Date.prototype.yyyymmdd=function(){var a=this.getFullYear().toString(),b=(this.getMonth()+1).toString(),c=this.getDate().toString();return a+" - "+(b[1]?b:"0"+b[0])+" - "+(c[1]?c:"0"+c[0])},Date.prototype.yyyymmm=function(){var a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],b=this.getFullYear().toString(),c=a[this.getMonth()];return b+" - "+c},Date.prototype.startMonth=function(){var a=this.getFullYear(),b=this.getMonth();return new Date(a,b,1)},Date.prototype.prevMonth=function(){var a=this.getFullYear(),b=this.getMonth()-1;return new Date(a,b,1)},function(b){"object"==typeof module&&module.exports?module.exports=b:b(a)}(function(a){function b(a){return"[object Array]"===Object.prototype.toString.call(a)}var c,d,e,f,g="dblclick",h="touchstart",i="click",j=a.each,k=a.pick,l=a.wrap,m=a.merge,n=a.addEvent,o=a.isTouchDevice,p=a.getOptions().plotOptions,q=a.PlotLineOrBand&&a.PlotLineOrBand.prototype,r=a.seriesTypes,s=a.Series&&a.Series.prototype;q&&l(q,"render",function(a){var b=this.options&&this.options.events;b&&(b=!1),a.apply(this,Array.prototype.slice.call(arguments,1))}),s&&l(s,"init",function(a,b,c){var d=b.options,e=d.plotOptions,f=d.plotOptions.series,g=m(f,e[this.type]);c.events=!1,c.point={events:!1},c.customEvents={series:g&&g.events,point:g&&g.point&&g.point.events},a.apply(this,Array.prototype.slice.call(arguments,1))}),a.Chart.prototype.customEvent={getEventsProtoMethods:function(){return[[a.Tick,["addLabel"]],[a.Axis,["render"]],[a.Chart,["setTitle"]],[a.Legend,["renderItem"]],[a.PlotLineOrBand,["render"]],[a.Series,["drawPoints","drawDataLabels"]],[r.column,["drawPoints","drawDataLabels"]],[r.bar,["drawPoints","drawDataLabels"]],[r.pie,["drawPoints","drawDataLabels"]],[r.bubble,["drawPoints","drawDataLabels"]],[r.columnrange,["drawPoints","drawDataLabels"]],[r.arearange,["drawPoints","drawDataLabels"]],[r.areasplinerange,["drawPoints","drawDataLabels"]],[r.errorbar,["drawPoints","drawDataLabels"]],[r.boxplot,["drawPoints","drawDataLabels"]],[r.flags,["drawPoints","drawDataLabels"]]]},init:function(){var a=this.getEventsProtoMethods();j(a,function(a){e=a[0]&&a[0].prototype,f=a[1],e&&j(f,function(a){d.attach(e,a)})})},attach:function(a,b){l(a,b,function(a){var e,f,g={events:c,element:c};if(a.apply(this,Array.prototype.slice.call(arguments,1)),g=d.eventElement[b].call(this),!g.events&&!g.eventsPoint)return!1;if(g.eventsPoint)for(e=g.elementPoint.length,f=0;e>f;f++){var h=k(g.elementPoint[f].graphic,g.elementPoint[f]);h&&h!==c&&d.add(h,g.eventsPoint,g.elementPoint[f],this)}g.eventsSubtitle&&d.add(g.elementSubtitle,g.eventsSubtitle,this),g.eventsStackLabel&&d.add(g.elementStackLabel,g.eventsStackLabel,this),d.add(g.element,g.events,this)})},add:function(a,b,c,d){if(!a||!a.element)return!1;for(var e in b)!function(e){if(b.hasOwnProperty(e)&&!a[e]){if(o&&e===g){var f=!1;n(a.element,h,function(a){return a.stopPropagation(),a.preventDefault(),f?(clearTimeout(f),f=null,b[e].call(c,a)):f=setTimeout(function(){f=null,b[i].call(c,a)},300),!1})}else n(a.element,e,function(a){if(c&&c.textStr&&(c.value=c.textStr),d&&p[d.type]&&p[d.type].marker){var f=d.chart,g=f.pointer.normalize(a);c=d.searchPoint(g,!0)}return b[e].call(c,a),!1});a[e]=function(){return!0}}}(e)},eventElement:{addLabel:function(){var a,c,d=this.parent,e=this.axis.options,f=e.labels&&e.labels.events,g=[this.label];if(d)for(var h=this;h;){if(b(h))for(a=h.length,c=0;a>c;c++)g.push(h[c].label);else g.push(h.label);h=h.parent}return{eventsPoint:f,elementPoint:g}},setTitle:function(){var a=this.options.title&&this.options.title.events,b=this.title,c=this.options.subtitle&&this.options.subtitle.events,d=this.subtitle;return{events:a,element:b,eventsSubtitle:c,elementSubtitle:d}},drawDataLabels:function(){var a=this.dataLabelsGroup;return{events:a?this.options.dataLabels.events:c,element:a?this.dataLabelsGroup:c}},render:function(){var a,b,c,d,e,f,g=this.options.stackLabels;return this.axisTitle&&(a=this.options.title.events,b=this.axisTitle),g&&g.enabled&&(c=g.events,d=this.stacks,e=g.events,f=this.stackTotalGroup),{events:a,element:b,eventsPoint:c,elementPoint:d,eventsStackLabel:e,elementStackLabel:f}},drawPoints:function(){var a,b=this.options,c=this.type,d=b.customEvents?b.customEvents.series:b.events,e=this.group,f=b.customEvents?b.customEvents.point:b.point.events;return a=p[c]&&p[c].marker?[this.markerGroup]:this.points,{events:d,element:e,eventsPoint:f,elementPoint:a}},renderItem:function(){return{events:this.options.itemEvents,element:this.group}}}},d=a.Chart.prototype.customEvent,d.init()})}]),MainCtrlFunction.prototype.reloadFlash=function(){var a=window.jQuery,b=this;a("#flash").fadeIn(),b.lastUpdate=+new Date,setTimeout(function(){b.hideFlash(b)},b.timeout)},MainCtrlFunction.prototype.hideFlash=function(){var a=window.jQuery,b=this,c=+new Date;c>=b.lastUpdate+b.timeout&&a("#flash").fadeOut()},MainCtrlFunction.prototype.getSeries=function(a){var b=(window.jQuery,window._),c=this.$scope,d={},e=[{region:"Asia",data:{series:[{name:"INC",type:"column",yAxis:1,data:[7.9,9.7,11.8,12.6,9.9],tooltip:{valueSuffix:"%"}},{name:"% Device Count",type:"spline",data:[17,17,17,17,17],marker:{enabled:!1},tooltip:{valueSuffix:"%"}},{name:"TASK",type:"column",yAxis:1,data:[1.4,1.8,1.7,.6,1.1],tooltip:{valueSuffix:"%"}}],subtitle:"Service Desk - Asia"}},{region:"Europe",data:{series:[{name:"INC",type:"column",yAxis:1,data:[17,16.3,17.9,18.2,17.3],tooltip:{valueSuffix:"%"}},{name:"% Device Count",type:"spline",data:[35,35,35,35,35],marker:{enabled:!1},tooltip:{valueSuffix:"%"}},{name:"TASK",type:"column",yAxis:1,data:[4.6,4.2,3.1,3.5,1.9],tooltip:{valueSuffix:"%"}}],subtitle:"Service Desk - Europe"}}],f=b.filter(e,["region",a])[0];return b.extend(d,c.chartConfig),b.extend(d,f.data)},angular.module("stefNovBrApp").controller("MainCtrl",["$scope",MainCtrlFunction]),angular.module("stefNovBrApp").controller("AboutCtrl",["$scope",function(a){var b=window._,c=[{region:"Asia",data:{series:[{name:"INC",type:"column",yAxis:1,data:[7.9,9.7,11.8,12.6,9.9]},{name:"% Device Count",type:"spline",data:[17,17,17,17,17],marker:{enabled:!1},tooltip:{valueSuffix:"%"}},{name:"TASK",type:"column",yAxis:1,data:[1.4,1.8,1.7,.6,1.1],tooltip:{valueSuffix:"%"}}],subtitle:"Service Desk - Asia"}},{region:"Europe",data:{series:[{name:"INC",type:"column",yAxis:1,data:[17,16.3,17.9,18.2,17.3],tooltip:{valueSuffix:"%"}},{name:"% Device Count",type:"spline",data:[35,35,35,35,35],marker:{enabled:!1},tooltip:{valueSuffix:"%"}},{name:"TASK",type:"column",yAxis:1,data:[4.6,4.2,3.1,3.5,1.9],tooltip:{valueSuffix:"%"}}],subtitle:"Service Desk - Europe"}}];a.replaceAllSeries=function(){var b=[{name:"INC",type:"column",yAxis:1,data:[17,16.3,17.9,18.2,17.3],tooltip:{valueSuffix:"%"}},{name:"% Device Count",type:"spline",data:[35,35,35,35,35],marker:{enabled:!1},tooltip:{valueSuffix:"%"}},{name:"TASK",type:"column",yAxis:1,data:[4.6,4.2,3.1,3.5,1.9],tooltip:{valueSuffix:"%"}}];a.barChartConfig.series=b},a.barChartSeries=[{name:"INC",data:[7.9,9.7,11.8,12.6,9.9],type:"column",yAxis:1},{name:"% Device Count",data:[17,17,17,17,17],type:"spline",marker:{enabled:!1}},{name:"TASK",data:[1.4,1.8,1.7,.6,1.1],type:"column",yAxis:1}],a.pieChartSeries=[{type:"pie",name:"Global share",data:[{name:"Asia",y:17,sliced:!0,selected:!0,events:{click:function(b){a.replaceAllSeries(),console.log(this.name)}}},{name:"Europe",y:35,color:"#b0bec5",events:{click:function(b){a.replaceAllSeries(),console.log(this.name)}}},{name:"N.America",y:32,color:"#90a4ae",events:{click:function(b){a.replaceAllSeries(),console.log(this.name)}}},{name:"S.America",y:16,color:"#cfd8dc",events:{click:function(b){a.replaceAllSeries(),console.log(this.name)}}}]}],a.barChartConfig={options:{plotOptions:{series:{stacking:"",events:{click:function(a,b){console.log(a)}}}},xAxis:[{categories:["2015 Q3","2015 Q4","2016 Q1","2016 Q2","2016 Q3"]}],yAxis:[{labels:{formatter:function(){return this.value+"%"}},title:{text:"Device Count"},opposite:!0,min:0},{gridLineWidth:0,title:{text:"Ticket Volume"},labels:{formatter:function(){return this.value+"%"}},min:0}]},series:a.barChartSeries,title:{text:"Hello"},credits:{enabled:!0},loading:!1,size:{}},a.pieChartConfig={options:{tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.0f}%</b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,color:"#000000",connectorColor:"#000000",format:"<b>{point.name}</b>: {point.percentage:.0f} %"}}}},series:a.pieChartSeries,title:{text:"Hello"},credits:{enabled:!0},loading:!1,size:{}},a.changeSeries=function(d){var e=b.filter(c,["region",d])[0];a.barChartConfig.series=e.data.series,console.log(e)}}]),angular.module("stefNovBrApp").controller("TicketsCtrl",["$scope",function(a){var b=window.d3,c=window._,d={Global:"Global",SD:"Service Desk",DS:"Deskside",BS:"Base Services"};a.maindata=[],a.category=[],b.json("scripts/br.json",function(b){a.data=b;var d=c.groupBy(b,"categoryName");c.forEach(d,function(b,d){var e=[],f=[],g=c.groupBy(b,"contactType");c.forEach(g,function(a,b){e=c.map(a,function(a){return a.openedMonth});var d=c.map(a,function(a){return a.ctr});f.push({name:b,data:d})}),a.maindata.push({name:d,series:f,category:e})});var e=a.maindata[0];a.chartConfig.options.xAxis.categories=e.category,a.chartConfig.series=e.series}),a.changeSeries=function(b){var e=c.filter(a.maindata,["name",b])[0];a.chartConfig.series=e.series,a.chartConfig.subtitle.text=d[b]},a.chartConfig={options:{chart:{type:"column"},plotOptions:{series:{stacking:"normal"}},xAxis:{categories:a.category}},series:a.series,title:{text:null},subtitle:{text:null},credits:{enabled:!0},loading:!1,size:{}}}]),angular.module("stefNovBrApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="content animated bounceIn content1"> <div class="page-header"> <h4>Opened Tickets Trend</h4> <div class="row-fluid"><button ng-click="changeSeries(\'Europe\')">Replace all series</button></div> </div> <div class="main-content"> <div class="col-sm-12"> <div class="row"> <div class="col-md-7"> <div class="chart"> <highchart id="chart1" config="barChartConfig"></highchart> </div> </div> <div class="col-md-5"> <div class="chart"> <highchart id="chart2" config="pieChartConfig"></highchart> </div> </div> </div> </div> </div> </div>'),a.put("views/main.html",'<div class="content animated bounceIn"> <div id="flash"> <div id="report"></div> </div> <div class="page-header"> <h4>Opened Tickets Trend</h4> </div> <div class="col-sm-12"> <div class="row"> <div class="col-md-8"> <div class="chart" id="c1" style="height: 400px; min-width: 310px"></div> </div> <div class="col-md-4"> <div class="chart" id="c2" style="height: 400px; min-width: 310px"></div> </div> </div> <div class="col-md-12"> <highchart id="chart1" config="chartConfig" class="chart col-xs-12"></highchart> </div> </div> </div>'),a.put("views/tickets.html",'<div class="content animated bounceIn"> <div class="page-header"> <h4>Opened Tickets Trend</h4> </div> <div class="col-md-12"> <div class="row"> <div class="col-md-10"> <div class="chart"> <highchart id="chart1" config="chartConfig"></highchart> </div> </div> <div class="col-md-2"> <div class="btn-group csm-grp-vert" role="group"> <button class="btn-csm btn-purple" ng-click="changeSeries(\'Global\')">Global</button> <button class="btn-csm btn-pink" ng-click="changeSeries(\'SD\')">Service Desk</button> <button class="btn-csm btn-green" ng-click="changeSeries(\'DS\')">Deskside</button> <button class="btn-csm btn-blue" ng-click="changeSeries(\'BS\')">Base Services</button> </div> </div> </div> </div> </div>')}]);