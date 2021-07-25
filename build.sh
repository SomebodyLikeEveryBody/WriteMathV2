tsc -t ES5 --outFile ./build/index.js \
    ./KeyCodesEnum.ts \
    ./Coordinates2DInterface.ts \
    ./KeywordObjectInterface.ts \
    ./JQueryElementInterface.ts \
    ./InputTextElementInterface.ts \
    ./KeywordObjectInterface.ts \
    ./LatexAutoCompleter/LatexAutoCompleterKeywords.ts \
    ./MathLineInputClass.ts \
    ./UndoRedoManager/UndoRedoManagerClass.ts \
    ./LatexAutoCompleter/AutoCompleterClass.ts \
    ./main.ts \


cp ./index.html ./build/
cp ./style.css ./build/
cp -R ./mathQuill/ ./build/
cp -R ./jQuery/ ./build/
cp ./LatexAutoCompleter/autoCompleter.css ./build/
