
/*WIĄZANIE PLIKÓW JS W JEDEN PLIK - WEBPACK*/
//zaczynam od zainstalowania webpacka, na komputerze, npm install webpack webpack-cli --save-dev
//tworzę na poziomie package.json webpack.config js. Rozpisuje module.exports
// entry: "./app/assets/scripts/App.js" - webpack weżmie ten plik pod uwagę 
//w package.json/scripts dodaje komendę "dev": "webpack", teraz mogę wpisać w terminalu npm run dev, domyślnie utworzy się folder dist/main.js, w którym znajduję się wiązane pliki, jeżeli nie chcę aby plik, w ktorym są wiązane pliki naz. się main.js wpisuję w output poniżej filename z nazwą pliku. Tak będzie się nazywał plik, gdzie znajdują się powiązanie pliki. Mogę również zmienić ścieżkę gdzie plik ma się znajdować -  path: path.resolve(__dirname, "app"). Teraz plik bundled.js będzie znajdować się w folderze głównym - app. Po tym jak zapisałam ustawienia w output usuwam plik dist razem z main.js. Teraz wiązany plik ma trafić do app.
//teraz muszę powiązać plik bundled.js z html. W index.html przed zakończeniem znacznika </body> wpisuje <script src = "bundled.js"></script> - bundled.js znajduje się na tym samym poziomie co index.html.

//mode: "development" - usuwa ostrzeżenie w npm po wywołaniu npm run dev - WARNING in configuration.
// watch: true - od tej chwili po każdej zmianie w App.js webpack będzie się odświeżał automatycznie/nie muszę wpisywać komendy - npm run dev. Jeżeli chcę zatrzymać watch klikam na terminalu ctr + c.

// nie muszę instalować path. Jest to część node.js.

/*AUTOMATYZACJA CSS*/
//instaluje css-loader style-loader - npm install css-loader style-loader --save-dev
//css będzie ładowane przez webpack, webpack ładuje tylko pliki js, dlatego muszę zapisać aby brał pod uwagę również pliki css. Rozpisuje obiekt module z rule jak niżej. Własciwość test - jeżeli napotkasz pliki css, użyj style-loader i css-loader.css-loader - jest odpowiedzialny za podłączenie i wązanie plików css, style-loader powoduje że efekt będzie zastosowany/ widoczny na stronie.
//w App.js podpinam pliki css - import "../styles/styles.css"
//ponieważ jest ustawione watch: true przy każdej zmiane w css, webpack będzie się odświeżał automatycznie.
/*INSTALOWANIE I ŁADOWANIE POSTCSS*/
//instaluje postcss-loader - npm install postcss-loader --save-dev,w module/rules/use niżej dodaje obiekt loader- {loader: "postcss-loader", options: {plugins: postCSSPlugins}}, postCSSPlugins to nazwa zmiennej, w której będą wszystkie funkcjonalności postCSS.
//ściągam wszystkie bibliotek postcss, których będę potrzebowć:
// npm install postcss-simple-vars postcss-nested autoprefixer --save-dev - zmienne, zagnieżdżone css, dodawanie prefixów
//npm install postcss-import --save-dev - import modułów css w pliky głównym, tutaj styles.css
//npm install postcss-mixins --save-dev - 
//i wpisuje je do obiektu postCSSPlugins 

/*AUTOMATYCZNE ODŚIWEŻANIE DANYCH (html, css, js) PO ICH ZAPISANIU. */
//zaczynam od zaistalowania webpack-dev-server - npm install webpack-dev-server --save-dev. 
//poniżej dodaje obiekt devServer. Jego właściwości: metoda before automatyczne odświeżanie plików html po zapisaniu zmian, contentBase - ścieżka do folderu, w którym znajduje się index.html, tutaj jest to app.hot: true - pozwoli na zaimplementowanie css i js do pamięci przeglądarki na żywo. port: 3000 - port pod, którym będzie wyświetlana strona. Adres pod którym wyświetli się strona - localhost:3000. host: "0.0.0.0" - pozwoli na wyświetlenie strony na urządzeniach, które są podłączone do tej samej sieci internetowej. Adres jaki muszę wpisać np. na telefonie jest to local IP. Aby go znależć w windows w terminalu wpisuje komendę ipconfig i szukam IPv4 Address. Pokazuje mi - 100.120.206.70. Na telefonie wpisuję: IPv4 Address:3000. Wpisuję na tel. ale jak pracuję na laptopie to strona nie wyświetla mi się na telefonie. Kasuję właściwość watch: true ponieważ teraz dev-server będzie obserwował zmiany. A TERAZ NAJLPESZE: JAK MAM WEBAPCK-DEV-SERVER NIE POTRZEBUJĘ PLIKU bundled. js ponieważ ten wiązanie dane zapisuję się gdzie w pamięci RAM komputera na nie na jego dysku, dzięki temu dane wszystko działa szybciej.Te wiązanie dane mogę zobaczyć wpisują adres w przeglądarce: http://localhost:3000/bundled.js.
//W package.json zmieniam komendę we właściwości dev z webpack na webpack-dev-server. Komenda zostaje ta sama npm run dev.
//w pliku głównym js - App.js zapisuje warunek if(module.hot){ module.hot.accept();} Jeżeli module.hot jest ustawione na true to wywołaj zmiany.

/*CODE SPLITING WITH WEBPACK*/
//stosuje się w sytuacji kiedy nie chcę aby cały plik js był od razu ściągnięty. Chodzi o perfomance, mam np. modal, którego kod js nie musi być od razu pobrany po załadowaniu się strony. Kod js ma być pobrany dopiero po kliknięciu na dany btn. W App.js rozpisuje:
/////////////////////////////////////////////////////////////////////////////////////
//let modalGallery
/* pobierz kod js dopiero po kliknięciu na dany thumbnail */

// document.querySelectorAll(".gallery__img").forEach(el => {
//     el.addEventListener("click", (e) => {   
//       if(typeof modalGallery == "undefined") {
            /*metoda import() zwraca promise stąd then() i catch(), x w then to dane, jakie zostaną pobrane z modułu, webpackChunkName - w ten sposób mogę zmienić nazwę pliku js, który jest pobierany z bundled.js na modal.bondled.js jak tutaj, aby ta nazwa była widoczna w zakładce pobieranych plików - network, muszę na nowo odświeżyć webpacka, npm run dev */
//         import(/*webpackChunkName: "modal"*/ "./modules/ModalGallery").then( x => {
                /*przypisuję globalnie do zmiennej nową instance klasy*/
//             modalGallery = new x.default()
                /*wywołuje funkcję open modal*/
//             setTimeout(() => modalGallery.openTheModal(e), 20)
//         }).catch(() => console.log('There was a problem with modal oppening'))
//       } else{
            /*jeżeli użytkownik otworzył modal i zamknął. Jeżeli otworzy go ponownie nie ściągaj danych na nowo ale otwórz te które są już w pamięci*/
//         modalGallery.openTheModal(e)
//       }
//     })
// })
// Jeżeli zapiszę zdarzenie w ten sposób nie będę go dłużej potrzebowała w samym modalGallery.js, usuwam zdarzenie z modułu, zostawiam tylko metodę, którą potrzebuję, tutaj modalGallery.openTheModal(e), modalGallery to nazwa zmiennej zapisana wyżej

const path = require("path");

const postCSSPlugins = [
    require("postcss-import"),
    require("postcss-mixins"),
    require("postcss-simple-vars"),
    require("postcss-nested"),
    require("autoprefixer")

]

module.exports = {
    entry: "./app/assets/scripts/App.js",
    output: {
        filename: "bundled.js",
        path: path.resolve(__dirname, "app")
    },
    devServer: {
        before: function(app, server){
            server._watch("./app/**/*.html");
        },
        contentBase: path.join(__dirname, 'app'),
        hot: true,
        port: 3000,
        host: "0.0.0.0"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader?url=false", {loader: "postcss-loader", options: {plugins: postCSSPlugins}}]
            }
        ]
    }
}