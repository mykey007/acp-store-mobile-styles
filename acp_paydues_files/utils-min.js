$(function(){browser();swapValues=[];$(".swap").each(function(a){swapValues[a]=$(this).val();$(this).focus(function(){$(this).val()===swapValues[a]&&$(this).val("")}).blur(function(){$.trim($(this).val())===""&&$(this).val(swapValues[a])})})});(function(a){a.browserTest=function(b,c){var d="unknown",e="X",f=function(a,b){for(var c=0;c<b.length;c+=1)a=a.replace(b[c][0],b[c][1]);return a},g=function(b,c,g,h){var i={name:f((c.exec(b)||[d,d])[1],g)};i[i.name]=!0;i.version=(h.exec(b)||[e,e,e,e])[3];i.name.match(/safari/)&&i.version>400&&(i.version="2.0");i.name==="presto"&&(i.version=a.browser.version>9.27?"futhark":"linear_b");i.versionNumber=parseFloat(i.version,10)||0;i.versionX=i.version!==e?(i.version+"").substr(0,1):e;i.className=i.name+i.versionX;return i};b=(b.match(/Opera|Navigator|Minefield|KHTML|Chrome/)?f(b,[[/(Firefox|MSIE|KHTML,\slike\sGecko|Konqueror)/,""],["Chrome Safari","Chrome"],["KHTML","Konqueror"],["Minefield","Firefox"],["Navigator","Netscape"]]):b).toLowerCase();a.browser=a.extend(c?{}:a.browser,g(b,/(camino|chrome|firefox|netscape|konqueror|lynx|msie|opera|safari)/,[],/(camino|chrome|firefox|netscape|netscape6|opera|version|konqueror|lynx|msie|safari)(\/|\s)([a-z0-9\.\+]*?)(\;|dev|rel|\s|$)/));a.layout=g(b,/(gecko|konqueror|msie|opera|webkit)/,[["konqueror","khtml"],["msie","trident"],["opera","presto"]],/(applewebkit|rv|konqueror|msie)(\:|\/|\s)([a-z0-9\.]*?)(\;|\)|\s)/);a.os={name:(/(win|mac|linux|sunos|solaris|iphone)/.exec(navigator.platform.toLowerCase())||[d])[0].replace("sunos","solaris")};c||a("html").addClass([a.os.name,a.browser.name,a.browser.className,a.layout.name,a.layout.className].join(" "))};a.browserTest(navigator.userAgent)})(jQuery);browser=function(){var a="Unknown OS",b="";navigator.appVersion.indexOf("Mac")!=-1&&(a="Mac");navigator.appVersion.indexOf("Win")!=-1&&(a="PC");bodyClass=$.browser.className+a;$("body").addClass(bodyClass)};