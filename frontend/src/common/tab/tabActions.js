/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */
/* eslint-disable indent */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable eol-last */
export function selectTab(tabId) {
    return {
        type: 'TAB_SELECTED',
        payload: tabId,
    };
}

export function showTabs(...tabIds) {
    const tabsToShow = {};
    tabIds.forEach((e) => tabsToShow[e] = true);
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow,
    };
}