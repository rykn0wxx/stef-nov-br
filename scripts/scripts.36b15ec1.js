"use strict";function MainCtrlFunction(a){var b=window.jQuery,c=(window.d3,window._,window.Highcharts,this);c.$scope=a,a.xAxis=[],a.chartSeries=[{name:"INC",type:"column",yAxis:1,data:[7.9,9.7,11.8,12.6,9.9],tooltip:{valueSuffix:"%"}},{name:"% Device Count",type:"spline",data:[17,17,17,17,17],marker:{enabled:!1},tooltip:{valueSuffix:"%"}},{name:"TASK",type:"column",yAxis:1,data:[1.4,1.8,1.7,.6,1.1],tooltip:{valueSuffix:"%"}}],c.lastUpdate=+new Date,c.timeout=3e3,c.replaceSeries=function(b){var d=c.getSeries(b);a.chartConfig.series=d.series,a.chartConfig.subtitle=d.subtitle},a.chartConfig={options:{chart:{type:"areaspline"},plotOptions:{spline:{lineWidth:2}},xAxis:[{categories:["2015 Q3","2015 Q4","2016 Q1","2016 Q2","2016 Q3"]}],yAxis:[{labels:{formatter:function(){return this.value+"%"}},title:{text:"Device Count"},opposite:!0,min:0},{gridLineWidth:0,title:{text:"Ticket Volume"},labels:{formatter:function(){return this.value+"%"}},min:0}]},series:a.chartSeries,title:{text:null},subtitle:{text:"Service Desk - Asia"},credits:{enabled:!0},loading:!1,size:{}},c.getData=function(){b("#c1").highcharts({title:{text:null},subtitle:{text:"Service Desk - Asia"},plotOptions:{spline:{lineWidth:2}},xAxis:[{categories:["2015 Q3","2015 Q4","2016 Q1","2016 Q2","2016 Q3"]}],yAxis:[{labels:{formatter:function(){return this.value+"%"}},title:{text:"Device Count"},opposite:!0,min:0},{gridLineWidth:0,title:{text:"Ticket Volume"},labels:{formatter:function(){return this.value+"%"}},min:0}],tooltip:{shared:!0},series:[{name:"INC",type:"column",yAxis:1,data:[7.9,9.7,11.8,12.6,9.9],tooltip:{valueSuffix:"%"}},{name:"% Device Count",type:"spline",data:[17,17,17,17,17],marker:{enabled:!1},tooltip:{valueSuffix:"%"}},{name:"TASK",type:"column",yAxis:1,data:[1.4,1.8,1.7,.6,1.1],tooltip:{valueSuffix:"%"}}]}),b("#c2").highcharts({chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1},title:{text:null},subtitle:{text:"% Device Count"},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.0f}%</b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,color:"#000000",connectorColor:"#000000",format:"<b>{point.name}</b>: {point.percentage:.0f} %"}}},series:[{type:"pie",name:"Global share",data:[{name:"Asia",y:17,sliced:!0,selected:!0,events:{click:function(a){a.preventDefault(),c.replaceSeries(this.name)}}},{name:"Europe",y:35,color:"#b0bec5",events:{click:function(a){a.preventDefault(),c.replaceSeries(this.name)}}},{name:"N.America",y:32,color:"#90a4ae",events:{click:function(a){c.replaceSeries(this.name)}}},{name:"S.America",y:16,color:"#cfd8dc",events:{click:function(a){c.replaceSeries(this.name)}}}]}]})},setTimeout(function(){c.getData()},100)}angular.module("stefNovBrApp",["ngRoute","highcharts-ng","d3Service","lodashService","jqueryService"]).config(["$routeProvider","DataUtilProvider",function(a,b){a.when("/main",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/tickets",{templateUrl:"views/tickets.html",controller:"TicketsCtrl",controllerAs:"tickets"}).when("/device",{templateUrl:"views/device.html",controller:"DeviceCtrl",controllerAs:"device"}).when("/cross",{templateUrl:"views/cross.html",controller:"CrossCtrl",controllerAs:"cross"}).when("/incident/:desk",{templateUrl:"views/incident.html",controller:"IncidentCtrl",controllerAs:"incident"}).when("/task/:desk",{templateUrl:"views/task.html",controller:"TaskCtrl",controllerAs:"task"}).otherwise({redirectTo:"/main"}),b.setBaseFile("scripts/data.csv")}]).directive("a",function(){return{restrict:"E",link:function(a,b,c){(""===c.href||"#"===c.href)&&b.on("click",function(a){a.preventDefault(),a.stopPropagation()})}}}).directive("csmApp",[function(){return{restrict:"C",link:function(a,b){angular.element(window,b).on("resize",function(a){var c=angular.element(".main-footer").outerHeight(),d=angular.element(window).height(),e=angular.element(".sidebar-left").height(),f=d>=e?d-c:e;b.find(".base").css("min-height",f)})}}}]).directive("dcReset",[function(){var a=window.dc;return{restrict:"C",link:function(b,c){c.on("click",function(d){var e=c.parents(".dc-chart").attr("id"),f=b.dcCharts[e];f.filterAll(),a.redrawAll()})}}}]).directive("sidebarLinks",[function(){return{restrict:"C",link:function(a,b){var c=b.find(".main-link");c.on("click",function(a){c.parent().removeClass("selected"),angular.element(this).parent().addClass("selected")})}}}]).run([function(){var a=window.Highcharts;a.theme={chart:{backgroundColor:"rgba(100,100,100,0.4)",className:"hc-chart"},lang:{contextButtonTitle:"ACA context menu",decimalPoint:".",downloadJPEG:"Export as JPG",downloadPDF:"Export as PDF",downloadSVG:"Export as SVG",drillUpText:"Back to {series.name}",loading:"This will be awesome...",months:["January","February","March","April","May","June","July","August","September","October","November","December"],noData:"No data to display",numericSymbols:["k","M","G","T","P","E"],printChart:"Export Chart",resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],thousandsSep:",",weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},credits:{enabled:!0,href:"mailto:ariel.andrade@stefanini.com?subject=Stefanini Dashboard Query",text:"Created by ACAndrade",style:{fontSize:"10px",fontFamily:"Roboto, Verdana, Arial, sans-serif",color:"rgba(255,255,255,0.2)"}},title:{style:{fontFamily:"Roboto",color:"rgba(255,255,255,0.8)",textTransform:"uppercase",fontSize:"16px",fontWeight:"medium"}},subtitle:{style:{textTransform:"uppercase",fontSize:"12px",fontFamily:"Roboto",fontStyle:"italic",color:"rgba(255,255,255,0.4)"}},legend:{itemStyle:{color:"rgba(255,255,255,0.5)"}},plotOptions:{bar:{borderWidth:1,borderColor:"rgba(0,0,0,0.1)"},series:{borderWidth:1,borderColor:"rgba(0,0,0,0.1)",groupPadding:.01},column:{pointPadding:.1,borderWidth:0,borderColor:"rgba(0,0,0,0.1)",borderRadius:1,states:{hover:{enabled:!0}}},spline:{lineWidth:1,marker:{lineWidth:2,fillColor:"#fff",lineColor:"#484343",symbol:"circle"},dataLabels:{style:{color:"#808080",fontWeight:"regular",fontSize:"10px",fontFamily:"Verdana"}}},line:{lineWidth:1}},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.5)",style:{fontSize:"11px",color:"#F0F0F0"}},yAxis:{gridLineColor:"#707073",labels:{style:{color:"rgba(255,255,255,0.4)"}},lineColor:"rgba(0,0,0,0.1)",lineWidth:0,tickColor:"rgba(0,0,0,0.4)",title:{style:{color:"rgba(255,255,255,0.5)"},text:null}},xAxis:{gridLineColor:"#707073",labels:{style:{color:"rgba(255,255,255,0.4)",fontSize:"10px"}},lineColor:"rgba(0,0,0,0.1)",lineWidth:0,tickColor:"rgba(0,0,0,0.4)",title:{style:{color:"rgba(255,255,255,0.5)"}}},exporting:{buttons:{contextButton:{menuItems:[{text:"Export to PNG (small)",onclick:function(){this.exportChart({width:250})}},{text:"Export to PNG (large)",onclick:function(){this.exportChart()},separator:!1},{text:"Export as SVG",onclick:function(){this.exportChartLocal({type:"image/svg+xml"})},separator:!1}]}}},colors:["#5DA3E7","#686868","#75E95D","#F9953A","#7077FF","#F15A60","#E4D354","#B8D2EC","#D98880","#87CEFA","#CCCCCC","#E7B2D4"]},a.setOptions(a.theme),Date.prototype.yyyymmdd=function(){var a=this.getFullYear().toString(),b=(this.getMonth()+1).toString(),c=this.getDate().toString();return a+" - "+(b[1]?b:"0"+b[0])+" - "+(c[1]?c:"0"+c[0])},Date.prototype.yyyymmm=function(){var a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],b=this.getFullYear().toString(),c=a[this.getMonth()];return b+" - "+c},Date.prototype.startMonth=function(){var a=this.getFullYear(),b=this.getMonth();return new Date(a,b,1)},Date.prototype.prevMonth=function(){var a=this.getFullYear(),b=this.getMonth()-1;return new Date(a,b,1)}}]),angular.module("d3Service",[]).service("d3Csm",[function(){return window.d3}]),angular.module("lodashService",[]).service("_Csm",[function(){return window._}]),angular.module("jqueryService",[]).service("$Csm",[function(){return window.jQuery}]),MainCtrlFunction.prototype.reloadFlash=function(){var a=window.jQuery,b=this;a("#flash").fadeIn(),b.lastUpdate=+new Date,setTimeout(function(){b.hideFlash(b)},b.timeout)},MainCtrlFunction.prototype.hideFlash=function(){var a=window.jQuery,b=this,c=+new Date;c>=b.lastUpdate+b.timeout&&a("#flash").fadeOut()},MainCtrlFunction.prototype.getSeries=function(a){var b=(window.jQuery,window._),c=this.$scope,d={},e=[{region:"Asia",data:{series:[{name:"INC",type:"column",yAxis:1,data:[7.9,9.7,11.8,12.6,9.9],tooltip:{valueSuffix:"%"}},{name:"% Device Count",type:"spline",data:[17,17,17,17,17],marker:{enabled:!1},tooltip:{valueSuffix:"%"}},{name:"TASK",type:"column",yAxis:1,data:[1.4,1.8,1.7,.6,1.1],tooltip:{valueSuffix:"%"}}],subtitle:"Service Desk - Asia"}},{region:"Europe",data:{series:[{name:"INC",type:"column",yAxis:1,data:[17,16.3,17.9,18.2,17.3],tooltip:{valueSuffix:"%"}},{name:"% Device Count",type:"spline",data:[35,35,35,35,35],marker:{enabled:!1},tooltip:{valueSuffix:"%"}},{name:"TASK",type:"column",yAxis:1,data:[4.6,4.2,3.1,3.5,1.9],tooltip:{valueSuffix:"%"}}],subtitle:"Service Desk - Europe"}}],f=b.filter(e,["region",a])[0];return b.extend(d,c.chartConfig),b.extend(d,f.data)},angular.module("stefNovBrApp").controller("MainCtrl",["$scope",MainCtrlFunction]),angular.module("stefNovBrApp").controller("AboutCtrl",["$scope","$timeout","d3Csm","_Csm",function(a,b,c,d){var e=window.dc,f=window.crossfilter,g=e.pieChart("#test");c.csv("scripts/data.csv",function(a,b){b.forEach(function(a){a.ctr=+a.ctr});var c=f(b),d=(c.groupAll(),c.dimension(function(a){return a.deskName})),h=d.group().reduceSum(function(a){return+a.ctr});g.width(768).height(480).slicesCap(4).innerRadius(100).dimension(d).group(h).legend(e.legend()).on("pretransition",function(a){a.selectAll("text.pie-slice").text(function(a){return a.data.key+" "+e.utils.printSingleValue((a.endAngle-a.startAngle)/(2*Math.PI)*100)+"%"})}),g.render()})}]),angular.module("stefNovBrApp").controller("TicketsCtrl",["$scope","d3Csm","_Csm",function(a,b,c){var d={Global:"Global",SD:"Service Desk",DS:"Deskside",BS:"Base Services"};a.maindata=[],a.category=[],b.json("scripts/br.json",function(b){a.data=b;var d=c.groupBy(b,"categoryName");c.forEach(d,function(b,d){var e=[],f=[],g=c.groupBy(b,"contactType");c.forEach(g,function(a,b){e=c.map(a,function(a){return a.openedMonth});var d=c.map(a,function(a){return a.ctr});f.push({name:b,data:d})}),a.maindata.push({name:d,series:f,category:e})});var e=a.maindata[0];a.chartConfig.options.xAxis.categories=e.category,a.chartConfig.series=e.series}),a.changeSeries=function(b){var e=c.filter(a.maindata,["name",b])[0];a.chartConfig.series=e.series,a.chartConfig.subtitle.text=d[b]},a.chartConfig={options:{chart:{type:"column"},plotOptions:{series:{stacking:"normal"}},xAxis:{categories:a.category}},series:a.series,title:{text:null},subtitle:{text:null},credits:{enabled:!0},loading:!1,size:{}}}]),angular.module("stefNovBrApp").controller("DeviceCtrl",["$scope","DataUtil","$timeout","d3Csm","_Csm",function(a,b,c,d,e){function f(a){return"INC"===a.ticketType}function g(a){return"TASK"===a.ticketType}var h=this,i=window.dc;window.crossfilter;h.reportingObj={},a.dcCharts={},b.getData("scripts/alldata.csv").then(function(c){d.format(".2f"),h.reportingObj;h.baseData=c;var e=h.baseData.groupAll(),j=h.baseData.dimension(function(a){return new Date(a.openedMonth)}),k=(j.group().reduceSum(function(a){return+a.ctr}),j.group().reduce(function(a,b){return f(b)&&(a.totalIncidentsRecords++,a.totalIncidents+=+b.ctr,a.totalIncidentAvg=a.totalIncidents/a.totalIncidentsRecords),g(b)&&(a.totalTaskRecords++,a.totalTasks+=+b.ctr,a.totalTaskAvg=a.totalTasks/a.totalTaskRecords),a.totaTickets=a.totalIncidents+a.totalTasks,a},function(a,b){return f(b)&&(a.totalIncidentsRecords--,a.totalIncidents-=+b.ctr,a.totalIncidentAvg=a.totalIncidents/a.totalIncidentsRecords),g(b)&&(a.totalTaskRecords--,a.totalTasks-=+b.ctr,a.totalTaskAvg=a.totalTasks/a.totalTaskRecords),a.totaTickets=a.totalIncidents+a.totalTasks,a},function(){return{totalIncidentsRecords:0,totalIncidents:0,totalIncidentAvg:0,totalTaskRecords:0,totalTasks:0,totalTaskAvg:0,totaTickets:0}}));a.dcCharts.monthtrend=i.barChart("#monthtrend"),a.dcCharts.monthtrend.margins({left:50,top:10,right:10,bottom:20}).width(1100).height(250).x(d.time.scale().domain([new Date(2015,5,1),new Date(2016,8,30)])).xUnits(d.time.months).brushOn(!1).yAxisLabel("Ticket Volume").elasticY(!0).dimension(j).group(k).valueAccessor(function(a){return a.value.totalIncidents}).stack(k,"Total Task",function(a){return a.value.totalTasks}).renderType("group").barPadding(.1).outerPadding(.05).centerBar(!0).ordinalColors(b.colorScheme("color3")),a.dcCharts.monthtrend.render();var l=h.baseData.dimension(function(a){return a.ticketType}),m=l.group().reduceSum(function(a){return+a.ctr});a.dcCharts.typebar=i.rowChart("#typebar"),a.dcCharts.typebar.width(250).height(180).dimension(l).group(m).elasticX(!0).controlsUseVisibility(!0).ordinalColors(b.colorScheme("color3")),a.dcCharts.typebar.render();var n=h.baseData.dimension(function(a){return a.contactType}),o=n.group().reduceSum(function(a){return+a.ctr});a.dcCharts.contactbar=i.rowChart("#contactbar"),a.dcCharts.contactbar.width(250).height(180).dimension(n).group(o).elasticX(!0).controlsUseVisibility(!0).ordinalColors(b.colorScheme("color3")),a.dcCharts.contactbar.render();var p=h.baseData.dimension(function(a){return a.regionName}),q=p.group().reduceSum(function(a){return+a.ctr});a.dcCharts.regionring=i.pieChart("#regionring"),a.dcCharts.regionring.width(180).height(180).dimension(p).group(q).innerRadius(50).controlsUseVisibility(!0).ordinalColors(b.colorScheme("blue")),a.dcCharts.regionring.render();var r=h.baseData.dimension(function(a){return a.deskName}),s=r.group().reduceSum(function(a){return+a.ctr});a.dcCharts.deskring=i.pieChart("#deskring"),a.dcCharts.deskring.width(180).height(180).dimension(r).group(s).innerRadius(50).controlsUseVisibility(!0).ordinalColors(b.colorScheme("blue")),a.dcCharts.deskring.render(),a.dcCharts.datacount=i.dataCount(".dc-data-count"),a.dcCharts.datacount.dimension(h.baseData).group(e).html({some:"<strong>%filter-count</strong> selected out of <strong>%total-count</strong> records | <a href='javascript:dc.filterAll(); dc.renderAll();'>Reset All</a>",all:"All records selected. Please click on the graph to apply filters."})})}]),angular.module("stefNovBrApp").provider("DataUtil",[function(){var a=window.d3,b=window._,c=window.crossfilter,d={},e={};d.init=function(a,c){a.config=c,c.baseFile=b.isUndefined(c.baseFile)?"":c.baseFile,a.setBaseFile=function(a){return c.baseFile=/\/$/.test(a)?a.substring(0,a.length-1):a,this},c.groupings=b.isUndefined(c.groupings)?[]:c.groupings,a.setGroupings=function(a){return c.groupings=b.isArray(a)&&a.length>0?a:null,this},c.maindata=b.isUndefined(c.maindata)?[]:c.groupings,a.setMaindata=function(a){return c.maindata=b.isArray(a)&&a.length>0?a:null,this},c.urlCreator=c.urlCreator||"path",a.setUrlCreator=function(a){if(!b.has(c.urlCreatorFactory,a))throw new Error("URL Path selected isn't valid");return c.urlCreator=a,this},c.urlCreatorFactory={};var d=function(){};d.prototype.setConfig=function(a){return this.config=a,this},d.prototype.setGroups=function(a){return this.groupings=a,this},d.prototype.setCategory=function(a){return this.categories=a,this};var e=function(){};e.prototype=new d,e.prototype.normalizeUrl=function(a){var b=/(http[s]?:\/\/)?(.*)?/.exec(a);return b[2]=b[2].replace(/[\\\/]+/g,"/"),"undefined"!=typeof b[1]?b[1]+b[2]:b[2]},e.prototype.dataTypeMap=[function(a){a=b.isNaN(b.toNumber(a))?a:b.toNumber(a);var c=b.isNaN(b.toNumber(a))?Date.parse(a):new Date(a);return"Invalid Date"===c||null===c||isNaN(c)||a.length<5?null:new Date(a)},function(a){return b.isNaN(b.toNumber(a))?null:+a},function(a){return b.isString(a)&&-1!==a.indexOf("<")&&-1!==a.indexOf(">")?"invalid html":a}],c.urlCreatorFactory.path=e},d.init(this,e),this.$get=["$q",function(f){function g(e){function g(a,c){var d=[],e=b.groupBy(a,c);return b.forEach(e,function(a,c){var e={},f=[];b.forEach(a,function(a){e[a[o.categories]]=e[a[o.categories]]||[],e[a[o.categories]]=e[a[o.categories]],e[a[o.categories]].n=e[a[o.categories]].n?e[a[o.categories]].n:0,e[a[o.categories]].n+=parseInt(a.ctr)}),b.forEach(e,function(a,b){f.push(a.n)}),d.push({category:b.keys(e),data:{name:c,data:f}})}),d}function h(){var a=b.groupBy(e.maindata,o.groupings[0]),c=[],d={series:[],category:[]};return b.forEach(a,function(a,b){c=g(a,o.groupings[1])}),b.forEach(c,function(a,c){d.series.push(a.data),d.category=b.map(a.category,function(a){return new Date(parseInt(a)).yyyymmm()})}),d}function i(a,b){return o.setGroups(a),o.setCategory(b),h()}function j(a,b){var c={};return a.forEach(function(a){var d=JSON.stringify(b(a));c[d]=c[d]||[],c[d].push(a)}),Object.keys(c).map(function(a){return c[a]})}function k(a){for(var b=o.dataTypeMap,c=b.length,d=0;c>d;d++){var e=b[d](a);if(null!==e)return e}}function l(d,g){if(b.isUndefined(d)){if(""===e.baseFile)return;d=e.baseFile}var h=o.normalizeUrl(d),i=f.defer();return a.csv(h,function(a){b.isUndefined(g)||b.includes(b.values(g),"global")||(a=b.filter(a,g)),b.includes(b.values(g),"INC")?a=b.filter(a,["ticketType","INC"]):b.includes(b.values(g),"TASK")&&(a=b.filter(a,["ticketType","TASK"])),b.forEach(a,function(a,b){a.ctr=parseInt(a.ctr),a.openedMonth=k(a.openedMonth),a.index=b}),i.resolve(c(a))}),i.promise}function m(a){if(!b.isUndefined(a)){var c={blue:["#82b1ff","#bbdefb","#90caf9","#64b5f6","#42a5f5","#2196f3","#1e88e5","#1976d2","#1565c0","#0d47a1"],cyan:["#84ffff","#b2ebf2","#80deea","#4dd0e1","#26c6da","#00bcd4","#00acc1","#0097a7","#00838f","#006064"],green:["#b9f6ca","#c8e6c9","#a5d6a7","#81c784","#66bb6a","#4caf50","#43a047","#388e3c","#2e7d32","#1b5e20"],amber:["#ffe57f","#ffecb3","#ffe082","#ffd54f","#ffca28","#ffc107","#ffb300","#ffa000","#ff8f00","#ff6f00"],orange:["#ffd180","#ffe0b2","#ffcc80","#ffb74d","#ffa726","#ff9800","#fb8c00","#f57c00","#ef6c00","#e65100"],bgray:["#eceff1","#cfd8dc","#b0bec5","#90a4ae","#78909c","#607d8b","#546e7a","#455a64","#37474f","#263238"],red:["#ff8a80","#ffcdd2","#ef9a9a","#e57373","#ef5350","#f44336","#e53935","#d32f2f","#c62828","#b71c1c"],pink:["#ff80ab","#f8bbd0","#f48fb1","#f06292","#ec407a","#e91e63","#d81b60","#c2185b","#ad1457","#880e4f"],purple:["#ea80fc","#e1bee7","#ce93d8","#ba68c8","#ab47bc","#9c27b0","#8e24aa","#7b1fa2","#6a1b9a","#4a148c"],color3:["#4c6f91","#aebdd0","#5e88b0"],color2:["#c830cc","#4ea6dc"]};return c[a]}}var n={},o=new e.urlCreatorFactory[e.urlCreator];return o.setConfig(e),d.init(n,e),n.formatData=b.bind(i,n),n.groupDataBy=b.bind(j,n),n.getData=b.bind(l,n),n.colorScheme=b.bind(m,n),n}return g(e)}]}]),angular.module("stefNovBrApp").controller("CrossCtrl",["$scope","d3Csm",function(a,b){console.log(b)}]),angular.module("stefNovBrApp").controller("IncidentCtrl",["$scope","$routeParams","DataUtil","d3Csm","_Csm",function(a,b,c,d,e){window.dc;c.getData("scripts/data.csv",{deskName:b.desk,ticketType:"INC"}).then(function(b){var c=b,d=c.dimension(function(a){return new Date(a.openedDate).startMonth()}),f=d.group().reduce(function(a,b){return a[b.contactType]=(a[b.contactType]||0)+b.ctr,a},function(a,b){return a[b.contactType]=(a[b.contactType]||0)-b.ctr,a},function(){return{}}).all(),g=[],h={},i=[];e.forEach(f,function(a,b){g.push(a.key.yyyymmm()),e.reduce(a.value,function(a,b,c){return(a[c]||(a[c]=[])).push(b),a},h)}),e.map(h,function(a,b){i.push({name:b,data:a})}),a.chartConfig.options.xAxis.categories=g,a.chartConfig.series=i,a.chartConfig.loading=!1}),a.deskname=b.desk,a.chartConfig={options:{chart:{type:"column"},plotOptions:{series:{stacking:"normal"}},xAxis:{categories:a.category}},series:a.series,title:{text:null},subtitle:{text:b.desk},credits:{enabled:!0},loading:!0,size:{}}}]),angular.module("stefNovBrApp").controller("TaskCtrl",["$scope","$routeParams","DataUtil","d3Csm","_Csm",function(a,b,c,d,e){window.dc;c.getData("scripts/data.csv",{deskName:b.desk,ticketType:"TASK"}).then(function(b){var c=b,d=c.dimension(function(a){return new Date(a.openedDate).startMonth()}),f=d.group().reduce(function(a,b){return a[b.regionName]=(a[b.regionName]||0)+b.ctr,a},function(a,b){return a[b.regionName]=(a[b.regionName]||0)-b.ctr,a},function(){return{}}).all(),g=[],h={},i=[];e.forEach(f,function(a,b){g.push(a.key.yyyymmm()),e.reduce(a.value,function(a,b,c){return(a[c]||(a[c]=[])).push(b),a},h)}),e.map(h,function(a,b){i.push({name:b,data:a})}),a.chartConfig.options.xAxis.categories=g,a.chartConfig.series=i,a.chartConfig.loading=!1}),a.deskname=b.desk,a.chartConfig={options:{chart:{type:"column"},plotOptions:{series:{stacking:"normal"}},xAxis:{categories:a.category}},series:a.series,title:{text:null},subtitle:{text:b.desk},credits:{enabled:!0},loading:!0,size:{}}}]),angular.module("stefNovBrApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="content animated bounceIn"> <div class="page-header"> <h4>Opened Tickets Trend</h4> </div> <div class="main-content"> <div class="row-fluid"> <div class="content-holder"> <table class="table table-striped table-condensed table-hover"> <thead> <tr> <th>sct_request_item_cat_item_name</th> <th>mi_definition_name</th> <th>mi_value</th> <th>cnt</th> <th>sum</th> <th>avg</th> </tr> </thead> <tbody> <tr ng-repeat="sn in snowData"> <td> {{sn.inc_u_symptom}} </td> <td> {{sn.mi_definition_name}} </td> <td> {{sn.mi_value}} </td> <td> {{sn.cnt}} `</td> <td> {{sn.sum}} `</td> <td> {{sn.avg}} `</td> </tr> </tbody> </table> </div> </div> <div class="row"> <div class="col-md-7"> <div id="test" class="col-xs-12 dcblock"></div> </div> </div> </div> </div>'),a.put("views/cross.html",'<div class="content animated bounceIn"> <section> <div class="main-content"> <div class="hero-unit md"> <h3>CSM BPI Automation</h3> <p>Ticket volume Summary July 2015 - September 2016.</p> </div> <div class="row"> <div id="pieTicketType"> <div class="reset" style="visibility: hidden"> Selected: <span class="filter"></span> <a href="#" class="dc-reset">reset</a> </div> <div class="clearfix"></div> </div> </div> </div> </section> </div>'),a.put("views/device.html",'<div class="content animated bounceIn"> <section> <div class="page-header"> <h4>Incident and Task Tickets</h4> </div> <div class="main-content"> <div class="hero-unit md"> <h3>Ticket volume Summary July 2015 - September 2016.</h3> </div> <div class="row"> <div> <div id="datacount" class="dc-data-count"> <span class="filter-count"></span> Selected out of <span class="total-count"></span> Records | <a href="#" class="dc-reset">Reset All</a> </div> </div> </div> <div class="row"> <div class="chart"> <div id="monthtrend"> <div class="reset" style="visibility: hidden"> selected: <span class="filter"></span> <a href="#" class="dc-reset">reset</a> </div> </div> </div> </div> <div class="row-fluid"> <div class="dchart"> <div id="deskring"> <div class="reset" style="visibility: hidden"> Selected: <span class="filter"></span> <a href="#" class="dc-reset">reset</a> </div> <div class="clearfix"></div> </div> </div> <div class="dchart"> <div id="regionring"> <div class="reset" style="visibility: hidden"> Selected: <span class="filter"></span> <a href="#" class="dc-reset">reset</a> </div> <div class="clearfix"></div> </div> </div> <div class="dchart"> <div id="typebar"> <div class="reset" style="visibility: hidden"> Selected: <span class="filter"></span> <a href="#" class="dc-reset">reset</a> </div> <div class="clearfix"></div> </div> </div> <div class="dchart"> <div id="contactbar"> <div class="reset" style="visibility: hidden"> Selected: <span class="filter"></span> <a href="#" class="dc-reset">reset</a> </div> <div class="clearfix"></div> </div> </div> </div> </div> </section> </div>'),a.put("views/incident.html",'<div class="content animated bounceIn"> <section> <div class="main-content"> <div class="page-header"> <h4>Incident Ticket Reports</h4> </div> <div class="chart"> <highchart id="chart1" config="chartConfig"></highchart> </div> </div> </section> </div>'),a.put("views/main.html",'<div class="content animated bounceIn"> <div class="title-page"></div> <div class="header-holder"> <div class="title-content"> <h2 class="csm">Monthly <br> Data Visualization</h2> </div> </div> </div>'),a.put("views/task.html",'<div class="content animated bounceIn"> <section> <div class="main-content"> <div class="chart"> <highchart id="chart1" config="chartConfig"></highchart> </div> </div> </section> </div>'),a.put("views/tickets.html",'<div class="content animated bounceIn"> <div class="page-header"> <h4>Opened Tickets Trend</h4> </div> <div class="col-md-12"> <div class="row"> <div class="col-md-10"> <div class="chart"> <highchart id="chart1" config="chartConfig"></highchart> </div> </div> <div class="col-md-2"> <div class="btn-group csm-grp-vert" role="group"> <button class="btn-csm btn-purple" ng-click="changeSeries(\'Global\')">Global</button> <button class="btn-csm btn-pink" ng-click="changeSeries(\'SD\')">Service Desk</button> <button class="btn-csm btn-green" ng-click="changeSeries(\'DS\')">Deskside</button> <button class="btn-csm btn-blue" ng-click="changeSeries(\'BS\')">Base Services</button> </div> </div> </div> </div> </div>')}]);