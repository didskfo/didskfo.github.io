let audio = new Audio()
        audio.src = 'SOLE - Slow.mp3'
        function check(url){
            var answer;
            answer = confirm("HOME으로 이동하시겠습니까?");
            if (answer == true){
                location = url;
            }
        }