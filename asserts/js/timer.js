var start_date

function count_start()
{
    start_date = new Date()
}

function count_stop()
{
    if(start_date != ""){//start_dateがセットされていないときは表示しない
        stop_date = new Date()
        const sec = Math.floor((stop_date - start_date) / 1000) / 10 //1秒当たりの差分を秒で表示
        const hour = 86400 / sec / 60 / 60 //secを1秒とした１日の時間
        //秒と時間をhtml側に表示
        document.getElementById("timer_result_sec").textContent = sec
        document.getElementById("timer_result_hour").textContent = hour
    }
    
    

}

