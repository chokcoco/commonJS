let common = {
    /**
     * 传入标准时间，返回指定日期格式
     * @param {Number} date 
     * @param {String} format 
     * @example 
     *      - dateSerialization(1511181312647, "y-mm-dd h:i:s")
     *      - @return 2017-11-20 20:35:12
     */
    dateSerialization(date, format) {
        let dateObj;
        let DEFAULT_FORMAT = "y-mm-dd h:i:s";
        let _patternArr = ["y", "mm", "dd", "h", "i", "s"];
        let _patternMap = {
            y: function(d) {
                return d.getFullYear();
            },
            m: function(d) {
                return d.getMonth() + 1;
            },
            mm: function(d) {
                return _pad(d.getMonth() + 1);
            },
            d: function(d) {
                return d.getDate();
            },
            dd: function(d) {
                return _pad(d.getDate());
            },
            h: function(d) {
                return _pad(d.getHours());
            },
            i: function(d) {
                return _pad(d.getMinutes());
            },
            s: function(d) {
                return _pad(d.getSeconds());
            }
        };

        if (/^\d+$/.test(date)) {
            dateObj = new Date(parseInt(date));
        } else if (typeof date == "string") {
            dateObj = new Date(date.replace(/-/g, "/"));
        } else if (_isDate(date)) {
            dateObj = date;
        }

        // 非法数据
        if (!dateObj || dateObj.toString() == "Invalid Date") {
            throw new Error("[common.date.format]the input cannot be converted to date object(" + date + ")");
            return;
        }

        format = format || DEFAULT_FORMAT;

        let _resultArr = format.split(/-|:|\s/);
        let resultObj = {};
        let result = "";

        _patternArr.forEach(k => {
            resultObj[k] = _patternMap[k](dateObj);
        });

        _resultArr.forEach(k => {
            let regExp = new RegExp(k);

            format = format.replace(regExp, function(e) {
                return resultObj[e];
            });
        });

        return format;
    }
};

function _toString(v) {
    return Object.prototype.toString.call(v);
}

function _isDate(v) {
    return _toString(v) == "[object Date]";
}

function _pad(n) {
    return n > 9 ? n : "0" + n;
}

export default common;
