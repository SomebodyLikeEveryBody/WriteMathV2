tsc -t ES5 --outFile ./build/WriteMath.js \
    ./Enum_KeyCodes.ts \
    ./Interface_Coordinates2D.ts \
    ./Interface_Offset.ts \
    ./Interface_KeywordObject.ts \
    ./Interface_JQueryElement.ts \
    ./Interface_InputTextElement.ts \
    ./Interface_KeywordObject.ts \
    ./Interface_MathFieldTreeElement.ts \
    ./Interface_HistoryStatement.ts \
    ./Interface_CursorConfiguration.ts \
    ./Interface_EventObject.ts \
    ./Module_AutoCompleter/Class_AutoCompleterKeywordsList.ts \
    ./Class_MathLineInput.ts \
    ./Module_UndoRedoManager/Class_UndoRedoManager.ts \
    ./Module_ShortcutsManager/Class_ShortcutsManager.ts \
    ./Module_AutoCompleter/Class_AutoCompleter.ts \
    ./Module_SaverNOpenerStateManager/Class_SaverNOpenerStateManager.ts \
    ./main.ts \


cp ./htmlResources/WriteMathStyle.css ./build/
cp ./Module_AutoCompleter/AutoCompleterStyle.css ./build/
cp -R ./Module_MathQuill/ ./build/
cp -R ./Module_jQuery/ ./build/
