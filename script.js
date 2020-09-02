document.addEventListener("DOMContentLoaded", function(event) {
    // DOM is loaded and ready
    document.getElementById("startTimer").onclick = function() {
        var d = Number(document.getElementById('daysInput').value);
        var h = Number(document.getElementById('hoursInput').value);
        var m = Number(document.getElementById('minsInput').value);
        var s = Number(document.getElementById('secsInput').value);
        document.getElementById('daysInput').value = "";
        document.getElementById('hoursInput').value = "";
        document.getElementById('minsInput').value = "";
        document.getElementById('secsInput').value = "";
        var upgradeTime = d * 24 * 60 * 60 + h * 60 * 60 + m * 60 + s;
        var seconds = upgradeTime;

        function timer() {
            var days = Math.floor(seconds / 24 / 60 / 60);
            var hoursLeft = Math.floor((seconds) - (days * 86400));
            var hours = Math.floor(hoursLeft / 3600);
            var minutesLeft = Math.floor((hoursLeft) - (hours * 3600));
            var minutes = Math.floor(minutesLeft / 60);
            var remainingSeconds = seconds % 60;

            function pad(n) {
                return (n < 10 ? "0" + n : n);
            }
            //document.getElementById('countdown').innerHTML = pad(days) + ":" + pad(hours) + ":" + pad(minutes) + ":" + pad(remainingSeconds);
            document.getElementById('days').innerHTML = pad(days);
            document.getElementById('hours').innerHTML = pad(hours);
            document.getElementById('minutes').innerHTML = pad(minutes);
            document.getElementById('seconds').innerHTML = pad(remainingSeconds);
            if (seconds == 0) {
                clearInterval(countdownTimer);
                //document.getElementById('countdown').innerHTML = "Completed";
            } else {
                seconds--;
            }
        }
        window.countdownTimer = setInterval(timer, 1000);
    };

    document.getElementById("stopTimer").onclick = function() {
        stopTimer();
    };

    function stopTimer() {
        clearInterval(countdownTimer);
        document.getElementById('days').innerHTML = "0";
        document.getElementById('hours').innerHTML = "0";
        document.getElementById('minutes').innerHTML = "0";
        document.getElementById('seconds').innerHTML = "0";
    }


});