(function(){this.JST||(this.JST={}),this.JST["locastyle/templates/_popover"]=function(t){t||(t={});var e,n=[],a=function(t){return t&&t.ecoSafe?t:"undefined"!=typeof t&&null!=t?o(t):""},i=t.safe,o=t.escape;return e=t.safe=function(t){if(t&&t.ecoSafe)return t;("undefined"==typeof t||null==t)&&(t="");var e=new String(t);return e.ecoSafe=!0,e},o||(o=t.escape=function(t){return(""+t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}),function(){(function(){n.push('<div id="ls-popover-'),n.push(a(this.index)),n.push('" class="ls-popover ls-popover-'),n.push(a(this.placement||"top")),n.push(" "),n.push(a(this.customClasses)),n.push('">\n  '),this.title&&(n.push('\n  <div class="ls-popover-header">\n    <h3 class="title-3"> '),n.push(a(this.title)),n.push(" </h3>\n  </div>\n  ")),n.push("\n  "),this.content&&n.push("\n  "),n.push('\n  <div class="ls-popover-content"> '),n.push(this.content),n.push(" </div>\n</div>\n")}).call(this)}.call(t),t.safe=i,t.escape=o,n.join("")}}).call(this),function(){this.JST||(this.JST={}),this.JST["locastyle/templates/_dropdown"]=function(t){t||(t={});var e,n=[],a=t.safe,i=t.escape;return e=t.safe=function(t){if(t&&t.ecoSafe)return t;("undefined"==typeof t||null==t)&&(t="");var e=new String(t);return e.ecoSafe=!0,e},i||(i=t.escape=function(t){return(""+t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}),function(){(function(){var t,e,a,i;for(n.push('<div data-ls-module="dropdown" class="ls-dropdown">\n  <a href="#" class="ls-btn"></a>\n  <ul class="ls-dropdown-nav">\n    '),i=this.elements,e=0,a=i.length;a>e;e++)t=i[e],n.push("\n      "),""!==t.text&&(n.push("\n        <li>"),n.push(t.outerHTML),n.push("</li>\n      ")),n.push("\n    ");n.push("\n  </ul>\n</div>\n")}).call(this)}.call(t),t.safe=a,t.escape=i,n.join("")}}.call(this);