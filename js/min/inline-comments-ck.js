!function(t,n,i){var o,e="incom_wrapper",c="#"+e,a="html",r="comments-and-form",s="#"+r,u="data-incom",f=u+"-comment",l="incom-active",d="."+l,v="incom-position-",p="incom-bubble",m="."+p,h=p+"-style",b=p+"-static",g=p+"-active",w=p+"-link",k="incom-comments-wrapper",C="."+k,S="incom-cancel",T="."+S,y="incom-info-icon",x="."+y,B=s+" .comment",W="data_incom",D=0;t.init=function(t){N(t),O(),rn()};var N=function(t){o=n.extend({selectors:"p",moveSiteSelector:a,countStatic:!0,defaultBubbleText:"+",position:"left",background:"white"},t)},O=function(){0===n(c).length&&n('<div id="'+e+'"></div>').appendTo(n(a)).addClass(v+o.position),_()},_=function(){var t=sn(o.selectors);n(t).each(function(i){n(t[i]).each(function(t){var i=n(this);j(t,i),A(i)})})},j=function(t,n){var i=n.prop("tagName").substr(0,1);if(!n.attr(u)){var o=i+t;n.attr(u,o)}},A=function(t){var i=I(t),o=q(t),e=n("<a/>",{href:"","class":w}).text(i).wrap(o).parent().appendTo(c);F(e),U(t,e),G(t,e),H(t,e)},I=function(t){var n;return n=E(t)?Q(t):o.defaultBubbleText},Q=function(t){var i=t.attr(u),o="["+f+"="+i+"]",e=n(o).length;return e},q=function(t){var n='<div class="'+z(t)+'" />';return n},z=function(t){var n=p,i=" ";return E(t)&&o.countStatic?n+=i+h+i+b:E(t)&&(n+=i+h),n},E=function(t){var i=Q(t);return n.isNumeric(i)&&i>0?!0:!1},F=function(t){t.hasClass(b)&&t.css("display","block")},G=function(t,n){n.hasClass(b)||t.add(n).hover(function(){n.stop(!0,!0).fadeIn()},function(){n.stop(!0,!0).fadeOut(2e3)})},H=function(t,n){n.on("click",function(i){i.preventDefault(),J(),t.addClass(l),tn(),n.addClass(g),K(n)})},J=function(){var t=n(d);0!==t.length&&(t.removeClass(l),0===t.prop("class").length&&t.removeAttr("class"))},K=function(t){var i=n("<div/>",{"class":k}).appendTo(c).css("background-color",o.background);P(),L(),U(t,i),V(i),Z(),$()},L=function(){n(s).appendTo(C).show(),M()},M=function(){var t=n("<input>").attr("type","hidden").attr("name",W).val(R);n(s+" .form-submit").append(n(t))},P=function(){var t="["+f+"="+R()+"]";n(B).hide(),n(B+t).show()},R=function(){var t=n(d).attr(u);return t},U=function(t,n){var i=t.offset();n.css({top:i.top,left:an()?i.left+t.outerWidth():i.left-n.outerWidth()})},V=function(t){var i=n(window).width(),o=t.outerWidth(),e=t.offset().left,c=e+o;an()&&c>i?(X(c-i),nn("in")):!an()&&0>e&&(X(-e),nn("in"))},X=function(t){D=t},Y=function(){return D},Z=function(){n("html").click(function(t){0===n(t.target).parents(c).length&&tn(!0)})},$=function(){n(T).click(function(t){t.preventDefault(),tn(!0)})},tn=function(t){var i=n(m),o=n(C);n(s).appendTo(c).hide(),i.hasClass(g)&&(i.removeClass(g),t?o.fadeOut("fast",function(){n(this).remove()}):o.remove(),nn("out"))},nn=function(t){var i=n(o.moveSiteSelector);i.css({position:"relative"}),on(i,t),o.moveSiteSelector!==a&&(cn(t,m),cn(t,C))},on=function(t,n){var i;"in"===n?i=Y():"out"===n&&(i="initial"),en(t,i)},en=function(t,n){t.css(an()?{right:n}:{left:n})},cn=function(t,i){var o=n(i);"in"===t?o.css({left:an()?"-="+Y():"+="+Y()}):"out"===t&&o.css({left:an()?"+="+Y():"-="+Y()})},an=function(){return"right"===o.position?!0:!1},rn=function(){o.hideBranding!==!0&&n(x).css({display:"block",visibility:"visible"})},sn=function(t){var n=t.split(",");return n}}(window.incom=window.incom||{},jQuery);