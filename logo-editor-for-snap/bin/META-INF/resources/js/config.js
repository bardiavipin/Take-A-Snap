;(function() {
    //debugger;

    AUI().applyConfig(
        {
            groups: {
                sessionext: {
                    base: MODULE_PATH + '/js/',
                    combine: Liferay.AUI.getCombine(),
                    filter: Liferay.AUI.getFilterConfig(),
                    modules: {
                        'liferay-logo-editor-override': {
                            path: 'liferay-logo_editor.js',
                            condition: {
                                name: 'liferay-logo-editor-override',
                                trigger: 'liferay-logo-editor',
                                when: 'instead'
                            }
                        }
                    },
                    root: MODULE_PATH + '/js/'
                }
            }
        }
    );
})();