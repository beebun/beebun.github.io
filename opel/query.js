/*
* Medical Citation Generator
	* <http://mickschroeder.com/citation>
	* <Mick Schroeder>
*
* Copyright 2011 Michael Schroeder <mschroeder@gmail.com> <http://mickschroeder.com>
*
* This code is derived from software originally by Jeremy Jones <http://drjermy.co.uk>
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/*
jQuery Url Plugin
	* Version 1.0
	* 2009-03-22 19:30:05
	* URL: http://ajaxcssblog.com/jquery/url-read-get-variables/
	* Description: jQuery Url Plugin gives the ability to read GET parameters from the actual URL
	* Author: Matthias JÅ ggli
	* Copyright: Copyright (c) 2009 Matthias JÅ ggli
	* Licence: dual, MIT/GPLv2
*/
(function($){$.url={};$.extend($.url,{_params:{},init:function(){var paramsRaw="";try{paramsRaw=(document.location.href.split("?",2)[1]||"").split("#")[0].split("&")||[];for(var i=0;i<paramsRaw.length;i++){var single=paramsRaw[i].split("=");if(single[0])this._params[single[0]]=unescape(single[1]);}}catch(e){alert(e);}},param:function(name){return this._params[name]||"";},paramAll:function(){return this._params;}});$.url.init();})(jQuery);


jQuery.noConflict();
jQuery(document).ready(function ($) {



function urlencode (str) {
    str = (str + '').toString();
    return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
    replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
}

function citation_lookup() {

        var query = urlencode($("#query").val());

        $("#citation_formatted").html("Loading...");
                $("#citation_filename").html("Loading...");
                $("#pubmedlink").html("Loading...");


            $.getJSON("https://mickschroeder.com/api/citation/cite.php?q=" + query + "&callback=?", function (json) {

            $("#citation_formatted").html(json.html_citation);

            if (json.citation_filename === undefined) {
	    		json.citation_filename = "Unable to suggest filename for this citation.";
	    	}

            $("#citation_filename").html(json.citation_filename);

           // _gaq.push(['_trackEvent', 'Citation', $("#query").val(), json.html_citation]);

            var articleLink = "";


            if (json.l_doi !== undefined) {
	    		articleLink = articleLink + json.l_doi;
    		}

    		else if (json.l_journal !== undefined){
	    		articleLink = articleLink + json.l_journal;
    		}
            else if (json.l_pmid !== undefined){
                articleLink = articleLink + json.l_pmid;
            }

             $("#pubmedlink").html(articleLink);



        });

    }

	if ($.url.param('q')){
		$("#query").val($.url.param('q'));
		citation_lookup();

    var url = $.url.param('q');
    var data = {'request': url};
    // $.ajax({
    //   type: "POST",
    //   url: "http://sci-hub.cc",
    //   data: data,
    //   success: function(result){
    //     console.log(result);
    //   }
    // });
    // // jQuery.ajax({
    //     url: "http://sci-hub.cc/",
    //     type: "POST",
    //     data: JSON.stringify(data),
    //     contentType: "application/json; charset=UTF-8",
    //     crossDomain: true,
    //     success: function(data){
    //       console.log(data);
    //     },
    // });
    $('#request-hidden').val(url);
    $('#form').submit();
    // $.ajax({
    //     type: "POST",
    //     url: "http://sci-hub.cc",
    //     crossDomain: true,
    //     data: 'request='+url,
    //     success: function (data) {
    //       console.log(data);
    //     }
    // });

	}

    $("#clearcitation").click(function () {
        $("#query").val("");
        $("#query").html("");
        $("#citation_formatted").val("");
        $("#citation_formatted").html("");
        $("#citation_filename").val("");
        $("#citation_filename").html("");
    });


    $("#citation_form").submit(function () {
        if ($("#query").val() === '') {
            $("#citation_formatted").html("No Query Entered.");
        } else {
            //citation_lookup();
            window.location.href="?q=" + urlencode($("#query").val());

        }
    });

    $("#et_contact_submit").click(function () {
        if ($("#query").val() === '') {
            $("#citation_formatted").html("No Query Entered.");
        } else {
            //citation_lookup();
            window.location.href="?q=" + urlencode($("#query").val());

        }
    });



});


  var width = window.innerWidth || document.documentElement.clientWidth;

    google_ad_client = "ca-pub-6344797609391119";
    if (width >= 800) {
google_ad_slot = "1604242684";
       google_ad_width = 728;
       google_ad_height = 90;
    } else if ((width < 800) && (width > 400)) {
      google_ad_slot = "2931373085";
      google_ad_width = 468;
      google_ad_height = 60;
    }
