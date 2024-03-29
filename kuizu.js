var pos = 0; //tracks where the user is in the quiz
            var a, b, c, d = 0; //question options for answers
            var correct = 0;
            var test, question, userChoice, optionA, optionB, optionC, optionD; 
            var quiz = document.getElementById("questions");
            var results = document.getElementById("results");
            var questionSet = [
                { //number 1
                    question: "Let's start off with a simple one: How do you read this character? あ",
                    a: "Hiragana A",
                    b: "Ka",
                    c: "Katakana A",
                    d: "Na",
                    answer: "Hiragana A",
                },
                { //number 2
                    question: "How do you say 'good morning'?",
                    a: "おはようございます",
                    b: "こんにちは",
                    c: "おやすみなさい",
                    d: "こんばんは",
                    answer: "おはようございます",
                },
                { //number 3
                    question: "How should 'koohii' (coffee) be written?",
                    a: "コオヒオ",
                    b: "こーひー",
                    c: "コーヒー",
                    d: "こおひい",
                    answer: "コーヒー",
                },
                { //number 4
                    question: "Which of the following means 'school'?",
                    a: "おんがく",
                    b: "がっこう",
                    c: "うち",
                    d: "レストラン",
                    answer: "がっこう",
                },
                { //number 5
                    question: "Choose the word that most properly fits this sentence: 「たなかさんは <u>&emsp;&emsp;</u>です。」",
                    a: "トラック",
                    b: "せんせい",
                    c: "えんぴつ",
                    d: "て",
                    answer: "せんせい",
                },
                { //number 6
                    question: "Pick the set of numbers that are in the correct order.",
                    a: "じゅう、なな、さん",
                    b: "に、よん、ろく",
                    c: "なな、きゅう、いち",
                    d: "ご、ろく、なな",
                    answer: "ご、ろく、なな",
                },
                { //number 7
                    question: "How do you read this character? ツ",
                    a: "Tsu",
                    b: "Shi",
                    c: "N",
                    d: "So",
                    answer: "Tsu",
                },
                { //number 8
                    question: "Complete this sentence: 「これは <u>&emsp;&emsp;</u>ですか。」",
                    a: "はなします",
                    b: "ここ",
                    c: "なん",
                    d: "どんな",
                    answer: "なん",
                },
                { //number 9
                    question: "Which one of these does <u>not</u> refer to a person?",
                    a: "おかあさん",
                    b: "わたし",
                    c: "ほん",
                    d: "せんせい",
                    answer: "ほん",
                },
                { //question 10
                    question: "Choose the correct particle for the following sentence: 「わたし <u>&emsp;&emsp;</u>なまえはJulieです。」",
                    a: "で",
                    b: "は",
                    c: "か",
                    d: "の",
                    answer: "の",
                },
                { //question 11
                    question: "How would you write 'na' in hiragana?",
                    a: "な",
                    b: "さ",
                    c: "た",
                    d: "は",
                    answer: "な",
                },
                { //question 12
                    question: "Which of the following means 'to eat'?",
                    a: "はなします",
                    b: "あるきます",
                    c: "のみます",
                    d: "たべます",
                    answer: "たべます",
                },
                { //question 13
                    question: "Which of the following characters is 'sa' in hiragana?",
                    a: "き",
                    b: "ひ",
                    c: "ら",
                    d: "さ",
                    answer: "さ",
                },
                { //question 14
                    question: "Which word would you use to describe hot weather?",
                    a: "あつい",
                    b: "さむい",
                    c: "すずしい",
                    d: "あたたかい",
                    answer: "あつい",
                },
                { //question 15
                    question: "How do you say 'friend'?",
                    a: "あなた",
                    b: "ともだち",
                    c: "おかあさん",
                    d: "わたしたち",
                    answer: "ともだち",
                },
                { //question 16
                    question: "Which of the following verbs means 'to wait'?",
                    a: "もちます",
                    b: "もどります",
                    c: "まきます",
                    d: "まちます",
                    answer: "まちます",
                },
                { //question 17
                    question: "Choose the word that best completes the sentence: 「にほんごを <u>&emsp;&emsp;</u>か。」",
                    a: "いきます",
                    b: "はなします",
                    c: "きます",
                    d: "はしります",
                    answer: "はなします",
                },
                { //question 18
                    question: "Translate the following: 「わたしはいぬがすきです。」'?",
                    a: "I like dogs.",
                    b: "I like cats.",
                    c: "I like anime.",
                    d: "I like anime.",
                    answer: "I like dogs.",
                },
                { //question 19
                    question: "Bonus question #1! Which kanji would comple the word 「でぐち」(exit)? 出<u>&emsp;&emsp;</u>",
                    a: "口",
                    b: "目",
                    c: "手",
                    d: "耳",
                    answer: "口",
                },
                {//question 20
                question: "Bonus question #2! What does this kanji mean? 人",
                    a: "Tree",
                    b: "Person",
                    c: "Enter",
                    d: "Big",
                    answer: "Person"
                }
            ];
            var ansRecord = []; //keep track of the correct/incorrect answers
            ansRecord.length = questionSet.length;

            function instructionView(){ //toggle view of instructions and the quiz itself
                var intro = document.getElementById("firstPage");
                var instructions = document.getElementById("steps");
                var start = document.getElementById("begin");

                if(intro.style.display === "none"){ //if the instructions aren't showing, display them and hide the quiz/results
                    intro.style.display = "block";
                    instructions.style.display = "block";
                    start.style.display = "block";
                    quiz.style.display = "none";
                    results.style.display = "none";

                }else { //else, show the quiz and hide everything else
                    intro.style.display = "none";
                    instructions.style.display = "none";
                    start.style.display = "none";
                    quiz.style.display = "block";
                }
            }

            function questionCreation(){
                var prevButton = document.getElementById("previousButton");

                if(pos >= questionSet.length){
                    showResults();
                    pos = 0; //reset for quiz reset
                    correct = 0;
                }

                question = questionSet[pos].question;
                optionA = questionSet[pos].a;
                optionB = questionSet[pos].b;
                optionC = questionSet[pos].c;
                optionD = questionSet[pos].d;

                quiz.innerHTML = "<b style='font-size: 2em;'>" + "Question " + (pos + 1) + "/" + questionSet.length + ": </b><br>";
                quiz.innerHTML += "<b style='font-size: 1.50em;'>" +  question + "</b><br><br><br><br>";
                quiz.innerHTML += "<input type='button' class='options' name='a' value='" + optionA + "' onclick='addPoints(this)'>";
                quiz.innerHTML += "<input type='button' class='options' name='b' value='" + optionB + "' onclick='addPoints(this)'>";
                quiz.innerHTML += "<input type='button' class='options' name='c' value='" + optionC + "' onclick='addPoints(this)'>";
                quiz.innerHTML += "<input type='button' class='options' name='d' value='" + optionD + "' onclick='addPoints(this)'><br>";

                if(pos > 0){ //prevent previous button from showing on first question
                    quiz.innerHTML += "<button class='prev' id='previousButton' onclick='goBack()'>Previous Question</button><br>"; 
                }

                quiz.innerHTML += "<button id='begin' onclick='endQuiz()'>End the Quiz</button>";
                
            }   
            
            function goBack(){ //take the user to the previous question
                pos--;
                questionCreation();

                if(ansRecord[pos] == "O"){
                    correct--;
                     /*if the user goes back to a question and that question was correct, 
                    subtract 1 from correct answer total in case they change their answer to the incorrect one*/
                }
            }
            
            function endQuiz() { //allow the user to end immediately and view results
                pos = questionSet.length; //trigger first if statement in questionCreation
                questionCreation();
            }

            function addPoints(x){ //check which option the user chose and use to calculate their result
                var buttonClicked = x.value;
            
                if(buttonClicked == questionSet[pos].answer){
                    ansRecord[pos] = "O"; //o for correct
                    correct++;
                } else {
                    ansRecord[pos] = "X"; //x for incorrect
                }
                
                pos++; //take the user to the next question
                questionCreation();
            }

            function showResults() { 
                results.style.display = "block";
                quiz.style.display = "none";
                results.innerHTML = "<b style='font-size: 2em;'>Results:</b><br><br>";
                results.innerHTML += "You got " + correct + " out of " + questionSet.length + " questions correct! "; 
                results.innerHTML += "<img src='pexels-ryutaro-tsukata-6249256.jpg'>";
                results.innerHTML += "Would you like to take the quiz again?<br><br>";                
                results.innerHTML += "<button class='begin' id='retry' onclick='instructionView()'>Try Again</button><br><br>";
                results.innerHTML += "Looking for resources? Here are a few that may be of interest:<br><br>"; 
                results.innerHTML += "<u>Apps & Websites:</u><br>"; 
                results.innerHTML += "<a href='https://www.duolingo.com/'>Duolingo</a><br>" +
                                     "<a href='https://play.google.com/store/apps/details?id=jp.ac.tsukuba.tkbkanji&hl=en_US&gl=US'>Basic Kanji Plus</a><br>" +
                                     "<a href='https://www.memrise.com/'>Memrise</a><br>" +
                                     "<a href='https://apps.ankiweb.net/'>Anki</a><br>" +
                                     "<a href='https://www3.nhk.or.jp/nhkworld/en/learnjapanese/'>NHK World</a><br><br>"; 
                results.innerHTML += "<u>Books:</u><br>"; 
                results.innerHTML += "<a href='https://tinyurl.com/yrwhampw'>A Dictionary of Basic Japanese Grammar</a><br>" +
                                     "<a href='https://tinyurl.com/2ar3zw4n'>Genki Series</a><br>" +
                                     "<a href='https://tinyurl.com/2p8fwpvm'>Basic Kanji Book</a><br>" +
                                     "<a href='https://tinyurl.com/unp96eck'>Kanji de Manga</a><br><br>";
                results.innerHTML += "<u>YouTube Channels:</u><br>"; 
                results.innerHTML += "<a href='https://www.youtube.com/channel/UC0ujXryUUwILURRKt9Eh7Nw'>Sambon Juku</a><br>" +
                                     "<a href='https://www.youtube.com/c/ThatJapaneseManYuta'>That Japanese Man Yuta</a><br>" +
                                     "<a href='https://www.youtube.com/user/Dogen/featured'>Dogen</a><br>" +
                                     "<a href='https://www.youtube.com/c/MrYabatan'>Mr Yabatan</a><br>" +
                                     "<a href='https://www.youtube.com/c/kemushichan'>Kemushichan</a><br><br>";
                results.innerHTML += "*<i>I do not have any affiliation with the above resources.</i>"
            }
            
            window.addEventListener("load", questionCreation);