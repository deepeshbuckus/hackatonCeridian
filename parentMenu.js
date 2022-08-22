let parentMenus =
    [
        {
            "menu": "Analytics",
            Child: []
        },
        {
            "menu": "Anomaly Days",
            Child: []
        },
        {
            "menu": "Attendance Management",
            Child: []
        },
        {
            "menu": "Benefits",
            Child: []
        },
        {
            "menu": "Benefits Administration",
            Child: []
        },
        {
            "menu": "Benefits Intelligence",
            Child: []
        },
        {
            "menu": "Benefits Setup",
            Child: []
        },
        {
            "menu": "Career Profile Configuration",
            Child: []
        },
        {
            "menu": "Careers",
            Child: []
        },
        {
            "menu": "Centralized Schedules",
            Child: []
        },
        {
            "menu": "Compensation",
            Child: []
        },
        {
            "menu": "Compensation Administration",
            Child: []
        },
        {
            "menu": "Compensation Setup",
            Child: []
        },
        {
            "menu": "Data & Analytics",
            Child: []
        },
        {
            "menu": "Data Export Setup",
            Child: []
        },
        {
            "menu": "Documents",
            Child: []
        },
        {
            "menu": "Earnings",
            Child: []
        },
        {
            "menu": "Employee Timesheet",
            Child: []
        },
        {
            "menu": "Engagement",
            Child: []
        },
        {
            "menu": "Engagement Setup",
            Child: []
        },
        {
            "menu": "Getting Started",
            Child: []
        },
        {
            "menu": "HCM Anywhere",
            Child: []
        },
        {
            "menu": "Home",
            Child: []
        },
        {
            "menu": "HR Admin",
            Child: []
        },
        {
            "menu": "Learning",
            Child: []
        },
        {
            "menu": "Learning Setup",
            Child: []
        },
        {
            "menu": "Letter Management",
            Child: []
        },
        {
            "menu": "Manager Timesheet",
            Child: []
        },
        {
            "menu": "Market Pricing",
            Child: []
        },
        {
            "menu": "Mobile Org Schedules",
            Child: []
        },
        {
            "menu": "Multi-Week Calendar",
            Child: []
        },
        {
            "menu": "Onboarding",
            Child: []
        },
        {
            "menu": "Onboarding Setup",
            Child: []
        },
        {
            "menu": "Operation View",
            Child: []
        },
        {
            "menu": "Org Setup",
            Child: []
        },
        {
            "menu": "Pay Admin Checklist",
            Child: []
        },
        {
            "menu": "Pay Approve Checklist",
            Child: []
        },
        {
            "menu": "Pay Setup",
            Child: [
                "Minimum Wages",
                "Clock Devices",
                "Clock Device Group",
                "Tips",
                "Pay Holidays",
                "Holiday Types",
                "Pay Category",
                "Pay Code",
                "Pay Category Group",
                "Holiday Group",
                "Attendance",
                "Pay Code Group",
                "Multi-Approval",
                "Balances",
                "Base Rate Set",
                "Entitlements",
                "Job Rate",
                "Pay Group",
                "Pay Policy",
                "Punch Policy",
                "Long Service Leave",
                "Period Authorization Policy",
                "Time Review Administration"
            ]
        },
        {
            "menu": "Payroll",
            Child: []
        },
        {
            "menu": "Payroll Import",
            Child: []
        },
        {
            "menu": "Payroll Setup",
            Child: []
        },
        {
            "menu": "Pension Auto-Enrollment",
            Child: []
        },
        {
            "menu": "Performance",
            Child: []
        },
        {
            "menu": "Performance Setup",
            Child: []
        },
        {
            "menu": "Period Review",
            Child: []
        },
        {
            "menu": "Plan",
            Child: []
        },
        {
            "menu": "Plan Admin Checklist",
            Child: []
        },
        {
            "menu": "Plan Setup",
            Child: []
        },
        {
            "menu": "PPACA",
            Child: []
        },
        {
            "menu": "Profile",
            Child: []
        },
        {
            "menu": "Projects",
            Child: []
        },
        {
            "menu": "Punch Auditing",
            Child: []
        },
        {
            "menu": "Rating Scale",
            Child: []
        },
        {
            "menu": "Recruiting",
            Child: []
        },
        {
            "menu": "Recruiting Setup",
            Child: []
        },
        {
            "menu": "Reward History Setup",
            Child: []
        },
        {
            "menu": "Schedule Setup",
            Child: [
                "Job Assignment Activities",
                "Expression Token",
                "Shift Trading Policy",
                "Employee Order",
                "Day Part",
                "Activities",
                "School Year",
                "Schedule Rule Policy",
                "Staff Assignment Policy",
                "Assignment Policy",
                "Autofill Run Profiles",
                "Coverage Pane Setup",
                "Employee Preferred Day Part",
                "Employee Activities Rank Ordering",
                "Event Administration",
                "Event Properties",
                "Operational Templates",
                "Sales Statistics",
                "Schedule Order",
                "Skill Display",
                "Schedule Change Policy",
                "Work Contract Premium Policy"
            ]
        },
        {
            "menu": "Schedules",
            Child: []
        },
        {
            "menu": "Scheduling Plan",
            Child: []
        },
        {
            "menu": "Site Setup",
            Child: []
        },
        {
            "menu": "Succession",
            Child: []
        },
        {
            "menu": "Succession Setup",
            Child: []
        },
        {
            "menu": "System Admin",
            Child: []
        },
        {
            "menu": "Task Checklist",
            Child: []
        },
        {
            "menu": "Task Management",
            Child: []
        },
        {
            "menu": "Task Planning Calendar",
            Child: []
        },
        {
            "menu": "Task Setup",
            Child: []
        },
        {
            "menu": "Team Learning Activity",
            Child: []
        },
        {
            "menu": "Time Away From Work",
            Child: []
        },
        {
            "menu": "Time Review",
            Child: []
        },
        {
            "menu": "Timesheets",
            Child: []
        },
        {
            "menu": "Vacation Bidding",
            Child: []
        },
        {
            "menu": "Vacation Bidding Setup",
            Child: []
        },
        {
            "menu": "Work",
            Child: []
        },
        {
            "menu": "Workflow Administration",
            Child: []
        },
        {
            "menu": "Year End",
            Child: []
        }
    ];

let orderedPerentMenu = [{
    menu: "Anomaly Days",
    child:
        [],
}];

$(document).ready(function () {
    let menuArr1 = [];
    let menuArr2 = [];
    let menuArr3 = [];
    let menuArr4 = [];
    let menuArr5 = [];

    let str1 = "<div class=\"dropdownAnchor\"> ";

    let str4 = "<div class=\"dropdown-content\">";

    let str2 = "<a href=\"#\">Link 1</a>" +
        "<a href=\"#\">Link 2</a>" +
        "<a href=\"#\">Link 3</a>";

    let str3 = "</div>" +
        "</div>";

    $.each(parentMenus, function (i, val) {

        if (i <= 14) {

            if (val.Child.length != 0) {
                let final_str = str1 + "<a href=\"\" class=\"list-group-item list-group-item-action\">" + val.menu + "</a>" + str4;
                $.each(val.Child, function (j, valc) {
                    final_str = final_str + "<a href=\"#\">" + valc + "</a>";
                });
                final_str = final_str + str3;
                menuArr1.push(final_str);
            }
            else {
                menuArr1.push("<a href=\"\" class=\"list-group-item list-group-item-action\">" + val.menu + "</a>");
            }
        }

        if (i >= 15 && i <= 29) {
            if (val.Child.length != 0) {
                let final_str = str1 + "<a href=\"\" class=\"list-group-item list-group-item-action\">" + val.menu + "</a>" + str4;
                $.each(val.Child, function (j, valc) {
                    final_str = final_str + "<a href=\"#\">" + valc + "</a>";
                });
                final_str = final_str + str3;
                menuArr2.push(final_str);
            }
            else {
                menuArr2.push("<a href=\"\" class=\"list-group-item list-group-item-action\">" + val.menu + "</a>");
            }
        }


        if (i >= 30 && i <= 44) {
            if (val.Child.length != 0) {
                let final_str = str1 + "<a href=\"\" class=\"list-group-item list-group-item-action\">" + val.menu + "</a>" + str4;
                $.each(val.Child, function (j, valc) {
                    final_str = final_str + "<a href=\"#\">" + valc + "</a>";
                });
                final_str = final_str + str3;
                menuArr3.push(final_str);
            }
            else {
                menuArr3.push("<a href=\"\" class=\"list-group-item list-group-item-action\">" + val.menu + "</a>");
            }

        }

        if (i >= 45 && i <= 59) {
            if (val.Child.length != 0) {
                let final_str = str1 + "<a href=\"\" class=\"list-group-item list-group-item-action\">" + val.menu + "</a>" + str4;
                $.each(val.Child, function (j, valc) {
                    final_str = final_str + "<a href=\"#\">" + valc + "</a>";
                });
                final_str = final_str + str3;
                menuArr4.push(final_str);
            }
            else {
                menuArr4.push("<a href=\"\" class=\"list-group-item list-group-item-action\">" + val.menu + "</a>");
            }
        }


        if (i >= 60 && i <= 75) {
            if (val.Child.length != 0) {
                let final_str = str1 + "<a href=\"\" class=\"list-group-item list-group-item-action\">" + val.menu + "</a>" + str4;
                $.each(val.Child, function (j, valc) {
                    final_str = final_str + "<a href=\"#\">" + valc + "</a>";
                });
                final_str = final_str + str3;
                menuArr5.push(final_str);
            }
            else {
                menuArr5.push("<a href=\"\" class=\"list-group-item list-group-item-action\">" + val.menu + "</a>");
            }
        }

    });

    $.each(menuArr1, function (i, val) {
        console.log(val);
        $(".t1").append(val);
    });
    $.each(menuArr2, function (i, val) {
        console.log(val);
        $(".t2").append(val);
    });
    $.each(menuArr3, function (i, val) {
        console.log(val);
        $(".t3").append(val);
    });
    $.each(menuArr4, function (i, val) {
        console.log(val);
        $(".t4").append(val);
    });
    $.each(menuArr5, function (i, val) {
        console.log(val);
        $(".t5").append(val);
    });
});