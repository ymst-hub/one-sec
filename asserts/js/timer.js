var start_date = ""


function count_start()
{
    start_date = new Date()
    start.style.display ="none";
    end.style.display ="block";
}

function count_stop()
{
    if(start_date != ""){//start_dateがセットされていないときは表示しない
        start.style.display ="block";
        end.style.display ="none";
        stop_date = new Date()
        const sec = Math.floor((stop_date - start_date) / 1000) / 10 //1秒当たりの差分を秒で表示
        const hour = 86400 / sec / 60 / 60 //secを1秒とした１日の時間
        start_date = "" //初期化

        if(sec > 0.2){
            //秒と時間をhtml側に表示
            document.getElementById("timer_result_sec").textContent = sec
            document.getElementById("timer_result_hour").textContent = hour.toFixed(1) //小数点第１位まで表示
        }else{
            alert("もう少しゆっくり数えてみましょう")
        }

    }else{
        alert("数え始めてください")
    }
    
    

}

