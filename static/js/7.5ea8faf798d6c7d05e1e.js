(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{172:function(e,a,l){"use strict";l.r(a);var t=l(6),i=l(7),n=l(8),s={data:function(){return{visible1:!1,visible2:!1,value1:[],visible3:!1,minDate:new Date("2018-01-11"),maxDate:new Date("2018-10-10"),value2:["2018-02-24","2018-03-10"],isMultiSelected:!0}},methods:{showCal1:function(){this.visible1=!0},showCal2:function(){this.visible2=!0},showCal3:function(){this.visible3=!0},changeDate:function(e){console.log(e)},handleOk1:function(e){this.value1=e,console.log(e)},handleOk2:function(e){this.value2=e,console.log(e)}}},o=l(0),c=Object(o.a)(s,function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",[l("za-panel",[l("za-panel-header",{attrs:{title:"简单日历"}}),e._v(" "),l("za-panel-body",[l("za-cell",{attrs:{title:"选择时间"},on:{click:e.showCal1}},[e._v(e._s(e.value1.join(",")))])],1)],1),e._v(" "),l("za-panel",[l("za-panel-header",{attrs:{title:"时间范围选择"}}),e._v(" "),l("za-panel-body",[l("za-cell",{attrs:{title:"选择时间范围"},on:{click:e.showCal2}},[e._v(e._s(e.value2.join(",")))])],1)],1),e._v(" "),l("za-panel",[l("za-panel-header",{attrs:{title:"时间最小最大限制"}}),e._v(" "),l("za-panel-body",[l("za-cell",{attrs:{title:"选择时间范围"},on:{click:e.showCal3}})],1)],1),e._v(" "),l("za-calendar",{attrs:{visible:e.visible1,"selected-value":e.value1},on:{"update:visible":function(a){e.visible1=a},changed:e.changeDate,ok:e.handleOk1}}),e._v(" "),l("za-calendar",{attrs:{visible:e.visible2,"multi-selected":e.isMultiSelected,"selected-value":e.value2},on:{"update:visible":function(a){e.visible2=a},ok:e.handleOk2}}),e._v(" "),l("za-calendar",{attrs:{visible:e.visible3,min:e.minDate,max:e.maxDate},on:{"update:visible":function(a){e.visible3=a}}})],1)},[],!1,null,null,null).exports,v={components:{Container:t.a,PageHeader:i.a,PageFooter:n.a,Demo:c}},u=Object(o.a)(v,function(){var e=this.$createElement,a=this._self._c||e;return a("Container",[a("PageHeader",{attrs:{title:"日历 Calendar"}}),this._v(" "),a("Demo"),this._v(" "),a("PageFooter")],1)},[],!1,null,null,null);a.default=u.exports}}]);
//# sourceMappingURL=7.5ea8faf798d6c7d05e1e.js.map