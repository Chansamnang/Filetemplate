define(function (require, exports, module) {
    "use strict";
    
	var docIndex = 1,
		DocumentManager = brackets.getModule("document/DocumentManager"),
		Commands = brackets.getModule("command/Commands"),
		CommandManager = brackets.getModule("command/CommandManager"),
		KeyBindingManager = brackets.getModule("command/KeyBindingManager"),
		EditorManager = brackets.getModule("editor/EditorManager"),
		MainViewManager = brackets.getModule("view/MainViewManager"),
		Menus = brackets.getModule("command/Menus"),
		HTMLTemplate = require("text!templates/basicHtml.html"),
        vueTemplate = require("text!templates/basicVue.html"),
        ajaxTemplate = require("text!templates/basicAjax.html"),
        PHPTemplate = require("text!templates/basicphp.php");
    
    function templateHandler(template) {
        var editor = EditorManager.getFocusedEditor();
        if (editor) {
            var insertionPos = editor.getCursorPos();
            editor.document.replaceRange(template, insertionPos);
        }
    }
    function newHTMLHandle() {
        var defaultExtension = ".html",
            doc = DocumentManager.createUntitledDocument(docIndex++, defaultExtension);
		MainViewManager._edit(MainViewManager.ACTIVE_PANE, doc);
		templateHandler(HTMLTemplate);
		return new $.Deferred().resolve(doc).promise();
        
	}
    
     function newPHPHandle() {
		var defaultExtension = ".php",
            doc = DocumentManager.createUntitledDocument(docIndex++, defaultExtension);

		MainViewManager._edit(MainViewManager.ACTIVE_PANE, doc);
		templateHandler(PHPTemplate);
		return new $.Deferred().resolve(doc).promise();
	}
    
    function newVueHandle() {
		var defaultExtension = ".html",
            doc = DocumentManager.createUntitledDocument(docIndex++, defaultExtension);

		MainViewManager._edit(MainViewManager.ACTIVE_PANE, doc);
		templateHandler(vueTemplate);
		return new $.Deferred().resolve(doc).promise();
	}
    
    function newAjaxHandle() {
		var defaultExtension = ".html",
            doc = DocumentManager.createUntitledDocument(docIndex++, defaultExtension);

		MainViewManager._edit(MainViewManager.ACTIVE_PANE, doc);
		templateHandler(ajaxTemplate);
		return new $.Deferred().resolve(doc).promise();
	}
    
    var menuLabel = "fileTemplate";
    var menu = Menus.getMenu(Menus.AppMenuBar.FILE_MENU);
    
    var menuID = "yeohsoonkeat.htmlTemplate";
    
	CommandManager.register(menuLabel, menuID, newHTMLHandle);
	menu.addMenuItem(menuID, undefined, Menus.AFTER, Commands.FILE_NEW_UNTITLED);
    KeyBindingManager.addBinding(menuID, "Ctrl-H", "mac");
	KeyBindingManager.addBinding(menuID, "Ctrl-H", "win");
    
    var menuID1 = "yeohsoonkeat.phpTemplate";
    
    CommandManager.register(menuLabel, menuID1, newPHPHandle);
    menu.addMenuItem(menuID1, undefined, Menus.AFTER, Commands.FILE_NEW_UNTITLED);
    KeyBindingManager.addBinding(menuID1, "Ctrl-P", "mac");
	KeyBindingManager.addBinding(menuID1, "Ctrl-P", "win");
    
    var menuID2 = "yeohsoonkeat.vueTemplate";
    
    CommandManager.register(menuLabel, menuID2, newVueHandle);
    menu.addMenuItem(menuID2, undefined, Menus.AFTER, Commands.FILE_NEW_UNTITLED);
    KeyBindingManager.addBinding(menuID2, "Ctrl-Shift-V", "mac");
	KeyBindingManager.addBinding(menuID2, "Ctrl-Shift-V", "win");
    
    var menuID3 = "yeohsoonkeat.ajaxTemplate";
    
    CommandManager.register(menuLabel, menuID3, newAjaxHandle);
    menu.addMenuItem(menuID2, undefined, Menus.AFTER, Commands.FILE_NEW_UNTITLED);
    KeyBindingManager.addBinding(menuID3, "Ctrl-Shift-A", "mac");
	KeyBindingManager.addBinding(menuID3, "Ctrl-Shift-A", "win");
    
});