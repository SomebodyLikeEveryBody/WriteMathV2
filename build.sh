tsc -t ES5 --outFile ./build/index.js \
    ./Enum_KeyCodes.ts \
    ./Interface_Coordinates2D.ts \
    ./Interface_KeywordObject.ts \
    ./Interface_JQueryElement.ts \
    ./Interface_InputTextElement.ts \
    ./Interface_KeywordObject.ts \
    ./Module_AutoCompleter/Class_AutoCompleterKeywordsList.ts \
    ./Class_MathLineInput.ts \
    ./Module_UndoRedoManager/Class_UndoRedoManager.ts \
    ./Module_AutoCompleter/Class_AutoCompleter.ts \
    ./main.ts \


cp ./htmlResources/index.html ./build/
cp ./htmlResources/style.css ./build/
cp -R ./Module_MathQuill/ ./build/
cp -R ./Module_jQuery/ ./build/
cp ./Module_AutoCompleter/AutoCompleterStyle.css ./build/
