@echo off
echo Recherche du JDK...

if exist "C:\Program Files\Java\jdk-25" (
    set JAVA_HOME=C:\Program Files\Java\jdk-25
) else if exist "C:\Program Files\Java\jdk-21" (
    set JAVA_HOME=C:\Program Files\Java\jdk-21
) else if exist "C:\Program Files\Java\jdk-17" (
    set JAVA_HOME=C:\Program Files\Java\jdk-17
) else (
    echo Impossible de trouver le JDK. Veuillez executer: dir "C:\Program Files\Java" /b
    pause
    exit /b 1
)

echo JAVA_HOME defini sur: %JAVA_HOME%
echo.
echo Version Java:
"%JAVA_HOME%\bin\java" -version
echo.
echo Lancement du build Android...
npx expo run:android
