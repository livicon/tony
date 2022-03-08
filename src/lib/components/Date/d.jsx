import {useState, React} from "react";
import jsonDate from "./data.json"
import holidays from "./holidays.json"

function gregorian_to_jalali(gy, gm, gd) {
    var g_d_m, jy, jm, jd, gy2, days;
    g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    gy2 = gm > 2 ? gy + 1 : gy;
    days =
        355666 +
        365 * gy +
        ~~((gy2 + 3) / 4) -
        ~~((gy2 + 99) / 100) +
        ~~((gy2 + 399) / 400) +
        gd +
        g_d_m[gm - 1];
    jy = -1595 + 33 * ~~(days / 12053);
    days %= 12053;
    jy += 4 * ~~(days / 1461);
    days %= 1461;
    if (days > 365) {
        jy += ~~((days - 1) / 365);
        days = (days - 1) % 365;
    }
    if (days < 186) {
        jm = 1 + ~~(days / 31);
        jd = 1 + (days % 31);
    } else {
        jm = 7 + ~~((days - 186) / 30);
        jd = 1 + ((days - 186) % 30);
    }
    return [jy, jm, jd];
}
function jalali_to_gregorian(jy, jm, jd) {
    var sal_a, gy, gm, gd, days;
    jy += 1595;
    days =
        -355668 +
        365 * jy +
        ~~(jy / 33) * 8 +
        ~~(((jy % 33) + 3) / 4) +
        jd +
        (jm < 7 ? (jm - 1) * 31 : (jm - 7) * 30 + 186);
    gy = 400 * ~~(days / 146097);
    days %= 146097;
    if (days > 36524) {
        gy += 100 * ~~(--days / 36524);
        days %= 36524;
        if (days >= 365) days++;
    }
    gy += 4 * ~~(days / 1461);
    days %= 1461;
    if (days > 365) {
        gy += ~~((days - 1) / 365);
        days = (days - 1) % 365;
    }
    gd = days + 1;
    sal_a = [
        0,
        31,
        (gy % 4 === 0 && gy % 100 !== 0) || gy % 400 === 0 ? 29 : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ];
    for (gm = 0; gm < 13 && gd > sal_a[gm]; gm++) gd -= sal_a[gm];
    return [gy, gm, gd];
}
const dabel = (e) => {
    if (
        e == 0 ||
        e == 1 ||
        e == 2 ||
        e == 3 ||
        e == 4 ||
        e == 5 ||
        e == 6 ||
        e == 7 ||
        e == 8 ||
        e == 9
    ) {
        return "0" + e;
    } else {
        return e;
    }
};
const day = (e) => {
    return gregorian_to_jalali(e.year, e.month, e.day)[2];
};
const month = (e) => {
    return gregorian_to_jalali(e.year, e.month, e.day)[1] + 1;
};
const year = (e) => {
    return gregorian_to_jalali(e.year, e.month, e.day)[0];
};
const tojalali = (e) => {
    return dabel(year(e)) + "-" + dabel(month(e)) + "-" + dabel(day(e));
};
const minimom = (e) => {
    let arr = [];
    e.forEach((item) => {
        arr.push(item.price);
    });
    // 1
    //
    return Math.min.apply(Math, arr);
};
const maximom = (e) => {
    let arr = [];
    e.forEach((item) => {
        arr.push(item.price);
    });
    // 1
    //
    return Math.max.apply(Math, arr);
};
const monthChecker = (e) => {
    switch (e) {
        case 1:
            return "فروردین";
        case 2:
            return "اردیبهشت";

        case 3:
            return "خرداد";

        case 4:
            return "تیر";

        case 5:
            return "مرداد";

        case 6:
            return "شهریور";

        case 7:
            return "مهر";

        case 8:
            return "آبان";

        case 9:
            return "اذر";

        case 10:
            return "دی";

        case 11:
            return "بهمن";

        case 12:
            return "اسفند";
    }
};
const MmonthChecker = (e) => {
    switch (e) {
        case 1:
            return "January";
        case 2:
            return "February";

        case 3:
            return "March";

        case 4:
            return "April";

        case 5:
            return "May";

        case 6:
            return "June";

        case 7:
            return "July";

        case 8:
            return "August";

        case 9:
            return "September";

        case 10:
            return "October";

        case 11:
            return "November";

        case 12:
            return "December";
    }
};
const jalali_date = (e) => {
    switch (e) {
        case 1:
            return 2;
        case 2:
            return 3;
        case 3:
            return 4;
        case 4:
            return 5;
        case 5:
            return 6;
        case 6:
            return 7;
        case 7:
            return 1;
    }
};
const monthLong = (a, b) => {

    if (a <= 12 && b <= 12) {
        if (a < b) {
            return b - a;
        } else {
            return a + (12 - b);
        }
    }
};
const Calender = ({data, cc,port, changeMain}) => {
    let [yearC, setYearC] = useState(0);
    let m = new Date();
    m.setMonth(m.getMonth() + yearC);
    let main = {
        year: m.getFullYear(),
        month: m.getMonth() + 1,
        day: m.getDate()
    };
    let years = year(main);
    let months = month(main) - 1;

    const yearCChange = (e) => {
        setYearC(e);
    };
    const yearNext = () => {
        m.setMonth(m.getMonth() + 2);
        yearCChange(yearC + 2);
    };
    const yearPrev = () => {
        m.setMonth(m.getMonth() - 2);
        yearCChange(yearC - 2);
    };

    const Colect = ({year, month, price ,port}) => {

        month = (month == 12) ? 0 : month
        let time = new Date()
        time.setFullYear(year)
        time.setMonth(month)
        let timeCh = new Date(time.getTime())

        let meta = {
            year: time.getFullYear(),
            month: time.getMonth() + 1,
            day: time.getDate()
        };
        let teta = {
            year: timeCh.getFullYear(),
            month: timeCh.getMonth() + 1,
            day: timeCh.getDate()
        };

        let tiny = false
        let months = []
        let i = 0
        timeCh.setDate((timeCh.getDate()-gregorian_to_jalali(timeCh.getFullYear(),timeCh.getMonth(),timeCh.getDate())[2])+1)
        time.setDate((time.getDate()-gregorian_to_jalali(time.getFullYear(),time.getMonth(),time.getDate())[2])+1)

        console.log(time)
        console.log(timeCh)
        console.log(gregorian_to_jalali(timeCh.getFullYear(),timeCh.getMonth(),timeCh.getDate())[1]+"  "+gregorian_to_jalali(timeCh.getFullYear(),timeCh.getMonth(),timeCh.getDate())[2])
        console.log(gregorian_to_jalali(time.getFullYear(),(time.getMonth()+1)%12+1,time.getDate())[1])
        while (gregorian_to_jalali(timeCh.getFullYear(),timeCh.getMonth(),timeCh.getDate())[1]==false) {
            console.log(gregorian_to_jalali(timeCh.getFullYear(),timeCh.getMonth(),timeCh.getDate())[2]+"  "+gregorian_to_jalali(timeCh.getFullYear(),timeCh.getMonth(),timeCh.getDate())[2])

            if (tiny == false) {
                let s = timeCh.getDay()
                if (timeCh.getMonth() == 11) {
                    s = (s + 1);
                }
                let m = (s - timeCh.getDate())

                for (let k = 0; k < m; k++) {
                    i++
                    months.push(
                        <div className="calendar-day-item">
                            <span> </span>
                        </div>
                    )
                }
                tiny = true
            }
            let mmp = 0
            price.find((price) => {
                if (price.year == timeCh.getFullYear()) {
                    if ((price.month) == month) {
                        if ((price.day) == timeCh.getDate()) {
                            mmp = price.price
                        }
                    }
                }

            })
            let mtd = new Date()

            let dd = ((timeCh.getMonth()==11)?timeCh.getFullYear()+1:timeCh.getFullYear())+ "-" + timeCh.getMonth() + "-" + timeCh.getDate()
            let td = mtd.getFullYear() + "-" + mtd.getMonth() + "-" + mtd.getDate()

            i++
            let holydays = false
            holidays.dates.find((item) => {

                if (item.years == (timeCh.getMonth() == 11) ? timeCh.getFullYear() + 1 : timeCh.getFullYear()) {

                    if ((item.month - 1) == timeCh.getMonth()) {

                        if (item.day == timeCh.getDate()) {

                            holydays = true
                        }
                    }

                }
            })
            const yyy= timeCh.getFullYear()
            const mmm=  timeCh.getMonth()
            const ddd=timeCh.getDate()
            months.push(
                <div onClick={()=>port(yyy,mmm,ddd)}  className={"calendar-day-item " + ((dd == td) ? "today-calendar-item" : "")}>
                    <span
                        className={(i == 7 || holydays == true) ? "holidays-calendar-item" : ""}>{timeCh.getDate()}</span>
                    <span>{(mmp > 0) ? mmp : "-"}</span>
                </div>
            )

            timeCh.setDate(timeCh.getDate() + 1)
            if (i == 7) i = 0
        }


        return <>{months}</>;
    };
    const nextMonth = () => yearNext();
    const prevMonth = () => yearPrev();
    let timerm=new Date()
    timerm.setMonth(timerm.getMonth()+yearC)
    timerm.setMonth(timerm.getMonth()+1)
    return(
        <div className="calendar-contaienr">

            <>
                <div className="calendar">
                    <div className="calendar-header">
                        <span>سال: {years}</span>
                        <div className="wrapper">
                            <button>
                                <span>تاریخ امروز</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                            <button onClick={cc}>
                                <span>تقویم میلادی</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="calendar-body">
                        <div className="calendar-item">
                            <div className="calendar-month">{monthChecker(months)}</div>
                            <div className="calendar-weekend">
                                <div className="calendar-weekend-item">ش</div>
                                <div className="calendar-weekend-item">ی</div>
                                <div className="calendar-weekend-item">د</div>
                                <div className="calendar-weekend-item">س</div>
                                <div className="calendar-weekend-item">چ</div>
                                <div className="calendar-weekend-item">پ</div>
                                <div className="calendar-weekend-item">ج</div>
                            </div>
                            <div className="calendar-day">

                                <Colect year={main.year} month={main.month-1} price={data}/>
                            </div>
                        </div>
                        <div className="calendar-item">
                            <div
                                className="calendar-month">{monthChecker(((months + 1) % 12 == 0) ? 12 : (months + 1) % 12)}</div>
                            <div className="calendar-weekend">
                                <div className="calendar-weekend-item">ش</div>
                                <div className="calendar-weekend-item">ی</div>
                                <div className="calendar-weekend-item">د</div>
                                <div className="calendar-weekend-item">س</div>
                                <div className="calendar-weekend-item">چ</div>
                                <div className="calendar-weekend-item">پ</div>
                                <div className="calendar-weekend-item">ج</div>
                            </div>
                            <div className="next-button" onClick={nextMonth}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </div>
                            <div className="prev-button" onClick={prevMonth}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </div>

                            <div className="calendar-day">
                                <Colect year={timerm.getFullYear()} month={timerm.getMonth()} price={data}/>
                            </div>
                        </div>
                    </div>
                </div>
            </>


        </div>
    );

};
const MCalender = ({data, cc,port, changeMain}) => {
    let [yearC, setYearC] = useState(0);
    let m = new Date();
    m.setMonth(m.getMonth() + yearC);
    let main = {
        year: m.getFullYear(),
        month: m.getMonth() + 1,
        day: m.getDate()
    };
    const yearCChange = (e) => {
        setYearC(e);
    };
    const NOWFUNC = () => {
        let lt = new Date();
        m.setMonth(lt.getMonth());
        yearCChange(0);
    };
    const yearNext = () => {
        m.setMonth(m.getMonth() + 2);
        yearCChange(yearC + 2);
    };
    const yearPrev = () => {
        m.setMonth(m.getMonth() - 2);
        yearCChange(yearC - 2);
    };
    const Colect = ({year, month, price ,port}) => {
        month = (month == 12) ? 0 : month
        let time = new Date()
        time.setFullYear(year)
        time.setMonth(month - 1)
        let timeCh = new Date(time.getTime())

        let tiny = false
        let months = []
        let i = 0
        timeCh.setDate(1)


        while (timeCh.getMonth() != (((time.getMonth() + 1) == 12) ? 0 : (time.getMonth() + 1))) {

            if (tiny == false) {
                let s = timeCh.getDay()
                if (timeCh.getMonth() == 11) {
                    s = (s + 1);
                }
                let m = (s - timeCh.getDate())

                for (let k = 0; k < m; k++) {
                    i++
                    months.push(
                        <div className="calendar-day-item">
                            <span> </span>
                        </div>
                    )
                }
                tiny = true
            }
            let mmp = 0
            price.find((price) => {
                if (price.year == timeCh.getFullYear()) {
                    if ((price.month) == month) {
                        if ((price.day) == timeCh.getDate()) {
                            mmp = price.price
                        }
                    }
                }

            })
            let mtd = new Date()

            let dd = ((timeCh.getMonth()==11)?timeCh.getFullYear()+1:timeCh.getFullYear())+ "-" + timeCh.getMonth() + "-" + timeCh.getDate()
            let td = mtd.getFullYear() + "-" + mtd.getMonth() + "-" + mtd.getDate()

            i++
            let holydays = false
            holidays.dates.find((item) => {

                if (item.years == (timeCh.getMonth() == 11) ? timeCh.getFullYear() + 1 : timeCh.getFullYear()) {

                    if ((item.month - 1) == timeCh.getMonth()) {

                        if (item.day == timeCh.getDate()) {

                            holydays = true
                        }
                    }

                }
            })
            const yyy= timeCh.getFullYear()
            const mmm=  timeCh.getMonth()
            const ddd=timeCh.getDate()
            months.push(
                <div onClick={()=>port(yyy,mmm,ddd)}  className={"calendar-day-item " + ((dd == td) ? "today-calendar-item" : "")}>
                    <span
                        className={(i == 7 || holydays == true) ? "holidays-calendar-item" : ""}>{timeCh.getDate()}</span>
                    <span>{(mmp > 0) ? mmp : "-"}</span>
                </div>
            )

            timeCh.setDate(timeCh.getDate() + 1)
            if (i == 7) i = 0
        }


        return <>{months}</>;
    };
    const nextMonth = () => yearNext();
    const prevMonth = () => yearPrev();
    return (


        <>
            <div className="calendar">
                <div className="calendar-header">
                    <span>سال: {main.year}</span>
                    <div className="wrapper">
                        <button onClick={NOWFUNC}>
                            <span>تاریخ امروز</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        <button onClick={cc}>
                            <span>تقویم شمسی</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="calendar-body">
                    <div className="calendar-item">
                        <div className="calendar-month">{MmonthChecker(main.month)}</div>
                        <div className="calendar-weekend">
                            <div className="calendar-weekend-item">Mon</div>
                            <div className="calendar-weekend-item">Tue</div>
                            <div className="calendar-weekend-item">Wed</div>
                            <div className="calendar-weekend-item">Thur</div>
                            <div className="calendar-weekend-item">Fri</div>
                            <div className="calendar-weekend-item">Sat</div>
                            <div className="calendar-weekend-item">Sun</div>
                        </div>
                        <div className="calendar-day">
                            <Colect year={main.year} month={main.month} price={data} port={port}/>
                        </div>
                        <div className="next-button" onClick={nextMonth}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </div>
                        <div className="prev-button" onClick={prevMonth}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="calendar-item">
                        <div
                            className="calendar-month">{MmonthChecker(((main.month + 1) % 12 == 0) ? 12 : (main.month + 1) % 12)}</div>
                        <div className="calendar-weekend">
                            <div className="calendar-weekend-item">Mon</div>
                            <div className="calendar-weekend-item">Tue</div>
                            <div className="calendar-weekend-item">Wed</div>
                            <div className="calendar-weekend-item">Thur</div>
                            <div className="calendar-weekend-item">Fri</div>
                            <div className="calendar-weekend-item">Sat</div>
                            <div className="calendar-weekend-item">Sun</div>
                        </div>

                        <div className="calendar-day">
                            <Colect year={main.year} month={main.month + 1} price={data} port={port} />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );

};
const datePicker = ({json, value}) => {
    let m = new Date();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    let [main, setMain] = useState({year: m.getFullYear(), month: m.getMonth(), day: m.getDate()});
    let [type, setType] = useState("jalali");
    let [port, setPort] = useState({year:null,month:null,day:null});
    const toChange = (e) => {
        return setMain(e);
    };
    const portal = (yy,mm,dd) => {
        return setPort({yy,mm,dd});
    };
    console.log(port)
    const changeJalali = () => {
        return setType("jalali");
    };
    const changeMiladi = () => {
        return setType("miladi");
    };

    return (
        <>
            <div className="datePicker">{tojalali(main)}</div>

            <div className="flex justify-center items-center w-screen h-screen">
                <div className="calendar-contaienr">
                    {(type == "jalali") ? (
                        <Calender data={json.dataPrice} cc={changeMiladi} port={portal} changeMain={{toChange}}/>) : ""}
                    {(type == "miladi") ? (
                        <MCalender data={json.dataPrice} cc={changeJalali} port={portal} changeMain={{toChange}}/>) : ""}
                    <button
                        className="py-3 px-4 rounded bg-indigo-500 hover:bg-indigo-600 transform active:scale-90 duration-150 text-white rounded shadow"
                    >
                        {(port.year == null)?"DatePicker":port.year}
                    </button>

                </div>
            </div>
        </>
    );
};
export default datePicker;
