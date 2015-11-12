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
PMSFLWrite("width:466px !important;\n");
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
PMSFLWrite("<div id=\"pmsfl-calculator-allowcmp\" class=\"pmsfl-calculator\">\n");
PMSFLWrite("<div class=\"calc-outer\">\n");
PMSFLWrite("<div class=\"calc-inner\">\n");
PMSFLWrite("<h1>孩子的零花钱分析</h1>\n");
PMSFLWrite("\n");
PMSFLWrite("<p>\n");
PMSFLWrite("该给孩子多少零花钱呢？参考自己的童年，算算孩子的零花钱是不是太多了。\n");
PMSFLWrite("</p>\n");
PMSFLWrite("\n");
PMSFLWrite("<form>\n");
PMSFLWrite("<table>\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td class=\"calc-col-1of3\">孩子每周的零花钱</td>\n");
PMSFLWrite("<td class=\"calc-col-2of3\">￥</td>\n");
PMSFLWrite("<td class=\"calc-col-3of3\"><input name=\"c_allowance\" type=\"text\" value=\"\" size=\"10\" /></td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td>孩子的年龄</td>\n");
PMSFLWrite("<td>&#160;</td>\n");
PMSFLWrite("<td>\n");
PMSFLWrite("<select name=\"c_age\">\n");
PMSFLWrite("<option value=\"1\">1</option>\n");
PMSFLWrite("<option value=\"2\">2</option>\n");
PMSFLWrite("<option value=\"3\">3</option>\n");
PMSFLWrite("<option value=\"4\">4</option>\n");
PMSFLWrite("<option value=\"5\">5</option>\n");
PMSFLWrite("<option value=\"6\">6</option>\n");
PMSFLWrite("<option value=\"7\">7</option>\n");
PMSFLWrite("<option value=\"8\">8</option>\n");
PMSFLWrite("<option value=\"9\">9</option>\n");
PMSFLWrite("<option value=\"10\">10</option>\n");
PMSFLWrite("<option value=\"11\">11</option>\n");
PMSFLWrite("<option value=\"12\">12</option>\n");
PMSFLWrite("<option value=\"13\">13</option>\n");
PMSFLWrite("<option value=\"14\">14</option>\n");
PMSFLWrite("<option value=\"15\">15</option>\n");
PMSFLWrite("<option value=\"16\">16</option>\n");
PMSFLWrite("<option value=\"17\">17</option>\n");
PMSFLWrite("<option value=\"18\">18</option>\n");
PMSFLWrite("</select>\n");
PMSFLWrite("</td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td>家长的出生年份</td>\n");
PMSFLWrite("<td>&#160;</td>\n");
PMSFLWrite("<td>\n");
PMSFLWrite("<select name=\"p_year\">\n");
PMSFLWrite("<option value=\"\">生日</option>\n");
PMSFLWrite("<option value=\"1992\" >1992</option>\n");
PMSFLWrite("<option value=\"1991\" >1991</option>\n");
PMSFLWrite("<option value=\"1990\" >1990</option>\n");
PMSFLWrite("<option value=\"1989\" >1989</option>\n");
PMSFLWrite("<option value=\"1988\" >1988</option>\n");
PMSFLWrite("<option value=\"1987\" >1987</option>\n");
PMSFLWrite("<option value=\"1986\" >1986</option>\n");
PMSFLWrite("<option value=\"1985\" >1985</option>\n");
PMSFLWrite("<option value=\"1984\" >1984</option>\n");
PMSFLWrite("<option value=\"1983\" >1983</option>\n");
PMSFLWrite("<option value=\"1982\" >1982</option>\n");
PMSFLWrite("<option value=\"1981\" >1981</option>\n");
PMSFLWrite("<option value=\"1980\" >1980</option>\n");
PMSFLWrite("<option value=\"1979\" >1979</option>\n");
PMSFLWrite("<option value=\"1978\" >1978</option>\n");
PMSFLWrite("<option value=\"1977\" >1977</option>\n");
PMSFLWrite("<option value=\"1976\" >1976</option>\n");
PMSFLWrite("<option value=\"1975\" >1975</option>\n");
PMSFLWrite("<option value=\"1974\" >1974</option>\n");
PMSFLWrite("<option value=\"1973\" >1973</option>\n");
PMSFLWrite("<option value=\"1972\" >1972</option>\n");
PMSFLWrite("<option value=\"1971\" >1971</option>\n");
PMSFLWrite("<option value=\"1970\" >1970</option>\n");
PMSFLWrite("<option value=\"1969\" >1969</option>\n");
PMSFLWrite("<option value=\"1968\" >1968</option>\n");
PMSFLWrite("<option value=\"1967\" >1967</option>\n");
PMSFLWrite("<option value=\"1966\" >1966</option>\n");
PMSFLWrite("<option value=\"1965\" >1965</option>\n");
PMSFLWrite("<option value=\"1964\" >1964</option>\n");
PMSFLWrite("<option value=\"1963\" >1963</option>\n");
PMSFLWrite("<option value=\"1962\" >1962</option>\n");
PMSFLWrite("<option value=\"1961\" >1961</option>\n");
PMSFLWrite("<option value=\"1960\" >1960</option>\n");
PMSFLWrite("<option value=\"1959\" >1959</option>\n");
PMSFLWrite("<option value=\"1958\" >1958</option>\n");
PMSFLWrite("<option value=\"1957\" >1957</option>\n");
PMSFLWrite("<option value=\"1956\" >1956</option>\n");
PMSFLWrite("<option value=\"1955\" >1955</option>\n");
PMSFLWrite("<option value=\"1954\" >1954</option>\n");
PMSFLWrite("<option value=\"1953\" >1953</option>\n");
PMSFLWrite("<option value=\"1952\" >1952</option>\n");
PMSFLWrite("<option value=\"1951\" >1951</option>\n");
PMSFLWrite("<option value=\"1950\" >1950</option>\n");
PMSFLWrite("<option value=\"1949\" >1949</option>\n");
PMSFLWrite("<option value=\"1948\" >1948</option>\n");
PMSFLWrite("<option value=\"1947\" >1947</option>\n");
PMSFLWrite("<option value=\"1946\" >1946</option>\n");
PMSFLWrite("<option value=\"1945\" >1945</option>\n");
PMSFLWrite("<option value=\"1944\" >1944</option>\n");
PMSFLWrite("<option value=\"1943\" >1943</option>\n");
PMSFLWrite("<option value=\"1942\" >1942</option>\n");
PMSFLWrite("<option value=\"1941\" >1941</option>\n");
PMSFLWrite("<option value=\"1940\" >1940</option>\n");
PMSFLWrite("<option value=\"1939\" >1939</option>\n");
PMSFLWrite("<option value=\"1938\" >1938</option>\n");
PMSFLWrite("<option value=\"1937\" >1937</option>\n");
PMSFLWrite("<option value=\"1936\" >1936</option>\n");
PMSFLWrite("<option value=\"1935\" >1935</option>\n");
PMSFLWrite("<option value=\"1934\" >1934</option>\n");
PMSFLWrite("<option value=\"1933\" >1933</option>\n");
PMSFLWrite("<option value=\"1932\" >1932</option>\n");
PMSFLWrite("<option value=\"1931\" >1931</option>\n");
PMSFLWrite("<option value=\"1930\" >1930</option>\n");
PMSFLWrite("<option value=\"1929\" >1929</option>\n");
PMSFLWrite("<option value=\"1928\" >1928</option>\n");
PMSFLWrite("<option value=\"1927\" >1927</option>\n");
PMSFLWrite("<option value=\"1926\" >1926</option>\n");
PMSFLWrite("<option value=\"1925\" >1925</option>\n");
PMSFLWrite("<option value=\"1924\" >1924</option>\n");
PMSFLWrite("<option value=\"1923\" >1923</option>\n");
PMSFLWrite("<option value=\"1922\" >1922</option>\n");
PMSFLWrite("<option value=\"1921\" >1921</option>\n");
PMSFLWrite("<option value=\"1920\" >1920</option>\n");
PMSFLWrite("<option value=\"1919\" >1919</option>\n");
PMSFLWrite("<option value=\"1918\" >1918</option>\n");
PMSFLWrite("<option value=\"1917\" >1917</option>\n");
PMSFLWrite("<option value=\"1916\" >1916</option>\n");
PMSFLWrite("<option value=\"1915\" >1915</option>\n");
PMSFLWrite("<option value=\"1914\" >1914</option>\n");
PMSFLWrite("<option value=\"1913\" >1913</option>\n");
PMSFLWrite("</select>\n");
PMSFLWrite("</td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td>家长的零花钱（与孩子现在年龄相当时）</td>\n");
PMSFLWrite("<td>￥</td>\n");
PMSFLWrite("<td><input name=\"p_allowance\" type=\"text\" value=\"\" size=\"10\" /></td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("<tr>\n");
PMSFLWrite("<td colspan=\"2\">&#160;</td>\n");
PMSFLWrite("<td class=\"calc-submit\">\n");
PMSFLWrite("<input type=\"submit\" name=\"submit\" value=\"计算\"/>\n");
PMSFLWrite("</td>\n");
PMSFLWrite("</tr>\n");
PMSFLWrite("</table>\n");
PMSFLWrite("</form>\n");
PMSFLWrite("\n");
PMSFLWrite("<div class=\"calc-errors\" style=\"display:none\">\n");
PMSFLWrite("<div id=\"pmsfl-calculator-allowcmp-err1\">请您输入有效的数值再进行计算</div>\n");
PMSFLWrite("<div id=\"pmsfl-calculator-allowcmp-err2\">请您选择出生年份</div>\n");
PMSFLWrite("<div id=\"pmsfl-calculator-allowcmp-err3\">请您输入有效的数值再进行计算</div>\n");
PMSFLWrite("</div>\n");
PMSFLWrite("\n");
PMSFLWrite("<div class=\"calc-output\" style=\"display:none\">\n");
PMSFLWrite("<div>\n");
PMSFLWrite("<h2>输出结果：</h2>\n");
PMSFLWrite("<p>\n");
PMSFLWrite("您当时的<span id=\"pmsfl-calculator-allowcmp-pa\"></span> 元钱在现在购买力情况下相当于\n");
PMSFLWrite("<span id=\"pmsfl-calculator-allowcmp-ppp\"></span> 元，也就是说，如果您想给您的孩子提供与您当时同等水平的零花钱，您需要每周给您的孩子\n");
PMSFLWrite("<span id=\"pmsfl-calculator-allowcmp-ppp2\"></span>元。\n");
PMSFLWrite("</p>\n");
PMSFLWrite("\n");
PMSFLWrite("<p>\n");
PMSFLWrite("<span id=\"pmsfl-calculator-allowcmp-cra2\"></span>元在<span id=\"pmsfl-calculator-allowcmp-pay\"></span>年（家长与孩子同岁时的年份）的购买力情况下相当于\n");
PMSFLWrite("<span id=\"pmsfl-calculator-allowcmp-cpp\"></span> 元，那时您也是\n");
PMSFLWrite("<span id=\"pmsfl-calculator-allowcmp-ca\"></span>&#160;岁。\n");
PMSFLWrite("</p>\n");
PMSFLWrite("\n");
PMSFLWrite("<p>\n");
PMSFLWrite("专家建议，孩子每长一岁，每周的零花钱应多一元，也就是说您应该每周给您的孩子\n");
PMSFLWrite(" <span id=\"pmsfl-calculator-allowcmp-cra\"></span> 元钱。\n");
PMSFLWrite("</p>\n");
PMSFLWrite("\n");
PMSFLWrite("</div>\n");
PMSFLWrite("</div>\n");
PMSFLWrite("\n");
PMSFLWrite("<div class=\"calc-recalculate-text\" style=\"display:none\">重新计算</div>\n");
PMSFLWrite("\n");
PMSFLWrite("<div class=\"calc-dialog-layer calc-embed-layer\" style=\"display:none\">\n");
PMSFLWrite("<div>\n");
PMSFLWrite("</div>\n");
PMSFLWrite("\n");
PMSFLWrite("<div class=\"calc-embed-info\">\n");
PMSFLWrite("<p>\n");
PMSFLWrite("To embed this calculator into your site copy the following text\n");
PMSFLWrite("and paste it into your HTML page:<br />\n");
PMSFLWrite("<textarea></textarea>\n");
PMSFLWrite("</p>\n");
PMSFLWrite("</div>\n");
PMSFLWrite("</div>\n");
PMSFLWrite("\n");
PMSFLWrite("\n");
PMSFLWrite("<div class=\"calc-dialog-layer calc-disclaim-layer\" style=\"display:none;\">\n");
PMSFLWrite("<div>\n");
PMSFLWrite("</div>\n");
PMSFLWrite("\n");
PMSFLWrite("<div class=\"calc-footer-note\">\n");
PMSFLWrite("Note: This interactive calculator is intended as an educational\n");
PMSFLWrite("tool, not investment advice. The information presented is not\n");
PMSFLWrite("intended to advise you of strategies applicable to your specific\n");
PMSFLWrite("situation but rather to highlight issues for your own\n");
PMSFLWrite("consideration. Therefore, you should always consult your financial\n");
PMSFLWrite("or tax advisor. Your own goals will help you develop a specific\n");
PMSFLWrite("financial strategy.\n");
PMSFLWrite("</div>\n");
PMSFLWrite("</div>\n");
PMSFLWrite("\n");
PMSFLWrite("\n");
PMSFLWrite("\n");
PMSFLWrite("</div>\n");
PMSFLWrite("</div>\n");
PMSFLWrite("</div>\n");
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
var pmsfl_cpi = {1913: 9.9, 1914: 10.0, 1915: 10.1, 1916: 10.9, 1917: 12.8, 1918: 15.1, 1919: 17.3, 1920: 20.0, 1923: 17.1, 1924: 17.1, 1925: 17.5, 1929: 17.1, 1934: 13.4, 1935: 13.7, 1936: 13.9, 1937: 14.4, 1940: 14.0, 1941: 14.7, 1942: 16.3, 1943: 17.3, 1944: 17.6, 1945: 18.0, 1946: 19.5, 1947: 22.3, 1948: 24.1, 1950: 24.1, 1951: 26.0, 1952: 26.5, 1953: 26.7, 1956: 27.2, 1957: 28.1, 1958: 28.9, 1959: 29.1, 1960: 29.6, 1961: 29.9, 1962: 30.2, 1963: 30.6, 1964: 31.0, 1965: 31.5, 1966: 32.4, 1967: 33.4, 1968: 34.8, 1969: 36.7, 1970: 38.8, 1971: 40.5, 1972: 41.8, 1973: 44.4, 1974: 49.3, 1975: 53.8, 1976: 56.9, 1977: 60.6, 1978: 65.2, 1979: 72.6, 1980: 82.4, 1981: 90.9, 1982: 96.5, 1983: 99.6, 1984: 103.9, 1985: 107.6, 1986: 109.6, 1987: 113.6, 1988: 118.3, 1989: 124.0, 1990: 130.7, 1991: 136.2, 1992: 140.3, 1993: 144.5, 1994: 148.2, 1995: 152.4, 1996: 156.9, 1997: 160.5, 1998: 163.0, 1999: 166.6, 2000: 172.2, 2001: 177.1, 2002: 179.9, 2003: 184.0, 2004: 188.9, 2005: 195.3, 2006: 201.6, 2007: 207.342, 2008: 215.303, 2009: 216.177};
var pmsfl_cpi_now = pmsfl_cpi[2009];

PmsflCalc('allowcmp', function (helper) {
  var c_allowance = helper.parseFloat('c_allowance');
  var c_age       = helper.parseInt('c_age');
  var p_allowance = helper.parseFloat('p_allowance');
  var p_year      = helper.parseInt('p_year');

  if (isNaN(c_allowance)) {return helper.alert(1, 'c_allowance');}
  if (isNaN(p_year))      {return helper.alert(2, 'p_year');}
  if (isNaN(p_allowance)) {return helper.alert(3, 'p_allowance');}

  var recommended_allowance = c_age;
  var parent_cpi = pmsfl_cpi[p_year+c_age];

  for (var i=1; !parent_cpi; i++) {
    parent_cpi = pmsfl_cpi[p_year + c_age - i];
  }

  var parent_allowace_purchase_power = p_allowance * (pmsfl_cpi_now/parent_cpi);
  var child_allowance_purchase_power = c_allowance * (parent_cpi/pmsfl_cpi_now);

  helper.set('cra',  recommended_allowance.toFixed(2));
  helper.set('cra2', c_allowance.toFixed(2));
  helper.set('cpp',  child_allowance_purchase_power.toFixed(2));
  helper.set('pay',  Math.ceil(p_year + c_age), false);
  helper.set('ca',   Math.ceil(c_age), false);
  helper.set('pa',   p_allowance.toFixed(2));
  helper.set('ppp',  parent_allowace_purchase_power.toFixed(2));
  helper.set('ppp2', parent_allowace_purchase_power.toFixed(2));
  helper.show();
});
