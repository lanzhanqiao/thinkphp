function PMSFLWrite (s) {
  if (s.match(/url\s*\(/)) {
    var r = 'url($1' + window.pmsfl_calc_base + '/images';
    s = s.replace(/url\s*\((['"])?[\.\/]*images/, r);
  } else if (s.match(/src=".*\/images\//)) {
    var r = 'src="' + window.pmsfl_calc_base + '/images';
    s = s.replace(/src=".*\/images/, r);
  }
  document.write(s);
}
PMSFLWrite("<style type=\"text/css\">\n");
PMSFLWrite(".pmsfl-calculator {\n");
PMSFLWrite("width:634px !important;\n");
PMSFLWrite("color:#666666 !important;\n");
PMSFLWrite("background-image:url(http://www.yirendai.com/ccms/js/count/hd_bg.gif) !important;\n");
PMSFLWrite("background-position:top !important;\n");
PMSFLWrite("background-repeat:no-repeat !important;\n");
PMSFLWrite("background-color:#ffffff !important;\n");
PMSFLWrite("border:#cecece thin solid !important;\n");
PMSFLWrite("font-family:Arial, Helvetica, sans-serif !important;\n");
PMSFLWrite("position: relative !important;\n");
PMSFLWrite("z-index: 0 !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-inner {\n");
PMSFLWrite("padding-left: 25px !important;\n");
PMSFLWrite("padding-right:25px !important;\n");
PMSFLWrite("padding-bottom:15px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator h1 {\n");
PMSFLWrite("font-size:18px !important;\n");
PMSFLWrite("padding-top:25px !important;\n");
PMSFLWrite("margin:0px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator h2 {\n");
PMSFLWrite("font-size:18px !important;\n");
PMSFLWrite("color:#f37617 !important;\n");
PMSFLWrite("font-weight:bold !important;\n");
PMSFLWrite("margin:0px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator h3 {\n");
PMSFLWrite("font-size:16px !important;\n");
PMSFLWrite("font-weight:bold !important;\n");
PMSFLWrite("margin:0px !important;\n");
PMSFLWrite("padding-top:10px !important;\n");
PMSFLWrite("color:#666666 !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator h4 {\n");
PMSFLWrite("font-size:14px !important;\n");
PMSFLWrite("font-weight:bold !important;\n");
PMSFLWrite("margin:0px !important;\n");
PMSFLWrite("padding:0px !important;\n");
PMSFLWrite("color:#666666 !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator h5 {\n");
PMSFLWrite("font-size:14px !important;\n");
PMSFLWrite("font-weight:normal !important;\n");
PMSFLWrite("margin:0px !important;\n");
PMSFLWrite("color:#666666 !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator h6 {\n");
PMSFLWrite("font-size:16px !important;\n");
PMSFLWrite("font-weight:normal !important;\n");
PMSFLWrite("margin:0px !important;\n");
PMSFLWrite("padding-top:10px !important;\n");
PMSFLWrite("color:#666666 !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator p {\n");
PMSFLWrite("font-family:Arial, Helvetica, sans-serif !important;\n");
PMSFLWrite("line-height:200% !important;\n");
PMSFLWrite("margin:0px !important;\n");
PMSFLWrite("font-size:12px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator a {\n");
PMSFLWrite("color:#f37617 !important;\n");
PMSFLWrite("font-weight:normal !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator  .small {\n");
PMSFLWrite("font-size:12px !important;\n");
PMSFLWrite("line-height:16px !important;\n");
PMSFLWrite("width:100% !important;\n");
PMSFLWrite("color:#666666 !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator td {\n");
PMSFLWrite("padding: 8px 0px 5px 0px !important;\n");
PMSFLWrite("vertical-align: top !important;\n");
PMSFLWrite("font-size:12px !important;\n");
PMSFLWrite("line-height:16px !important;\n");
PMSFLWrite("color:#666666 !important;\n");
PMSFLWrite("border-top:#CCCCCC thin dotted !important;\n");
PMSFLWrite("height:1px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-blank-row {\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-indent {\n");
PMSFLWrite("padding-left: 0px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-1of2 {\n");
PMSFLWrite("width:375px !important;\n");
PMSFLWrite("/*border: #00CC00 thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-2of2 {\n");
PMSFLWrite("width:100px !important;\n");
PMSFLWrite("/*border:#00CCFF thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-1of3 {\n");
PMSFLWrite("width:375px !important;\n");
PMSFLWrite("/*border: #00CC00 thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-2of3 {\n");
PMSFLWrite("width:10px !important;\n");
PMSFLWrite("text-align:right !important;\n");
PMSFLWrite("/*border:#00CCFF thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite("#pmsfl-calculator-allow-needs .calc-col-2of3 {\n");
PMSFLWrite("width: 100px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-3of3 {\n");
PMSFLWrite("width:90px !important;\n");
PMSFLWrite("/*border:#99CC00 thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-1of4 {\n");
PMSFLWrite("width:466px !important;\n");
PMSFLWrite("/*border: #00CC00 thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-2of4 {\n");
PMSFLWrite("width:10px !important;\n");
PMSFLWrite("text-align:right !important;\n");
PMSFLWrite("/*border:#00CCFF thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-3of4 {\n");
PMSFLWrite("width:80px !important;\n");
PMSFLWrite("/*border:#99CC00 thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-4of4 {\n");
PMSFLWrite("width:5px !important;\n");
PMSFLWrite("/*border:#FF33CC thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-1of5 {\n");
PMSFLWrite("width:10px !important;\n");
PMSFLWrite("/*border: #00CC00 thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-2of5 {\n");
PMSFLWrite("width:160px !important;\n");
PMSFLWrite("/*border:#00CCFF thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-3of5 {\n");
PMSFLWrite("width:220px !important;\n");
PMSFLWrite("/*border:#99CC00 thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-4of5 {\n");
PMSFLWrite("width:10px !important;\n");
PMSFLWrite("/*border:#FF33CC thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite(".pmsfl-calculator .calc-col-5of5 {\n");
PMSFLWrite("width:80px !important;\n");
PMSFLWrite("/*border:#FF33CC thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-1of7 {\n");
PMSFLWrite("width:150px !important;\n");
PMSFLWrite("/*border: #00CC00 thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-2of7 {\n");
PMSFLWrite("width:5px !important;\n");
PMSFLWrite("/*border:#00CCFF thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-3of7 {\n");
PMSFLWrite("width:100px !important;\n");
PMSFLWrite("/*border:#99CC00 thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-col-4of7 {\n");
PMSFLWrite("width:100px !important;\n");
PMSFLWrite("/*border:#FF33CC thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite(".pmsfl-calculator .calc-col-5of7 {\n");
PMSFLWrite("width:5px !important;\n");
PMSFLWrite("/*border:#FF33CC thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite(".pmsfl-calculator .calc-col-6of7 {\n");
PMSFLWrite("width:20px !important;\n");
PMSFLWrite("/*border:#FF33CC thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite(".pmsfl-calculator .calc-col-7of7 {\n");
PMSFLWrite("width:100px !important;\n");
PMSFLWrite("/*border:#FF33CC thin solid !important;*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-help-details {\n");
PMSFLWrite("margin-top:10px !important;\n");
PMSFLWrite("color:#666666 !important;\n");
PMSFLWrite("font-size:12px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-spacer {\n");
PMSFLWrite("height: 25px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .error {\n");
PMSFLWrite("border: 1px solid red !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .attention {\n");
PMSFLWrite("background-color: #ffff99 !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-help-button {\n");
PMSFLWrite("width: 14px !important;\n");
PMSFLWrite("height: 13px !important;\n");
PMSFLWrite("text-decoration: none !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-help-open {\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-submit {\n");
PMSFLWrite("text-align:left !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".calc-submit input[type=submit] {\n");
PMSFLWrite("padding:3px 5px 3px 5px !important;\n");
PMSFLWrite("background: url(http://www.yirendai.com/ccms/js/count/calculate_bg.gif) no-repeat !important;\n");
PMSFLWrite("color:#ffffff !important;\n");
PMSFLWrite("font-size:12px !important;\n");
PMSFLWrite("width:76px !important;\n");
PMSFLWrite("*width:76px !important;\n");
PMSFLWrite("_width:76px !important;\n");
PMSFLWrite("height:23px !important;\n");
PMSFLWrite("border:none !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator select {\n");
PMSFLWrite("width:90px !important;\n");
PMSFLWrite("height:23px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator select.calc-wide {\n");
PMSFLWrite("width: auto !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator select.calc-narrow {\n");
PMSFLWrite("width:90px !important;\n");
PMSFLWrite("/* was 15px */\n");
PMSFLWrite("height:23px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite("#pmsfl-calculator-college-cost select.calc-narrow {\n");
PMSFLWrite("width:80px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-output {\n");
PMSFLWrite("margin-bottom:20px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-output table {\n");
PMSFLWrite("width: 580px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-output ul, .pmsfl-calculator ul {\n");
PMSFLWrite("margin:5px 0px 10px 15px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-output li, .pmsfl-calculator li {\n");
PMSFLWrite("list-style:disc !important;\n");
PMSFLWrite("list-style-image:none !important;\n");
PMSFLWrite("background:none !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-footer-note {\n");
PMSFLWrite("font-size:12px !important;\n");
PMSFLWrite("font-style:italic !important;\n");
PMSFLWrite("padding-top:20px !important;\n");
PMSFLWrite("padding-left:25px !important;\n");
PMSFLWrite("padding-right:25px !important;\n");
PMSFLWrite("line-height:14px !important;\n");
PMSFLWrite("/*border:#FF33CC thin solid !important;8*/\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-dialog-layer {\n");
PMSFLWrite("position:absolute !important;\n");
PMSFLWrite("z-index: 50 !important;\n");
PMSFLWrite("bottom: 7px !important;\n");
PMSFLWrite("left: 20px !important;\n");
PMSFLWrite("color:#666666 !important;\n");
PMSFLWrite("padding:0px !important;\n");
PMSFLWrite("padding-top:10px !important;\n");
PMSFLWrite("/*opacity: 1.0 !important;\n");
PMSFLWrite("filter: alpha(opacity=100) !important; */\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-embed-layer {\n");
PMSFLWrite("width: 475px !important;\n");
PMSFLWrite("height: 171px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-embed-layer-sp {\n");
PMSFLWrite("width: 475px !important;\n");
PMSFLWrite("height: 171px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-disclaim-layer {\n");
PMSFLWrite("width: 479px !important;\n");
PMSFLWrite("height: 138px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-disclaim-layer-sp {\n");
PMSFLWrite("width: 479px !important;\n");
PMSFLWrite("height: 138px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-dialog-layer .calc-dialog-close {\n");
PMSFLWrite("padding-top:0px !important;\n");
PMSFLWrite("padding-left:0px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-SP-footer-bar {\n");
PMSFLWrite("font-size: 10px !important;\n");
PMSFLWrite("font-family:Arial, Helvetica, sans-serif !important;\n");
PMSFLWrite("padding-left:40px !important;\n");
PMSFLWrite("padding-right:25px !important;\n");
PMSFLWrite("padding-top:12px !important;\n");
PMSFLWrite("padding-bottom:0px !important;\n");
PMSFLWrite("margin: 0 -25px -27px -25px !important;\n");
PMSFLWrite("*margin: 0 -25px -27px -25px !important; /* ie6 7 hack */\n");
PMSFLWrite("height:32px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-embed-info p {\n");
PMSFLWrite("width: 400px !important;\n");
PMSFLWrite("padding-top:0px !important;\n");
PMSFLWrite("font-size:12px !important;\n");
PMSFLWrite("color:#666666 !important;\n");
PMSFLWrite("padding-left:20px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator .calc-dialog-layer .calc-embed-info textarea {\n");
PMSFLWrite("width:410px !important;\n");
PMSFLWrite("height:75px !important;\n");
PMSFLWrite("padding-top:5px !important;\n");
PMSFLWrite("margin-top:11px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator  .calc-disclaimer-link {\n");
PMSFLWrite("color:#666666 !important;\n");
PMSFLWrite("text-decoration:underline !important;\n");
PMSFLWrite("padding-left:5px !important;\n");
PMSFLWrite("padding-right:5px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite(".pmsfl-calculator  .calc-embed-link {\n");
PMSFLWrite("position:relative !important;\n");
PMSFLWrite("top: -17px !important;\n");
PMSFLWrite("*top: -20px !important;  /* ie7 hack */\n");
PMSFLWrite("_top: -22px !important; /* ie6 hack */\n");
PMSFLWrite("left: 230px !important;\n");
PMSFLWrite("background-color:#fafafa !important;\n");
PMSFLWrite("border: #cccccc thin solid !important;\n");
PMSFLWrite("display:block !important;\n");
PMSFLWrite("width: 115px !important;\n");
PMSFLWrite("height:13px !important;\n");
PMSFLWrite("*height:12px !important;  /* ie6 7 hack */\n");
PMSFLWrite("color: #666666 !important;\n");
PMSFLWrite("padding:3px 3px 3px 5px !important;\n");
PMSFLWrite("}\n");
PMSFLWrite("\n");
PMSFLWrite("</style>\n");
PMSFLWrite("<div id=\"pmsfl-calculator-savings-grow\" class=\"pmsfl-calculator\">\n");
PMSFLWrite("<div class=\"calc-outer\">\n");
PMSFLWrite("<div class=\"calc-inner\">\n");
PMSFLWrite("<h1>如何使我的储蓄增加？</h1>\n");
PMSFLWrite("\n");
PMSFLWrite("<p>\n");
PMSFLWrite("定期按时储蓄，可以让您在未来拥有一笔不小的财富。来算算吧！\n");
PMSFLWrite("</p>\n");
PMSFLWrite("\n");
PMSFLWrite("<form>\n");
PMSFLWrite("<table>\n");
PMSFLWrite("<tbody>\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td class=\"calc-col-1of4\">初期储蓄金额</td>\n");
PMSFLWrite("<td class=\"calc-col-2of4\">￥</td>\n");
PMSFLWrite("<td class=\"calc-col-3of4\"><input name=\"balance\" type=\"text\" size=\"10\"/></td>\n");
PMSFLWrite("<td class=\"calc-col-4of4\">&#160;</td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td>\n");
PMSFLWrite("回报率\n");
PMSFLWrite("\n");
PMSFLWrite("</td>\n");
PMSFLWrite("<td>&#160;</td>\n");
PMSFLWrite("<td><input name=\"irate\" type=\"text\" size=\"10\"/></td>\n");
PMSFLWrite("<td>%</td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td>每年增加储蓄</td>\n");
PMSFLWrite("<td>￥</td>\n");
PMSFLWrite("<td><input name=\"deposit\" type=\"text\" size=\"10\"/></td>\n");
PMSFLWrite("<td>&#160;</td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td>年限</td>\n");
PMSFLWrite("<td>&#160;</td>\n");
PMSFLWrite("<td><input name=\"years\" type=\"text\" size=\"10\"/></td>\n");
PMSFLWrite("<td>&#160;</td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td colspan=\"2\">&#160;</td>\n");
PMSFLWrite("<td class=\"calc-submit\">\n");
PMSFLWrite("<input type=\"submit\" name=\"submit\" value=\"计算\"/>\n");
PMSFLWrite("</td>\n");
PMSFLWrite("<td>&#160;</td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("</tbody>\n");
PMSFLWrite("</table>\n");
PMSFLWrite("</form>\n");
PMSFLWrite("\n");
PMSFLWrite("<div class=\"calc-errors\" style=\"display:none\">\n");
PMSFLWrite("<div id=\"pmsfl-calculator-savings-grow-err1\">请您输入有效的数值再进行计算</div>\n");
PMSFLWrite("<div id=\"pmsfl-calculator-savings-grow-err2\">请您输入有效的数值再进行计算</div>\n");
PMSFLWrite("<div id=\"pmsfl-calculator-savings-grow-err3\">请您输入有效的数值再进行计算</div>\n");
PMSFLWrite("</div>\n");
PMSFLWrite("\n");
PMSFLWrite("<div class=\"calc-output\" style=\"display:none\">\n");
PMSFLWrite("<h2>输出结果</h2>\n");
PMSFLWrite("\n");
PMSFLWrite("<p>\n");
PMSFLWrite("根据您所提供的数据，通过复利计算，您将在未来&#160;<span id=\"pmsfl-calculator-savings-grow-years\"></span>&#160;\n");
PMSFLWrite("年内积累￥<span id=\"pmsfl-calculator-savings-grow-total\"></span>元。\n");
PMSFLWrite("</p>\n");
PMSFLWrite("</div>\n");
PMSFLWrite("\n");
PMSFLWrite("<div class=\"calc-recalculate-text\" style=\"display:none\">重新计算</div>\n");
PMSFLWrite("\n");
PMSFLWrite("<div class=\"calc-dialog-layer calc-embed-layer\" style=\"display:none\">\n");
PMSFLWrite("<div>\n");
PMSFLWrite("</div>\n");
PMSFLWrite("\n");
PMSFLWrite("</div>\n");
PMSFLWrite("\n");
PMSFLWrite("\n");
PMSFLWrite("<div class=\"calc-dialog-layer calc-disclaim-layer\" style=\"display:none\">\n");
PMSFLWrite("<div>\n");
PMSFLWrite("</div>\n");
PMSFLWrite("\n");
PMSFLWrite("</div>\n");
PMSFLWrite("\n");
PMSFLWrite("\n");
PMSFLWrite("\n");
PMSFLWrite("</div>\n");
PMSFLWrite("</div>\n");
PMSFLWrite("</div>\n");
PMSFLWrite("\n");
function PmsflId (name) {
  return 'pmsfl-calculator-' + name;
}
function PmsflHelper (id) {
  this.name = id;
  this.id = PmsflId(id);
}
PmsflHelper.prototype = {
  val: function (name, defaultv) {
    var value = $('#' + this.id + ' form :input[name=' + name + ']').val();
    if (!value || String(value).lentgh == 0) {return defaultv;}
    return value;
  },
  parseFloat: function (name, defaultv) {
    var value = this.cleanNumberString(this.val(name, defaultv));
    return parseFloat(value);
  },
  parseInt: function (name, defaultv) {
    var value = this.cleanNumberString(this.val(name, defaultv));
    return parseInt(value);
  },
  set: function (name, val, fmt) {
    if (fmt == undefined) {fmt = true;}
    var v = ((fmt && val.toString().match(/^[\d\.]+$/)) ? this.fmtNumber(val) : val);
    return $('#' + this.id + '-' + name).html(v);
  },
  show: function (sub) {
    if (sub) {
      $('#' + this.id + ' .calc-output .calc-output-cond').hide();
      $('#' + this.id + ' .calc-output .calc-output-' + sub).show();
    }

    $('#' + this.id + ' .calc-output:hidden').slideDown("normal");
    this.scrollTo($('#' + this.id + ' .calc-output'));
    this.showingResults = true;
  },
  msg: function (num, replacements, prefix) {
    var prefix_ = prefix || '-msg';
    var message = $('#' + this.id + prefix_ + num).html();
    var r = null;
    
    if (replacements) {
      for (var i in replacements) {
        r = replacements[i]
        r = (r.toString().match(/^[\d\.]+$/) ? this.fmtNumber(r) : r);
        message = message.replace('{' + i + '}', r);
      }
    }

    return message;
  },
  alert: function (errno, field, replacements) {
    if (field) {
      var e = $('#' + this.id + ' form :input[name=' + field + ']').addClass('error');
      e.focus();
      this.scrollTo(e);
    }
    alert(this.msg(errno, replacements, '-err'));
    return false;
  },
  prompt: function (message, default_result) {
    var result = prompt(message, "");
    if (!result || result.length == 0) {result = default_result;}
    return this.encodeHTML(result);
  },
  encodeHTML: function (s) {
    return s.split("&").join("&amp;").split( "<").join("&lt;").split(">").join("&gt;");
  },
  fmtNumber: function (n) {
    var re = new RegExp('(-?[0-9]+)([0-9]{3})');
    var s  = n.toLocaleString();
    var ds = Number("1.1").toLocaleString().substr(1,1);
    var ts = (ds == '.' ? ',' : '.');
    while(re.test(s)) {s = s.replace(re, '$1' + ts + '$2');}
    return s;
  },
  countInputs: function (re) {
    var count = 0;
    $('#' + this.id + ' form :input').each(function() {
      if (this.name.match(re) != null) {count += 1;}
    });
    return count;
  },
  scrollTo: function (element) {
    $('html,body').animate({scrollTop: element.offset().top - 50}, 1000);
  },
  cleanNumberString: function (numToClean) {
    var n = String(numToClean).replace(/[$,]+/g, '');
    return n;
  },
  mortgagePayment: function (rate, term, amount) {
    var i = rate / 1200.0;
    var x = Math.pow(1 + i, term * -1);
    return amount * i / (1-x);
  },
  openDialogLayer: function (section) {
    var dialog = $('#' + this.id + ' ' + section);
    dialog.show();
    this.scrollTo(dialog);
  },
  setUpFooterLinks: function () {
    var self = this;
    var base = window.pmsfl_calc_base;
    var base_no_proto = base.replace(/^https?:\/\//, '');
    var embed = $('#' + this.id + ' .calc-embed-info');
    var embed_instr = '<script type="text/javascript" src="' + base + '/js/boot.js"></script>' + "\n";
    embed_instr += '<script type="text/javascript">_calc_boot("' + base_no_proto + '", "' + this.name + '");</script>';
    embed_instr = this.encodeHTML(embed_instr);
    embed.find('textarea').html(embed_instr);
    if (window['calcs_for_iphone']) {
      $('#' + this.id + ' .calc-embed-link').hide();
      $('#' + self.id + ' .calc-disclaimer-link').click(function() {
        document.location = 'http://disclaimer';
      });
    } else {
      $('#' + this.id + ' .calc-embed-link').click(function() {
        $('#' + self.id + ' .calc-disclaim-layer').hide();
        self.openDialogLayer('.calc-embed-layer');
        return false;
      });
      $('#' + self.id + ' .calc-disclaimer-link').click(function() {
        $('#' + self.id + ' .calc-embed-layer').hide();
        self.openDialogLayer('.calc-disclaim-layer');
        return false;
      });
      $('#' + this.id + ' .calc-dialog-close').click(function() {
        $('#' + self.id + ' .calc-dialog-layer').hide();
        return false;
      });
    }
  },
  wantDateJS: function () {
    if (!Date.CultureInfo) {
      var base = window.pmsfl_calc_base;
      document.write(unescape("%3Cscript src=\"" + base + "/js/date.js\" type=\"text/javascript\"%3E%3C/script%3E"));
    }
  }
};
function PmsflCalc (name, options) {
  var helper = new PmsflHelper(name);

  if ($.browser.msie && typeof(pmsflIESelect) == 'undefined') {
    var base = window.pmsfl_calc_base;
    document.write(unescape("%3Cscript src=\"" + base + "/js/ieselect.js\" type=\"text/javascript\"%3E%3C/script%3E"));
    $(document).ready(function() {pmsflIESelect(helper.id);});
  }

  options.helper = helper;
  $('#' + helper.id + ' .calc-help-button').click(function() {
    $(this).toggleClass('calc-help-open');
    $(this).next('.calc-help-details').toggle();
    return false;
  });
  $('#' + helper.id + ' input[name=submit]').click(function() {
    $('#' + helper.id + ' form :input').removeClass('error');
    options['calculate'] ? options.calculate(helper) : options(helper);

    if (helper['showingResults']) {
      var text = $('#' + helper.id + ' .calc-recalculate-text').html();
      $(this).val(text);
      $(this).addClass('calc-recalculate');
    }

    return false;
  });
  if (options && options['addField']) {
    $('#' + helper.id + ' .calc-add-field').click(function() {
      var name = options.addField(helper, $(this));
      var e = $('#' + helper.id + ' input[name=' + name + ']').focus();
      helper.scrollTo(e);
      return false;
    });
  }
  helper.setUpFooterLinks();
  if (options && options['ready']) {options.ready();}
}
PmsflCalc('savings-grow', {
  calculate: function (helper) {
    var balance = helper.parseFloat('balance');
    var irate   = helper.parseFloat('irate');
    var deposit = helper.parseFloat('deposit');
    var years   = helper.parseFloat('years');
    
    if (isNaN(balance)) {return helper.alert(1, 'balance');}
    if (isNaN(irate))   {return helper.alert(2, 'irate');}
    if (isNaN(deposit)) {return helper.alert(1, 'deposit');}
    if (isNaN(years))   {return helper.alert(3, 'years');}
    
    var rate = irate * 0.01 + 1;
    var total = balance * Math.pow(rate, years);
    var c_years = Math.ceil(years);
    
    for (var i=0; i!=c_years; ++i) {
      total += deposit * Math.pow(rate, years - i);
    }
    
    c_years = years.toString().match(/\./) ? years.toFixed(2) : c_years;
    helper.set('total', total.toFixed(2));
    helper.set('years', c_years, false);
    helper.show();
  }
});
