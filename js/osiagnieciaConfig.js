// Osiągnięcia timeline configuration
// Events are spaced evenly to show sequence, not proportional to time
const timelineEvents = [
    {
        year: "1985",
        description: "Otwarty Ogólnopolski Konkurs na projekt medalu poświęconego pamięci Henryka Bieniawskiego - Wyróżnienie pierwszego stopnia, Pracownie Sztuk Plastycznych oddział w Warszawie"
    },
    {
        year: "1986",
        description: '“Konfrontacje najmłodszych artystów krakowskich - Myślenice” - I nagroda w dziedzinie Rzeźby, Miejski Dom Kultury w Myślenicach'
    },
    {
        year: "1986",
        description: 'Wystawa Zbiorowa, “I Triennale Rzeźby Portretowej Gdańsk 1986”, Sopot'
    },
    {
        year: "1987",
        description: 'Wystawa Zbiorowa, “Tendencje i Twórcy”, III Ogólnopolska Wystawa Medalierska, Galeria Sztuki Współczesnej BWA, Toruń'
    },
    {
        year: "1988",
        description: "Projekt medalu o tematyce Krakowskiej - I nagroda, konkurs organizowany przez Związek Artystów Rzeźbiarzy, Oddział Kraków"
    },
    {
        year: "1989",
        description: '“Pamiątka z Krakowa” - wyróżnienie w konkursie organizowany przez Urząd Miasta, Kraków'
    },
    {
        year: "1995",
        description: '“Salon Rzeźby” - Złoty Medal nagroda w dziedzinie medalierstwa, Warszawa'
    },
    {
        year: "1995",
        description: 'Wystawa Indywidualna, galeria “Grotta Nobile”, Kraków'
    },
    {
        year: "1996",
        description: '“Tysiąc Lat Miasta Gdańska” - I nagroda, Ogólnopolski konkurs na medal upamiętniający 1000-lecie Miasta Gdańska, Gdańsk'
    },
    {
        year: "1996",
        description: '“Salon Rzeźby” - Wiosna 96 - Złoty Medal nagroda w dziedzinie medalierstwa, Warszawa'
    },
    {
        year: "1997",
        description: '“Salon Rzeźby” - Wiosna 97 - Srebrny Medal nagroda w dziedzinie medalierstwa, Warszawa'
    },
    {
        year: "1997",
        description: 'Honorowy konkurs na medal ”Zasłużonym” - Il miejsce, zorganizowany przez fundację “Cor Aegrum”, Kraków'
    },
    {
        year: "1997",
        description: "Uzyskanie stopnia Doktora Sztuki, nadanego przez Akademię Sztuk Pięknych im. Jana Matejki w Krakowie"
    },
    {
        year: "1998",
        description: '“XIII Międzynarodowe Biennale Dantego” - nagroda reprezentacyjna “Medaglia Del Presidente Della Camera Dei Deputati”, Rawenna'
    },
    {
        year: "1998",
        description: "Konkurs na projekt pomnika poświęconego ofiarom stalinizmu - wyróżnienie, Tarnów (współpraca arch. Zbigniew Wikłacz)"
    },
    {
        year: "1999",
        description: 'Konkurs na pomnik “Krzyż Zawierzenia” - nagroda równorzędna, Przemyśl (współpraca art. rzeźbiarz Agnieszka Bandura-Wąsacz)'
    },
    {
        year: "1999",
        description: 'Wystawa Zbiorowa, “Artyści Polski Południowo-Wschodniej”, Rzeszów'
    },
    {
        year: "2000",
        description: 'Wystawa Indywidualna, galeria “Grotta Nobile”, Kraków'
    },
    {
        year: "2000",
        description: 'Wystawa Zbiorowa, “Przekroczyć Próg Nadziei”, Miejska Galeria Sztuki “MM”, Chorzów'
    },
    {
        year: "2001",
        description: 'Wystawa Zbiorowa, “Hands across the sea. Ręce przez ocean”, American Numismatic Money Museum, Colorado Springs'
    },
    {
        year: "2001",
        description: 'Wystawa Zbiorowa, “Przekroczyć Próg Nadziei”, Muzeum Archidiecezjalne, Katowice'
    },
    {
        year: "2002",
        description: 'Wystawa Zbiorowa, “Hands across the sea. Ręce przez ocean”, The HUB-Robeson Galleries w Pensylwanii (USA)'
    },
    {
        year: "2002",
        description: 'Wystawa Indywidualna, “Małe formy w brązie”, Miejski Ośrodek Kultury, Jarosław'
    },
    {
        year: "2002",
        description: 'Wystawa Zbiorowa, “Współczesne Medalierstwo Polskie”, Namur, Belgia'
    },
    {
        year: "2002",
        description: 'Międzynarodowa Wystawa Zbiorowa, “Fidem XXVIII”, International Art Medal Federation, Paryż'
    },
    {
        year: "2003",
        description: 'Wystawa Zbiorowa, “FIDEM 2002. Paryż. Medale polskie”, Muzeum Sztuki Medalierskiej we Wrocławiu'
    },
    {
        year: "2003",
        description: 'Międzynarodowa Wystawa Zbiorowa, “In Erz Gegossen”, Museum Breisach am Rhein, Niemcy'
    },
    {
        year: "2003",
        description: 'Międzynarodowa Wystawa Zbiorowa, “Dante Europeo. XIV Biennale Internazionale Dantesca”, Centro Dantesco dei Frati minori conventuali, Ravenna'
    },
    {
        year: "2005",
        description: 'Wystawa Zbiorowa, “40 lat Muzeum Sztuki Medalierskiej 1965 - 2005”, Muzeum Sztuki Medalierskiej we Wrocławiu'
    },
    {
        year: "2007",
        description: 'Międzynarodowa Wystawa Zbiorowa, “Fidem XXX”, International Art Medal Federation, Colorado Springs'
    },
    {
        year: "2007",
        description: "Uzyskanie stopnia Doktora Habilitowanego Sztuki, nadanego przez Akademię Sztuk Pięknych im. Jana Matejki w Krakowie"
    },
    {
        year: "2008",
        description: 'Międzynarodowa Wystawa Zbiorowa, “5th International Biennial of Contemporary Medals Seixal 2008”, Portugalia'
    },
    {
        year: "2008",
        description: 'Wystawa Zbiorowa, “X Krakowskie Triennale Rzeźby Religijnej”, Pałac Sztuki, Kraków'
    },
    {
        year: "2010",
        description: 'Międzynarodowa Wystawa Zbiorowa, “6th International Biennial of Contemporary Medals Seixal 2010”, Portugalia'
    },
    {
        year: "2010",
        description: 'Międzynarodowa Wystawa Zbiorowa, “Fidem XXXI”, International Art Medal Federation, Tampere Finland'
    },
    {
        year: "2012",
        description: 'Wystawa Zbiorowa, “Przestrzeń światło kolor”, Galeria Politechniki Krakowskiej “Kotłownia”, Kraków'
    },
    {
        year: "2012",
        description: 'Wystawa Indywidualna, “Mementa”, Galeria Politechniki Krakowskiej “Kotłownia”, Kraków'
    },
    {
        year: "2012",
        description: '“Sport i olimpijskie wartości: doskonałość, przyjaźń i szacunek” - II miejsce, Międzynarodowy Konkurs Sport i Sztuka 2012, Warszawa'
    },
    {
        year: "2012",
        description: '“Sport w Sztuce” - wyróżnienie, Polski Komitet Olimpijski, Warszawa'
    },
    {
        year: "2013",
        description: 'Wystawa Indywidualna, “Figury Przydrożne”, Wydział Architektury PK, Kraków'
    },
    {
        year: "2013",
        description: 'Wystawa Indywidualna, “Figury Przydrożne”, Galeria Sztuki Grodzka, Kraków'
    },
    {
        year: "2014",
        description: 'Wystawa Indywidualna, “Mementa”, Wydział Architektury PK, Kraków'
    },
    {
        year: "2014",
        description: 'Wystawa Zbiorowa, “Mój Jan Paweł II”, Zamek Królewski, Warszawa'
    },
    {
        year: "2014",
        description: 'XII Międzynarodowy Plener Artystyczny, “Wiklina w Arboretum”, Arboretum i Zakład Fizjografii, Bolestraszyce'
    },
    {
        year: "2014",
        description: 'Wystawa Indywidualna, “Medytacje”, Galeria u Piotra, Arboretum i Zakład Fizjografii, Bolestraszyce'
    },
    {
        year: "2015",
        description: 'Wystawa Zbiorowa, Salon Jubileuszowy Politechniki Krakowskiej, Galeria Politechniki Krakowskiej “Kotłownia”, Kraków'
    },
    {
        year: "2015",
        description: 'Wystawa Zbiorowa, “Wobec Świętości. Medalierzy polscy w roku kanonizacji Jana Pawła II”, Muzeum Miedzi w Legnicy'
    },
    {
        year: "2015",
        description: 'Wystawa Zbiorowa, “Wobec Świętości. Medalierzy polscy w roku kanonizacji Jana Pawła II”, Biblioteka Uniwersytetu Jana Pawła II w Krakowie'
    },
    {
        year: "2015",
        description: 'Wystawa Zbiorowa, “Budowanie mostów w muzyce”, wnętrze kościoła św. Katarzyny Aleksandryjskiej, Kraków'
    },
    {
        year: "2015",
        description: 'Wystawa Zbiorowa, “Znad Dunaju, Wełtawy i Wisły. Medalierzy i ich dzieła”, Muzeum Miejskie Wrocławia'
    },
    {
        year: "2015",
        description: 'Wystawa Zbiorowa, “Znad Dunaju, Wełtawy i Wisły. Medalierzy i ich dzieła”, Muzeum Monet i Medali, Kremnica, Słowacja'
    },
    {
        year: "2016",
        description: 'Wystawa Zbiorowa, “Znad Dunaju, Wełtawy i Wisły. Medalierzy i ich dzieła”, Galeria Węgierskiego Związku Artystów Plastyków, Budapeszt'
    },
    {
        year: "2016",
        description: 'Wystawa Zbiorowa, “Wobec Świętości. Medalierzy polscy w roku kanonizacji Jana Pawła II”, Muzeum Powiatowe w Nysie'
    },
    {
        year: "2016",
        description: 'Wystawa Zbiorowa, “Być razem. Medalierskie rozmowy z Janem Pawłem II”, Panteon Narodowy, podziemia kościoła pw. Świętych Apostołów Piotra i Pawła, Kraków'
    },
    {
        year: "2017",
        description: 'Międzynarodowa Wystawa Zbiorowa, “Polskie Medalierstwo 2001-2017”, Muzeum Monet i Medali Jana Pawła II w Częstochowie'
    },
    {
        year: "2017",
        description: 'Wystawa Indywidualna, “Józef Wąsacz. Rzeźba”, Biuro Wystaw Artystycznych, Rzeszów'
    },
    {
        year: "2017",
        description: 'Wystawa Zbiorowa, “Być razem. Rozmowy z Janem Pawłem II”, Dworzec kolejowy, Legnica'
    },
    {
        year: "2017",
        description: 'Wystawa Zbiorowa, “Być razem. Rozmowy z Janem Pawłem II”, Sanktuarium Matki Bożej Łaskawej, Krzeszów'
    },
    {
        year: "2017",
        description: 'XV Międzynarodowy Plener Artystyczny, “Wiklina w Arboretum”, Arboretum i Zakład Fizjografii, Bolestraszyce'
    },
    {
        year: "2017",
        description: 'Wystawa Zbiorowa, “Życie zadane”, Muzeum Monet i Medali Jana Pawła II w Częstochowie'
    },
    {
        year: "2018",
        description: 'XVI Międzynarodowy Plener Artystyczny, “Wiklina w Arboretum”, Arboretum i Zakład Fizjografii, Bolestraszyce'
    },
    {
        year: "2019",
        description: 'XVII Międzynarodowy Plener Artystyczny, “Wiklina w Arboretum”, Arboretum i Zakład Fizjografii, Bolestraszyce'
    },
    {
        year: "2022",
        description: 'XIX Międzynarodowy Plener Artystyczny, “Wiklina w Arboretum”, Arboretum i Zakład Fizjografii, Bolestraszyce'
    },
    {
        year: "2023",
        description: 'Wystawa Indywidualna, “Projekcje. Pastele małe formy rzeźbiarskie”, Galeria Politechniki Krakowskiej GIL'
    },
    {
        year: "2023",
        description: 'Wystawa Indywidualna, “Projekcje”, Biuro Wystaw Artystycznych, Kielce'
    },
    {
        year: "2024",
        description: 'XXI Międzynarodowy Plener Artystyczny, “Wiklina w Arboretum”, Arboretum i Zakład Fizjografii, Bolestraszyce'
    },
    {
        year: "2025",
        description: 'Wystawa Zbiorowa, “Krakowskie Spotkania Artystyczne 2025. Tożsamość idei.”, Kraków'
    },
    {
        year: "2025",
        description: 'Międzynarodowa Wystawa Zbiorowa, “Polskie Medalierstwo 2018-2024”, Pałac Czapskich, Muzeum Narodowe w Krakowie'
    },
    {
        year: "2025",
        description: 'XXII Międzynarodowy Plener Artystyczny, “Wiklina w Arboretum”, Arboretum i Zakład Fizjografii, Bolestraszyce'
    },
    {
        year: "2026",
        description: 'II Międzynarodowy Plener Wikliny Artystycznej w Rudniku nad Sanem'
    },
    {
        year: "2026",
        description: 'XXIII Międzynarodowy Plener Artystyczny, “Wiklina w Arboretum”, Arboretum i Zakład Fizjografii, Bolestraszyce'
    }
];