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


	/**
	 *@description 判定目标字符串是否位于原字符串的末尾
	 *@param:target 目标字符串
	 *@param:str 父字符串
	 *@param:ignorecase 是否忽略大小写
	 */
	function startsWith(target,str,ignorecase){
		var end_str = target.substring(target.length-str.length);
		return ignorecase ? end_str.toLowerCase() === str.toLowerCase() : 	//
			end_str === str ;
	}


	/**
	 *@description 将一个字符串重复自身N次，如 repeat("Co")得到 CoCo。
	 *@param:target 目标字符串
	 *@param:n 重复次数
	 */
	function repeat(target,n){
		var s = target, 
			total = "";
		while(n > 0){
			if (n % 2 == 1)
				total += s;
			if (n == 1)
				break;
			s += s;
			n = n >> 1;	// >>是右移位运算符，相当于将n除以2取其商,或说开2二次方
		}
		return total;
	}


	/**
	 *@description 用于对字符串进行截断处理，当超过限定长度，默认添加三个点号或其它
	 *@param:target 目标字符串
	 *@param:length 最长长度，不设置则为默认30
	 *@param:truncation 非默认添加的内容
	 */
	function truncate(target,length,truncate){
		length = length || 30;
		truncate = truncate === void(0)?'...':truncate;

		return target.length > length ?
			target.slice(0,length-truncate.length) + truncate : String(target);
	}
	



})();