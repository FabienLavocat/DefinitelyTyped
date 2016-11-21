// Type definitions for jQuery UI Timepicker 0.3
// Project: http://fgelinas.com/code/timepicker/
// Definitions by: Anwar Javed <https://github.com/anwarjaved>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="../jqueryui/jqueryui.d.ts"/>

interface TimePickerHour {
    /** first displayed hour */
    /** last displayed hour */
}

interface TimePickerMinutes {
    /** first displayed minute */
    /** last displayed minute */
    /** interval of displayed minutes */
}

interface TimePickerOptions {
    /** 'focus' for popup on focus, */
    
    /**

    // Localization

    /** Define the locale text for "Hours" */
    hourText?: string;

    /** Define the locale text for "Minute" */
    minuteText?: string;

    /** Define the locale text for periods. */
    amPmText?: [string, string];

    /** Name of jQuery animation for popup */
    /** Options for enhanced animations */
    /** Display text following the input box, e.g. showing the format */

    /** Define a callback function executed before the timepicker is shown */
    /** Define a callback function when a hour / minutes is selected */
    /** Define a callback function when the timepicker is closed */

    /** The character to use to separate hours and minutes. */
    /** The character to use to separate the time from the time period. */
    /** Define whether or not to show AM/PM with selected time */
    /** Show the AM/PM labels on the left of the time picker */
    /** Define whether or not to show a leading zero for hours < 10. [true/false] */
    /** Define whether or not to show a leading zero for minutes < 10. */
    /** Selector for an alternate field to store selected time into */
    /**
    /**
    /**

    //NEW: 2011-02-03
    /** callback for enabling / disabling on selectable hours  ex : function(hour) { return true; } */
    /** callback for enabling / disabling on time selection  ex : function(hour,minute) { return true; } */

    hours?: TimePickerHour;
    minutes?: TimePickerMinutes;

    /** number of rows for the input tables, minimum 2, makes more sense if you use multiple of 2 */
    // 2011-08-05 0.2.4
    /** display the hours section of the dialog */
    /** display the minute section of the dialog */
    /** optionally parse inputs of whole hours with minutes omitted */

    // buttons
    /** shows an OK button to confirm the edit */

    /** Text for the confirmation button (ok button).*/
    closeButtonText?: string;

    /** Shows the 'now' button */

    /** Text for the 'now' button.*/
    nowButtonText?: string;

    /** Shows the deselect time button */

    /** Text for the deselect button */
    deselectButtonText?: string;
}


interface JQuery {
    timepicker(): JQuery;
    timepicker(methodName: 'getTime'): string;
    timepicker(methodName: 'getTimeAsDate'): Date;
    timepicker(methodName: 'getHour'): number;
    timepicker(methodName: 'getMinute'): number;
    timepicker(methodName: string): any;
    timepicker(methodName: string, methodParameter: any): any;
    timepicker(optionLiteral: string, optionName: string): any;
    timepicker(options: TimePickerOptions): JQuery;
}