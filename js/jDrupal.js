var Drupal={};drupal_init();
function drupal_init(){try{Drupal||(Drupal={}),Drupal.csrf_token=!1,Drupal.sessid=null,Drupal.user=drupal_user_defaults(),Drupal.settings={app_directory:"app",base_path:"/",cache:{entity:{enabled:!1,expiration:3600},views:{enabled:!1,expiration:3600}},debug:!1,endpoint:"",file_public_path:"sites/default/files",language_default:"und",site_path:""},Drupal.includes={},Drupal.includes.module={},Drupal.modules={core:{},contrib:{},custom:{}},Drupal.services_queue={comment:{retrieve:{}},file:{retrieve:{}},
node:{retrieve:{}},taxonomy_term:{retrieve:{}},taxonomy_vocabulary:{retrieve:{}},user:{retrieve:{}}}}catch(a){console.log("drupal_init - "+a)}}
function date(a,b){try{var c=null,d=null;b?(d=b,"string"===typeof d&&(d=parseInt(d)),c=new Date(d)):(c=new Date,c.getTime());for(var d="",e=0;e<a.length;e++){var f=a.charAt(e);switch(f){case "d":var g=""+c.getDate();1==g.length&&(g="0"+g);d+=g;break;case "D":g=c.getDay();switch(g){case 0:d+="Sun";break;case 1:d+="Mon";break;case 2:d+="Tue";break;case 3:d+="Wed";break;case 4:d+="Thu";break;case 5:d+="Fri";break;case 6:d+="Sat"}break;case "j":d+=c.getDate();break;case "l":g=c.getDay();switch(g){case 0:d+=
"Sunday";break;case 1:d+="Monday";break;case 2:d+="Tuesday";break;case 3:d+="Wednesday";break;case 4:d+="Thursday";break;case 5:d+="Friday";break;case 6:d+="Saturday"}break;case "F":switch(c.getMonth()){case 0:d+="January";break;case 1:d+="February";break;case 2:d+="March";break;case 3:d+="April";break;case 4:d+="May";break;case 5:d+="June";break;case 6:d+="July";break;case 7:d+="August";break;case 8:d+="September";break;case 9:d+="October";break;case 10:d+="November";break;case 11:d+="December"}break;
case "m":var h=""+(c.getMonth()+1);1==h.length&&(h="0"+h);d+=h;break;case "Y":d+=c.getFullYear();break;case "G":var k=""+c.getHours(),d=d+k;break;case "H":k=""+c.getHours();1==k.length&&(k="0"+k);d+=k;break;case "i":var l=""+c.getMinutes();1==l.length&&(l="0"+l);d+=l;break;default:d+=f}}return d}catch(m){console.log("date - "+m)}}
function dpm(a,b){try{a?"function"===typeof parent.window.ripple?"undefined"!==typeof b&&0==b?console.log(JSON.stringify(a)):console.log(a):"object"===typeof a?console.log(JSON.stringify(a)):console.log(a):""==a?console.log("<empty-string>"):console.log("<null>")}catch(c){console.log("dpm - "+c)}}function drupal_user_defaults(){return{uid:"0",roles:{1:"anonymous user"},permissions:[]}}
function empty(a){try{return"object"===typeof a?0===Object.keys(a).length:"undefined"===typeof a||null===a||""==a}catch(b){console.log("empty - "+b)}}function function_exists(a){try{return"function"==eval("typeof "+a)}catch(b){alert("function_exists - "+b)}}
function http_status_code_title(a){try{var b="";switch(a){case 200:b="OK";break;case 401:b="Unauthorized";break;case 404:b="Not Found";break;case 406:b="Not Acceptable";break;case 500:b="Internal Server Error"}return b}catch(c){console.log("http_status_code_title - "+c)}}function in_array(a,b){try{if("undefined"===typeof b)return!1;if("string"===typeof a)return-1<b.indexOf(a);for(var c=!1,d=0;d<b.length;d++)if(b[d]==a){c=!0;break}return c}catch(e){console.log("in_array - "+e)}}
function is_int(a){"string"===typeof a&&(a=parseInt(a));return"number"===typeof a&&0==a%1}function language_default(){try{return Drupal.settings.language_default&&""!=Drupal.settings.language_default?Drupal.settings.language_default:"und"}catch(a){console.log("language_default - "+a)}}
function module_exists(a){try{var b=!1;"undefined"!==typeof Drupal.modules.core[a]?b=!0:"undefined"!==typeof Drupal.modules.contrib[a]?b=!0:"undefined"!==typeof Drupal.modules.custom[a]&&(b=!0);return b}catch(c){console.log("module_exists - "+c)}}function shuffle(a){try{for(var b=a.length-1;0<b;b--){var c=Math.floor(Math.random()*(b+1)),d=a[b];a[b]=a[c];a[c]=d}return a}catch(e){console.log("shuffle - "+e)}}function time(){return Math.floor(new Date/1E3)}
function ucfirst(a){a+="";return a.charAt(0).toUpperCase()+a.substr(1)}function module_implements(a){try{var b=[];if(a)for(var c=module_types(),d=0;d<c.length;d++){var e=c[d],f;for(f in Drupal.modules[e])Drupal.modules[e].hasOwnProperty(f)&&function_exists(f+"_"+a)&&b.push(f)}return 0==b.length?!1:b}catch(g){console.log("module_implements - "+g)}}
function module_invoke(a,b){try{var c=null;if(drupalgap_module_load(a)){var d=Array.prototype.slice.call(arguments),e=a+"_"+b;if(function_exists(e)){var f=window[e];d.splice(0,2);c=0==Object.getOwnPropertyNames(d).length?f():f.apply(null,d)}}else console.log("WARNING: module_invoke() - Failed to load module: "+a);return c}catch(g){console.log("module_invoke - "+g)}}var module_invoke_results=null,module_invoke_continue=null;
function module_invoke_all(a){try{module_invoke_results=[];var b=Array.prototype.slice.call(arguments);b.splice(0,1);module_invoke_continue=!0;for(var c=module_types(),d=0;d<c.length;d++){var e=c[d],f;for(f in Drupal.modules[e])if(Drupal.modules[e].hasOwnProperty(f)&&function_exists(f+"_"+a)){var g=null;0==b.length?g=module_invoke(f,a):(b.unshift(f,a),g=window.module_invoke.apply(null,b),b.splice(0,2));"undefined"!==typeof g&&module_invoke_results.push(g)}}return module_invoke_results}catch(h){console.log("module_invoke_all - "+
h)}}function module_load(a){try{for(var b=module_types(),c=0;c<b.length;c++){var d=b[c];if(Drupal.modules[d][a])return Drupal.modules[d][a]}return!1}catch(e){console.log("module_load - "+e)}}function module_object_template(a){return{name:a}}function module_types(){return["core","contrib","custom"]}function comment_load(a,b){try{entity_load("comment",a,b)}catch(c){console.log("comment_load - "+c)}}
function comment_save(a,b){try{entity_save("comment",null,a,b)}catch(c){console.log("comment_save - "+c)}}function entity_delete(a,b,c){try{var d=a+"_delete";if(function_exists(d))(0,window[d])(b,c);else console.log("WARNING: entity_delete - unsupported type: "+a)}catch(e){console.log("entity_delete - "+e)}}function entity_id_parse(a){try{var b=a;"string"===typeof b&&(b=parseInt(a));return b}catch(c){console.log("entity_id_parse - "+c)}}function entity_local_storage_key(a,b){return a+"_"+b}
function entity_load(a,b,c){try{if(is_int(b)){var d=b,d=entity_id_parse(d);if(_services_queue_already_queued(a,"retrieve",d,"success")){if(Drupal.settings.cache.entity.enabled&&(e=_entity_local_storage_load(a,d,c))){c.success&&c.success(e);return}"undefined"!==typeof c.success&&_services_queue_callback_add(a,"retrieve",d,"success",c.success);"undefined"!==typeof c.error&&_services_queue_callback_add(a,"retrieve",d,"error",c.error)}else{_services_queue_add_to_queue(a,"retrieve",d);_services_queue_callback_add(a,
"retrieve",d,"success",c.success);var e=!1;if(Drupal.settings.cache.entity.enabled&&(e=_entity_local_storage_load(a,d,c))){c.success&&c.success(e);return}if(in_array(a,entity_types())){var f=entity_primary_key(a),g={success:function(b){try{e=b;if(Drupal.settings.cache.entity&&Drupal.settings.cache.entity.enabled){if("undefined"!==Drupal.settings.cache.entity.expiration){var c=time()+Drupal.settings.cache.entity.expiration;0==Drupal.settings.cache.entity.expiration&&(c=0);e.expiration=c}_entity_local_storage_save(a,
d,e)}var f=Drupal.services_queue[a].retrieve[d].success;for(b=0;b<f.length;b++)f[b](e);Drupal.services_queue[a].retrieve[d].success=[]}catch(g){console.log("entity_load - success - "+g)}},error:function(a,b,d){try{c.error&&c.error(a,b,d)}catch(e){console.log("entity_load - error - "+e)}}},h=a+"_retrieve";function_exists(h)?(g[f]=d,(0,window[h])(b,g)):console.log("WARNING: "+h+"() does not exist!")}else b="WARNING: entity_load - unsupported type: "+a,console.log(b),c.error&&c.error(null,null,b)}}else console.log("entity_load("+
a+") - only single ids supported!")}catch(k){console.log("entity_load - "+k)}}
function _entity_local_storage_load(a,b,c){try{var d=!1;c&&c.reset&&_entity_local_storage_delete(a,b);var e=entity_local_storage_key(a,b);if(d=window.localStorage.getItem(e))d=JSON.parse(d),"undefined"!==typeof d.expiration&&0!=d.expiration&&time()>d.expiration?(_entity_local_storage_delete(a,b),d=!1):drupalgap&&drupalgap.page.options&&drupalgap.page.options.reloadingPage&&("undefined"===typeof drupalgap.page.options.reset||0!=drupalgap.page.options.reset)&&(_entity_local_storage_delete(a,b),d=!1);
return d}catch(f){console.log("_entity_load_from_local_storage - "+f)}}function _entity_local_storage_save(a,b,c){try{window.localStorage.setItem(entity_local_storage_key(a,b),JSON.stringify(c))}catch(d){console.log("_entity_local_storage_save - "+d)}}function _entity_local_storage_delete(a,b){try{var c=entity_local_storage_key(a,b);window.localStorage.removeItem(c)}catch(d){console.log("_entity_local_storage_delete - "+d)}}
function entity_primary_key(a){try{var b;switch(a){case "comment":b="cid";break;case "file":b="fid";break;case "node":b="nid";break;case "taxonomy_term":b="tid";break;case "taxonomy_vocabulary":b="vid";break;case "user":b="uid";break;default:var c=a+"_primary_key";drupalgap_function_exists(c)?b=(0,window[c])(a):console.log("entity_primary_key - unsupported entity type ("+a+") - to add support, declare "+c+"() and have it return the primary key column name as a string")}return b}catch(d){console.log("entity_primary_key - "+
d)}}
function entity_save(a,b,c,d){try{var e;switch(a){case "comment":e=c.cid?"comment_update":"comment_create";break;case "file":e="file_create";break;case "node":c.language||(c.language=language_default());e=c.nid?"node_update":"node_create";break;case "user":e=c.uid?"user_update":"user_create";break;case "taxonomy_term":e=c.tid?"taxonomy_term_update":"taxonomy_term_create";break;case "taxonomy_vocabulary":e=c.vid?"taxonomy_vocabulary_update":"taxonomy_vocabulary_create"}if(e&&function_exists(e))(0,window[e])(c,d);
else console.log("WARNING: entity_save - unsupported type: "+a)}catch(f){console.log("entity_save - "+f)}}function entity_types(){return"comment file node taxonomy_term taxonomy_vocabulary user".split(" ")}function file_load(a,b){try{entity_load("file",a,b)}catch(c){console.log("file_load - "+c)}}function file_save(a,b){try{entity_save("file",null,a,b)}catch(c){console.log("file_save - "+c)}}function node_load(a,b){try{entity_load("node",a,b)}catch(c){console.log("node_load - "+c)}}
function node_save(a,b){try{entity_save("node",a.type,a,b)}catch(c){console.log("node_save - "+c)}}function taxonomy_term_load(a,b){try{entity_load("taxonomy_term",a,b)}catch(c){console.log("taxonomy_term_load - "+c)}}function taxonomy_term_save(a,b){try{entity_save("taxonomy_term",null,a,b)}catch(c){console.log("taxonomy_term_save - "+c)}}function taxonomy_vocabulary_load(a,b){try{entity_load("taxonomy_vocabulary",a,b)}catch(c){console.log("taxonomy_vocabulary_load - "+c)}}
function taxonomy_vocabulary_save(a,b){try{entity_save("taxonomy_vocabulary",null,a,b)}catch(c){console.log("taxonomy_vocabulary_save - "+c)}}function user_load(a,b){try{entity_load("user",a,b)}catch(c){console.log("user_load - "+c)}}function user_save(a,b){try{entity_save("user",null,a,b)}catch(c){console.log("user_save - "+c)}}
function user_password(a){try{var b=10;a&&(b=a);a="";for(var c=0;c<b;c++)a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz23456789".charAt(Math.floor(60*Math.random()));return a}catch(d){console.log("user_password - "+d)}}Drupal.services={};
Drupal.services.call=function(a){try{if(a.debug=!1,services_ready()){module_invoke_all("services_preprocess",a);var b=new XMLHttpRequest,c=Drupal.settings.site_path+Drupal.settings.base_path+"?q=";"undefined"===typeof a.endpoint?c+=Drupal.settings.endpoint+"/":""!=a.endpoint&&(c+=a.endpoint+"/");var c=c+a.path,d=a.method.toUpperCase();Drupal.settings.debug&&console.log(d+": "+c);b.onload=function(e){try{if(4==b.readyState){var g=b.status+" - "+http_status_code_title(b.status);if(200==b.status)Drupal.settings.debug&&
console.log("200 - OK"),e=null,e=-1!=b.getResponseHeader("Content-Type").indexOf("application/json")?JSON.parse(b.responseText):b.responseText,module_invoke_all("services_request_pre_postprocess_alter",a,e),a.success(e),module_invoke_all("services_request_postprocess_alter",a,e),module_invoke_all("services_postprocess",a,e);else{Drupal.settings.debug&&(console.log(d+": "+c+" - "+g),console.log(b.responseText),console.log(b.getAllResponseHeaders()));b.responseText?console.log(b.responseText):dpm(b);
if("undefined"!==typeof a.error){var h=b.responseText||"";h&&""!=h||(h=g);a.error(b,b.status,h)}module_invoke_all("services_postprocess",a,b)}}else console.log("Drupal.services.call - request.readyState = "+b.readyState)}catch(k){Drupal.settings.debug&&(console.log(d+" (ERROR): "+c+" - "+g),console.log(b.responseText),console.log(b.getAllResponseHeaders())),console.log("Drupal.services.call - onload - "+k)}};services_get_csrf_token({debug:a.debug,success:function(e){try{var g=!0;"undefined"!==typeof a.async&&
!1===a.async&&(g=!1);b.open(d,c,g);g=null;"POST"==d?(g="application/json","user"==a.service&&"login"==a.resource&&(g="application/x-www-form-urlencoded")):"PUT"==d&&(g="application/json");a.contentType&&(g=a.contentType);g&&b.setRequestHeader("Content-type",g);e&&b.setRequestHeader("X-CSRF-Token",e);"undefined"!==typeof a.data?(Drupal.settings.debug&&(e=!0,"user"==a.service&&in_array(a.resource,["login","create","update"])&&(e=!1),e&&("object"===typeof a.data?console.log(JSON.stringify(a.data)):console.log(a.data))),
b.send(a.data)):b.send(null)}catch(h){console.log("Drupal.services.call - services_get_csrf_token - success - "+h)}},error:function(b,c,d){try{console.log("Drupal.services.call - services_get_csrf_token - "+d),a.error&&a.error(b,c,d)}catch(e){console.log("Drupal.services.call - services_get_csrf_token - error - "+e)}}})}else a.error(null,null,"Set the site_path and endpoint on Drupal.settings!")}catch(e){console.log("Drupal.services.call - error - "+e)}};
function services_get_csrf_token(a){try{var b;a.reset&&(Drupal.sessid=null);Drupal.sessid&&(b=Drupal.sessid);if(b)a.success&&a.success(b);else{var c=new XMLHttpRequest,d=Drupal.settings.site_path+Drupal.settings.base_path+"?q=services/session/token";c.onload=function(e){try{if(4==c.readyState){var g=c.status+" - "+http_status_code_title(c.status);200!=c.status?(console.log(d+" - "+g),console.log(c.responseText)):(b=c.responseText,Drupal.sessid=b,a.success&&a.success(b))}else console.log("services_get_csrf_token - readyState - "+
c.readyState)}catch(h){console.log("services_get_csrf_token - token_request. onload - "+h)}};c.open("GET",d,!0);c.send(null)}}catch(e){console.log("services_get_csrf_token - "+e)}}function services_ready(){try{var a=!0;""==Drupal.settings.site_path&&(a=!1,console.log("jDrupal's Drupal.settings.site_path is not set!"));""==Drupal.settings.endpoint&&(a=!1,console.log("jDrupal's Drupal.settings.endpoint is not set!"));return a}catch(b){console.log("services_ready - "+b)}}
function services_resource_defaults(a,b,c){try{a.service||(a.service=b),a.resource||(a.resource=c)}catch(d){console.log("services_resource_defaults - "+d)}}function _services_queue_already_queued(a,b,c,d){try{var e=!1;"undefined"!==typeof Drupal.services_queue[a][b][c]&&0!=Drupal.services_queue[a][b][c][d].length&&(e=!0);return e}catch(f){console.log("_services_queue_already_queued - "+f)}}
function _services_queue_add_to_queue(a,b,c){try{Drupal.services_queue[a][b][c]={entity_id:c,success:[],error:[]}}catch(d){console.log("_services_queue_add_to_queue - "+d)}}function _services_queue_remove_from_queue(a,b,c){try{console.log("WARNING: services_queue_remove_from_queue() not done yet!")}catch(d){console.log("_services_queue_remove_from_queue - "+d)}}
function _services_queue_callback_add(a,b,c,d,e){try{Drupal.services_queue[a][b][c][d].push(e)}catch(f){console.log("_services_queue_callback_add - "+f)}}function _services_queue_callback_count(a,b,c,d){try{return Drupal.services_queue[a][b][c][d].length}catch(e){console.log("_services_queue_callback_count - "+e)}}function comment_create(a,b){try{services_resource_defaults(b,"comment","create"),entity_create("comment",null,a,b)}catch(c){console.log("comment_create - "+c)}}
function comment_retrieve(a,b){try{services_resource_defaults(b,"comment","retrieve"),entity_retrieve("comment",a,b)}catch(c){console.log("comment_retrieve - "+c)}}function comment_update(a,b){try{services_resource_defaults(b,"comment","update"),entity_update("comment",null,a,b)}catch(c){console.log("comment_update - "+c)}}function comment_delete(a,b){try{services_resource_defaults(b,"comment","delete"),entity_delete("comment",a,b)}catch(c){console.log("comment_delete - "+c)}}
function comment_index(a,b){try{services_resource_defaults(b,"comment","index"),entity_index("comment",a,b)}catch(c){console.log("comment_index - "+c)}}
function entity_create(a,b,c,d){try{Drupal.services.call({method:"POST",async:d.async,path:a+".json",service:d.service,resource:d.resource,entity_type:a,bundle:b,data:JSON.stringify(c),success:function(a){try{d.success&&d.success(a)}catch(b){console.log("entity_create - success - "+b)}},error:function(a,b,c){try{d.error&&d.error(a,b,c)}catch(e){console.log("entity_create - error - "+e)}}})}catch(e){console.log("entity_create - "+e)}}
function entity_retrieve(a,b,c){try{Drupal.services.call({method:"GET",path:a+"/"+b+".json",service:c.service,resource:c.resource,entity_type:a,entity_id:b,success:function(a){try{c.success&&c.success(a)}catch(b){console.log("entity_retrieve - success - "+b)}},error:function(a,b,d){try{c.error&&c.error(a,b,d)}catch(h){console.log("entity_retrieve - error - "+h)}}})}catch(d){console.log("entity_retrieve - "+d)}}
function entity_update(a,b,c,d){try{var e=_entity_wrap(a,c),f=entity_primary_key(a);Drupal.services.call({method:"PUT",path:a+"/"+c[f]+".json",service:d.service,resource:d.resource,entity_type:a,entity_id:c[entity_primary_key(a)],bundle:b,data:JSON.stringify(e),success:function(b){try{_entity_local_storage_delete(a,c[f]),d.success&&d.success(b)}catch(e){console.log("entity_update - success - "+e)}},error:function(a,b,c){try{d.error&&d.error(a,b,c)}catch(e){console.log("entity_update - error - "+e)}}})}catch(g){console.log("entity_update - "+
g)}}function entity_delete(a,b,c){try{Drupal.services.call({method:"DELETE",path:a+"/"+b+".json",service:c.service,resource:c.resource,entity_type:a,entity_id:b,success:function(d){try{_entity_local_storage_delete(a,b),c.success&&c.success(d)}catch(f){console.log("entity_delete - success - "+f)}},error:function(a,b,d){try{c.error&&c.error(a,b,d)}catch(h){console.log("entity_delete - error - "+h)}}})}catch(d){console.log("entity_delete - "+d)}}
function entity_index(a,b,c){try{var d;"object"===typeof b?d=entity_index_build_query_string(b):"string"===typeof b&&(d=b);Drupal.services.call({method:"GET",path:a+".json"+(d?"&"+d:""),service:c.service,resource:c.resource,entity_type:a,success:function(a){try{c.success&&c.success(a)}catch(b){console.log("entity_index - success - "+b)}},error:function(a,b,d){try{c.error&&c.error(a,b,d)}catch(e){console.log("entity_index - error - "+e)}}})}catch(e){console.log("entity_index - "+e)}}
function entity_index_build_query_string(a){try{var b="";if(!a)return b;if(a.fields){for(var c="",d=0;d<a.fields.length;d++)c+=encodeURIComponent(a.fields[d])+",";""!=c&&(c="fields="+c.substring(0,c.length-1),b+=c+"&")}if(a.parameters){var e="",f;for(f in a.parameters)if(a.parameters.hasOwnProperty(f))var g=encodeURIComponent(f),h=encodeURIComponent(a.parameters[f]),e=e+("parameters["+g+"]="+h+"&");""!=e&&(e=e.substring(0,e.length-1),b+=e+"&")}if(a.parameters_op){var c="",k;for(k in a.parameters_op)a.parameters_op.hasOwnProperty(k)&&
(g=encodeURIComponent(k),h=encodeURIComponent(a.parameters_op[k]),c+="parameters_op["+g+"]="+h+"&");""!=c&&(c=c.substring(0,e.length-1),b+=c+"&")}"undefined"!==typeof a.page&&(b+="page="+encodeURIComponent(a.page)+"&");"undefined"!==typeof a.page_size&&(b+="page_size="+encodeURIComponent(a.page_size)+"&");return b.substring(0,b.length-1)}catch(l){console.log("entity_index_build_query_string - "+l)}}
function _entity_wrap(a,b){try{var c={};"taxonomy_term"==a||"taxonomy_vocabulary"==a||"user"==a||-1!=a.indexOf("commerce")?c=b:c[a]=b;return c}catch(d){console.log("_entity_wrap - "+d)}}function file_create(a,b){try{services_resource_defaults(b,"file","create"),entity_create("file",null,a,b)}catch(c){console.log("file_create - "+c)}}function file_retrieve(a,b){try{services_resource_defaults(b,"file","retrieve"),entity_retrieve("file",a,b)}catch(c){console.log("file_retrieve - "+c)}}
function node_create(a,b){try{services_resource_defaults(b,"node","create"),entity_create("node",a.type,a,b)}catch(c){console.log("node_create - "+c)}}function node_retrieve(a,b){try{services_resource_defaults(b,"node","retrieve"),entity_retrieve("node",a,b)}catch(c){console.log("node_retrieve - "+c)}}function node_update(a,b){try{services_resource_defaults(b,"node","update"),entity_update("node",a.type,a,b)}catch(c){console.log("node_update - "+c)}}
function node_delete(a,b){try{services_resource_defaults(b,"node","delete"),entity_delete("node",a,b)}catch(c){console.log("node_delete - "+c)}}function node_index(a,b){try{services_resource_defaults(b,"node","index"),entity_index("node",a,b)}catch(c){console.log("node_index - "+c)}}
function system_connect(a){try{var b={service:"system",resource:"connect",method:"POST",path:"system/connect.json",success:function(b){try{Drupal.user=b.user,a.success&&a.success(b)}catch(c){console.log("system_connect - success - "+c)}},error:function(b,c,f){try{a.error&&a.error(b,c,f)}catch(g){console.log("system_connect - error - "+g)}}};Drupal.csrf_token?(a.debug&&console.log("Token already available."),Drupal.services.call(b)):services_get_csrf_token({success:function(c){try{a.debug&&console.log("Grabbed new token."),
Drupal.csrf_token=!0,Drupal.services.call(b)}catch(e){console.log("system_connect - services_csrf_token - success - "+message)}},error:function(b,c,f){try{a.error&&a.error(b,c,f)}catch(g){console.log("system_connect - services_csrf_token - error - "+f)}}})}catch(c){console.log("system_connect - "+c)}}function taxonomy_term_create(a,b){try{services_resource_defaults(b,"taxonomy_term","create"),entity_create("taxonomy_term",null,a,b)}catch(c){console.log("taxonomy_term_create - "+c)}}
function taxonomy_term_retrieve(a,b){try{services_resource_defaults(b,"taxonomy_term","retrieve"),entity_retrieve("taxonomy_term",a,b)}catch(c){console.log("taxonomy_term_retrieve - "+c)}}function taxonomy_term_update(a,b){try{services_resource_defaults(b,"taxonomy_term","update"),entity_update("taxonomy_term",null,a,b)}catch(c){console.log("taxonomy_term_update - "+c)}}
function taxonomy_term_delete(a,b){try{services_resource_defaults(b,"taxonomy_term","delete"),entity_delete("taxonomy_term",a,b)}catch(c){console.log("taxonomy_term_delete - "+c)}}function taxonomy_term_index(a,b){try{services_resource_defaults(b,"taxonomy_term","index"),entity_index("taxonomy_term",a,b)}catch(c){console.log("taxonomy_term_index - "+c)}}
function taxonomy_vocabulary_create(a,b){try{!a.machine_name&&a.name&&(a.machine_name=a.name.toLowerCase().replace(" ","_")),services_resource_defaults(b,"taxonomy_vocabulary","create"),entity_create("taxonomy_vocabulary",null,a,b)}catch(c){console.log("taxonomy_vocabulary_create - "+c)}}
function taxonomy_vocabulary_retrieve(a,b){try{services_resource_defaults(b,"taxonomy_vocabulary","retrieve"),entity_retrieve("taxonomy_vocabulary",a,b)}catch(c){console.log("taxonomy_vocabulary_retrieve - "+c)}}
function taxonomy_vocabulary_update(a,b){try{a.machine_name&&""!=a.machine_name?(services_resource_defaults(b,"taxonomy_vocabulary","update"),entity_update("taxonomy_vocabulary",null,a,b)):(console.log("taxonomy_vocabulary_update - missing machine_name"),b.error&&b.error(null,406,"taxonomy_vocabulary_update - missing machine_name"))}catch(c){console.log("taxonomy_vocabulary_update - "+c)}}
function taxonomy_vocabulary_delete(a,b){try{services_resource_defaults(b,"taxonomy_vocabulary","delete"),entity_delete("taxonomy_vocabulary",a,b)}catch(c){console.log("taxonomy_vocabulary_delete - "+c)}}function taxonomy_vocabulary_index(a,b){try{services_resource_defaults(b,"taxonomy_vocabulary","index"),entity_index("taxonomy_vocabulary",a,b)}catch(c){console.log("taxonomy_vocabulary_index - "+c)}}
function user_create(a,b){try{services_resource_defaults(b,"user","create"),entity_create("user",null,a,b)}catch(c){console.log("user_create - "+c)}}function user_retrieve(a,b){try{services_resource_defaults(b,"user","retrieve"),entity_retrieve("user",a,b)}catch(c){console.log("user_retrieve - "+c)}}function user_update(a,b){try{var c="create";a.uid&&(c="update");services_resource_defaults(b,"user",c);entity_update("user",null,a,b)}catch(d){console.log("user_update - "+d)}}
function user_delete(a,b){try{services_resource_defaults(b,"user","create"),entity_delete("user",a,b)}catch(c){console.log("user_delete - "+c)}}function user_index(a,b){try{services_resource_defaults(b,"user","create"),entity_index("user",a,b)}catch(c){console.log("user_index - "+c)}}
function user_register(a,b){try{Drupal.services.call({service:"user",resource:"register",method:"POST",path:"user/register.json",data:JSON.stringify(a),success:function(a){try{b.success&&b.success(a)}catch(c){console.log("user_register - success - "+c)}},error:function(a,c,f){try{b.error&&b.error(a,c,f)}catch(g){console.log("user_register - error - "+g)}}})}catch(c){console.log("user_retrieve - "+c)}}
function user_login(a,b,c){try{var d=!0;a&&"string"===typeof a||(d=!1,console.log("user_login - invalid name"));b&&"string"===typeof b||(d=!1,console.log("user_login - invalid pass"));d?Drupal.services.call({service:"user",resource:"login",method:"POST",path:"user/login.json",data:"username="+encodeURIComponent(a)+"&password="+encodeURIComponent(b),success:function(a){try{Drupal.user=a.user,Drupal.sessid=null,services_get_csrf_token({success:function(b){try{c.success&&system_connect({success:function(b){try{c.success&&
c.success(a)}catch(d){console.log("user_login - system_connect - success - "+d)}},error:function(a,b,d){try{c.error&&c.error(a,b,d)}catch(e){console.log("user_login - system_connect - error - "+e)}}})}catch(d){console.log("user_login - services_get_csrf_token - success - "+d)}},error:function(a,b,d){console.log("user_login - services_get_csrf_token - error - "+d);c.error&&c.error(a,b,d)}})}catch(b){console.log("user_login - success - "+b)}},error:function(a,b,d){try{c.error&&c.error(a,b,d)}catch(e){console.log("user_login - error - "+
e)}}}):c.error&&c.error(null,406,"user_login - bad input")}catch(e){console.log("user_login - "+e)}}
function user_logout(a){try{Drupal.services.call({service:"user",resource:"logout",method:"POST",path:"user/logout.json",success:function(b){try{Drupal.user=drupal_user_defaults(),Drupal.sessid=null,system_connect({success:function(d){try{a.success&&a.success(b)}catch(f){console.log("user_logout - system_connect - success - "+f)}},error:function(b,c,d){try{a.error&&a.error(b,c,d)}catch(h){console.log("user_logout - system_connect - error - "+h)}}})}catch(d){console.log("user_logout - success - "+
d)}},error:function(b,d,e){try{a.error&&a.error(b,d,e)}catch(f){console.log("user_logout - error - "+f)}}})}catch(b){console.log("user_login - "+b)}};
