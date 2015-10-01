$(function() {
//morris-area-cost
    Morris.Line({
        element: 'morris-area-cost',
        data: [{
            period: '2015-01',
            dev: 42509.84,
            stg: 113545.5,
            prod: 151416.72
        }, {
            period: '2015-02',
            dev: 42796.74,
            stg: 105010.65,
            prod: 143600.31
        }, {
            period: '2015-03',
            dev: 53784.34,
            stg: 145090.88,
            prod: 157665.13
        }, {
            period: '2015-04',
            dev: 44828.58,
            stg: 137039,
            prod: 145941.2
        }, {
            period: '2015-05',
            dev: 32135,
            stg: 102619.51,
            prod: 131409.1
        }, {
            period: '2015-06',
            dev: 32135,
            stg: 102619.51,
            prod: 131409.1
        }, {
            period: '2015-07',
            dev: 32135,
            stg: 102619.51,
            prod: 131409.1
        }, {
            period: '2015-08',
            dev: 32135,
            stg: 102619.51,
            prod: 131409.1
        }, {
            period: '2015-09',
            dev: 32135,
            stg: 102619.51,
            prod: 131409.1
        }],
        xkey: 'period',
        ykeys: ['dev', 'stg', 'prod'],
        labels: ['dev', 'stg', 'prod'],
        pointSize: 3,
        hideHover: 'auto',
        resize: true
    });
 //morris-bar-freq
    Morris.Bar({
        element: 'morris-bar-freq',
        data: [{
            period: '2014-08-23',
            Count: 2,
            Rollback: 0
        }, {
            period: '2014-10-18',
            Count: 1,
            Rollback: 0
        }, {
            period: '2014-11-22',
            Count: 1,
            Rollback: 0
        }, {
            period: '2014-11-29',
            Count: 1,
            Rollback: 0
        }, {
            period: '2014-12-06',
            Count: 1,
            Rollback: 0
        }, {
            period: '2014-12-13',
            Count: 4,
            Rollback: 0
        }, {
            period: '2014-12-20',
            Count: 2,
            Rollback: 0
        }, {
            period: '2015-01-03',
            Count: 1,
            Rollback: 0
        }, {
            period: '2015-01-10',
            Count: 4,
            Rollback: 0
        }, {
            period: '2015-01-17',
            Count: 4,
            Rollback: 0
        }, {
            period: '2015-03-07',
            Count: 1,
            Rollback: 0
        }, {
            period: '2015-03-21',
            Count: 3,
            Rollback: 0
        }, {
            period: '2015-03-28',
            Count: 2,
            Rollback: 0
        }, {
            period: '2015-04-04',
            Count: 1,
            Rollback: 0
        }],
        xkey: 'period',
        ykeys: ['Count', 'Rollback'],
        labels: ['Releases ', 'Rollback'],
        pointSize: 3,
        hideHover: 'auto',
        barColors: ["#5bc0de", "#ff5722"],
        resize: true
    });
    //morris-bar-cycl
    Morris.Bar({
        element: 'morris-bar-cycle',
        data: [{
            period: '2014/06/22',
            Count: 32
        }, {
            period: '2014/08/18',
            Count: 12
        }, {
            period: '2014/10/17',
            Count: 16
        }, {
            period: '2014/12/11',
            Count: 9
        }, {
            period: '2015/01/08',
            Count: 15
        }, {
            period: '2015/01/24',
            Count: 8
        }, {
            period: '2015/02/18',
            Count: 12
        }, {
            period: '2015/03/11',
            Count: 18
        }, {
            period: '2015/04/01',
            Count: 22
        }, {
            period: '2015/04/08',
            Count: 32
        }, {
            period: '2015/04/16',
            Count: 12
        }, {
            period: '2015/05/13',
            Count: 7
        }, {
            period: '2015/06/02',
            Count: 17
        }, {
            period: '2015/06/07',
            Count: 19
        }, {
            period: '2015/06/08',
            Count: 11
        }, {
            period: '2015/07/07',
            Count: 15
        }, {
            period: '2015/07/27',
            Count: 11
        }, {
            period: '2015/08/06',
            Count: 8
        }, {
            period: '2015/08/12',
            Count: 7
        }, {
            period: '2015/08/18',
            Count: 17
        }, {
            period: '2015/09/22',
            Count: 32
        }],
        xkey: 'period',
        ykeys: ['Count'],
        labels: ['Minuets'],
        pointSize: 3,
        hideHover: 'auto',
        barColors: ["#5bc0de", "#ff5722"],
        resize: true
    });
    //morris-bar-success
    Morris.Bar({
        element: 'morris-bar-SuccessPilot',
        data: [{
            period: '2014-01',
            RCount: 4,
            RFaild: 1

        }, {
            period: '2014-02',
            RCount: 3,
            RFaild: 0
        }, {
            period: '2014-03',
            RCount: 2,
            RFaild: 1
        }, {
            period: '2014-04',
            RCount: 2,
            RFaild: 0
        }, {
            period: '2014-05',
            RCount: 1,
            RFaild: 0
        }, {
            period: '2014-06',
            RCount: 5,
            RFaild: 0
        }, {
            period: '2014-07',
            RCount: 2,
            RFaild: 0
        }, {
            period: '2014-08',
            RCount: 1,
            RFaild: 0
        }, {
            period: '2014-09',
            RCount: 2,
            RFaild: 0
        }, {
            period: '2014-10',
            RCount: 2,
            RFaild: 0
        }, {
            period: '2014-11',
            RCount: 3,
            RFaild: 0
        }, {
            period: '2014-12',
            RCount: 4,
            RFaild: 1
        }, {
             period: '2015-01',
            RCount: 1,
            RFaild: 0
        }, {
            period: '2015-02',
            RCount: 4,
            RFaild: 0
        }, {
            period: '2015-03',
            RCount: 1,
            RFaild: 0
        }, {
            period: '2015-04',
            RCount: 2,
            RFaild: 0
        }, {
            period: '2015-05',
            RCount: 1,
            RFaild: 0
        }, {
            period: '2015-06',
            RCount: 2,
            RFaild: 0
        }, {
            period: '2015-07',
            RCount: 3,
            RFaild: 0
        }, {
            period: '2015-08',
            RCount: 1,
            RFaild: 0
        }, {
            period: '2015-09',
            RCount: 2,
            RFaild: 0
        }],
        xkey: 'period',
        ykeys: ['RCount','RFaild'],
        labels: ['Releases','Rollback / Incident'],
        pointSize: 3,
        hideHover: 'auto',
        barColors: ["#5bc0de", "#ff5722"],
        resize: true
    });
 //morris-bar-cost
    Morris.Bar({
        element: 'morris-bar-cost',
        data: [{
            period: '2013-Q3',
            dev: 42509.84,
            stg: 113545.5,
            prod: 151416.72
        }, {
            period: '2014-Q1',
            dev: 42796.74,
            stg: 105010.65,
            prod: 143600.31
        }, {
            period: '2014-Q2',
            dev: 53784.34,
            stg: 145090.88,
            prod: 157665.13
        }, {
            period: '2014-Q3',
            dev: 44828.58,
            stg: 137039,
            prod: 145941.2
        }, {
            period: '2014-Q4',
            dev: 32135,
            stg: 102619.51,
            prod: 131409.1
        }, {
            period: '2015-Q1',
            dev: 32135,
            stg: 102619.51,
            prod: 131409.1
        }, {
            period: '2015-Q2',
            dev: 32135,
            stg: 102619.51,
            prod: 131409.1
        }, {
            period: '2015-Q3',
            dev: 32135,
            stg: 102619.51,
            prod: 131409.1
        }, {
            period: '2015-Q4',
            dev: 32135,
            stg: 102619.51,
            prod: 131409.1
        }],
        xkey: 'period',
        ykeys: ['dev', 'stg', 'prod'],
        labels: ['dev', 'stg', 'prod'],
        pointSize: 3,
        hideHover: 'auto',
        resize: true
    });
//morris-donut-chart
    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "DEV",
            value: 249569.57

        }, {
            label: "STG $",
            value: 684008.3
        }, {
            label: "Prod $",
            value: 829148.82
        }],
        resize: true
    });
//morris-area-cpu-prod
    Morris.Area({
        element: 'morris-area-cpu-prod',
        data: [
        		{ period: '2014 W1', use1ba: 78, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 },
                { period: '2014 W2', use1ba: 80, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 },
                { period: '2014 W3', use1ba: 80, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 },
                { period: '2014 W4', use1ba: 80, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 },
                { period: '2014 W5', use1ba: 66, use1bb: 68, use1bc: 70, use1bd: 67, use1be: 57,use1bf: 50, use1ca: 55, use1cb: 60, use1cc: 70, use1cd: 75, use1ce: 80, use1cf: 45 },
                { period: '2014 W6', use1ba: 40, use1bb: 35, use1bc: 30, use1bd: 40, use1be: 40,use1bf: 38, use1ca: 45, use1cb: 22, use1cc: 40, use1cd: 40, use1ce: 45, use1cf: 22 },
                { period: '2014 W7', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W8', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W9', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W10', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W11', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W12', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W13', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W14', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W15', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W16', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W17', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W18', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W19', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W20', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W21', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W22', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W23', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W24', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W25', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W26', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W27', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W28', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W29', use1ba: 78, use1bb: 75, use1bc: 70, use1bd: 65, use1be: 60,use1bf: 50, use1ca: 52, use1cb: 62, use1cc: 75, use1cd: 78, use1ce: 80, use1cf: 48 },
                { period: '2014 W30', use1ba: 80, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 },
                { period: '2014 W31', use1ba: 80, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 },
                { period: '2014 W32', use1ba: 80, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 },
                { period: '2014 W33', use1ba: 80, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 },
                { period: '2014 W34', use1ba: 80, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 },
                { period: '2014 W35', use1ba: 80, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 },
                { period: '2014 W36', use1ba: 80, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 },
                { period: '2014 W37', use1ba: 80, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 },
                { period: '2014 W38', use1ba: 80, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 },
                { period: '2014 W39', use1ba: 60, use1bb: 65, use1bc: 66, use1bd: 50, use1be: 46,use1bf: 45, use1ca: 52, use1cb: 65, use1cc: 54, use1cd: 65, use1ce: 65, use1cf: 42 },
                { period: '2014 W40', use1ba: 40, use1bb: 45, use1bc: 43, use1bd: 35, use1be: 34,use1bf: 40, use1ca: 32, use1cb: 44, use1cc: 32, use1cd: 34, use1ce: 34, use1cf: 32 },
                { period: '2014 W41', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W42', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W43', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W44', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W45', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W46', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W47', use1ba: 80, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 },
                { period: '2014 W48', use1ba: 80, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 },
                { period: '2014 W49', use1ba: 80, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 }
        ],
        xkey: 'period',
        ykeys: ['use1ba', 'use1bb', 'use1bc','use1bd', 'use1be', 'use1bf','use1ca', 'use1cb', 'use1cc','use1cd', 'use1ce', 'use1cf'],
        labels: ['use1ba', 'use1bb', 'use1bc','use1bd', 'use1be', 'use1bf','use1ca', 'use1cb', 'use1cc','use1cd', 'use1ce', 'use1cf'],
        pointSize: 3,
        hideHover: 'auto',
        resize: true
    });
//morris-area-memory-prod
    Morris.Line({
        element: 'morris-area-memory-prod',
        data: [
        { period: '2014 W1', use1ba: 78, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 },
                { period: '2014 W2', use1ba: 80, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 },
                { period: '2014 W3', use1ba: 80, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 },
                { period: '2014 W4', use1ba: 80, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 },
                { period: '2014 W5', use1ba: 66, use1bb: 68, use1bc: 70, use1bd: 67, use1be: 57,use1bf: 50, use1ca: 55, use1cb: 60, use1cc: 70, use1cd: 75, use1ce: 80, use1cf: 45 },
                { period: '2014 W6', use1ba: 40, use1bb: 35, use1bc: 30, use1bd: 40, use1be: 40,use1bf: 38, use1ca: 45, use1cb: 22, use1cc: 40, use1cd: 40, use1ce: 45, use1cf: 22 },
                { period: '2014 W7', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W8', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W9', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W10', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W11', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W12', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W13', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W14', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W15', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W16', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W17', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W18', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W19', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W20', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W21', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W22', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W23', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W24', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W25', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W26', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W27', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W28', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W29', use1ba: 78, use1bb: 75, use1bc: 70, use1bd: 65, use1be: 60,use1bf: 50, use1ca: 52, use1cb: 62, use1cc: 75, use1cd: 78, use1ce: 80, use1cf: 48 },
                { period: '2014 W30', use1ba: 80, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 },
                { period: '2014 W31', use1ba: 80, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 },
                { period: '2014 W32', use1ba: 80, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 },
                { period: '2014 W33', use1ba: 80, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 },
                { period: '2014 W34', use1ba: 80, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 },
                { period: '2014 W35', use1ba: 80, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 },
                { period: '2014 W36', use1ba: 80, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 },
                { period: '2014 W37', use1ba: 80, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 },
                { period: '2014 W38', use1ba: 80, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 },
                { period: '2014 W39', use1ba: 60, use1bb: 65, use1bc: 66, use1bd: 50, use1be: 46,use1bf: 45, use1ca: 52, use1cb: 65, use1cc: 54, use1cd: 65, use1ce: 65, use1cf: 42 },
                { period: '2014 W40', use1ba: 40, use1bb: 45, use1bc: 43, use1bd: 35, use1be: 34,use1bf: 40, use1ca: 32, use1cb: 44, use1cc: 32, use1cd: 34, use1ce: 34, use1cf: 32 },
                { period: '2014 W41', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W42', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W43', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W44', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W45', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W46', use1ba: 20, use1bb: 16, use1bc: 22, use1bd: 15, use1be: 18,use1bf: 25, use1ca: 23, use1cb: 12, use1cc: 16, use1cd: 19, use1ce: 11, use1cf: 13 },
                { period: '2014 W47', use1ba: 80, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 },
                { period: '2014 W48', use1ba: 80, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 },
                { period: '2014 W49', use1ba: 80, use1bb: 80, use1bc: 75, use1bd: 70, use1be: 62,use1bf: 55, use1ca: 58, use1cb: 67, use1cc: 78, use1cd: 82, use1ce: 85, use1cf: 52 }
        ],
        xkey: 'period',
        ykeys: ['use1ba', 'use1bb', 'use1bc','use1bd', 'use1be', 'use1bf'],
        labels: ['use1ba', 'use1bb', 'use1bc','use1bd', 'use1be', 'use1bf'],
        pointSize: 3,
        hideHover: 'auto',
        resize: true
    });
//morris-bar-chart
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});
