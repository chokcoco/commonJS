/**
 * @description 常用JS函数封装
 * @author  Coco
 * @date 2015.07.21
 * 
 */

(function(){

	/**
	 *@description 判定一个字符串是否包含另外一个字符串
	 *@param:target 目标字符串
	 *@param:str 父字符串
	 *@param:separator 分隔符
	 */
	function contains(target,str,separator){
		return separator ?
			(separator + target + separator).indexOf(separator + str + separator) > -1: //需要判断分隔符
			target.indexOf(str) > -1;	//不需判断分隔符
	}


	/**
	 *@description 判定目标字符串是否位于原字符串的开始之处
	 *@param:target 目标字符串
	 *@param:str 父字符串
	 *@param:ignorecase 是否忽略大小写
	 */
	function startsWith(target,str,ignorecase){
		var start_str = target.substr(0,str.length);
		return ignorecase ? start_str.toLowerCase() === str.toLowerCase() : 	//
			start_str === str ;
	}



})();