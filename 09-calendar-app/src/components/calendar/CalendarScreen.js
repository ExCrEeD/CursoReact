import React, { useState } from 'react'
import {Calendar,momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment/locale/es';
import { Navbar } from '../ui/Navbar'
import { calendarMessages } from '../../helpers/calendarMessages'
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventClearActiveEvent, setActive } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';

moment.locale('es');
const localizer = momentLocalizer(moment);


export const CalendarScreen = () => {

  const dispatch = useDispatch();
  const {events,activeEvent} = useSelector( state => state.calendar );
  const [lastView, setlastView] = useState(localStorage.getItem('lastView')|| 'month');

  const onDoubleClick = (e) =>{
    dispatch(uiOpenModal());
  }

  const onSelectEvent = (e) =>{
    dispatch(setActive(e));
  }
  const onViewChange = (e) =>{
    setlastView(e);
    localStorage.setItem('lastView',e);
  } 


  const onSelectSlot = (e) =>{
      dispatch(eventClearActiveEvent());
  }

  const eventStyleGetter = (event,start,end,isSelected)=>{
   const style = {
     backgroundColor:'#367cf7',
     borderRaiuds:'0px',
     opacity:0.8,
     display:'block',
     color:'white'
   }
    return {
        style
    }
  };


  return (
    <>
      <Navbar/>
      
      <Calendar
        messages={calendarMessages}
        localizer={localizer}
        events={events}
        eventPropGetter={eventStyleGetter}
        startAccessor="start"
        endAccessor="end"
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onSelectSlot={onSelectSlot}
        selectable={true}
        onView={onViewChange}
        view={lastView}
        components={{
          event:CalendarEvent
        }}
      />
      <AddNewFab/>
      {activeEvent && <DeleteEventFab/>} 
      <CalendarModal/>
    </>

  )
}
