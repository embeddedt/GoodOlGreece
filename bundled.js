!function a(s,r,l){function d(e,t){if(!r[e]){if(!s[e]){var o="function"==typeof require&&require;if(!t&&o)return o(e,!0);if(h)return h(e,!0);var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}var i=r[e]={exports:{}};s[e][0].call(i.exports,function(t){return d(s[e][1][t]||t)},i,i.exports,a,s,r,l)}return r[e].exports}for(var h="function"==typeof require&&require,t=0;t<l.length;t++)d(l[t]);return d}({1:[function(t,e,o){var n,i,tt=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});String.prototype.string_val=function(){return this},function(i){var a;(a=jQuery).fn.randomize=function(n){return this.each(function(){var t=a(this),e=t.children(n);!function(t){for(var e,o,n=t.length;n;e=Math.floor(Math.random()*n),o=t[--n],t[n]=t[e],t[e]=o);}(e),e.each(function(){a(this).detach()});for(var o=0;o<e.length;o++)t.append(e[o])})},i.currentLevel=0,i.contentsIndex=0,i.lastResult=!1,i.lastData=null,i.gameContents=[],i.defaultNextItem=function(t){return i.contentsIndex==i.gameContents.length-1?(console.error("No next items"),null):(console.log("Get from index "+(i.contentsIndex+1)),i.gameContents[++i.contentsIndex])},i.currentlyDisplayed=function(){return i.gameContents[i.contentsIndex]};var t=(e.prototype.isDisplaying=function(){return this._isDisplaying},e.prototype.myIndex=function(){return i.gameContents.indexOf(this)},e.prototype.display=function(){this._isDisplaying=!0},e.prototype.undisplay=function(){this._isDisplaying=!1},e.prototype.getNextItem=function(){if(null!=i.defaultNextItem)return i.defaultNextItem(this);throw new Error("No default next item provided")},e.prototype.redisplay=function(){var t=this.myIndex();if(-1==t)throw"redisplay() requires an in-array element";this.undisplay();var e=function(t,e){return void 0===e&&(e=-1),new v(t,e)}({index:t,relative:!1});setTimeout(function(){e.display()},0)},e.prototype.displayNext=function(){this.undisplay();var t=this.getNextItem();setTimeout(function(){null!==t&&t.display()},0)},e.prototype.reset=function(){},e);function e(){this._isDisplaying=!1,this._isDisplaying=!1,this.reset()}function o(t){var e,o,n;for(n=t.length-1;0<n;n--)e=Math.floor(Math.random()*(n+1)),o=t[n],t[n]=t[e],t[e]=o;return t}i.DisplayedItem=t,i.shuffle=o;var s,r=(tt(l,s=t),l.prototype.dialogCreated=function(){},l.prototype.buttonCallback=function(t){this.displayNext()},l.prototype.redisplay=function(){this.wantsToRedisplay=!0,this.modalDisplayed?$("#question-dialog").modal("hide"):s.prototype.redisplay.call(this)},l.prototype.displayNext=function(){this.wantsToRedisplay=!1,this.modalDisplayed?$("#question-dialog").modal("hide"):s.prototype.displayNext.call(this)},l.prototype.display=function(){var e=this;setTimeout(function(){$("#question-dialog").removeData(),null!=e.title?$("#question-dialog .modal-title").html(e.title.string_val()):$("#question-dialog .modal-title").html(""),null!=e.text?($("#question-dialog .modal-body").show(),$("#question-dialog .modal-body").html(e.text.string_val())):($("#question-dialog .modal-body").html(""),$("#question-dialog .modal-body").hide()),$("#question-dialog .modal-footer").empty(),$("#question-dialog .modal-footer").append($("<button></button>").addClass("btn btn-primary").attr("type","button")),null!=e.buttonText&&""!=e.buttonText.string_val()?($("#question-dialog .close").show(),$("#question-dialog .modal-footer").show(),$("#question-dialog .modal-footer button").text(e.buttonText.string_val())):($("#question-dialog .close").hide(),$("#question-dialog .modal-footer").hide()),e.dialogCreated(),$("#question-dialog .modal-footer button").off("click"),$("#question-dialog .modal-footer button").on("click",function(t){e.buttonCallback(t)}),$("#question-dialog").modal({backdrop:"static"}),e.modalDisplayed=!0,$("#question-dialog").one("shown.bs.modal",function(){}),$("#question-dialog").one("hidden.bs.modal",function(){e.modalDisplayed=!1,$("#question-dialog").modal("dispose"),e.wantsToRedisplay?e.redisplay():e.displayNext()})},this.delay)},l.defaultDelay=1e3,l);function l(t,e,o,n){void 0===o&&(o="OK"),void 0===n&&(n=l.defaultDelay);var i=s.call(this)||this;return i.title=t,i.text=e,i.buttonText=o,i.delay=n,i.modalDisplayed=!1,i.wantsToRedisplay=!1,i}i.InfoBox=r;var n,d=(tt(h,n=t),h.prototype.display=function(){var t=this;setTimeout(function(){t.displayNext()},this.time)},h);function h(t){var e=n.call(this)||this;return e.time=t,e}i.Delay=d;var u,p=(tt(c,u=r),c.prototype.dialogCreated=function(){$("#question-dialog .modal-body").text("");var n=$("<div></div>");n.addClass("level-buttons"),this.levelMarkups.forEach(function(t,e){var o=$("<button></button>");o.html(t.string_val()),o.data("level-id",e),o.click(function(){i.currentLevel=o.data("level-id"),$("#question-dialog").modal("hide")}),n.append(o)}),$("#question-dialog .modal-body").append(n)},c);function c(t){var e=u.call(this,"Choose a level","",null)||this;return e.levelMarkups=t,e}function m(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t}i.LevelChoice=p,i.getRandomInt=m,i.getRandomArbitrary=function(t,e){return Math.random()*(e-t)+t},i.playAudioIfSupported=function(t,e){if(e=e||function(){},Modernizr.audio){var o=new Audio(t.string_val());o.onerror=function(){e()},o.addEventListener("ended",e),o.play()}else e()};var g,f=(g=i.DisplayedItem,tt(y,g),y.prototype.display=function(){this.displayNext()},y);function y(t){var e=g.call(this)||this;return e.name=t,e}i.Label=f;var b,v=(b=i.DisplayedItem,tt(w,b),w.prototype.addLoop=function(){this.numLoops--,this.numLoops<-1&&(this.numLoops=-1)},w.prototype.getNumTimesLooped=function(){return this.numLoops},w.prototype.display=function(){var o=this;if(this.times<0||this.numLoops<this.times){if("number"==typeof this.loopInfo.index){if(this.loopInfo.relative&&-1==this.myIndex())throw"Not in gameContents array, cannot use relative branch";this.loopInfo.relative?i.contentsIndex+=this.loopInfo.index:i.contentsIndex=this.loopInfo.index}else{var t=i.gameContents.filter(function(t){return t instanceof f}),n=null;if(t.some(function(t){var e=t;return e.name==o.loopInfo.index&&(n=e,!0)}),null==n)throw"Undefined label: "+this.loopInfo.index;i.contentsIndex=n.myIndex()}i.contentsIndex-=1,this.numLoops++}this.times<0&&(this.numLoops=0),this.displayNext()},w.prototype.reset=function(){this.numLoops=0},w);function w(t,e){void 0===e&&(e=-1);var o=b.call(this)||this;return o.loopInfo=t,o.times=e,o.numLoops=0,"number"==typeof o.loopInfo.index&&o.loopInfo.index<0?o.loopInfo.relative=!0:void 0===o.loopInfo.relative&&(o.loopInfo.relative=!0),o}i.Loop=v;var x,I=(x=i.DisplayedItem,tt(C,x),C.prototype.display=function(){i.resetSystem(),this.displayNext()},C);function C(){return null!==x&&x.apply(this,arguments)||this}function A(t){var e=t.data("tooltip-timeout");e&&(clearTimeout(e),t.removeData("tooltip-timeout"))}function T(t,e,o){e/=100,o/=100;var n=(1-Math.abs(2*o-1))*e,i=n*(1-Math.abs(t/60%2-1)),a=o-n/2,s=0,r=0,l=0;return 0<=t&&t<60?(s=n,r=i,l=0):60<=t&&t<120?(s=i,r=n,l=0):120<=t&&t<180?(s=0,r=n,l=i):180<=t&&t<240?(s=0,r=i,l=n):240<=t&&t<300?(s=i,r=0,l=n):300<=t&&t<360&&(s=n,r=0,l=i),s=Math.round(255*(s+a)).toString(16),r=Math.round(255*(r+a)).toString(16),l=Math.round(255*(l+a)).toString(16),1==s.length&&(s="0"+s),1==r.length&&(r="0"+r),1==l.length&&(l="0"+l),"#"+s+r+l}function S(t){return t=t.replace("#",""),128<=(299*parseInt(t.substr(0,2),16)+587*parseInt(t.substr(2,2),16)+114*parseInt(t.substr(4,2),16))/1e3?"black":"white"}i.SystemReset=I,i.resetSystem=function(){i.gameContents.forEach(function(t){t.reset()})},i.restart=function(){i.gameContents[i.contentsIndex].isDisplaying()&&i.gameContents[i.contentsIndex].undisplay(),i.contentsIndex=0,i.gameContents[i.contentsIndex].display()},i.HSLToHex=T,i.getContrastYIQ=S;var q,k=(tt(_,q=r),_.prototype.buttonCallback=function(t){var e=$("#question-dialog .modal-body .items-div"),o=$("#question-dialog .modal-body .targets-div");if(!_.alwaysBeRight&&0<e.children().length)i.lastResult=!1;else{var n=o.find(".drag-item");i.lastResult=!0,_.alwaysBeRight||n.each(function(t,e){if(!$(e).data("target").is($(e).parent()))return i.lastResult=!1})}q.prototype.buttonCallback.call(this,t)},_.prototype.dialogCreated=function(){var s=$("<div></div>"),r=$("<div></div>"),t=s.add(r),e=$("<div></div>").append(t);function o(t,e){$(this).trigger("gt.before_drop");var o=$(document).find(".ui-draggable-dragging");if(!o.get(0)&&!(o=$(this).children(".drag-item")).get(0))throw"Can't find draggable";console.log(o[0]),o.css({top:"",left:""});var n=$(this);$(this).hasClass("target")&&0!=$(this).find(".drag-item").length&&(n=r),o.detach().appendTo(n),console.log(this),n.is(r)&&o.css({position:"relative"})}function n(t,e){console.log("out"),$(this).hasClass("target")&&$(this).children(".drag-item").hasClass("ui-draggable-dragging")&&(console.log($(this).children().get(0)),$(this).children("i").hide(),$(this).children("span").show(),$(this).tooltip("disable"))}e.css({display:"flex",width:"100%",height:"100%"}),$("#question-dialog .modal-body").append(e),t.addClass("dragtargets-div"),s.addClass("targets-div"),r.addClass("items-div"),this.items.forEach(function(t){var e=t.target,o=$("<span></span>").html(e.string_val()),n=$("<div></div>").append(o).addClass("target");n.data("my-text",e),s.append(n),n.append($("<i></i>").addClass("fas fa-question-circle").click(function(){var t=$(this).parent();A(t),t.tooltip("show"),t.data("tooltip-timeout",setTimeout(function(){t.tooltip("hide")},3e3))})),n.children("i").hide();var i=n,a=T(m(0,360),100,90);(n=$("<div></div>").addClass("drag-item").data("target",i).css({"background-color":a,color:S(a)})).append($("<div></div>").css("margin","auto").html(t.name.string_val())),r.append(n),i.attr("title",i.data("my-text")),i.tooltip({html:!0}),i.tooltip("disable")}),this.shuffleTargets&&s.randomize(),this.shuffleOptions&&r.randomize();var i={containment:$("body"),start:function(t,e){$(e.helper).css({transform:"none"}),$(this).data("startingScrollTop",$(this).parent().scrollTop())},revert:function(t){return!t&&(console.log("Reverting!"),$(this).parent().trigger("gt.before_drop"),!0)},drag:function(t,e){$(e.helper).parent().hasClass("target")&&($(e.helper).parent().tooltip("hide"),A($(e.helper).parent()))},stop:function(t,e){$(e.helper).css({transform:""})},scroll:!1};console.log("should not scroll"),s.children("div").droppable().on("drop",o).on("dropout",n).on("gt.before_drop",function(t,e){console.log("gt before drop"),$(this).hasClass("target")&&($(this).tooltip("enable"),$(this).children("i").show(),$(this).children("span").hide())}),r.droppable().on("drop",o).on("dropout",n),r.children("div").draggable(i)},_.alwaysBeRight=!1,_);function _(t,e,o,n){void 0===o&&(o=!1),void 0===n&&(n=!1);var i=q.call(this,t,"","Check")||this;return i.title=t,i.items=e,i.shuffleTargets=o,i.shuffleOptions=n,i}i.DragTargetsQuestion=k;var D,L=(tt(M,D=t),M.prototype.display=function(){this.func(),this.displayNext()},M);function M(t){var e=D.call(this)||this;return e.func=t,e}i.FunctionDisplayedItem=L;var N,O=(tt(R,N=t),R.prototype.display=function(){this.customCondition()?this.trueStatement.display():this.falseStatement.display()},R.prototype.reset=function(){this.trueStatement&&this.trueStatement.reset(),this.falseStatement&&this.falseStatement.reset()},R);function R(t,e,o){var n=N.call(this)||this;return n.trueStatement=t,n.falseStatement=e,n.customCondition=o,void 0===n.customCondition&&(n.customCondition=function(){return i.lastResult}),n}i.Condition=O;var B,F=(tt(Q,B=r),Q.scrollHandler=function(){var t=($(".interactive-svg img").width()-$(".interactive-svg").width())/2;$(".interactive-svg").scrollLeft(t)},Q.prototype.interactiveComponentClicked=function(t){i.lastData=t,this.displayNext()},Q.prototype.dialogCreated=function(){var o=this,n=$("<div></div>");$("<img></img>"),n.addClass("interactive-svg"),n.load(this.imgSrc.string_val(),function(){o.interactiveComponents&&o.interactiveComponents.forEach(function(t,e){n.find("svg").get(0).querySelectorAll(t.string_val()).forEach(function(t){$(t).addClass("interactive-component"),$(t).click(function(t){o.interactiveComponentClicked($(t.target))})})})}),$("#question-dialog .modal-body").append(n),$(window).off("resize",Q.scrollHandler),$(window).on("resize",Q.scrollHandler)},Q.prototype.undisplay=function(){B.prototype.undisplay.call(this),$(window).off("resize",Q.scrollHandler)},Q);function Q(t,e,o){var n=B.call(this,t,"",null)||this;return n.imgSrc=e,n.interactiveComponents=o,n}i.InteractiveSVG=F;var E=(G.prototype.reset=function(){this.itemIndexes=[],this.itemsFound=0},G.prototype.setTitle=function(){0<this.itemsFound&&$("#question-dialog .modal-title").text("You have "+this.keyword+" "+this.itemsFound+" of "+this.numItems+" items.")},G.prototype.itemFound=function(t){-1==this.itemIndexes.indexOf(t.data("index"))&&(this.itemsFound++,this.itemIndexes.push(t.data("index"))),this.$componentFound=t,this.parent.displayNext()},G.prototype.finished=function(){return this.itemsFound==this.numItems},G.defaultKeyword="found",G);function G(t,e,o){void 0===o&&(o=G.defaultKeyword),this.parent=t,this.numItems=e,this.keyword=o,this.itemIndexes=[],this.reset()}i.Finder=E;var j,P=(tt(H,j=F),H.prototype.interactiveComponentClicked=function(t){this.finder.itemFound(t)},H.prototype.reset=function(){null!=this.finder&&this.finder.reset(),j.prototype.reset.call(this)},H);function H(t,e,o,n){var i=j.call(this,t,e,o)||this;return i.imgSrc=e,i.numItems=n,i.itemsFound=0,i.finder=new E(i,n),i}i.InteractiveSVGFinder=P;var W,z=(tt(K,W=r),K.prototype.reset=function(){null!=this.finder&&this.finder.reset(),W.prototype.reset.call(this),this.foundIndexes=[],this.didDisplay=!1},K.prototype.displayNext=function(){this.didDisplay?i.lastResult=!1:i.lastResult=this.finder.finished(),console.log(this.finder.$componentFound.get(0)),i.lastData=this.finder.$componentFound.data("index"),W.prototype.displayNext.call(this)},K.prototype.display=function(){this.finder.finished()?(this.didDisplay=!1,this.displayNext()):(this.didDisplay=!0,W.prototype.display.call(this))},K.prototype.dialogCreated=function(){var n=this,t=$("#question-dialog .modal-body");t.html(""),t.show(),null!=this.instructions&&t.append($("<span></span>").html(this.instructions.string_val())),this.finder.setTitle();var i=$("<div></div>").addClass("finder-buttons").appendTo(t);this.buttons.forEach(function(t,e){var o=$("<button></button>").html(t.string_val());-1!=n.foundIndexes.indexOf(e)&&o.addClass("was_found"),o.data("index",e),o.data("element",t),o.click(function(t){i.children("button").prop("disabled",!0),n.foundIndexes.push($(t.target).data("index")),n.finder.itemFound($(t.target))}),i.append(o)})},K);function K(t,e,o,n){void 0===n&&(n=r.defaultDelay);var i=W.call(this,t,e,null,n)||this;return i.instructions=e,i.buttons=o,i.delay=n,i.didDisplay=!1,i.finder=new E(i,o.length,"explored"),i.foundIndexes=[],i}i.ButtonFinder=z,i.imageAndText=function(t,e){return"<img src='"+t+"'></img>"+e};var V,Y=(tt(U,V=r),U.prototype.buttonCallback=function(t){var e="True"==$(t.target).text();void 0!==this.correctAnswer?i.lastResult=e==this.correctAnswer:i.lastResult=e,V.prototype.buttonCallback.call(this,t)},U.prototype.dialogCreated=function(){$("#question-dialog .modal-footer").append($("<button></button>").addClass("btn btn-secondary").text("False").click(this.buttonCallback))},U);function U(t,e){var o=V.call(this,t,null,"True")||this;return o.correctAnswer=e,o}i.TrueFalseQuestion=Y;var Z,J=(tt(X,Z=r),X.prototype.answered=function(t){t.data("questionOption").correct?(i.lastResult=!0,this.displayNext()):(i.lastResult=!1,this.title="Sorry, that wasn't the correct answer.",this.shouldReDisplay?this.redisplay():this.displayNext())},X.prototype.dialogCreated=function(){var i=this,t=$("#question-dialog .modal-body"),a=$("<div></div>").addClass("finder-buttons").appendTo(t);o(this.choices).forEach(function(t,e){var o=$("<button></button>").html(t.html.string_val()),n=T(m(0,360),100,90);o.css({"background-color":n,color:S(n)}),o.data("index",e),o.data("questionOption",t),o.click(function(t){a.children("button").prop("disabled",!0),i.answered(o)}),a.append(o)})},X);function X(t,e,o){void 0===o&&(o=!1);var n=Z.call(this,"Choose one of the choices.",t,null)||this;return n.choices=e,n.shouldReDisplay=o,n}i.MultipleChoiceQuestion=J,i.monkeyPatch=function(){$.widget("ui.draggable",$.ui.draggable,{_mouseStart:function(t){this._super(t),this.origScroll=this.options.scroll,"fixed"!==this.cssPosition&&!this.hasFixedAncestor||(this.options.scroll=!1)},_mouseStop:function(t){this._super(t),this.options.scroll=this.origScroll}})}}(i=i||{});var a,s=(a=i.InteractiveSVG,tt(r,a),r.prototype.interactiveComponentClicked=function(t){"Europe"!=t.attr("id")?$("#question-dialog .modal-title").text("Nope, that's "+t.attr("id").replace("_"," ")):$("#question-dialog").modal("hide")},r);function r(){return null!==a&&a.apply(this,arguments)||this}var l=["Only men were allowed to vote in Athens. Voting took place by use of a hand-count. Ballots weren't commonly used back then!","The Acropolis is a hill in Athens that temples for the gods and goddesses were built on.","The Parthenon is a temple that was originally built to honor the goddess Athena. Though it was built thousands of years ago, it is still standing today.","Girls did not attend school in Athens; instead, they were taught by their mothers how to cook, clean, and do other maternal duties.","Boys in Athens spent 2 years training to be soldiers when they reached 18. They had the letter A painted on their shield. Athenian boys had to buy their own weapons.","Athenian boys went to school at the age of 7. They learned reading, writing, music, and poetry. At 18 they left to join the military.","In Athens, people lived in houses built below the Acropolis.","The olive tree was believed to have been given to Athens as a gift by the goddess Athena."],d=["In Sparta, olive trees were used as a way to thank the gods for a victory. After an intense battle the Spartans would hang their weapons in the tree.","When boys were 20 years old they joined the Spartan army. They always wore red cloaks when they went to fight, and were known for being the toughest warriors in Greece!","Even though girls weren't in the army, they had to stay active so they could have healthy babies, because Spartan babies always had to be strong","Spartans only wanted the best, so weak Spartan babies were left to die.","Boys in Sparta didn't go to school. As soon as they turned 7 they started training for the military. Pretty different from Athens, huh?","Spartan boys were deliberately kept hungry, so they had to roam around stealing food to survive. This taught them useful skills for battle."];i.gameContents=[new i.InfoBox("Welcome!","Welcome to Good Ol' Greece.<p></p>If you're playing on a small device, we recommend using landscape for some or all of the parts in this game."),new i.Label("dragquestion"),new i.DragTargetsQuestion("Place the dates on top of their matching event.",[{name:"1852 B.C.",target:"Pyramids begin to be built"},{name:"500 B.C.",target:"Greek Classical Age"},{name:"0 B.C./A.D.",target:"Christ is born"},{name:"410 A.D.",target:"The fall of Rome"},{name:"1066 A.D.",target:"The Battle of Hastings"},{name:"1952 A.D.",target:"Queen Elizabeth II crowned"}],!1,!0),new i.Condition(new i.Loop({index:"dq_correct"}),new i.Loop({index:"dq_incorrect"})),new i.Label("dq_correct"),new i.InfoBox("Great job!","You must know what you're doing!","Continue"),new i.Loop({index:"first-map"}),new i.Label("dq_incorrect"),new i.InfoBox("Whoops!","Looks like something went wrong there. Give it another try!","Try again"),new i.Loop({index:"dragquestion"}),new i.Label("first-map"),new s("Select the continent Greece is in.","Continents.svg",[".interactive-continent"]),new i.InfoBox("Nice work!","Greece is located in southern Europe.","OK"),new i.Label("second-map"),new i.ButtonFinder("Athens: Explore the items!",null,[i.imageAndText("raising_hand.png","Democracy"),i.imageAndText("acropolis.jpg","Acropolis"),i.imageAndText("parthenon.jpg","Parthenon"),i.imageAndText("girl.gif","Greek girls"),i.imageAndText("hoplite.jpg","Hoplites"),i.imageAndText("youngboy.gif","Young boy"),i.imageAndText("house.gif","House"),i.imageAndText("tree.png","Olive tree")],0),new i.Condition(new i.Loop({index:"third-map"}),new i.Label("fallthrough")),new i.InfoBox("Information",{string_val:function(){return l[i.lastData]}},"OK",0),new i.Loop({index:"second-map"}),new i.Label("third-map"),new i.ButtonFinder("Sparta: Explore the items!",null,[i.imageAndText("tree.png","Tree"),i.imageAndText("hoplite.jpg","Soldier"),i.imageAndText("girl.gif","Spartan girls"),i.imageAndText("babies.jpg","Spartan babies"),i.imageAndText("youngboy.gif","Spartan boys"),i.imageAndText("stealing.jpg","Stealing")],0),new i.Condition(new i.Loop({index:"fourth-map"}),new i.Label("fallthrough")),new i.InfoBox("Information",{string_val:function(){return d[i.lastData]}},"OK",0),new i.Loop({index:"third-map"}),new i.Label("fourth-map"),new i.DragTargetsQuestion("Mount Olympus: Match the symbols to the gods and goddesses.",[{name:"<img src='lightning.svg'></img>",target:"<b>Zeus</b><br/>I need my lightning bolt"},{name:"<img src='harp.svg'></img>",target:"<b>Apollo</b><br/>I can't play music without a harp"},{name:"<img src='pomegranate.jpg'></img>",target:"<b>Hera</b><br/>I need my pomegranate"},{name:"<img src='winged_boot.jpg'></img>",target:"<b>Hermes</b><br/>I need my winged boots"},{name:"<img src='rose.png'></img>",target:"<b>Aphrodite</b><br/>I love my rose"},{name:"<img src='bow_and_arrow.png'></img>",target:"<b>Artemis</b><br/>I need my bow"},{name:"<img src='wheat.svg'></img>",target:"<b>Demeter</b><br/>I need my wheat"},{name:"<img src='trident.svg'></img>",target:"<b>Poseidon</b><br/>I can't find my trident"},{name:"<img src='wine.svg'></img>",target:"<b>Dionysus</b><br/>I need my wine"},{name:"<img src='hammer.svg'></img>",target:"<b>Hephaestus</b><br/>I need my hammer"},{name:"<img src='spear.svg'></img>",target:"<b>Ares</b><br/>Give me my spear"},{name:"<img src='tree.png'></img>",target:"<b>Athena</b><br/>I can't find my olive tree"}],!0,!0),new i.Condition(new i.Loop({index:"quiz"}),new i.Label("fallthrough")),new i.InfoBox("Nope!","It seems that you didn't match the symbols properly.","Try again"),new i.Loop({index:"fourth-map"}),new i.Label("quiz"),new i.InfoBox("Great job!","The gods are pleased.","OK"),new i.InfoBox("Welcome to the Quiz","Now you'll be tested on your knowledge of Athens, Sparta, and Mount Olympus."),new i.MultipleChoiceQuestion("At what age did boys from Sparta start going to school?",[{html:"7",correct:!0},{html:"16"},{html:"They didn't!"}],!0),new i.MultipleChoiceQuestion("Who were the temples on the Acropolis built for?",[{html:"The gods",correct:!0},{html:"Rich people"},{html:"Soldiers"}],!0),new i.MultipleChoiceQuestion("Which god or goddess gave an olive tree to Athens?",[{html:"Athena",correct:!0},{html:"Artemis"},{html:"Aphrodite"}],!0),new i.MultipleChoiceQuestion("At what age did girls from Sparta start going to school?",[{html:"7"},{html:"16"},{html:"They didn't!",correct:!0}],!0),new i.MultipleChoiceQuestion("Which god was worshipped in the Parthenon?",[{html:"Athena",correct:!0},{html:"Zeus"},{html:"Aristotle"}],!0),new i.MultipleChoiceQuestion("Spartan girls kept fit so they could have...?",[{html:"Healthy babies",correct:!0},{html:"Fun"},{html:"A laugh"}],!0),new i.MultipleChoiceQuestion("Spartan boys were kept hungry, so they had to...",[{html:"Steal food!",correct:!0},{html:"Fight a lot!"},{html:"Borrow money!"}],!0),new i.MultipleChoiceQuestion("What was Sparta surrounded by to protect it?",[{html:"Mountains",correct:!0},{html:"An army of Spartans"},{html:"Machine guns"}],!0),new i.MultipleChoiceQuestion("What type of Spartan baby was left to die?",[{html:"Weak babies",correct:!0},{html:"Fat babies"},{html:"Inconsolable babies"}],!0),new i.MultipleChoiceQuestion("Which god was responsible for protecting Athens?",[{html:"Athena",correct:!0},{html:"Poseidon"},{html:"Plato"}],!0),new i.Label("hack1"),new i.MultipleChoiceQuestion("The twelve gods and goddesses lived on...",[{html:"Mount Olympus",correct:!0},{html:"My roof"},{html:"An island in Greece"}],!0),new i.InfoBox("Thanks for playing!","If you want to play again, you can refresh the page.",null)],$(window).on("load",function(){$(".se-pre-con").fadeOut("slow"),i.monkeyPatch(),i.resetSystem(),i.restart()})},{}]},{},[1]);
