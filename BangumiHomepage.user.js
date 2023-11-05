// ==UserScript==
// @name         Bangumi 首页改造计划
// @namespace    https://github.com/LearnDifferent
// @version      0.1
// @description  修改 Bangumi 的首页样式
// @author       Zhou
// @match        *://bgm.tv/
// @match        *://bangumi.tv/
// @grant        none
// @icon         http://bgm.tv/img/favicon.ico
// @license      MIT
// ==/UserScript==

(function () {
    'use strict';

    // 将首页右上方的内容放置到最后
    document.getElementById('columnHomeB').id = '';

    // 触发切换首页样式到按钮
    const btnList = document.getElementById('prgManagerMode');
    const styleChangeBtn = btnList.getElementsByTagName('a')[1];
    styleChangeBtn.click();

    // 移除切换首页样式按钮
    document.getElementById('switchNormalManager').remove();

    // 将首页展示条目的部分拓宽到 100%
    const columnHomeA = document.getElementById('columnHomeA');
    columnHomeA.setAttribute('style', 'width: 100%');

    // 将每个条目的字体调大
    const allSubjects = document.getElementsByClassName('tinyMode');
    for (let sub of allSubjects) {
        sub.setAttribute('style', 'font-size: medium; width: 45%; height: 15%');
    }

    // 将所有集数的按钮放大
    const eps = document.getElementsByClassName('epGird');
    for (let ep of eps) {
        // 每个集数的按钮
        let epBtns = ep.getElementsByTagName('li');
        for (let epBtn of epBtns) {
            epBtn.setAttribute('style', 'transform: scale(1.1);');
        }
    }

    // 将所有图片放大
    const allAvatar = document.getElementsByClassName('avatarSize48');
    for (let ava of allAvatar) {
        let originStyle = ava.getAttribute('style');
        ava.setAttribute('style', 'width: 55px; height: 55px; ' + originStyle);
    }

    // 将每个条目标题后面的进度和 edit 按钮放大
    const tinyHeaders = document.getElementsByClassName('tinyHeader');
    for (let tHeader of tinyHeaders) {
        // 替换 small 标签为 medium 标签
        let smallElements = tHeader.getElementsByClassName('progress_percent_text');
        for (let smallElement of smallElements) {
            let medium = document.createElement('medium');
            medium.innerHTML = smallElement.innerHTML;
            medium.className = smallElement.className;
            medium.id = smallElement.id;
            smallElement.parentNode.replaceChild(medium, smallElement);
            medium.setAttribute('style', 'color: #2774FF');
        }
    }

    // 将在看按钮的文字放大
    const watchBtns = document.getElementsByClassName('prgCheckIn textTip');
    for (let watchBtn of watchBtns) {
        let originTitle = watchBtn.getAttribute('data-original-title');
        let newTitle = originTitle.replace('<small>', '');
        newTitle = newTitle.replace('</small>', '');
        watchBtn.setAttribute('data-original-title', newTitle);
    }
})();