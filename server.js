
const LIB_F_S = require( "fs" )
const LIB_URL = require( "url" );
const LIB_Q_S = require( "node:querystring" );

const TXT = { "Content-Type": "text/javascript"}
const PNG = { "Content-Type": "image/png"}
const HTM = { "Content-Type": "text/html"}
const J_S = { "Content-Type": "text/javascript"}
const EXE = { "Content-Type": "application/x-msdownload"}
const CSS = { "Content-Type": "text/css"}

require( "http" ).createServer( function( i_ask , i_giv ){
 
    var sob ={
      m_ask : i_ask                                  //!@ask@!//
    , m_giv : i_giv                                  //!@giv@!//
    , m_url : LIB_URL.parse( i_ask.url , 1 ).pathname//!@url@!//
    , m_pam : LIB_Q_S.parse( i_ask.url , 1 ).query   //!@pam@!//
    , m_seg : [ "URLPATH_SEGMENTS_NOT_LOADED]" ]     //!@seg@!//
    };;
 
    sob.m_url = sob.m_url.toUpperCase();             //!#MRI#!//
	
	if( sob.m_url == "/HELLO" ){

		i_giv.end( "WORLD" );
	}else
	if( sob.m_url == "/SELF" ){
	
		LIB_F_S.readFile( "./server.js" , function(err,cof){

			if(err){
				cof = "[messed up]" ;
			}else{
				sob.m_giv.writeHead( 200 , TXT );
			};
	}else{
		i_giv.end( sob.m_url );
	};

}).listen(process.env.PORT);
 
/** CHANGE_HISTORY ***************************************** ***
 
    TUTORIAL PART 018 : https://pastebin.com/ZCFNxebJ
                      : tinyurl.com/SERVER-JS-PART-18
                      : git@github.com:KanjiCoder/AIM_018.git
                      : https://github.com/KanjiCoder/AIM_018
 
*** ***************************************** CHANGE_HISTORY **/
/** PREFIXES *********************************************** ***
    
    LIB_  : any library we got by using require function
    m_    : member variable prefix.
    i_    : formal parameter argument ( i == input )
 
*** ******************************************************** **/
/** COMMENTS_ARE_READ_LAST_OR_NEVER ************************ ***
 
    @LIB_URL@ : LIBRARY : Universal Resource Locator
    @LIB_Q_S@ : LIBRARY : QueryString
 
    @sob@ : State Object Bundle
    @ask@ : What client is asking for ( request  / req )
    @giv@ : What server is giving  us ( response / res )
    @url@ : /URL/NOT/INCLUDING/ROOT/DOMAIN
    @pam@ : query parameters dictionary
    @seg@ : @url@ parts packed into an array
 
    #MRI# : Make Routing ( case ) Insensitive 
 
*** ******************************************************** **/