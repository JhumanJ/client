import React from 'react';
import Grid from './components/Grid';
import axios from 'axios';
import isEqual from 'lodash.isequal';
var _ = require('underscore');

import {css} from 'glamor';

const base_url = 'http://peachteam35.uksouth.cloudapp.azure.com:8080/api/scheduler/';

var Calendar = React.createClass({
    calc: function (year, month) {
        if (this.state.selectedElement) {
            if (this.state.selectedMonth != month || this.state.selectedYear != year) {
                this.state.selectedElement.classList.remove('r-selected');
            } else {
                this.state.selectedElement.classList.add('r-selected');
            }
        }
        return {
            firstOfMonth: new Date(year, month, 1),
            daysInMonth: new Date(year, month + 1, 0).getDate()
        };
    },
    componentWillMount: function () {
        this.setState(this.calc.call(null, this.state.year, this.state.month));
        var events = this.state.events;
        var meetings;
        var month2 = this.state.month === 12 ? 1 : this.state.month + 1
        var urlmonth = month2 > 9 ? month2 : "0" + month2;
        var urlyear = this.state.year
        var url = base_url + urlmonth + '/' + urlyear;
        var compareMeetings = function(meeting1, meeting2){
            return (meeting1["meeting_occurence_id"] === meeting2["meeting_occurence_id"] && meeting1["meeting_id"] === meeting2["meeting_id"] && meeting1["occurence_date"] === meeting2["occurence_date"] && meeting1["title"] === meeting2["title"] && meeting1["starting_time"] === meeting2["starting_time"] && meeting1["ending_time"] === meeting2["ending_time"] && meeting1["created_at"] === meeting2["created_at"])
        }
        var that = this;
        axios.get(url).then(function(response){
            meetings = response.data;
            for(var i = 0; i < meetings.length; i++){
                var found = 0;
                var d = new Date(meetings[i]["occurence_date"]);
                if(events.length === 0){
                    var newEventTest = {
                        date: d,
                        year: d.getFullYear(),
                        month: d.getMonth(),
                        day: d.getDate(),
                        meeting: []
                    };
                    newEventTest.meeting.push(meetings[i]);
                    events.push(newEventTest);
                }
                else{
                    for(var j = 0; j < events.length; j++){
                        if(d.getFullYear() === events[j].year && d.getMonth() === events[j].month && d.getDate() === events[j].day){
                            found = 1;
                            var alreadyExists = false
                            for(var k = 0; k < events[j].meeting.length; k++){
                                if(compareMeetings(meetings[i],events[j].meeting[k])){
                                    alreadyExists = true;
                                }
                            }
                            if(!alreadyExists){
                                events[j].meeting.push(meetings[i]);
                            }
                        }
                    }
                    if(found === 0){
                        var newEventTest = {
                            date: d,
                            year: d.getFullYear(),
                            month: d.getMonth(),
                            day: d.getDate(),
                            meeting: []
                        };
                        newEventTest.meeting.push(meetings[i]);
                        events.push(newEventTest);
                    }
                    found = 0;
                }
            }
            that.setState({
                events : events
            })
        })
    },
    componentDidMount: function () {

    },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.props.onSelect && prevState.selectedDt != this.state.selectedDt) {
            this.props.onSelect.call(this.getDOMNode(), this.state);
        }
    },
    getInitialState: function () {
        var date = new Date();
        return {
            year: date.getFullYear(),
            month: date.getMonth(),
            selectedYear: date.getFullYear(),
            selectedMonth: date.getMonth(),
            selectedDate: date.getDate(),
            selectedDt: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
            startDay: 1,
            weekNumbers: false,
            minDate: this.props.minDate ? this.props.minDate : null,
            disablePast: this.props.disablePast ? this.props.disablePast : false,
            dayNames: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            monthNamesFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            firstOfMonth: null,
            daysInMonth: null,
            events: []
        };
    },
    getPrev: function () {
        var state = {};
        if (this.state.month > 0) {
            state.month = this.state.month - 1;
            state.year = this.state.year;
        } else {
            state.month = 11;
            state.year = this.state.year - 1;
        }
        var meetings;
        var month2 = state.month === 12 ? 1 : state.month + 1
        var urlmonth = month2 > 9 ? month2 : "0" + month2;
        var urlyear = state.year
        var url = base_url + urlmonth + '/' + urlyear;
        var that = this;
        var events = this.state.events;
        var compareMeetings = function(meeting1, meeting2){
            return (meeting1["meeting_occurence_id"] === meeting2["meeting_occurence_id"] && meeting1["meeting_id"] === meeting2["meeting_id"] && meeting1["occurence_date"] === meeting2["occurence_date"] && meeting1["title"] === meeting2["title"] && meeting1["starting_time"] === meeting2["starting_time"] && meeting1["ending_time"] === meeting2["ending_time"] && meeting1["created_at"] === meeting2["created_at"])
        }
        axios.get(url).then(function(response){
            meetings = response.data;
            for(var i = 0; i < meetings.length; i++){
                var found = 0;
                var d = new Date(meetings[i]["occurence_date"]);
                if(events.length === 0){
                    var newEventTest = {
                        date: d,
                        year: d.getFullYear(),
                        month: d.getMonth(),
                        day: d.getDate(),
                        meeting: []
                    };
                    newEventTest.meeting.push(meetings[i]);
                    events.push(newEventTest);
                }
                else{
                    for(var j = 0; j < events.length; j++){
                        if(d.getFullYear() === events[j].year && d.getMonth() === events[j].month && d.getDate() === events[j].day){
                            found = 1;
                            var alreadyExists = false
                            for(var k = 0; k < events[j].meeting.length; k++){
                                if(compareMeetings(meetings[i],events[j].meeting[k])){
                                    alreadyExists = true;
                                }
                            }
                            if(!alreadyExists){
                                events[j].meeting.push(meetings[i]);
                            }
                        }
                    }
                    if(found === 0){
                        var newEventTest = {
                            date: d,
                            year: d.getFullYear(),
                            month: d.getMonth(),
                            day: d.getDate(),
                            meeting: []
                        };
                        newEventTest.meeting.push(meetings[i]);
                        events.push(newEventTest);
                    }
                    found = 0;
                }
            }
            that.setState({
                events : events
            })
        })
        Object.assign(state, this.calc.call(null, state.year, state.month));
        this.setState(state);
    },
    getNext: function () {
        var state = {};
        if (this.state.month < 11) {
            state.month = this.state.month + 1;
            state.year = this.state.year;
        } else {
            state.month = 0;
            state.year = this.state.year + 1;
        }
        var meetings;
        var month2 = state.month === 12 ? 1 : state.month + 1
        var urlmonth = month2 > 9 ? month2 : "0" + month2;
        var urlyear = state.year
        var url = base_url + urlmonth + '/' + urlyear;
        var that = this;
        var events = this.state.events;
        var compareMeetings = function(meeting1, meeting2){
            return (meeting1["meeting_occurence_id"] === meeting2["meeting_occurence_id"] && meeting1["meeting_id"] === meeting2["meeting_id"] && meeting1["occurence_date"] === meeting2["occurence_date"] && meeting1["title"] === meeting2["title"] && meeting1["starting_time"] === meeting2["starting_time"] && meeting1["ending_time"] === meeting2["ending_time"] && meeting1["created_at"] === meeting2["created_at"])
        }
        axios.get(url).then(function(response){
            meetings = response.data;
            for(var i = 0; i < meetings.length; i++){
                var found = 0;
                var d = new Date(meetings[i]["occurence_date"]);
                if(events.length === 0){
                    var newEventTest = {
                        date: d,
                        year: d.getFullYear(),
                        month: d.getMonth(),
                        day: d.getDate(),
                        meeting: []
                    };
                    newEventTest.meeting.push(meetings[i]);
                    events.push(newEventTest);
                }
                else{
                    for(var j = 0; j < events.length; j++){
                        if(d.getFullYear() === events[j].year && d.getMonth() === events[j].month && d.getDate() === events[j].day){
                            found = 1;
                            var alreadyExists = false
                            for(var k = 0; k < events[j].meeting.length; k++){
                                if(compareMeetings(meetings[i],events[j].meeting[k])){
                                    alreadyExists = true;
                                }
                            }
                            if(!alreadyExists){
                                events[j].meeting.push(meetings[i]);
                            }
                        }
                    }
                    if(found === 0){
                        var newEventTest = {
                            date: d,
                            year: d.getFullYear(),
                            month: d.getMonth(),
                            day: d.getDate(),
                            meeting: []
                        };
                        newEventTest.meeting.push(meetings[i]);
                        events.push(newEventTest);
                    }
                    found = 0;
                }
            }
            that.setState({
                events : events
            })
        })
        Object.assign(state, this.calc.call(null, state.year, state.month));
        this.setState(state);
    },

    selectDate: function (year, month, date, element) {
        if (this.state.selectedElement) {
            this.state.selectedElement.classList.remove('r-selected');
        }
        element.target.classList.add('r-selected');
        this.setState({
            selectedYear: year,
            selectedMonth: month,
            selectedDate: date,
            selectedDt: new Date(year, month, date),
            selectedElement: element.target
        });
    },

    getPatients: function(patients, meeting, specialty, year, month, day){
        var events = this.state.events;
        for(var i = 0; i < events.length; i++){
            if(events[i].year === year && events[i].month === month && events[i].day === day){
                for(var j = 0; j < events[i].meeting.length; j++){
                    if(_.isEqual(meeting2,events[i].meeting[j])){
                        for(var k = 0; k < events[i].meeting[j]["specialities"].length; k++){
                            if(events[i].meeting[j]["specialities"][k]["name"] === specialty){
                                events[i].meeting[j]["specialities"][k]["patients"] = patients;
                            }
                        }
                    }
                }
            }
        }
        this.setState({
            events: events
        });
    },

    addPatients: function(patient, meeting2, specialty2, year, month, day){
        var events = this.state.events;
        console.log(events);
        var url = "WHATEVER";
                        //map through meeting
                    //map through specialty
        for(var i = 0; i < events.length; i++){
            if(events[i].year === year && events[i].month === month && events[i].day === day){
                for(var j = 0; j < events[i].meeting.length; j++){
                    if(_.isEqual(meeting2,events[i].meeting[j])){
                        for(var k = 0; k < events[i].meeting[j]["specialities"].length; k++){
                            if(events[i].meeting[j]["specialities"][k]["name"] === specialty2){
                                if(events[i].meeting[j]["specialities"][k].hasOwnProperty("patients")){
                                    events[i].meeting[j]["specialities"][k]["patients"].push(patient);
                                    /*axios.post(url, {
                                        "patient": patient,
                                        "meeting_occurence_id": meeting2["meeting_occurence_id"],
                                        "speciality_id": events[i].meeting[j]["specialities"][k]["speciality_id"]

                                        WHATEVER necessary data,
                                    })*/
                                }
                                else{
                                    events[i].meeting[j]["specialities"][k]["patients"] = [];
                                    events[i].meeting[j]["specialities"][k]["patients"].push(patient);
                                    /*axios.post(url, {
                                        patient: patient,
                                        WHATEVER necessary data,
                                        meetingID: meeting id something
                                    })*/
                                }
                            }
                        }
                    }

                }
            }
        }
        //theres no way theres a patient without meeting, REMOVE THIS
        this.setState({
            events : events
        })
    },

    removeFromGrid: function(index, meeting2, specialty2, year, month, day){
        var events = this.state.events;
        //map through events
            //map through meetings
                //map through specialty
        for(var i = 0; i < events.length; i++){
            if(events[i].year === year && events[i].month === month && events[i].day === day){
                for(var j = 0; j < events[i].meeting.length; j++){
                    if(_.isEqual(meeting2,events[i].meeting[j])){
                        for(var k = 0; k < events[i].meeting[j]["specialities"].length; k++){
                            if(events[i].meeting[j]["specialities"][k]["name"] === specialty2){
                                var patient = events[i].meeting[j]["specialities"][k]["patients"][index];
                                events[i].meeting[j]["specialities"][k]["patients"].splice(index,1);
                                /*axios.post(url, {
                                    patient: patient,
                                    WHATEVER necessary data,
                                })*/

                            }
                        }
                    }
                }
            }
        }
        this.setState({
            events : events
        })
    },

    render: function () {
        console.log(this.state.events);
        return (
            <div className={" row " + styles.rcalendar}>
                <div className="rinner">
                    <Header monthNames={this.state.monthNamesFull} month={this.state.month} year={this.state.year} onPrev={this.getPrev} onNext={this.getNext} />
                    <WeekDays dayNames={this.state.dayNames} startDay={this.state.startDay} weekNumbers={this.state.weekNumbers} />
                    <MonthDates events={this.state.events} removeFromGrid={this.removeFromGrid} addPatients={this.addPatients} addPatient={this.props.addPatient} month={this.state.month} year={this.state.year} daysInMonth={this.state.daysInMonth} firstOfMonth={this.state.firstOfMonth} startDay={this.state.startDay} onSelect={this.selectDate} weekNumbers={this.state.weekNumbers} disablePast={this.state.disablePast} minDate={this.state.minDate} />
                </div>
            </div>
        );
    }
});

var Header = React.createClass({
    render: function () {
        return (
            <div className="rrow rhead">
                <div className={"rcell "+styles.greyhover} onClick={this.props.onPrev.bind(null, this)} role="button" tabIndex="0"><i className="fa fa-caret-left" aria-hidden="true"></i></div>
                <div className="rcell">{this.props.monthNames[this.props.month]}&nbsp;{this.props.year}</div>
                <div className={"rcell "+ styles.greyhover} onClick={this.props.onNext.bind(null, this)} role="button" tabIndex="0"><i className="fa fa-caret-right" aria-hidden="true"></i></div>
            </div>
        );
    }
});

var WeekDays = React.createClass({
    render: function () {
        var that = this,
            haystack = Array.apply(null, {length: 7}).map(Number.call, Number);
        return (
            <div className={"rrow rweekdays"}>
                {(() => {
                    if (that.props.weekNumbers) {
                        return (
                            <div className="rcell rweeknum">wn</div>
                        );
                    }
                })()}
                {haystack.map(function (item, i) {
                    return (
                        <div className="rcell">{that.props.dayNames[(that.props.startDay + i) % 7]}</div>
                    );
                })}
            </div>
        );
    }
});

var MonthDates = React.createClass({
    statics: {
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        date: new Date().getDate(),
        today: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())
    },

    render: function () {
        var haystack, day, d, current, onClick,
            isDate, className,
            weekStack = Array.apply(null, {length: 7}).map(Number.call, Number),
            that = this,
            startDay = this.props.firstOfMonth.getUTCDay(),
            first = this.props.firstOfMonth.getDay(),
            janOne = new Date(that.props.year, 0, 1),
            rows = 5;

        if ((startDay == 5 && this.props.daysInMonth == 31) || (startDay == 6 && this.props.daysInMonth > 29)) {
            rows = 6;
        }

        className = rows === 6 ? "rdates" : "rdates rfix";   // todo:check
        haystack = Array.apply(null, {length: rows}).map(Number.call, Number);
        day = this.props.startDay + 1 - first;
        while (day > 1) {
            day -= 7;
        }
        day -= 1;
        return (
            <div className={className}>
            {haystack.map(function (item, i) {
                d = day + i * 7;
                return (
                    <div className="rrow">
                    {(() => {
                        if (that.props.weekNumbers) {
                            var wn = Math.ceil((((new Date(that.props.year, that.props.month, d) - janOne) / 86400000) + janOne.getDay() + 1) / 7);
                            return (
                                <div className="rcell rweeknum">{wn}</div>
                            );
                        }
                    })()}
                    {weekStack.map(function (item, i) {
                        d += 1;
                        isDate = d > 0 && d <= that.props.daysInMonth;

                        if (isDate) {
                            current = new Date(that.props.year, that.props.month, d);
                            className = current != that.constructor.today ? " rcell rdate " : " rcell rdate rtoday ";
                            if (that.props.disablePast && current < that.constructor.today) {
                                className += " rpast";
                            } else if (that.props.minDate !== null && current < that.props.minDate) {
                                className += " rpast";
                            }
                            //change meetingA/B/C to meetings array
                            var dayEvent = {
                                year : 0,
                                month: 0,
                                day: 0,
                                meeting: []
                            };
                            var events = that.props.events;
                            for(var i = 0; i < events.length; i++){
                                if(events[i].year === that.props.year && events[i].month === that.props.month && events[i].day === d){
                                    dayEvent = events[i];
                                }
                            }

                            if (/r-past/.test(className)) {
                                return (
                                    <div className={className} role="button" tabIndex="0"><Grid year={that.props.year} month={that.props.month} day={d} addPatient={that.props.addPatient}>{d}</Grid></div>
                                );
                            }

                            return (
                                <div className={className} role="button" tabIndex="0" onClick={that.props.onSelect.bind(null, that, that.props.year, that.props.month, d)}><Grid dayEvent={dayEvent} removeFromGrid={that.props.removeFromGrid} addPatients={that.props.addPatients} year={that.props.year} month={that.props.month} day={d} addPatient={that.props.addPatient}>{d}</Grid></div>

                            );
                        }

                        return (
                            <div className="rcell"></div>
                        );
                    })}
                    </div>
                );
            })}
            </div>
        );
    }
});

const styles = {
    rcalendar: css({
            backgroundColor: '#eee',
            font: 'normal 15px Helvetica Neue, Helvetica, Arial, sans-serif',
            minWidth: '280px',
            borderRadius: '3px',
            border: '1px solid #ddd',
            marginBottom: '25PX',
            position: 'relative',
            width: '100%',
            marginRight: '0px',
            marginLeft: '0px',
            '& *':{
                MozBoxSizing: 'border-box',
                WebkitBoxSizing: 'border-box',
                boxSizing: 'border-box',
                MozTransition: 'all 0.3s linear',
                WebkitTransition: 'all 0.3s linear',
                OTransition: 'all 0.3s linear',
                transition: 'all 0.3s linear'
            },
            '& .rinner':{
                position: 'absolute',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexFlow: 'column nowrap'
            },
            '& .rrow':{
                display: 'flex',
                flexFlow: 'row nowrap',
                width: '100%',
                justifyContent: 'center'
            },
            '& .rhead':{
                flexGrow: 0.33,
                flexBasis: 0
            },
            '& .rprev':{
                backgroundColor: '#ffffff',
                cursor: 'pointer',
                outline: 'none'
            },
            '& .rnext':{
                backgroundColor: '#ffffff',
                cursor: 'pointer',
                outline: 'none',
            },
            '& .rcell':{
                backgroundColor: '#ffffff',
                alignItems: 'center',
                display: 'flex',
                flexFlow: 'row nowrap',
                flexGrow: 1,
                flexBasis: 0,
                justifyContent: 'center',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
            },
            '& .rweekdays':{
                flexGrow: 0.33,
                flexBasis: 0,
            },
            '& .rweekdays .rcell':{
                fontWeight: 'bold'
            },
            '& .rweeknum':{
                color: '#999999',
                fontSize:' 0.8em'
            },
            '& .rdates':{
                display: 'flex',
                flexFlow: 'column nowrap',
                flexGrow: 6,
                flexBasis: 0
            },
            '& .rdates .rrow':{
                flexGrow: 1
            },
            '& .rdates .rcell ':{
                backgroundColor: '#ffffff',
                border: 'solid 1px #ffffff'
            },
            '& .rcell.rdate.r-today ':{
                backgroundColor: '#ffffff',
                border: 'solid 1px #0066CC'
            },
            '& .rcell.rdate:not(.rpast):hover ':{
                backgroundColor: '#0066CC',
                border: 'solid 1px #0066CC'
            },
            '& .rcell.rdate.rselected ':{
                backgroundColor: '#000000',
                border: 'solid 1px #000000',
                color: '#fff'
            },
            '& .rcell.rdate.rpast ':{
                color: '#999999',
                cursor: 'not-allowed'
            },
            '& .rdates.rfix':{
                flexGrow: 5
            },
            '& .rcell.rdate':{
                cursor: 'pointer',
                outline: 'none'
            },
            ':after':{
                content: "",
                display: 'block',
                paddingBottom: '100%'
            },
        },

    ),
    greyhover: css({
        ':hover': {
            backgroundColor: '#f5f5f5',
            borderRadius: '3px'
          }
    }),
}

export default Calendar;
