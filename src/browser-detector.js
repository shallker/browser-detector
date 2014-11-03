/**
 * browser-detector
 *
 * 描述：
 * 用于浏览器的检测
 *
 * 当前：
 * 使用的技术是userAgent字符串的嗅探
 *
 * 计划：
 * 考虑使用功能检测（Feature Detection）技术来实现
 *
 * 作者：
 * 汪晓东（Dawn Wang）
 */
;(function (exports) {
    var userAgent = navigator.userAgent;
    var ua = userAgent.toLowerCase();

    /**
     * 声明变量 browser
     */
    var browser;

    /**
     * 定义变量 browser 为对象类型
     */
    browser = {};

    /**
     * 定义所有的浏览器名称
     */
    browser.all = [
        'chrome',
        'firefox',
        'opera',
        'safari',
        'qqbrowser',
        'baidubrowser'
    ]

    /**
     * Opera浏览器匹配
     */
    var operaMatch = /(opr)[\/]([\w.]+)/.exec(ua);

    if (operaMatch) {
        browser.opera = {};
        browser.opera.version = operaMatch[2];
    }

    /**
     * Chrome浏览器匹配
     */
    var chromeMatch = /(chrome)[ \/]([\w.]+)/.exec(ua);

    if (chromeMatch) {
        browser.chrome = {};
        browser.chrome.version = chromeMatch[2];
    }

    /**
     * Safari浏览器匹配
     */
    var safariMatch = /(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(ua);

    if (safariMatch) {
        browser.safari = {};
        browser.safari.version = safariMatch[2];
    }

    /**
     * 浏览器总结
     */
    for (var i = 0, name; name = browser.all[i]; i++) {
        if (name in browser) {
            browser.name = name;
            browser.version = browser[name].version;
        }
    }

    /**
     * 向外输出
     */
    exports.browser = browser;
})(this);
